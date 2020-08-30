import React from 'react';
import styled from 'styled-components';

import { Button as BootButton } from 'reactstrap';

import {colors} from '../styles/colors';

const StyledButton = styled(({ light, bold, ...props }) => <BootButton {...props} />)`
  background-color: ${colors.azulEscuro};
  transition: filter .2s;
  will-change: filter, color;
  color: ${props => props.light ? "#fff": colors.preto};
  border-radius: 10px;
  font-size: 16px;
  font-weight: ${props => props.bold ? 700 : 400 };
  
  &:hover {
    color: ${props => props.light ?"#fff": colors.preto};
    filter: brightness(0.9) contrast(1.2);
  }
`



export const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);
