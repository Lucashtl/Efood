import {
  Container,
  Image,
  Titulo,
  Botão,
  ContainerImage,
  Texto,
  ContainerBotao
} from './style'
import { useState } from 'react'

type props = {
  image: string
  titulo: string
  texto: string
}

const PratosRestaurante = ({ image, titulo, texto }: props) => {
  const [Detalhe, MudaDetalhe] = useState(true)

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
