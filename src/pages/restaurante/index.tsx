import Prato from '../../models/Pratos'
import Pizza from '../../assets/image 3.png'
import ListaPratos from '../../containers/ListaRestaurates'
import HeaderRestaurante from '../../components/Header_restaurante'

const Pratos: Omit<Prato, 'nota' | 'destaque'>[] = [
  {
    image: Pizza,
    texto:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    Titulo: 'Pizza Marguerita'
  },
  {
    image: Pizza,
    texto:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    Titulo: 'Pizza Marguerita'
  },
  {
    image: Pizza,
    texto:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    Titulo: 'Pizza Marguerita'
  },
  {
    image: Pizza,
    texto:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    Titulo: 'Pizza Marguerita'
  },
  {
    image: Pizza,
    texto:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    Titulo: 'Pizza Marguerita'
  },
  {
    image: Pizza,
    texto:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    Titulo: 'Pizza Marguerita'
  }
]

export const Restaurante = () => {
  return (
    <>
      <HeaderRestaurante />
      <div className="container">
        <ListaPratos pratos={Pratos} />
      </div>
    </>
  )
}
