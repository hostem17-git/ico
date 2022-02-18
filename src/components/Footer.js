import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { bscscan, certik, coingecko, coinmarketcap, interfi } from "./assets"
import ExternalLinkCollection from './ExternalLinkCollection'


function Footer() {
    return (
        <FooterConainer>
            <ExternalLinksContainer>
                <ExternalLinkCollection title="Instruction" items={["1.Connect Your Wallet", "2.Insert the Amount", "3.Buy Meld"
                ]} />
                <ExternalLinkCollection title="Instruction" items={["1.Connect Your Wallet", "2.Insert the Amount", "3.Buy Meld"
                ]} />
                <ExternalLinkCollection title="Instruction" items={["1.Connect Your Wallet", "2.Insert the Amount", "3.Buy Meld"
                ]} />
                <ExternalLinkCollection title="Instruction" items={["1.Connect Your Wallet", "2.Insert the Amount", "3.Buy Meld"
                ]} /><ExternalLinkCollection title="Instruction" items={["1.Connect Your Wallet", "2.Insert the Amount", "3.Buy Meld"
                ]} />

            </ExternalLinksContainer>

            <Logos>
                <img src={bscscan} alt="BSC Logo" />
                <img src={certik} alt="Certik Logo" />
                <img src={coingecko} alt="CoinGecko Logo" />
                <img src={coinmarketcap} alt="Coinmarket Logo" />
                <img src={interfi} alt="interfi Logo" />
            </Logos>

            <Button>
                Support
            </Button>
        </FooterConainer>
    )
}

export default Footer

const FooterConainer = styled.div`
    display:flex;
    width:100%;
    flex-direction: column;
    background-color: black;
    justify-content:center;
    align-items: center;
    padding:20px;
    >Button{
        border-radius: 100px;
        border:2px solid white;
        width:fit-content;
        color:white;
    }
    `;

const Logos = styled.div`
    width:100%;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    padding:20px;
    margin:15px;
    >img{
        object-fit:contain;
        height:40px
    }
`;

const ExternalLinksContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    padding:50px 0;
`;
