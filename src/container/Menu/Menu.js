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
    margin-right: 20px;
  }
  
  &:hover {
    color: #4593ee;
    border-bottom: 4px solid #4593ee;
    text-decoration: none;
  }

  &:active {
    border-bottom: 4px solid #4593ee;
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
    color: white;
  }

  @media(max-width: 800px) {
    margin-top: 30px;
  }
  
`;

const itens = [
  { nome: "Início", link: '/' },
  { nome: "O Projeto", link: "#oProjeto" },
  { nome: "Leis", link: '/#LeisDeAcessibilidade' },
  { nome: "Quem Somos?", link: '#QuemSomos' },
  // { nome: "Ajude", link: "#Cadastro" }
]

const Menu = () => {

  return (
    <Nav className="mr-0 ml-auto my-4" navbar>
      {itens.map(item => {
        return (
          <NavItem key={`${item.nome}+${item.link}`} className="mt-2" >
            <StyledLink to={item.link} activeClassName="active">{item.nome}</StyledLink>
          </NavItem>
        )
      })}
      <NavItem className="mt-3 mt-md-2">
        <HelpLinkStyled to="#Cadastro" className="px-5">Ajude</HelpLinkStyled>
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
