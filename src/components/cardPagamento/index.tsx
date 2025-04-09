import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { fechar, remover, setSidebar } from '../../store/reducers/Carrinho'
import DeleteItem from '../../assets/lixeira-de-reciclagem 1.png'
import { Botao } from '../pagamento/style'
import { formataPreco } from '../../styles/style'
import Close from '../../assets/close.png'
import {
  CartContainer,
  Delete,
  NamePrice,
  Overlay,
  Product,
  ProductImage,
  ProductsList,
  SideBar,
  TotalValue
} from './styles'
import Checkout from '../pagamento'

export type Props = {
  sidebar: 'cart' | 'delivery' | 'payment' | 'confirm'
}

const CartPagamento = ({ sidebar }: Props) => {
  const { Abrir, itens } = useSelector((state: RootReducer) => state.carrinho)
  const totalPrice = useSelector(
    (state: RootReducer) => state.carrinho.totalPrice
  )

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(fechar())
  }

  const removeItem = (id: number) => {
    dispatch(remover(id))
  }

  const handleSidebarChange = () => {
    if (itens.length > 0) {
      dispatch(setSidebar('delivery'))
    }
  }

  return (
    <CartContainer className={Abrir ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar sidebar={sidebar}>
        <header onClick={closeCart}>
          <img src={Close} alt="Fechar" />
        </header>
        {sidebar === 'cart' ? (
          itens.length > 0 ? (
            <>
              <ProductsList>
                {itens.map((item) => (
                  <Product key={item.id}>
                    <ProductImage src={item.foto} alt={item.nome} />
                    <NamePrice>
                      <h3>{item.nome}</h3>
                      <p>{formataPreco(item.preco)}</p>
                    </NamePrice>
                    <Delete
                      onClick={() => removeItem(item.id)}
                      src={DeleteItem}
                      alt="Excluir prato"
                    />
                  </Product>
                ))}
              </ProductsList>
              <TotalValue>
                <p>Valor total</p>
                <p>{formataPreco(totalPrice)}</p>
              </TotalValue>
              <Botao
                onClick={handleSidebarChange}
                title="Comprar"
                type="button"
              >
                Continuar com a entrega
              </Botao>
            </>
          ) : (
            <p>
              Seu carrinho esta vazio. Volte ao restaurante e escolha um
              produto!
            </p>
          )
        ) : (
          <Checkout />
        )}
      </SideBar>
    </CartContainer>
  )
}

export default CartPagamento
