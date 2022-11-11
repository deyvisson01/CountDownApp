import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/Button';
import Header from '../../components/Header';
import { selectAuthState } from '../../store/authSlice';
import { Container, Content } from './styles';


function Home() {
   const authState = useSelector(selectAuthState)
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
