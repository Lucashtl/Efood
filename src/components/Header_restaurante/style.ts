import styled from 'styled-components'
import Fundo from '../../assets/fundo.png'
import { Link } from 'react-router-dom'
import { Cores } from '../../styles/style'

export const Header = styled.div`
  width: 100%;
  height: 186px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${Fundo});
`
export const Lista = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 80%;
  max-width: 90%;
  padding-top: 63px;
`

export const Container = styled.div`
  background-color: ${Cores.Fundo};
`

export const ItemLista = styled.li`
  color: ${Cores.Texto};
  font-size: 18px;
  font-weight: bold;
`
export const LinkVoltar = styled(Link)`
  text-decoration: none;
  color: ${Cores.Texto};
`
export const ImageFrente = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 99%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`
export const Restaurante = styled.h4`
  position: absolute;
  font-size: 32px;
  color: #ffffff;
  z-index: 2;
  line-height: 37px;
  font-weight: 100;
  top: 25px;
  left: 170px;
`

export const RestauranteNome = styled.h4`
  font-weight: bold;
  font-size: 32px;
  color: white;
  position: absolute;
  z-index: 2;
  top: 214px;
  left: 170px;
`

export const Image = styled.img`
  width: 100%;
  height: 280px;
`
