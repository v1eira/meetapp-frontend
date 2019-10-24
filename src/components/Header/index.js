import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo-header.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="MeetApp" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Brenda Paresqui</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <Link to="/">
              <button type="button">Sair</button>
            </Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
