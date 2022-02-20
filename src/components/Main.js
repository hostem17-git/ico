import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Button, Checkbox } from '@mui/material';
import Referral from './Referral';


function Main({ currentPhaseNumber, accountAddress, unitCost, unit, current, target, sale, totalSale, max }) {

    const [buyAmount, setBuyAmount] = useState(0.00);
    const [meldAmount, setMeldAmount] = useState(0.00);
    const [referal, setReferal] = useState(false);
    const [referalAddress, setReferalAddress] = useState("")

    useEffect(() => {
        setMeldAmount((parseFloat(unit) * parseFloat(buyAmount)) / (parseFloat(unitCost)))
    }, [buyAmount, unit, unitCost])

    const handleCheckBox = (e) => {
        setReferal(e.target.checked);
    }

    return (
        <MainContainer>

            <MainButtonContainer>
                <AccountBalanceWalletIcon />
                <h3>{(accountAddress === "") ? "Connect Wallet" : `${accountAddress}`}</h3>
            </MainButtonContainer>

            {/* <Referral accountAddress={accountAddress} /> */}
            {/* ######################################################################################### */}
            <MainInfoContainer>
                <MainInfo>
                    <h1>Launchpad <span>Phase {currentPhaseNumber}/5</span> is Live</h1>
                    <h2>Price of <span>{unitCost}BNB</span> per <span>{unit} Meld</span></h2>
                    <h3>{currentPhaseNumber - 1} phases completed</h3>

                    <ProgressBarContainer>
                        <SliderContainer>
                            <CompletedProgress style={{ width: `${(parseFloat(current) / parseFloat(target) * 100)}%` }} ></CompletedProgress>
                            <TotalProgress></TotalProgress>
                        </SliderContainer>

                        <ProgressRange>
                            <h4>{`${parseFloat(current).toLocaleString("en")}`}$Meld</h4>
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

                    <TransactionContainer>
                        <Border>
                            <LabelContainer>
                                <h4>Buy</h4>
                                <p onClick={() => { setBuyAmount(parseFloat(max)) }}>max</p>
                            </LabelContainer>
                            <InputContainer>
                                <input type="number" value={buyAmount} placeholder="0.00" step={1} onChange={(e) => { setBuyAmount(e.target.value) }} /><p>BNB</p>
                            </InputContainer>
                        </Border>
                        <Border>
                            <LabelContainer>
                                <h4>Get</h4>

                            </LabelContainer>
                            <InputContainer>
                                <input type="number" disabled value={meldAmount} placeholder="0.00" /><p>MELD</p>
                            </InputContainer>
                        </Border>
                    </TransactionContainer>
                    <CheckboxContainer>
                        <Checkbox onChange={handleCheckBox} /><p>Have a referal?</p>
                    </CheckboxContainer>

                    {referal && <input type="text" value={referalAddress} placeholder="0x0000..." onChange={(e => setReferalAddress(e.target.value))} />}


                    <ButtonContainer>
                        <Button>
                            Buy $MELD
                        </Button>
                    </ButtonContainer>


                </MainTransactionContainer>

            </MainInfoContainer>

        </MainContainer >
    )
}

export default Main

const MainContainer = styled.div`  
    width:100%;;
    /* background: rgb(0,0,0); */
    /* background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(9,9,121,1) 35%, rgba(214,0,81,1) 100%); */
    display:flex;
    flex-direction:column;
    padding:40px 0;
    align-items:center;
    *{
        /* \\ TODO:  correct this*/
        margin:20px 0;
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
    cursor: pointer;
    :hover{
        box-shadow:0px 0px 15px #fff; 
    }

    transition: all .2s linear;
    >h3>.MuiSvgIcon-root{
        background-color:red;
    }
`;

const MainInfoContainer = styled.div`
    width:100%;
    display:flex;
    align-items: center;
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
        text-align: center;
    >span{
        color:#ff4dab;
    }
    };
    >h2>span{
        color:#00db76;
    }
    
    >h3{
        color:#00db76;;
    }
`;

const MainTransactionContainer = styled.div`
    background-color: #474866;
    color:white;
    border-radius:50px;
    padding:40px;
    height:fit-content;
    *{
        margin:5px;
    }

    >input{
        
        color:#00db76;
        outline:none;
        border:none;
        padding:10px 25px;
        background-color: black;
        border-radius: 25px;
        
    }

    >input::-webkit-outer-spin-button,input::-webkit-inner-spin-button {
    -webkit-appearance: none;
     margin: 0;
     }

    
`;


const ButtonContainer = styled.div`
    display:flex;
    justify-content: center;
    >Button{
        color:white;
        display:block;
        justify-self: center;
        background-color:#ff4dab;
        border-radius:25px;

    }
`;


const ProgressBarContainer = styled.div`

    position:relative;

    
`;

const CompletedProgress = styled.div`
    display:inline-block;
    /* width:50%; */
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

const TransactionContainer = styled.div``;

const LabelContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    font-size: 24px;;
    p{
        border-radius:25px;
        background-color:#2777f8;
        padding:5px 10px;
        padding-top:4px;
        /* padding:5px; */
        cursor: pointer;
    }
`;
const InputContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    >input{
        flex:.8;
        color:#00db76;
        outline:none;
        border:none;
        font-size: 18px;
        padding:10px 25px;
        background-color: black;
        border-radius: 25px;
    }
    >input::-webkit-outer-spin-button,
>input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
      
`;

const CheckboxContainer = styled.div`
    display:flex;
    align-items:center;
`
const Border = styled.div`
    padding:20px;
    border:2px solid white;
    border-radius:25px;
`;
