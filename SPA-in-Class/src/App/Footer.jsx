import React from 'react';
import styled from 'styled-components';

import { mq } from '../common/mediaQueries.js';

const Footer = () => {
    return (
        <FooterStyled>
            <div className='nested-wrapper'>
                My footer
            </div>
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.footer`
    background-color: teal;

@media ${mq.tablet} {
    background-color: green;
}
@media ${mq.desktop} {
    background-color: yellow;
}
    

`;