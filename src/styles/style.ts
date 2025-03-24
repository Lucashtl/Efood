import { createGlobalStyle } from 'styled-components'

export const Cores = {
  Texto: '#E66767',
  Fundo: '#FFF8F2',
  Destaque: '#FFEBD9',
  FundoCard: '#FFFFFF'
}

export const GlobalStyle = createGlobalStyle`
* {
box-sizing: border-box;
font-family: 'Roboto', sans-serif;
list-style: none;
margin: 0 ;
}

::-webkit-scrollbar {
  display: none;
}

html {
  scrollbar-width: none;
}

.container{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
    
}

body{
  -ms-overflow-style: none;
background-color: ${Cores.Fundo};
}

.ola{

  position: relative;
  
  &::after {
    z-index: 2;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

}

.dark-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
`
