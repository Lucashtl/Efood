import Pratos from '../../containers/Pratos'
import Hero from '../../components/Hero'
import { useGetPratoQuery } from '../../services/api'

interface Carda {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Tipo = {
  titulo: string
  id: number
  descricao: string
  destacado: boolean
  tipo: string
  capa: string
  avaliacao?: number
  cardapio: Carda[]
}

const Home = () => {
  const { data } = useGetPratoQuery()
  if (data) {
    return (
      <>
        <Hero />
        <div className="container">
          <Pratos pratos={data} />
        </div>
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
