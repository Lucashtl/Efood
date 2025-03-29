import Pratos from '../../containers/Pratos'
import Hero from '../../components/Hero'
import { useEffect, useState } from 'react'

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
  const [pra, setPra] = useState<Tipo[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setPra(res))
  }, [])
  return (
    <>
      <Hero />
      <div className="container">
        <Pratos pratos={pra} />
      </div>
    </>
  )
}

export default Home
