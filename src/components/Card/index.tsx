import {
  Container,
  Texto,
  Titulo,
  TituloContainer,
  ContainerTexto,
  Span,
  Image,
  ContainerImage,
  Destaque,
  DestaqueContainer,
  Botao,
  Voltar
} from './style'
import Star from '../../assets/star_favorite.png'
import { useNavigate } from 'react-router-dom'
import { Tipo } from '../../pages/Home'

export type props = {
  itens: Tipo
}

const Card = ({ itens }: props) => {
  const navegate = useNavigate()

  return (
    <Container className="container-card">
      <ContainerTexto>
        <ContainerImage>
          <Image src={itens.capa} alt="" />
          <DestaqueContainer>
            {itens.destacado ? (
              <>
                <Destaque>Destacado</Destaque>
                <Destaque>{itens.tipo}</Destaque>
              </>
            ) : (
              <Destaque>{itens.tipo}</Destaque>
            )}
          </DestaqueContainer>
        </ContainerImage>
        <TituloContainer>
          <Titulo>{itens.titulo} </Titulo>
          <Span>
            {itens.avaliacao} <img src={Star} alt="" />
          </Span>
        </TituloContainer>
        <Texto>{itens.descricao}</Texto>
        <Botao className="card-button">
          <Voltar onClick={() => navegate(`/restaurante/${itens.id}`)}>
            Saiba Mais
          </Voltar>
        </Botao>
      </ContainerTexto>
    </Container>
  )
}

export default Card
