import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { setAuthState } from '../../store/authSlice';

import { Container, Content, Form, Title } from './styles';

function Login() {
  const dispatch = useDispatch()
  const history = useNavigate();
  const [userName, setUserName] = useState('')
  const [loading, setLoading] = useState(false)

  const enterUserName = () => {
    setLoading(true)
    dispatch(setAuthState(userName))
    setTimeout(() => history('/Home'), 1500)
  }

  return (
    <>
      <Container>
        <Content>
          <Form>
            <Title>Login</Title>
            <Input
              width="500px"
              placeholder="Entre com o seu nome de usuário"
              error={''}
              defaultValue={userName}
              onChange={e => setUserName(e.target.value)}
            />
            <Button
              children="Avançar"
              disabled={false}
              type="primary"
              loading={loading}
              onClick={() => enterUserName()}
            />
          </Form>
        </Content>
        <div>
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </Container>
    </>
  );
}

export default Login;
