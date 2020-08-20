import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

/* Components ---------------------------*/
import LoginForm from '../Pages/Login/LoginForm.jsx';

const Login = () => {

    return (
        <LoginStyled className='Login'>
            <Helmet>
                <title>Login :: SPA App</title>
            </Helmet>
            <div className="nested-wrapper">
                <div className="login">
                    <LoginForm />
                </div>
            </div>
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`

    .nested-wrapper {

        .login {
            width: 50%;
        }

        button {
            padding: 10px;
            margin: 10px 0px;
        }
    }
`;