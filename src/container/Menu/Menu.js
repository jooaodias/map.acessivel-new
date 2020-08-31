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
  
  &:hover {
    color: #4593ee;
    border-bottom: 4px solid #4593ee;
    text-decoration: none;
  }

`;

const HelpLinkStyled = styled(NavLink)`
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
  }
  
`;

const itens = [
    { nome: "Início", link: "/" },
    { nome: "Sobre", link: "#Sobre-o-Projeto" },
    { nome: "Leis", link: "#Leis-De-Acessibilidade" },
    { nome: "Quem Somos?", link: "#Quem-Somos" },
    // { nome: "Ajude", link: "#Cadastro" }
]

const Menu = () => {

    return (
        <Nav className="mr-0 ml-auto" navbar>
            {itens.map(item => {
                return (
                    <NavItem key={`${item.nome}+${item.link}`}  >
                        <StyledLink to={item.link} activeClassName="active">{item.nome}</StyledLink>
                    </NavItem>
                )
            })}
            <NavItem>
                <HelpLinkStyled to="#Cadastro">Ajude!</HelpLinkStyled>
            </NavItem>



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
