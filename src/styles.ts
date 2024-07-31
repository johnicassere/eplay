import { createGlobalStyle } from "styled-components";


export const cores = {
    branca: '#EEE',
    preta: '#111111',
    cinza: '#333',
    verde: '#10AC84'
}

export const GlobalCss = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
}

body{
    background-color: ${cores.preta};
    padding-top: 40px;
    color: ${cores.branca};
}

.container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
}
`