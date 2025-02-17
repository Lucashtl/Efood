import styled from 'styled-components'
import { Cores } from '../../styles/style'
import { Botao } from '../Card/style'

export const Container = styled.div`
  width: 100%;
  background-color: black;
`
export const Card = styled.div`
  position: absolute;
  background-color: ${Cores.Texto};
  width: 1024px;
  height: 344px;
  top: 490px;
  left: 428px;
  display: flex;
  color: white;

  ${Botao} {
    background-color: white;
    color: ${Cores.Texto};
    width: 218px;
  }
`
export const Image = styled.img`
  width: 40%;
  margin: 32px;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  padding-top: 32px;
  margin-bottom: 16px;
`

export const Texto = styled.p`
  font-size: 14px;
`
export const ContainerTexto = styled.div``
