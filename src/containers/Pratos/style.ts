import styled from 'styled-components'
import { Cores } from '../../styles/style'
export const Container = styled.div`
  width: 512px;
  background-color: ${Cores.Fundo};
`

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  margin-top: 80px;
  .destaque {
    background-color: ${Cores.Fundo};

  .card-button {
    background-color: ${Cores.Fundo};
  }
`
