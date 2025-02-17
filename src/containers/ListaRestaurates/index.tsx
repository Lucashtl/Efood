import PratosRestaurante from '../../CardRestaurante'
import Prato from '../../models/Pratos'
import { Container, Lista } from './style'

type props = {
  pratos: Omit<Prato, 'nota' | 'destaque'>[]
}

const ListaPratos = ({ pratos }: props) => (
  <Container>
    <Lista>
      {pratos.map((prato) => (
        <PratosRestaurante
          key={prato.Titulo}
          image={prato.image}
          titulo={prato.Titulo}
          texto={prato.texto}
        />
      ))}
    </Lista>
  </Container>
)

export default ListaPratos
