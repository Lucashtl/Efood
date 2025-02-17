import { Image } from '../Hero/style'
import { Container, Lista, Texto } from './style'
import logo from '../../assets/logo (1).png'
import Twitter from '../../assets/twitter-2-svgrepo-com 1.png'
import Facebook from '../../assets/facebook-round-svgrepo-com 1.png'
import Instagram from '../../assets/instagram-round-svgrepo-com (1) 1.png'

const Footer = () => (
  <Container>
    <Image src={logo} />
    <Lista>
      <li>
        <Image src={Twitter} />
      </li>
      <li>
        <Image src={Facebook} />
      </li>
      <li>
        <Image src={Instagram} />
      </li>
    </Lista>
    <Texto>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Texto>
  </Container>
)

export default Footer
