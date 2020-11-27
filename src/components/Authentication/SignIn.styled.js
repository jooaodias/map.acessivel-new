import { Button, Input} from 'reactstrap';
import styled from 'styled-components';


export const Text = styled.p`
margin-top: 5px;
color: #4A619F;
font-size: 16px;
`

export const InputStyled = styled(Input)`
  top: 5px;
  border-radius: 10px;
  padding: 24px;
  box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.8);

  ::placeholder,
  ::-webkit-input-placeholder {
      color: #E5E5E5;
  }
`;

export const ButtonStyled = styled(Button)`
    background-color: #4A619F;
    color: white;
    font-weight: 500;
    border-radius: 15px;
    cursor: pointer;
    border: 2px solid #4A619F;
    width: 100%; 

    :hover{
        background-color: #4593EE;
        border: 2px solid white; 
    }
`
export const Box = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
`;

export const StyledSpan = styled.span`
  font-size: 10pt;
  color: #707070;
  display: block;
  text-align: center;
  margin: 15px 0px 25px;

  button {
    color: #4A619F;
    font-weight: 500;
    border: none;
    background: transparent;
    padding: 0;
  }
`;