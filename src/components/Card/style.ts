import styled from 'styled-components'
import { Cores } from '../../styles/style'
import { props } from '../Card/index'
import { LinkVoltar } from '../Header_restaurante/style'
export const Container = styled.div<
  Omit<props, 'titulo' | 'image' | 'texto' | 'destaque' | 'nota' | 'tipo'>
>`
  background-color: ${(props) =>
    props.fundo === 'Branco' ? Cores.FundoCard : Cores.Fundo};
  width: 472px;
  height: 398px;
  max-height: 100%;
  margin-bottom: 48px;
  background-color: ${Cores.FundoCard};
  font-family: roboto, sans-serif;
  color: ${(props) =>
    props.fundo === 'Branco' ? Cores.Texto : Cores.Destaque};
`
export const Titulo = styled.h4`
  weigth: 700;
  font-size: 18px;
  line-height: 21px;
  padding: 8px;
  margin-top: 8px;
`
export const Image = styled.img`
  object-fit: cover;
  height: 217px;
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
  margin-bottom: 8px;
  display: inline-block;
  background-color: ${Cores.Destaque};
  color: ${Cores.Texto};
  ${LinkVoltar} {
    color: ${Cores.Destaque};
  }

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
  margin: 0;
`

export const Texto = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  padding: 0 8px;
`
export const TituloContainer = styled.div`
  display: flex;
  height: 20px;
  align-items: center;
  justify-content: space-between;
`

export const ContainerTexto = styled.div`
  border-bottom: 1px solid ${Cores.Texto};
  border-right: 1px solid ${Cores.Texto};
  border-left: 1px solid ${Cores.Texto};
  overflow: hidden;
`
export const Span = styled.span`
  color: ${Cores.Texto};
  display: flex;
  text-align: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  line-heigth: 21px;

  img {
    margin-left: 5px;
  }
`
