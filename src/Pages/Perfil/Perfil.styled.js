import styled,  { keyframes } from 'styled-components';
import { Container } from 'reactstrap'


export const ContainerProfile = styled(Container)`
    display: flex;
    justify-content: center;
    background-color: #E5E5E5;
    border-radius: 10px;

`
export const PerfilTitle = styled.h3`
    text-align: left;
    margin-bottom: 20px;
    
`

export const PerfilImage = styled.img`
    border-radius: 10px;
    

`
export const PerfilName = styled.h5`
    text-transform: capitalize;
    text-align: center;
    color: #4A619F;
    font-weight: 700;
    margin: 11px;   
`
export const rotate = keyframes`
from {
transform: rotate(0deg);
}

to {
transform: rotate(360deg);
}
`;

export const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
    `;