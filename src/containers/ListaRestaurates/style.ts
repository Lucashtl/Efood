import styled from 'styled-components'
import { Cores } from '../../styles/style'
import { Botao } from '../../components/Card/style'

export const Container = styled.div`
  width: 712px;
  padding-top: 56px;
  margin-left: 135px;
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 2;
  }
`
export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
`

export const ContainerDetalhe = styled.div`
  width: 100%;
  background-color: black;

  &.visivel {
    display: flex;
  }
  &.escondido {
    display: none;
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 2;
  }
`
export const Card = styled.div`
  position: fixed;
  background-color: ${Cores.Texto};
  width: 1024px;
  height: 344px;
  top: 150px;
  left: 210px;
  display: flex;
  color: white;
  z-index: 3;
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

export const Fechar = styled.img`
  max-width: 16px;
  max-height: 16px;
  width: 100%;
  margin: 8px;
  cursor: pointer;
  position: absolute;
  right: 0;
`
