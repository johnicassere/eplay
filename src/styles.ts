import { createGlobalStyle } from "styled-components";


export const colors = {
    white: '#EEE',
    black: '#111111',
    gray: '#333',
    green: '#10AC84',
    lightGray: '#A3A3A3'
}

export const breakpoints = {
    desktop: '1024px',
    tablet: '768px'
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
    background-color: ${colors.black};
    padding-top: 40px;
    color: ${colors.white};
}

.container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media(max-width: ${breakpoints.desktop}){
        max-width: 80%;
    }
}
`