import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Button, Checkbox } from '@mui/material';
import { simplex_logo_small, bnb, matic, usdt } from './assets';
import Referral from './Referral';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import { Dropdown } from 'semantic-ui-react'

function Main({ currentPhaseNumber, accountAddress, unitCost, unit, current, target, sale, totalSale, max }) {


    const currencyOptions = {
        "bnb": bnb,
        "mactic": matic,
        "usdt": usdt
    }

    const [currency, setCurrency] = useState({
        "name": "",
        "img": ""
    });
    const [currencyOptionVisibility, setCurrencyOptionVisibility] = useState(false);
    const [buyAmount, setBuyAmount] = useState(0.00);
    const [smplxAmount, setSmplxAmount] = useState(0.00);
    const [referal, setReferal] = useState(false);
    const [referalAddress, setReferalAddress] = useState("")

    const handleDropDownClick = (e) => {
        setCurrency({
            "name": `${e.target.id}`,
            "img": currencyOptions[e.target.id]
        })
        setCurrencyOptionVisibility(false)
    }

    useEffect(() => {
        setSmplxAmount((parseFloat(unit) * parseFloat(buyAmount)) / (parseFloat(unitCost)))
    }, [buyAmount, unit, unitCost])

    const handleCheckBox = (e) => {
        setReferal(e.target.checked);
    }

    return (
        <MainContainer>


            <Button onClick={() => { console.log(currency) }}>
                <AccountBalanceWalletIcon />
                <h3>{(accountAddress === "") ? "Connect Wallet" : `${accountAddress}`}</h3>
            </Button>

            {/* <Referral accountAddress={accountAddress} /> */}
            {/* ######################################################################################### */}
            <MainInfoContainer>
                <MainInfo>
                    <h1>Launchpad <span>Phase {currentPhaseNumber}/5</span> is Live</h1>
                    <h2>Price of <span>{unitCost}BNB</span> per <span>{unit} $SMPLX</span></h2>
                    <h3>{currentPhaseNumber - 1} phases completed</h3>

                    <ProgressBarContainer>
                        <SliderContainer>
                            <CompletedProgress style={{ width: `${(parseFloat(current) / parseFloat(target) * 100)}%` }} ></CompletedProgress>
                            <TotalProgress></TotalProgress>
                        </SliderContainer>

                        <ProgressRange>
                            <h4>{`${parseFloat(current).toLocaleString("en")}`}<div>$SMPLX</div></h4>
                            <h4>{`${parseFloat(target).toLocaleString("en")}`}<div>$SMPLX</div></h4>
                        </ProgressRange>
                    </ProgressBarContainer>
                    <SaleInfo>
                        <h1><span>{sale} $SMPLX</span> sold</h1>
                        <h3><span>{totalSale} $SMPLX</span> sold totally</h3>
                        <Button>
                            Create your referral
                        </Button>
                    </SaleInfo>
                </MainInfo>

                <MainTransactionContainer>

                    <TransactionContainer>
                        <Border>
                            <LabelContainer>
                                <h4>Buy</h4>
                                <Button onClick={() => { setBuyAmount(parseFloat(max)) }}>max</Button>

                            </LabelContainer>
                            <BuyInputContainer>
                                <input type="number" value={buyAmount} placeholder="0.00" step={1} onChange={(e) => { setBuyAmount(e.target.value) }} />
                                <DropDown>
                                    <Placeholder onClick={() => { setCurrencyOptionVisibility(true) }}>
                                        {currency.name === "" ?
                                            (<><p>Select Currency</p></>)
                                            : <DropDownItem className='DropDownSelection'>
                                                <img src={currency.img} alt={currency.name} /> <p>{currency.name.toUpperCase()}</p>
                                            </DropDownItem>}<KeyboardArrowDownIcon />
                                    </Placeholder>
                                    {currencyOptionVisibility && <DropDownOptions >
                                        {
                                            Object.keys(currencyOptions).map((key) => {
                                                return (
                                                    <DropDownItem className='DropDownItem' key={`${key}`} id={`${key}`} onClick={handleDropDownClick}>
                                                        <img id={`${key}`} src={currencyOptions[key]} alt={key} /> <p id={`${key}`}>  {key.toUpperCase()} </p>
                                                    </DropDownItem>
                                                )
                                            })
                                        }
                                    </DropDownOptions>}
                                </DropDown>
                            </BuyInputContainer>
                        </Border>
                        <Border>
                            <LabelContainer>
                                <h4>Get</h4>
                            </LabelContainer>
                            <SellInputContainer>
                                <input type="number" disabled value={smplxAmount} placeholder="0.00" />
                                <img src={simplex_logo_small} alt="Smplx logo " /><p>SIMPLEX</p>
                            </SellInputContainer>
                        </Border>
                    </TransactionContainer>
                    <CheckboxContainer>
                        <Checkbox onChange={handleCheckBox} /><p>Have a referal?</p>

                    </CheckboxContainer>

                    {referal && <input type="text" value={referalAddress} placeholder="0x0000..." onChange={(e => setReferalAddress(e.target.value))} />}


                    <ButtonContainer>
                        <Button>
                            Buy $SMPLX
                        </Button>
                    </ButtonContainer>


                </MainTransactionContainer>

            </MainInfoContainer>

        </MainContainer >
    )
}

export default Main

const MainContainer = styled.div`  
    width:100%;
    display:flex;
    flex-direction:column;
    padding:20px 0;
    align-items:center;
   

    >Button{
        background-color:#48dca8;
        border-radius:50px;
        color:white;
        padding:0;
        border:1px solid #48dca8;
        transition:all 0s ;
        :hover{
            background-color:white;
            >h3{
                color:black;
            }
            >.MuiSvgIcon-root{
                background-color:#48dca8;
            }
        }
        >.MuiSvgIcon-root{
            border-radius:50px;
            padding:15px;
            font-size:24px;
            border:1px solid #48dca8;
        }
        >h3{
            padding:0 10px;
        }
    }
`;


