import React from 'react';
import styled from 'styled-components';

import { mq } from '../common/mediaQueries.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHotTub,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <HeaderStyled>
            <div className='nested-wrapper'>
                <div className="row-container">
                    <div className="logo"><FontAwesomeIcon icon={ faHotTub } /></div>
                    <div className="text">
                        <h2>Spa Sanctuary</h2>
                        <h3>A SPA for every occasion</h3>
                    </div>
                </div>
            </div>
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    background-color: teal;

    @media ${mq.tablet} {
        background-color: orange;
    }
    @media ${mq.desktop} {
        background-color: purple;
    }

    font-size: 30px;

    .row-container {
        display: flex; 
        justify-content: center;
    }

    .logo {
        outline: solid 1px red;
        color: #15b1b0;
        margin-right: 10px;

        svg {
            width: 100px;
            height: auto;
        }
    }

    .text {
        outline: solid 1px purple;

        h2 {
            font-size: 40px;
            margin: 0px;
            color: #034d4d;
        }
        h3 {
            font-size:  30px;
            margin: 0px;
            color: #034d4d;
        }
    }

    `;