import { createGlobalStyle } from 'styled-components'

export const Cores = {
  Texto: '#E66767',
  Fundo: '#FFF8F2',
  Destaque: '#FFEBD9'
}

export const GlobalStyle = createGlobalStyle`
* {
box-sizing: border-box;
margin: 0;
font-family: Roboto, sans-serif;
list-style: none;
}


.container{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  background-color: ${Cores.Fundo};
    
}

body{
background-color: ${Cores.Fundo};
}
`
