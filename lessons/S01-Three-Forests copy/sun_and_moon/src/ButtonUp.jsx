import React from 'react';

const ButtonUp = ({onClick}) => {
    return (
        <img onClick={ onClick } src="/images/up.png" alt="Up" />
    );
}

export default ButtonUp;