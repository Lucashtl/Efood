import { Container, Lista } from './style'
import Prato from '../../models/Pratos'
import Card from '../../components/Card'
export type props = {
  pratos: Prato[]
  fundo: 'Branco' | 'Rosa'
}
const Pratos = ({ pratos, fundo }: props) => (
  <Container>
    <Lista fundo={fundo}>
      {pratos.map((prato) => (
        <Card
          key={prato.Titulo}
          titulo={prato.Titulo}
          image={prato.image}
          destaque={prato.destaque}
          nota={prato.nota}
          texto={prato.texto}
          fundo={'Branco'}
        />
      ))}
    </Lista>
  </Container>
)

export default Pratos
