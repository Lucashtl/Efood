import styled from 'styled-components'
import { Cores } from '../../styles/style'

export const Container = styled.footer`
  margin-top: 120px;
  height: 298px;
  width: 100%;
  background-color: ${Cores.Destaque};
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Lista = styled.ul`
  display: flex;
  margin-right: 20px;
  li {
    margin-right: 5px;
  }
`
export const Texto = styled.p`
  font-size: 10px;
  margin-top: 80px;
  color: ${Cores.Texto};
  text-align: center;
  max-width: 400px;
`
