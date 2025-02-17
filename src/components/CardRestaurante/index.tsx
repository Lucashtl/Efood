import {
  Container,
  Image,
  Titulo,
  Botão,
  ContainerImage,
  Texto,
  ContainerBotao
} from './style'

type props = {
  image: string
  titulo: string
  texto: string
}

const PratosRestaurante = ({ image, titulo, texto }: props) => {
  return (
    <Container>
      <ContainerImage>
        <Image src={image} />
      </ContainerImage>
      <Titulo>{titulo}</Titulo>
      <Texto>{texto}</Texto>
      <ContainerBotao>
        <Botão>Adcionar ao carrinho</Botão>
      </ContainerBotao>
    </Container>
  )
}

export default PratosRestaurante
