import React, { useState } from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import API from '../../../common/axios.js';

/* Components ---------------------------*/
import FormGroup from '../../../common/Forms/FormGroup.jsx';
import Button from '../../../common/Forms/Button.jsx';


const formFields = {
    usernameField: {
        id: 'userName',
        label: 'Username',
        inputType: 'text',
        value: '',
        validate: {
            required: true,
            valid: true,
            message: '',
        }
    },
    passwordField: {
        id: 'userPassword',
        label: 'Password',
        inputType: 'text',
        value: '',
        validate: {
            required: true,
            valid: true,
            message: '',
        }
    }
}

const LoginForm = () => {

    const [userName, userNameUpdate] = useState(formFields.usernameField);
    const [userPassword, userPasswordUpdate] = useState( formFields.passwordField);

    const handleOnChange = (event, formField) => {
        const newField = {
            ...formField,
            value: event.target.value,
        }

        if (newField.validate.required === true) {
            console.log('Validating: ', newField.label);

            if (newField.value.length < 4) {
                //Let them know there is an error
                newField.validate.valid = false;
                newField.validate.message = `You forgot to fill out the ${newField.label} field.`;
            } else {
                // Clear my errors
                newField.validate.valid = true;
                newField.validate.message = ``;
            }
        }

        if (formField.id === 'userName') {
            userNameUpdate(newField);
        }
        if (formField.id === 'userPassword') {
            userPasswordUpdate(newField);
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Captured Login, we will take it from here.');

        if ( userName.validate.valid === true && userPassword.validate.valid === true) {
            console.log('Valid Logging in');

            // ...AJAX goes here: AKA AXIOS
            const postData = {
                userName: userName,
                userPassword: userPassword,
            }

            API.post('/logIn', postData).then((result) => {
                console.log('result', result);
            });
        }
    }

    return (
        <LoginFormStyled className='LoginForm'>
            <form onSubmit={ handleFormSubmit }>
                <FormGroup
                    formField = { userName }
                    onChange={ handleOnChange }
                    />
                    <FormGroup
                        formField={ userPassword }
                        onChange={ handleOnChange }
                    />
                <Button type='submit'> Log In</Button>
            </form>
        </LoginFormStyled>
    );
}

export default LoginForm;

const LoginFormStyled = styled.div`

`;