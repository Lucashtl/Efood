import styled from 'styled-components'
import { Cores } from '../../styles/style'

export const Container = styled.div`
  width: 100%;
  padding-top: 56px;
  display: flex;
  flex-direction: columns;
  justify-content: center;
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

export const Botao = styled.div`
  margin-left: 6px;
  margin-top: 16px;
  display: inline-block;
  background-color: ${Cores.Texto};
  font-weight: 700;
  font-size: 13px;
  line-height: 14px;
  align-items: center;
  text-align: center;
  padding: 7px;
  margin-right: 8px;
  background-color: ${Cores.Destaque};
  color: ${Cores.Texto};

  &:hover {
    cursor: pointer;
  }
`
export const Card = styled.div`
  position: fixed;
  background-color: ${Cores.Texto};
  width: 1024px;
  height: 344px;
  top: 150px;
  left: 130px;
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
