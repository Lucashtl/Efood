import Prato from '../../models/Pratos'
import Pizza from '../../assets/image 3.png'
import ListaPratos from '../../containers/ListaRestaurates'
import HeaderRestaurante from '../../components/Header_restaurante'

const Pratos: Omit<Prato, 'nota' | 'destaque'>[] = [
  {
    image: Pizza,
    texto:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    Titulo: 'Pizza Marguerita',
    id: 1,
    preco: 65.99
  },
  {
    image: Pizza,
    texto:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    Titulo: 'Pizza Marguerita',
    id: 2,
    preco: 70.99
  },
  {
    image: Pizza,
    texto:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    Titulo: 'Pizza Marguerita',
    id: 3,
    preco: 67.99
  },
  {
    image: Pizza,
    texto:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    Titulo: 'Pizza Marguerita',
    id: 4,
    preco: 49.99
  },
  {
    image: Pizza,
    texto:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    Titulo: 'Pizza Marguerita',
    id: 5,
    preco: 67.99
  },
  {
    image: Pizza,
    texto:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    Titulo: 'Pizza Marguerita',
    id: 6,
    preco: 45.99
  }
]

export const Restaurante = () => {
  return (
    <>
      <HeaderRestaurante />
      <ListaPratos pratos={Pratos} />
    </>
  )
}
