import styled from "styled-components"
import { breakpoints, cores } from "../../styles"


export const Links = styled.ul`
display: flex;
margin-left: 40px;

@media(max-width: ${breakpoints.tablet}){
    margin-left: 0;
    display: block;
}
`

export const HeaderBar = styled.header`
background-color: ${cores.cinza};
padding: 24px;
border-radius: 16px;
margin-bottom: 80px;


a{
    color: ${cores.branca};
    font-weight: bold;
}

`

export const HeaderRow = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

> div{
    display: flex;
    align-items: center;

    @media(max-width: ${breakpoints.tablet}) {
    flex: 1;
    justify-content: space-between;

     ${Links}{
            display: none;
        }
    }
}

`

export const NavMobile = styled.nav`
    display: none;

    &.is-open {
        display: block;
    }

`

export const LinkItem = styled.li`
margin-right: 16px;

@media(max-width: ${breakpoints.tablet}){
    margin-right: 0;

    a{
        padding: 16px 0;
        display: block;
        text-align: center;
    }
}

a:hover{
    font-size: 17px;
}
`
export const CartButton = styled.a`
    display: flex;
    
    img{
        margin-left: 16px;
    }

    @media(max-width: ${breakpoints.tablet}) {
     span {
            display: none;
        }
    }
`

export const Hamburguer = styled.div`
width: 32px;

span{
    height: 2px;
    width: 100%;
    display: block;
    background-color: ${cores.branca};
    margin-bottom: 4px;
}

@media(min-width: ${breakpoints.tablet}) {
    display: none;
}

`