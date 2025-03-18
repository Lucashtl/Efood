import { Container, Lista } from './style'
import Card from '../../components/Card'
import Prato from '../../models/Pratos'
export type props = {
  pratos: Prato[]
  fundo: 'Branco' | 'Rosa'
}
const Pratos = ({ pratos, fundo }: props) => {
  return (
    <Container>
      <Lista fundo={fundo}>
        {pratos.map((prato) => (
          <Card
            key={prato.id}
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
}

export default Pratos
