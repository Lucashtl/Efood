import PratosRestaurante from '../../components/CardRestaurante'
import {
  Container,
  ContainerDetalhe,
  Lista,
  Card,
  ContainerTexto,
  Image,
  Texto,
  Titulo,
  Fechar,
  Botao
} from './style'
import ImageFechar from '../../assets/close.png'
import { useDispatch, useSelector } from 'react-redux'
import { abrir, adcionar } from '../../store/reducers/Carrinho'
import { fechar } from '../../store/reducers/Carrinho'
import { RootReducer } from '../../store'
import { Tipo } from '../../pages/Home'
import { useParams } from 'react-router-dom'
import { useGetRestPratoQuery } from '../../services/api'
import { useState } from 'react'
type props = {
  pedido?: Tipo
}

const ListaPratos = ({ pedido }: props) => {
  const [Visibilidade, setVisibilidade] = useState<'true' | 'false'>('false')
  const [titulo, SetTitulo] = useState('')
  const [image, setImage] = useState('')
  const [texto, setTexto] = useState('')
  const [Preco, setpreco] = useState(0)
  const [Id, setId] = useState(0)
  const { id } = useParams()
  const { data: Cardapio, isLoading } = useGetRestPratoQuery(id!)
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
    nome: titulo,
    id: Id,
    foto: image,
    texto: texto,
    preco: Preco
  }

  if (isLoading) {
    return <h4>Caregando...</h4>
  }
  if (!Cardapio) {
    return null
  }
  return (
    <>
      <Container>
        <Lista>
          {Cardapio.cardapio.map((prato) => (
            <li
              key={prato.id}
              onClick={() => {
                SetTitulo(prato.nome)
                setImage(prato.foto)
                setTexto(prato.descricao)
                setId(prato.id)
                if (prato.preco) {
                  setpreco(prato.preco)
                }
              }}
            >
              <PratosRestaurante
                image={prato.foto}
                titulo={prato.nome}
                texto={prato.descricao}
                onclick={mudaValor}
              />
            </li>
          ))}
        </Lista>
        <div
          onClick={() => dispach(fechar())}
          className={Abrir === true ? 'overlay' : ''}
        ></div>
      </Container>
      <ContainerDetalhe
        className={Visibilidade === 'true' ? 'visivel' : 'escondido'}
      >
        <div className="regu">
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
                  dispach(abrir())
                  dispach(adcionar(NovoPedido))
                  setVisibilidade('false')
                }}
              >
                Adcionar ao Carrinho - {Preco}
              </Botao>
            </ContainerTexto>
          </Card>
        </div>
        <div className="overlay" onClick={() => setVisibilidade('false')}></div>
      </ContainerDetalhe>
    </>
  )
}

export default ListaPratos
