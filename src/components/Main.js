import React from 'react'
import styled from 'styled-components';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


function Main({ accountAddress }) {
    console.log(accountAddress)
    return (
        <MainContainer>

            <MainButtonContainer>
                <AccountBalanceWalletIcon />
                <h3>{(accountAddress === "") ? "Connect Wallet" : `${accountAddress}`}</h3>
            </MainButtonContainer>

            <MainInfoContainer>
                <MainInfo>
                    <h1>Hello</h1>
                </MainInfo>
                <MainTransactionContainer>
                    <h1>World!</h1>
                </MainTransactionContainer>
            </MainInfoContainer>
        </MainContainer >
    )
}

export default Main

const MainContainer = styled.div`  
    width:100%;
    height:100vh;
    background-color: pink;
    display:flex;
    flex-direction:column;
    cursor: pointer;
    align-items:center;
    *{
        margin:20px;
    }
`;

const MainButtonContainer = styled.div`
    display:flex;
    align-items:center;
    background-color:white;
    padding:0 5px;
    border-radius:100px;
    :hover{
        background-color:palevioletred;
    }

    transition: all .5s linear;
    >h3>.MuiSvgIcon-root{
        background-color:red;
    }
`;


const MainInfoContainer = styled.div`
    width:100%;
    display:flex;
    background-color:green;
    justify-content:center;
    flex-wrap:wrap; 
    *{
        margin:5px;
    }
`;
const MainInfo = styled.div``;
const MainTransactionContainer = styled.div``;