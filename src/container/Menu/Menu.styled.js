import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`

export const StyledLink = styled.a`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1rem; 
  color: #4A619F;
  cursor: pointer; 
  text-decoration: none;
  padding-right: .5rem;
  padding-left: .5rem;

  .nav-item:not(:last-child) & {
    margin-right: 20px;
  }
  
  &:hover {
    border-bottom: 4px solid #4593ee;
    text-decoration: none;
  }

  &:active {
    border-bottom: 4px solid #4593ee;
  }

`;

export const HelpLinkStyled = styled(NavLink)`
  font-size: 1rem; 
  color: white;
  cursor: pointer;
  text-decoration: none;
  margin-right: 15px;
  background-color: #4A619F;
  border-radius: 20px;
  transition: filter .2s;
  will-change: filter, color;
  font-weight: 500;
  padding: 10px;

  &:hover {
    text-decoration: none;
    filter: brightness(0.9) contrast(1.2);
    background-image: linear-gradient(to bottom right, #3E5AA9, #00ACED);
    color: white;
    /* animation: 0.2s ${fadeIn} ease-out; */
  }

  @media(max-width: 800px) {
    margin-top: 30px;
  }
  
`;


export const IconMateus = styled(FontAwesomeIcon)`
  &:hover{
    animation: 1s ${fadeIn} ease-out;
    color: red;
  }
  @media(max-width: 800px) {
    margin-top: 24px;
  }
`

