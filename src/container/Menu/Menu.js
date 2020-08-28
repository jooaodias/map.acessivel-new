import React from 'react';
import styled from 'styled-components';
import { Nav, NavItem, NavLink } from 'reactstrap';

const baseLinkStyle = `
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1rem;
  color: #333333;
  cursor: pointer;

  .nav-item:not(:last-child) & {
    margin-right: 15px;
  }

  &:hover {
    color: #333333;
  }
`;

const StyledLink = styled(NavLink)`
  ${baseLinkStyle}

  &.active {
    color: #662D91;
    border-bottom: 4px solid white;
  }
`;

const itens = [
    { nome: "Início", link: "/" },
    { nome: "Projeto", link: "/Mapa" },
    { nome: "Leis", link: "#Leis-De-Acessibilidade" },
    { nome: "Sobre", link: "#Sobre-o-Projeto" },
    { nome: "Quem Somos?", link: "#Quem-Somos" },
    { nome: "Cadastro", link: "#Cadastro" }
]

const Menu = () => {

    return (
        <Nav className="mr-0 ml-auto" navbar>
            {itens.map(item => {
                return(
                <NavItem>
                    <StyledLink href={item.link} activeClassName="active" key={item.nome}>{item.nome}</StyledLink>
                </NavItem>
                )
            })}


            {/* <NavItem>
                <StyledLink href="/" activeClassName="active">
                    Início
                </StyledLink>
            </NavItem>
            <NavItem>
                <StyledLink href="/Mapa" activeClassName="active">
                    Projeto
                </StyledLink>
            </NavItem> */}
        </Nav>
    );
};

export default Menu;
