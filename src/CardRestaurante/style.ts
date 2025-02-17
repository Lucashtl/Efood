import styled from 'styled-components'
import { Cores } from '../styles/style'

export const Container = styled.div`
  width: 320px;
  background-color: ${Cores.Texto};
  display: flex;
  flex-direction: column;
`
export const ContainerImage = styled.div`
  align-items: center;
  text-align: center;
`

export const Image = styled.img`
  width: 304px;
  padding-top: 8px;
  height: 167px;
`
export const Titulo = styled.h3`
  color: ${Cores.Fundo};
  padding: 8px;
  font-weight: 900px;
  font-size: 16px;
`

export const Texto = styled.p`
  font-weight: 400px;
  font-size: 14px;
  line-height: 22px;
  color: ${Cores.Destaque};
  padding: 8px;
`

export const Botão = styled.button`
  width: 304px;
  height: 24px;
  background-color: ${Cores.Destaque};
  color: ${Cores.Texto};
  border: none;
  cursor: pointer;
`
export const ContainerBotao = styled.div`
  align-items: center;
  text-align: center;
  padding: 8px;
`
