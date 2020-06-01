import React from 'react';
import {
  Card, CardText,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const card_leis = (props) => {
  return (
    <div>
      <Card body className="text-center">
        {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
          <CardTitle tag="h4">{props.title}</CardTitle>
          <CardSubtitle tag="h6">{props.subtitle}</CardSubtitle>
          <CardText>{props.text}</CardText>
          <Button>Ler</Button>
      </Card>
    </div>
  )
}

export default card_leis;