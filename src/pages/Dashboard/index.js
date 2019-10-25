import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Meetup, Scroll } from './styles';

const formatDate = d => format(d, "dd 'de' MMMM', às' HH'h'", { locale: pt });

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');

      const data = response.data.map(meetup => ({
        ...meetup,
        formattedDate: formatDate(parseISO(meetup.date)),
      }));

      setMeetups(data);
    }

    loadMeetups();
  }, [meetups]);

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <Link to="/meetup">
          <button type="button">Novo meetup</button>
        </Link>
      </header>

      <Scroll>
        <ul>
          {meetups.map(meetup => (
            <Meetup
              key={meetup.id}
              past={meetup.past}
              onClick={() => history.push(`/meetup/${meetup.id}`)}
            >
              <strong>{meetup.title}</strong>
              <span>{meetup.formattedDate}</span>
            </Meetup>
          ))}
        </ul>
      </Scroll>
    </Container>
  );
}
