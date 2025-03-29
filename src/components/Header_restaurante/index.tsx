import {
  Container,
  ContainerNome,
  Header,
  Image,
  ImageFrente,
  ItemLista,
  LinkVoltar,
  Lista,
  Restaurante,
  RestauranteNome
} from './style'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { abrir } from '../../store/reducers/Carrinho'
import logo from '../../assets/logo (1).png'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const HeaderRestaurante = () => {
  const { itens } = useSelector((state: RootReducer) => state.carrinho)
  const dispach = useDispatch()
  const { id } = useParams()
  const [Frente, setFrente] = useState('')
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((resp) => resp.json())
      .then((resp) => setFrente(resp.capa))
  }, [id])
  return (
    <Container>
      <Header>
        <div className="container">
          <Lista>
            <ItemLista>
              <LinkVoltar to="/">
                <p>Restaurantes</p>
              </LinkVoltar>
            </ItemLista>
            <ItemLista>
              <img src={logo} alt="" />
            </ItemLista>
            <ItemLista>
              <p onClick={() => dispach(abrir())}>
                ({itens.length}) produtos no carrinho
              </p>
            </ItemLista>
          </Lista>
        </div>
      </Header>
      <ImageFrente>
        <ContainerNome>
          <Restaurante>Italiana</Restaurante>
          <RestauranteNome>La Dolce Vita Trattoria</RestauranteNome>
        </ContainerNome>
        <Image src={Frente} />
      </ImageFrente>
    </Container>
  )
}

export default HeaderRestaurante
