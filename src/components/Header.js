import React from 'react'
import styled from 'styled-components'
import { logoIcoPad } from "./assets.js"

function Header() {
    return (
        <HeaderContainer>
            <img src={logoIcoPad} alt="Logo" />
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
    background-color:black;
    width:100%;
    display:flex;
    justify-content:center;
    padding:30px 0;
    >img{
        object-fit:contain;
        height:12vh;
    }
`;