const MainInfoContainer = styled.div`
    width:100%;
    display:flex;
    align-items: center;
    justify-content:space-evenly;
    flex-wrap:wrap; 

    margin:20px 0;
    padding:10px 0;

`;

const MainInfo = styled.div`
    background-color:white;
    box-shadow: 0 10px 10px rgba(0,0,0,.3);
    border-radius:50px;
    padding:20px 30px;
    >h1{
        text-align: center;
        margin:10px auto;
        margin-bottom:20px;
    >span{
        color:#00b638;
    }
    };
    h2{
        margin-bottom:10px;
    }
    >h2>span{
        color:#548CFF;
    }
    
    >h3{
        color:#00b638;;
    }
    @media (max-width:700px) {
        background-color:transparent;    
    }
`;


const ButtonContainer = styled.div`
    display:flex;
    justify-content: center;
    
    >Button{
        color:white;
        display:block;
        justify-self: center;
        padding:10px 50px;
        font-weight:600;
        background-color:#48dca8;
        border-radius:25px;
        :hover{
            background-color:#548CFF;
        } 
    }
`;

const ProgressBarContainer = styled.div`
    position:relative;
    margin:30px auto;  
`;

const CompletedProgress = styled.div`
    display:inline-block;
    height:25px;
    position:absolute;
    z-index:999;
    background-color:#48dca8;
    border-radius:25px;
    border:1px solid #48dca8;
`;

const TotalProgress = styled.div`
    display:inline-block;
    width:98%;
    height:25px;
    position:absolute;
    z-index:99;
    background-color:white;
    border-radius:25px;
    border:1px solid #48dca8;
    `;

const ProgressRange = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top: 40px;
    text-align:left;
    `;

const SaleInfo = styled.div`
    text-align:center;
    *{
        margin:20px 0;
    }
    >h1 >span{
        color:#00b638;
    }

    >h3 >span{
        color:#00b638;
    }

    >Button{
        background-color:#48dca8;
        color:white;
        border-radius:25px;
        padding:10px 20px;
        font-weight:600;
        :hover{
            background-color:#548CFF;
        }
    }
`;

const SliderContainer = styled.div`
    *{
        margin:0;
    }
`;

const MainTransactionContainer = styled.div`
    color:black;
    /* border:2px solid  #0094FF; */
    background-color:white;
    box-shadow: 0 10px 10px rgba(0,0,0,.3);
    border-radius:50px;
    padding:35px;
    height:fit-content;
    *{
        margin:5px;
    }

    >input{  
        /* color:#00db76; */
        font-size: 18px;
        outline:none;
        border:none;
        padding:10px 25px;
        background-color: whitesmoke;
        border-radius: 25px;
        
    }

    >input::-webkit-outer-spin-button,input::-webkit-inner-spin-button {
    -webkit-appearance: none;
     margin: 0;
     }

     @media (max-width:1000px) {
         margin-top: 20px;
     }
    
`;


const TransactionContainer = styled.div``;

const LabelContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    font-size: 24px;
    
    >Button{
        border-radius:25px;
        background-color:#2777f8;
        cursor:pointer;
        color:white;
        font-size:16px !important;
        font-weight:500;
        text-transform: lowercase;
        :hover{
            background-color:#2777f8;
        }
    }
   
`;


const BuyInputContainer = styled.div`
    display:flex;
    align-items:flex-start;
    justify-content: space-between;
    background-color:#eef2f2;
    border-radius: 5px;
    padding:1px 10px 1px 1px;
    >input{
        flex:.9;
        /* color:#00db76; */
        outline:none;
        border:none;
        font-size: 18px;
        padding:10px 25px;
        background-color: #f9f9f9;
        border-radius: 5px;
    }
    >input::-webkit-outer-spin-button,
    >input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    >h4{
        font-size: 20px;
    }
    
    >img{
        object-fit:contain;
        height:25px;
        margin-right:2px;
    }
    >p{
        margin-left: 2px;
    }
`;

const SellInputContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    background-color:#eef2f2;
    border-radius: 5px;
    padding:1px 10px 1px 1px;
    >input{
        flex:.9;
        /* color:#00db76; */
        outline:none;
        border:none;
        font-size: 18px;
        padding:10px 25px;
        background-color: #f9f9f9;
        border-radius: 5px;
    }
    >input::-webkit-outer-spin-button,
    >input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    >h4{
        font-size: 20px;
    }
    
    >img{
        object-fit:contain;
        height:25px;
        margin-right:2px;
    }
    >p{
        margin-left: 2px;
    }
`;

const CheckboxContainer = styled.div`
    display:flex;
    align-items:center;
`
const Border = styled.div`
    padding:10px;
    border:2px solid #d9d9d9;
    border-radius:25px;
`;


const DropDown = styled.div`
    display:flex;
    align-items: center;
    position:relative;
    overflow:visible;
    flex-direction: column;;
`
const DropDownOptions = styled.div`
    /* position:absolute; */

    >.DropDownItem :hover{
        background-color: white;
        cursor: pointer;
    }
`;

const DropDownItem = styled.div`
    display: flex;
    align-items:center;
    >img{
        object-fit:contain;
        width:30px;
    }
    :hover{
        background-color: white;
        cursor: pointer;
    }
    
`;

const Placeholder = styled.div`
    display:flex;
    align-items: center;
    cursor:pointer;
    >.DropDownSelection{
        :hover{
            background-color:transparent;
        }
    }
`;