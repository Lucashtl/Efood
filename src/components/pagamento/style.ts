import { Form, Field } from 'formik'
import { Cores } from '../../styles/style'
import styled from 'styled-components'

export const Container = styled.div`
  display: none;
  position: fixed;
  background-color: ${Cores.Texto};
  width: 360px;
  min-height: 100vh;
  right: 0;
  top: 0;
  padding: 7px;
  &.show {
    display: block;
  }
  z-index: 3;

  ul {
    padding: 8px;
    color: ${Cores.Texto};
  }
`

export const P = styled.p`
  display: none;
  margin-top: 20px;
  color: ${Cores.Destaque};
  text-align: center;

  &.show {
    display: block;
  }
`
export const ContainerValor = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  margin-bottom: 16px;

  p {
    size: 14px;
    font-weight: 700;
  }
`
export const ContainerConfirmacao = styled.div`
  display: none;
  button {
    width: 95%;
    padding: 8px;
  }
  &.show {
    display: block;
  }
`

export const Botao = styled.button`
  margin-left: 6px;
  margin-top: 16px;
  display: inline-block;
  background-color: ${Cores.Destaque};
  color: ${Cores.Texto};
  font-weight: 700;
  font-size: 13px;
  line-height: 14px;
  align-items: center;
  text-align: center;
  padding: 7px;
  margin-right: 8px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`

export const DeliverContainer = styled.div`
  position: sticky;
  display: none;
  .CEPNumber {
    display: flex;
    column-gap: 34px;
  }

  .buttomContainer {
    margin-top: 24px;
  }

  color: ${Cores.Destaque};
  h2 {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }
  label {
    font-weight: 700;
    font-size: 14px;
  }
  &.show {
    display: block;
  }
  ${Botao} {
    margin-top: 8px;
  }
`

export const Image = styled.img`
  width: 90px;
  height: 90px;
  padding: 8px;
`
export const Lista = styled.li`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: ${Cores.Destaque};
  margin-bottom: 16px;
  align-items: center;
  position: relative;

  .lixeira {
    position: absolute;
    right: 10px;
    bottom: 10px;
    cursor: pointer;
  }
`
export const CarrinhoTitulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const PaymentContainer = styled.div`
  p {
    font-size: 16px;
    font-weight: 700;
  }
  label {
    font-weight: 700;
    font-size: 14px;
  }
  color: ${Cores.Destaque};
  display: none;
  &.show {
    display: block;
  }
  .buttomContainer {
    margin-top: 24px;
    ${Botao} {
      margin-bottom: 8px;
    }
  }
  .fieldContainer {
    display: flex;
    column-gap: 34px;
    #cardNumber {
      width: 228px;
    }
    #mesVencimento {
      width: 155px;
    }
  }
  
      #mesVencimento {
        width: 100%;
      }
    }
  }
`
type InputProps = {
  maxWidth?: string
}

export const FormCheckout = styled(Form)`
  > h3 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  ${Botao} {
    margin-bottom: 8px;
  }
`

export const ConfirmedContainer = styled.div`
  color: ${Cores.Destaque};
  display: none;
  &.show {
    display: block;
  }
  .buttomContainer {
    margin-top: 24px;
  }
  p {
    font-size: 14px;
    font-weight: 400;

    line-height: 22px;
  }
  h2 {
    font-size: 16px;
    font-weight: 700;
    line-height: 18.75px;
    margin-bottom: 8px;
  }
`
export const InputContent = styled.div<InputProps>`
  font-size: 14px;
  width: ${(props) => props.maxWidth};

  label {
    display: block;
    margin-bottom: 8px;
  }

  p {
    color: black;
  }
`

export const InputField = styled(Field)`
  margin-bottom: 8px;
  height: 32px;
  width: 100%;
  background-color: ${Cores.Fundo};
  padding: 0 8px;
  border: none;

  &.error {
    border: 1px solid red;
  }
`

export const Row = styled.div`
  display: flex;
  column-gap: 34px;
  justify-content: space-between;
`

export const ButtonContainer = styled.div`
  margin-top: 16px;
`
