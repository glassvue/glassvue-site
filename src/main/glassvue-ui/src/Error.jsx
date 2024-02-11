import React from 'react'
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components'
import { Button } from './styles/Button';

const Error = () => {
    return (
        <Wrapper>
            <img className='error' src='../images/error.jpg' alt="error" />
            <NavLink to="/">
                <Button className='btn'>
                    Go Back
                </Button>
            </NavLink>
        </Wrapper>
    )
}

const Wrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;

.error{
   width: 50%;
   height: 50%;
}

.btn {
    margin-top: 3rem;
}
`;

export default Error