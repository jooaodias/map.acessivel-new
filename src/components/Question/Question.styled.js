import { Button } from 'reactstrap';
import styled from 'styled-components';

export const Text = styled.p`
margin-top: 5px;
color: #4A619F;
font-size: 16px;
`

export const ButtonStyled = styled(Button)`
    background-color: #4A619F;
    color: white;
    font-weight: 500;
    border-radius: 15px;
    cursor: pointer;
    border: 2px solid #4A619F;
    width: 100%; 

    :hover{
        background-image: linear-gradient(to bottom right, #3E5AA9, #00ACED);
        border: 2px solid white; 
    }
`