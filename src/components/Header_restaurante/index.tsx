import {
  Container,
  Header,
  Image,
  ImageFrente,
  ItemLista,
  Lista,
  Restaurante,
  RestauranteNome
} from './style'
import Frente from '../../assets/image 2.png'
import logo from '../../assets/logo (1).png'
const HeaderRestaurante = () => (
  <Container>
    <Header>
      <Lista>
        <ItemLista>
          <p>Restaurantes</p>
        </ItemLista>
        <ItemLista>
          <img src={logo} alt="" />
        </ItemLista>
        <ItemLista>
          <p>(0) produtos no carrinho</p>
        </ItemLista>
      </Lista>
    </Header>
    <div className="ola">
      <ImageFrente>
        <Restaurante>Italiana</Restaurante>
        <RestauranteNome>La Dolce Vita Trattoria</RestauranteNome>
        <Image src={Frente} />
      </ImageFrente>
    </div>
  </Container>
)

export default HeaderRestaurante
