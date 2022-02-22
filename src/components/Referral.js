import { Button } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components'

function Referral({ accountAddress }) {
    const [userShare, setUserShare] = useState(250);
    const [partnerShare, setPartnerShare] = useState(250);

    const handleSlider = (e) => {
        setUserShare(e.target.value);
        setPartnerShare(e.target.max - e.target.value)

    }

    return (
        <ReferralContainer>
            <h1>Generate referral</h1>
            <SliderInfo>
                <UserShareContainer>
                    <h4>You will earn</h4>
                    <h2>{`${userShare / 1000}%`}</h2>
                </UserShareContainer>
                <Slider>
                    <input onInput={handleSlider} type="range" min="0" max="500" value={userShare} class="slider" id="myRange" />
                </Slider>
                <PartnerShareContainer>
                    <h4>Your partner will earn</h4>
                    <h2>{`${partnerShare / 1000}%`}</h2>
                </PartnerShareContainer>

            </SliderInfo>
            <Button>Generate</Button>
        </ReferralContainer>
    )
}

export default Referral

const ReferralContainer = styled.div`

    box-shadow:0 10px 10px rgba(0,0,0,.6);
    border-radius: 25px;
    padding:20px;
    display:flex;
    flex-direction: column;
    *{
        margin:0;
        /* border:1px solid black; */
    }

    >Button{
        color:white;
        background-color: #48dca8;
        border-radius:50px;
        align-self: center;
        padding:2px 14px;
        :hover{
            background-color:#548CFF;
        }
        :focus{
            background-color:blue;
        }
    }
`
const UserShareContainer = styled.div`
    text-align:left;
    margin-top:15px;
    color: #00db76;
`;
const PartnerShareContainer = styled.div`
    text-align:right;
    margin-bottom:15px;
    color:#548CFF;
`;

const SliderInfo = styled.div`
    margin: 20px 0;
    `;


const Slider = styled.div`
    >input{
        width:100%;
        opacity:.7;
        -webkit-transition: .2s;
        transition: opacity .2s;    
        margin:5px 0;
        :hover{
            opacity:1;
        }
    }

`;

