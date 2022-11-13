import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/Button';
import Header from '../../components/Header';
import { selectEvents } from '../../store/authSlice';
import Item from './Item';
import { Container, Content, ListEvents, Title } from './styles';


function Home() {

  const events = useSelector(selectEvents)

  //console.log(events)
  return (
    <>
      <Container>
        <Header />
        <Content>
          <ListEvents>
            <Title>Eventos</Title>
            {events && events.map(event => (
              <Item title={event.title} description={event.description} date={event.date} />
            ))}
          </ListEvents>
        </Content>
      </Container>
    </>
  );
}

export default Home;
