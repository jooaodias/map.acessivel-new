import React from 'react';

import styled from 'styled-components';

const Card = styled.div`
  border: solid #ebebeb 2px;
  border-radius: 20px;
  min-width: 200px;
  box-shadow: 1px;
  flex-direction: column;
  display: flex;
  box-shadow: 5px 5px 5px lightgray;

`;

const CardTitle = styled.h3`
  background-color: #4593EE;
  box-shadow: 2px 2px 2px #4593EE;
  border-radius: 20px;
  color: white;
  font-size: 22px;
  font-weight: 700;
  padding: 5px;
`

const CardText = styled.p`
  margin-top: 5px;
  color: #4A619F;
  font-size: 16px; 
`

const CardLeis = (props) => {
  return (
    <Card className="text-center">
      <CardTitle>{props.title}</CardTitle>
      <CardText style={{ fontWeight: '700' }}>{props.subtitle}</CardText>
      <CardText>{props.text}</CardText>
    </Card>
  )
}

export default CardLeis;