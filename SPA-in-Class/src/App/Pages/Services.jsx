import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

/* Components ---------------------------*/
import ServicesContainer from './Services/ServicesContainer.jsx';

const Services = () => {

    return (
        <ServicesStyled className='Services'>
            <Helmet>
                <title>Services :: SPA App</title>
            </Helmet>
            <div className="nested-wrapper">
                <ServicesContainer />
            </div>
        </ServicesStyled>
    );
}

export default Services;

const ServicesStyled = styled.div`
    
`;