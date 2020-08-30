import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Collapse, Navbar, NavbarToggler } from 'reactstrap';

import Menu from './Menu';

import logo from '../../assets/icon/favicon.png';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Container>
        <Row>
          <Navbar className="col" light expand="md">
            <Link to="/">
              <img src={logo} alt="Logo aMap" width="40px"/>
            </Link>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Menu />
            </Collapse>
          </Navbar>
        </Row>
      </Container>
    </header> 
  );
};
