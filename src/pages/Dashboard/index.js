import React from 'react';

import { Container, Meetup, Scroll } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <button type="button">Novo meetup</button>
      </header>

      <Scroll>
        <ul>
          <Meetup>
            <strong>Meetup de React Native</strong>
            <span>24 de Junho, às 20h</span>
          </Meetup>
          <Meetup>
            <strong>Meetup de React Native</strong>
            <span>24 de Junho, às 20h</span>
          </Meetup>
          <Meetup>
            <strong>Meetup de React Native</strong>
            <span>24 de Junho, às 20h</span>
          </Meetup>
          <Meetup>
            <strong>Meetup de React Native</strong>
            <span>24 de Junho, às 20h</span>
          </Meetup>
          <Meetup>
            <strong>Meetup de React Native</strong>
            <span>24 de Junho, às 20h</span>
          </Meetup>
          <Meetup>
            <strong>Meetup de React Native</strong>
            <span>24 de Junho, às 20h</span>
          </Meetup>
          <Meetup>
            <strong>Meetup de React Native</strong>
            <span>24 de Junho, às 20h</span>
          </Meetup>
          <Meetup past>
            <strong>Meetup de React Native</strong>
            <span>24 de Junho, às 20h</span>
          </Meetup>
          <Meetup past>
            <strong>Meetup de React Native</strong>
            <span>24 de Junho, às 20h</span>
          </Meetup>
          <Meetup past>
            <strong>Meetup de React Native</strong>
            <span>24 de Junho, às 20h</span>
          </Meetup>
        </ul>
      </Scroll>
    </Container>
  );
}
