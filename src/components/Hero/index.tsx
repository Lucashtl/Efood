import { Container, Image, Fundo, Texto } from './style'
import logo from '../../assets/logo (1).png'
import ImgFundo from '../../assets/fundo.png'

const Hero = () => (
  <Container>
    <Fundo Img={ImgFundo}>
      <Image src={logo} />
      <div className="texto">
        <Texto>Viva experiências gastronômicas no conforto da sua casa</Texto>
      </div>
    </Fundo>
  </Container>
)

export default Hero
