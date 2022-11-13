import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/Button';
import Header from '../../components/Header';
import { selectAuthState, selectEvents } from '../../store/authSlice';
import { Container, Content } from './styles';


function Home() {
   const authState = useSelector(selectAuthState)
  const events = useSelector(selectEvents)
  console.log(events)
  return (
    <>
      <Container>
        <Header />
        <Content>
          <h1>{authState}</h1>
          <Button
            children="Avançar"
            disabled={false}
            type="primary"
            loading={false}
            onClick={() => null}
          />
        </Content>
      </Container>
    </>
  );
}

export default Home;
