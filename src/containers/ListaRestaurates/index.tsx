import PratosRestaurante from '../../components/CardRestaurante'
import Prato from '../../models/Pratos'
import {
  Container,
  ContainerDetalhe,
  Lista,
  Card,
  ContainerTexto,
  Image,
  Texto,
  Titulo
} from './style'
import Logo from '../../assets/image 1.png'
import { Botao } from '../../components/Card/style'
import { useState } from 'react'
type props = {
  pratos: Omit<Prato, 'nota' | 'destaque'>[]
}

const ListaPratos = ({ pratos }: props) => {
  const [Mostra, setMostrar] = useState(false)

  return (
    <>
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
      <ContainerDetalhe className={Mostra ? 'visivel' : 'escondido'}>
        <Card>
          <Image src={Logo} />
          <ContainerTexto>
            <Titulo>Pizza Marguerita</Titulo>
            <Texto>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
              <br />
              <br />
              Serve: de 2 a 3 pessoas
            </Texto>
            <Botao>Adcionar ao Carrinho - R$ 60,90</Botao>
          </ContainerTexto>
        </Card>
        <div onClick={() => setMostrar(false)} className="overlay"></div>
      </ContainerDetalhe>
    </>
  )
}

export default ListaPratos
