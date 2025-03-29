import { Container, Lista } from './style'
import Card from '../../components/Card'
import { Tipo } from '../../pages/Home'
export type props = {
  pratos: Tipo[]
}
const Pratos = ({ pratos }: props) => {
  return (
    <Container>
      <Lista>
        {pratos.map((prato) => (
          <Card itens={prato} key={prato.id} />
        ))}
      </Lista>
    </Container>
  )
}

export default Pratos
