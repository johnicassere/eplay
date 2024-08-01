import styled from "styled-components";
import { cores } from "../../styles";


export const Container = styled.div`
background-color: ${cores.cinza};
padding: 32px 0;
font-size: 14px;
`

export const SectionTitle = styled.h4`
color: ${cores.branca};
font-size: 16px;
font-weight: bold;
`

export const Links = styled.ul`
display: flex;
margin-top: 16px;
`
export const Link = styled.a`
color: ${cores.cinzaClaro};
margin-right: 8px;
cursor: pointer;
`
export const FooterSection = styled.div`
margin-bottom: 64px;
`