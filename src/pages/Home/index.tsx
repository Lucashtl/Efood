import Pratos from '../../containers/Pratos'
import Prato from '../../models/Pratos'
import Spaguetti from '../../assets/image 1.png'
import Hero from '../../components/Hero'

const Inicio: Prato[] = [
  {
    destaque: ['Destaque da semana', 'Japonesa'],
    image: Spaguetti,
    Titulo: 'La Dolce Vita Trattoria ',
    texto:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nota: '4.9',
    id: 6
  },
  {
    destaque: ['Destaque da semana', 'Japonesa'],
    image: Spaguetti,
    Titulo: 'La Dolce Vita Trattoria ',
    texto:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nota: '4.9',
    id: 7
  },
  {
    destaque: ['Destaque da semana', 'Japonesa'],
    image: Spaguetti,
    Titulo: 'La Dolce Vita Trattoria ',
    texto:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nota: '4.9',
    id: 8
  },
  {
    destaque: ['Destaque da semana', 'Japonesa'],
    image: Spaguetti,
    Titulo: 'La Dolce Vita Trattoria ',
    texto:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nota: '4.9',
    id: 9
  }
]

const Home = () => (
  <>
    <Hero />
    <div className="container">
      <Pratos pratos={Inicio} fundo={'Branco'} />
    </div>
  </>
)

export default Home
