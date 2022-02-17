import React from 'react'
import styled from 'styled-components';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Button } from '@mui/material';


function Main({ currentPhaseNumber, accountAddress, unitCost, unit, current, target, sale, totalSale }) {
    console.log((current / target))
    return (
        <MainContainer>

            <MainButtonContainer>
                <AccountBalanceWalletIcon />
                <h3>{(accountAddress === "") ? "Connect Wallet" : `${accountAddress}`}</h3>
            </MainButtonContainer>

            <MainInfoContainer>
                <MainInfo>
                    <h1>Launchpad <span>Phase {currentPhaseNumber}/5</span> is Live</h1>
                    <h2>Price of <span>{unitCost}</span> per <span>{unit}Meld</span></h2>
                    <h3>{currentPhaseNumber - 1} phases completed</h3>

                    <ProgressBarContainer>
                        <SliderContainer>
                            <CompletedProgress style={{ width: `${(current / target)}*100% !important` }} ></CompletedProgress>
                            <TotalProgress></TotalProgress>
                        </SliderContainer>

                        <ProgressRange>
                            {/* TODO:Dynamic Width */}
                            <h4>{current}$Meld</h4>
                            <h4>{target}$Meld</h4>
                        </ProgressRange>
                    </ProgressBarContainer>
                    <SaleInfo>
                        <h1><span>{sale}$ Meld</span>sold</h1>
                        <h3><span>{totalSale}$ Meld</span> sold totally</h3>
                        <Button>
                            Create your referal!
                        </Button>
                    </SaleInfo>
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
    background: rgb(0,0,0);
background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(9,9,121,1) 35%, rgba(214,0,81,1) 100%);
    display:flex;
    flex-direction:column;
    padding:40px;
    align-items:center;
    *{
        /* \\ TODO:  correct this*/
        margin:20px;
    }
`;

const MainButtonContainer = styled.div`
    display:flex;
    align-items:center;
    background-color:white;
    margin:0;
    overflow: hidden;
    padding:10px;
    border-radius:100px;
    :hover{
        background-color:palevioletred;
    }

    transition: all .2s linear;
    >h3>.MuiSvgIcon-root{
        background-color:red;
    }
`;


const MainInfoContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap; 
    *{
        margin:20px 5px ;
    }


`;


const MainInfo = styled.div`
    background-color:#0a101f;
    color:white;
    border-radius:50px;
    padding:40px;
    >h1{
        text-align: center};
    >h2>span{
        color:#00db76;
    }
    >h2>span{
        color:#ff4dab;
    }
    >h3{
        color:#00db76;;
    }
`;

const MainTransactionContainer = styled.div``;

const ProgressBarContainer = styled.div`

    position:relative;

    
`;
const CompletedProgress = styled.div`
    display:inline-block;
    width:50%;
    height:25px;
    position:absolute;
    z-index:999;
    background-color:#00db76;
    border-radius:25px;
`;
const TotalProgress = styled.div`
    display:inline-block;
    width:98%;
    height:25px;
    position:absolute;
    z-index:99;
    background-color:white;
    border-radius:25px;
    `;
const ProgressRange = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top: 20px;
    `;

const SaleInfo = styled.div`
    text-align:center;

    >h1 >span{
        color:#ff4dab;
    }

    >h3 >span{
        color:#ff4dab;
    }

    >Button{
        background-color:#ff4dab;
        color:white;
        border-radius:25px;
        padding:10px;
        
        :hover{
            background-color:#ff8bc8;
        }
    }
`;

const SliderContainer = styled.div`
    *{
        margin:0;
    }
`;