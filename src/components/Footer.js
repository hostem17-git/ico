import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { bscscan, certik, coingecko, coinmarketcap, interfi } from "./assets"
import ExternalLinkCollection from './ExternalLinkCollection'


function Footer() {
    return (
        <FooterContainer >

            <FooterPattern>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path style={{ fill: "#04D169" }} opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z" />
                    <path style={{ fill: "#04D169" }} opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z" />
                    <path style={{ fill: "#04D169" }} d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z" />
                </svg>
            </FooterPattern>

            <ExternalLinksContainer>
                <ExternalLinkCollection title="Instruction" items={["1.Connect Your Wallet", "2.Insert the Amount", "3.Buy Meld"
                ]} />
                <ExternalLinkCollection title="Instruction" items={["1.Connect Your Wallet", "2.Insert the Amount", "3.Buy Meld"
                ]} />
                <ExternalLinkCollection title="Instruction" items={["1.Connect Your Wallet", "2.Insert the Amount", "3.Buy Meld"
                ]} />
                <ExternalLinkCollection title="Instruction" items={["1.Connect Your Wallet", "2.Insert the Amount", "3.Buy Meld"
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


            <FooterPattern className='bottomPattern'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path style={{ fill: "#04D169" }} opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z" />
                    <path style={{ fill: "#04D169" }} opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z" />
                    <path style={{ fill: "#04D169" }} d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z" />
                </svg>
            </FooterPattern>

            <Copyright>
                Copyright © 2022. All rights reserved by SimpleX.
            </Copyright>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    /* margin-top:20px; */
    display:flex;
    width:100%;
    flex-direction: column;
    background-color: #283445;
    justify-content:center;
    align-items: center;
    padding:20px auto;
    
    >Button{
        border-radius: 100px;
        border:2px solid white;
        width:fit-content;
        color:white;
    }
    >.bottomPattern{
        transform:rotate(180deg)
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

const FooterPattern = styled.div`
    display:inline-block;
    width:100%;
    /* height:50px; */
    >svg{
        width:100%;
        height: 50px;
    }
    >Path{
        fill:#04D169;
    }
`

const Copyright = styled.div`
    display:inline-block;
    padding:20px 0;
    font-size:20px;
    color:white;
`;

