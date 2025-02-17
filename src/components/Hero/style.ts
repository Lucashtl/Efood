import styled from 'styled-components'
import { Cores } from '../../styles/style'

interface BackgroundImageProps {
  Img: string
}

export const Container = styled.div`
  display: block;
`

export const Image = styled.img`
  padding-top: 40px;
`

export const Fundo = styled.div<BackgroundImageProps>`
  background-image: url(${(props) => props.Img});
  width: 100%;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .texto {
    width: 539px;
    text-align: center;
    padding-top: 138px;
    margin-bottom: 40px;
  }
`
export const Texto = styled.p`
  font-weight: 900;
  line-heigth: 42px;
  color: ${Cores.Texto};
  font-size: 36px;
`
