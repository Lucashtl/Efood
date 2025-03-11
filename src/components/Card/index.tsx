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
  Botao
} from './style'
import { LinkVoltar } from '../Header_restaurante/style'
import Star from '../../assets/star_favorite.png'

export type props = {
  titulo: string
  image: string
  destaque: string[]
  nota: string
  texto: string
  fundo: 'Rosa' | 'Branco'
}

const Card = ({ titulo, image, destaque, nota, texto, fundo }: props) => (
  <Container className="container-card" fundo={fundo}>
    <ContainerTexto>
      <ContainerImage>
        <Image src={image} alt="" />
        <DestaqueContainer>
          {destaque.map((desta) => (
            <Destaque className="destaque" key={desta}>
              {desta}
            </Destaque>
          ))}
        </DestaqueContainer>
      </ContainerImage>
      <TituloContainer>
        <Titulo>{titulo} </Titulo>
        <Span>
          {nota} <img src={Star} alt="" />
        </Span>
      </TituloContainer>
      <Texto>{texto}</Texto>
      <Botao className="card-button">
        <LinkVoltar to="/Restaurante">Saiba Mais</LinkVoltar>
      </Botao>
    </ContainerTexto>
  </Container>
)

export default Card
