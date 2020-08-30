import React from 'react';
import styled from 'styled-components';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1rem; 
  color: #4A619F;
  cursor: pointer;
  text-decoration: none;
  padding-right: .5rem;
  padding-left: .5rem;

  .nav-item:not(:last-child) & {
    margin-right: 15px;
  }
  
  /* &.active {
    color: #4593ee;
    border-bottom: 4px solid #4593ee;
  } */
  &:hover {
    color: #4593ee;
    border-bottom: 4px solid #4593ee;
    text-decoration: none;
  }

`;

const itens = [
    { nome: "Início", link: "/" },
    { nome: "Sobre", link: "#Sobre-o-Projeto" },
    { nome: "Leis", link: "#Leis-De-Acessibilidade" },
    { nome: "Quem Somos?", link: "#Quem-Somos" },
    { nome: "Cadastro", link: "#Cadastro" }
]

const Menu = () => {

    return (
        <Nav className="mr-0 ml-auto" navbar>
            {itens.map(item => {
                return (
                    <NavItem key={`${item.nome}+${item.link}`}>
                        <StyledLink to={item.link} activeClassName="active" >{item.nome}</StyledLink>
                    </NavItem>
                )
            })}



            {/* <NavItem>
                <StyledLink to="/" activeClassName="active">
                    Início
                </StyledLink>
            </NavItem>
            <NavItem>
                <StyledLink to="/Mapa" activeClassName="active">
                    Projeto
                </StyledLink>
            </NavItem> */}
        </Nav>
    );
};

export default Menu;
