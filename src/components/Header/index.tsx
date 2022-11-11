import React from 'react'

import { Container } from './styles'
import { useSelector } from 'react-redux'

import { selectAuthState } from '../../store/authSlice'

import Logo from '../../assets/logo.png'

export default function Header() {
  const name = useSelector(selectAuthState)
  return (
    <Container>
      <img src={Logo} alt="Logo Vila Apss" />
      <h2>{`Bem vindo(a) ` + name}</h2>
    </Container>
  )
}
