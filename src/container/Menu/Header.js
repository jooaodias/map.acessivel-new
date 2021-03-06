import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Collapse, Navbar, NavbarToggler } from 'reactstrap';
import { NameNavbarBrand } from './Menu.styled';

import Menu from './Menu';

import logo from '../../assets/images/logo.png';

export const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Container>
        <Row>
          <Navbar className="col" light expand="md" >
            <Link to="/">
              <img src={logo} alt="Logo aMap" />
            </Link>
            <NameNavbarBrand
              // to={props.user.displayName}
              title={props.user?.displayName}
              className="text-muted font-weight-bold"
            >{props.user?.displayName}
            </NameNavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Menu user={props.user} />
            </Collapse>
          </Navbar>
        </Row>
      </Container>
    </header>
  );
};
