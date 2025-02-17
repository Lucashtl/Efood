import styled from 'styled-components'
import { Cores } from '../../styles/style'
import { props } from '../Card/index'
export const Container = styled.div<
  Omit<props, 'titulo' | 'image' | 'texto' | 'destaque' | 'nota'>
>`
  background-color: ${(props) =>
    props.fundo === 'Branco' ? Cores.Fundo : Cores.Destaque};
  width: 472px;
  heigth: 398px;
  color: ${(props) =>
    props.fundo === 'Branco' ? Cores.Texto : Cores.Destaque};
`
export const Titulo = styled.h4`
  weigth: 700;
  font-size: 18px;
  line-height: 21px;
`
export const Image = styled.img`
  object-fit: cover;
  width: 100%;
`
export const Destaque = styled.span`
  background-color: ${Cores.Texto};
  font-weight: 700;
  font-size: 13px;
  line-height: 14px;
  align-items: center;
  text-align: center;
  padding: 7px;
  margin-right: 8px;
`

export const Botao = styled(Destaque)`
  margin-left: 6px;
  margin-top: 16px;
  display: inline-block;

  &:hover {
    cursor: pointer;
  }
`

export const DestaqueContainer = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
`

export const ContainerImage = styled.div`
  position: relative;
`

export const Texto = styled.p`
  weight: 400;
  font-size: 18px;
  line-height: 22px;
  padding: 8px;
`
export const TituloContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 7px;
`

export const ContainerTexto = styled.div`
  border-bottom: 1px solid ${Cores.Texto};
  border-right: 1px solid ${Cores.Texto};
  border-left: 1px solid ${Cores.Texto};
  padding-bottom: 10px;
`
export const Span = styled.span`
  color: ${Cores.Texto};
  font-size: 18px;
  font-weight: 700;
  line-heigth: 21px;
  text-align: center;
`
