import { useEffect, useState } from 'react'
import * as S from './style'
import { IMaskInput } from 'react-imask'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { fechar, remover, limpaCarrinho } from '../../store/reducers/Carrinho'
import Lixeira from '../../assets/lixeira-de-reciclagem 1.png'
import { formataPreco } from '../../styles/style'
const FimDoPedido = () => {
  const [confirmacao, setConfirmacao] = useState(false)
  const [Pagamento, setPagamento] = useState(false)
  const [Mensagem, setMensagem] = useState(false)
  const [Endereco, setEndereco] = useState(false)
  const [Numero, SetNumero] = useState('')
  const { Abrir } = useSelector((state: RootReducer) => state.carrinho)
  const { itens } = useSelector((state: RootReducer) => state.carrinho)
  const Dispach = useDispatch()

  useEffect(() => {
    if (Abrir === true) {
      setConfirmacao(true)
    } else {
      setEndereco(false)
      setPagamento(false)
      setConfirmacao(false)
      setMensagem(false)
    }
  }, [Abrir])

  useEffect(() => {
    let Total = 0
    for (let i = 0; i < itens.length; i++) {
      Total += itens[i].preco ?? 0
    }
    SetNumero(formataPreco(Total))
  }, [itens])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (Pagamento) {
      Dispach(limpaCarrinho())
    }

    if (Endereco) {
      setEndereco(false)
      setPagamento(true)
    } else if (Pagamento) {
      setPagamento(false)
      setMensagem(true)
    }
  }
  console.log(itens)
  return (
    <S.Container className={Abrir ? 'show' : ''}>
      {itens.length > 0 ? (
        <S.ContainerConfirmacao className={confirmacao ? 'show' : ''}>
          <ul>
            {itens.map((i) => (
              <S.Lista key={i.id}>
                <S.Image src={i.image} />
                <p>
                  <li>
                    <S.CarrinhoTitulo>{i.Titulo}</S.CarrinhoTitulo>
                    <br />
                    R$ {i.preco}
                  </li>
                </p>
                <img
                  onClick={() => {
                    Dispach(remover(i.id))
                  }}
                  className="lixeira"
                  src={Lixeira}
                  alt=""
                />
              </S.Lista>
            ))}
          </ul>
          <S.ContainerValor>
            <p>Valor Total</p>
            <p>${Numero}</p>
          </S.ContainerValor>
          <S.Botao
            onClick={() => {
              setConfirmacao(false)
              setEndereco(true)
            }}
          >
            Continuar com a entrega
          </S.Botao>
        </S.ContainerConfirmacao>
      ) : (
        <S.P className={!Mensagem ? 'show' : ''}>
          O carrinho está vazio, adicione pelo menos um produto para continuar
          com a compra
        </S.P>
      )}
      <form onSubmit={handleSubmit}>
        <S.DeliverContainer className={Endereco === true ? 'show' : ''}>
          <h2>Entrega</h2>
          <S.Field>
            <label htmlFor="remetente">Quem irá receber</label>
            <input required type="text" id="remetente" name="remetente" />
          </S.Field>
          <S.Field>
            <label htmlFor="endereco">Endereço</label>
            <input type="text" required id="endereco" name="endereco" />
          </S.Field>
          <S.Field>
            <label htmlFor="cidade">Cidade</label>
            <input type="text" required id="cidade" name="cidade" />
          </S.Field>
          <div className="CEPNumber">
            <S.Field>
              <label htmlFor="cep">CEP</label>
              <IMaskInput
                mask="00.000-000"
                type="text"
                required
                id="cep"
                name="cep"
              />
            </S.Field>
            <S.Field>
              <label htmlFor="numero">Número</label>
              <input type="number" required id="numero" name="numero" />
            </S.Field>
          </div>
          <S.Field>
            <label htmlFor="complemento">Complemento (opcional)</label>
            <input type="text" id="complemento" name="complemento" />
          </S.Field>
          <div className="buttomContainer">
            <S.Botao type="submit">Continuar com o pagamento</S.Botao>
            <S.Botao
              onClick={() => {
                setEndereco(false)
                setConfirmacao(true)
              }}
            >
              Voltar ao carrinho
            </S.Botao>
          </div>
        </S.DeliverContainer>
      </form>

      <form onSubmit={handleSubmit}>
        <S.PaymentContainer className={Pagamento ? 'show' : ''}>
          <p>Pagamento - Valor a pagar </p>

          <S.Field>
            <label htmlFor="cardName">Nome do cartão</label>
            <input type="text" required id="cardName" name="cardName" />
          </S.Field>
          <div className="fieldContainer">
            <S.Field>
              <label htmlFor="cardNumber">Número do cartão</label>
              <IMaskInput
                mask="0000.0000.0000.0000"
                type="text"
                required
                id="cardNumber"
                name="cardNumber"
              />
            </S.Field>
            <S.Field>
              <label htmlFor="cvv">CVV</label>
              <IMaskInput mask="000" type="text" required id="cvv" name="cvv" />
            </S.Field>
          </div>
          <div className="fieldContainer">
            <S.Field>
              <label htmlFor="mesVencimento">Mês de vencimento</label>
              <IMaskInput
                mask="00"
                type="text"
                required
                id="mesVencimento"
                name="mesVencimento"
              />
            </S.Field>
            <S.Field>
              <label htmlFor="anoVencimento">Ano de vencimento</label>
              <IMaskInput
                mask="00"
                type="text"
                required
                id="anoVencimento"
                name="anoVencimento"
              />
            </S.Field>
          </div>
          <div className="buttomContainer">
            <S.Botao>Finalizar pagamento</S.Botao>
            <S.Botao
              onClick={() => {
                setPagamento(false)
                setEndereco(true)
              }}
            >
              Voltar para a edição do endereço
            </S.Botao>
          </div>
        </S.PaymentContainer>
      </form>

      <S.ConfirmedContainer className={Mensagem ? 'show' : ''}>
        <h2>Pedido realizado </h2>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <br />
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <br />
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <br />
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <div className="buttomContainer">
          <S.Botao onClick={() => Dispach(fechar())}>Concluir</S.Botao>
        </div>
      </S.ConfirmedContainer>
    </S.Container>
  )
}

export default FimDoPedido
