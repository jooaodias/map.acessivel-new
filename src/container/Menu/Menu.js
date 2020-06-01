import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

const Menu = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return(
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Início</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/Mapa">O Projeto</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Leis-de-Acessibilidade">Leis de Acessibilidade</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Sobre-o-Projeto">Sobre</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Quem-Somos">Quem Somos?</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Cadastro">Cadastro</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Menu;