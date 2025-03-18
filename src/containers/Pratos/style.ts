import styled from 'styled-components'
import { Cores } from '../../styles/style'
import { props } from './index'
export const Container = styled.div`
  width: 512px;
  background-color: ${Cores.Fundo};
`

export const Lista = styled.ul<Omit<props, 'pratos'>>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  margin-top: 80px;
  .destaque {
    background-color: ${(props) =>
      props.fundo === 'Rosa' ? Cores.Fundo : Cores.Texto};
    color: ${(props) => (props.fundo === 'Rosa' ? Cores.Texto : Cores.Fundo)};
  }

  .card-button {
    background-color: ${(props) =>
      props.fundo === 'Rosa' ? Cores.Fundo : Cores.Texto};
    color: ${(props) => (props.fundo === 'Rosa' ? Cores.Texto : Cores.Fundo)};
  }
`
