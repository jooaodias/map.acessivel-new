import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app'

import { HelpLinkStyled, LogoutButton, StyledLink } from './Menu.styled';

function Menu(props) {
  const history = useHistory();

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push('/');
        document.location.reload(true)
      });
  };
  const itens = [
    { nome: "Início", link: '/' },
    { nome: "O Projeto", link: "#oProjeto" },
    { nome: "Leis", link: '#LeisDeAcessibilidade' },
    { nome: "Quem Somos?", link: '#QuemSomos' },
    // { nome: "Ajude", link: "#Cadastro" }
  ]

  return (
    <Nav className="mr-0 ml-auto my-4" navbar>
      {itens.map(item => {
        return (
          <NavItem key={`${item.nome}+${item.link}`} className="mt-2" >
            <StyledLink href={item.link} activeClassName="active">{item.nome}</StyledLink>
          </NavItem>
        )
      })}
      {props.user?.displayName ? (
        <>
          <NavItem className="mt-3 mt-md-2">
            <HelpLinkStyled to="/perfil" className="px-5">{props.user?.displayName}</HelpLinkStyled>
          </NavItem>
          <NavItem className="mt-md-2">
            <LogoutButton onClick={handleLogout} className="px-5">Sair</LogoutButton>
          </NavItem>
        </>
      ) : (
          <NavItem className="mt-3 mt-md-2">
            <HelpLinkStyled to="/login" className="px-5">Ajude</HelpLinkStyled>
          </NavItem>
        )}
      {}


    </Nav>

  )

};

export default Menu;
