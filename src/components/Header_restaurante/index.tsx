import {
  Container,
  Header,
  Image,
  ImageFrente,
  ItemLista,
  LinkVoltar,
  Lista,
  Restaurante,
  RestauranteNome,
  ContainerNome
} from './style'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { abrir } from '../../store/reducers/Carrinho'
import Frente from '../../assets/image 2.png'
import logo from '../../assets/logo (1).png'

const HeaderRestaurante = () => {
  const { itens } = useSelector((state: RootReducer) => state.carrinho)
  const dispach = useDispatch()

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
