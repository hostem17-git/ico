import { Button } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components'

function Referral({ accountAddress }) {
    const [userShare, setUserShare] = useState(250);
    const [partnerShare, setPartnerShare] = useState(0);

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
    border:1px solid green;
    border-radius: 25px;
    padding:20px;
    display:flex;
    flex-direction: column;
    *{
        margin:0;
    }

    >Button{
        background-color: green;
        border-radius:50px;
        align-self: center;
        :focus{
            background-color:blue;
        }
    }
    
`
const UserShareContainer = styled.div`
    text-align:left;
`;
const PartnerShareContainer = styled.div`
    text-align:right;`;

const SliderInfo = styled.div`
    margin: 25px 0;
    `;


const Slider = styled.div`
    >input{
        width:100%;
        
        opacity:.7;
        -webkit-transition: .2s;
        transition: opacity .2s;    
        
        :hover{
            opacity:1;
        }
    }

`;

