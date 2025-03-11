import PratosRestaurante from '../../components/CardRestaurante'
import Prato from '../../models/Pratos'
import {
  Container,
  ContainerDetalhe,
  Lista,
  Card,
  ContainerTexto,
  Image,
  Texto,
  Titulo,
  Fechar
} from './style'
import ImageFechar from '../../assets/close.png'
import { Botao } from '../../components/Card/style'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { abrir, adcionar } from '../../store/reducers/Carrinho'
import { fechar } from '../../store/reducers/Carrinho'
import FimDoPedido from '../../components/pagamento'
import { RootReducer } from '../../store'
type props = {
  pratos: Omit<Prato, 'nota' | 'destaque'>[]
  pedido?: Omit<Prato, 'nota' | 'destaque'>
}

const ListaPratos = ({ pratos, pedido }: props) => {
  const [Visibilidade, setVisibilidade] = useState<'true' | 'false'>('false')
  const [titulo, SetTitulo] = useState('')
  const [image, setImage] = useState('')
  const [texto, setTexto] = useState('')
  const [Preco, setpreco] = useState(0)
  const [id, setId] = useState(0)
  const dispach = useDispatch()
  const { Abrir } = useSelector((state: RootReducer) => state.carrinho)
  const mudaValor = () => {
    if (Visibilidade === 'true') {
      setVisibilidade('false')
    } else {
      setVisibilidade('true')
    }
  }

  const NovoPedido = {
    ...pedido,
    Titulo: titulo,
    id: id,
    image: image,
    texto: texto,
    preco: Preco
  }

  return (
    <>
      <Container>
        <Lista>
          {pratos.map((prato) => (
            <li
              key={prato.id}
              onClick={() => {
                SetTitulo(prato.Titulo)
                setImage(prato.image)
                setTexto(prato.texto)
                setId(prato.id)
                if (prato.preco) {
                  setpreco(prato.preco)
                }
              }}
            >
              <PratosRestaurante
                image={prato.image}
                titulo={prato.Titulo}
                texto={prato.texto}
                onclick={mudaValor}
              />
            </li>
          ))}
        </Lista>
        <FimDoPedido />
        <div
          onClick={() => dispach(fechar())}
          className={Abrir === true ? 'overlay' : ''}
        ></div>
      </Container>
      <ContainerDetalhe
        className={Visibilidade === 'true' ? 'visivel' : 'escondido'}
      >
        <Card>
          <Fechar src={ImageFechar} onClick={mudaValor} />
          <Image src={image} />
          <ContainerTexto>
            <Titulo>{titulo}</Titulo>
            <Texto>
              {texto}
              <br />
              <br />
              Serve: de 2 a 3 pessoas
            </Texto>
            <Botao
              onClick={() => {
                dispach(adcionar(NovoPedido))
                dispach(abrir())
                setVisibilidade('false')
              }}
            >
              Adcionar ao Carrinho - {Preco}
            </Botao>
          </ContainerTexto>
        </Card>
        <div className="overlay" onClick={() => setVisibilidade('false')}></div>
      </ContainerDetalhe>
    </>
  )
}

export default ListaPratos
