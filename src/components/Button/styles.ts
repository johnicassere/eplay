import styled from 'styled-components';
import { cores } from "../../styles";
import { Link } from 'react-router-dom'


export const ButtonContainer = styled.button`
border: 2px solid ${cores.branca};
color: ${cores.branca};
background-color: transparent;
font-size: 16px;
font-weight: bold;
border-radius: 8px;
padding: 8px 16px;
`

export const ButtonLink = styled(Link)`
border: 2px solid ${cores.branca};
color: ${cores.branca};
background-color: transparent;
font-size: 16px;
font-weight: bold;
border-radius: 8px;
padding: 8px 16px;
`