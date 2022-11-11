import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { selectAuthState } from '../../store/authSlice';


function Home() {
   const authState = useSelector(selectAuthState)
  return <h1>{authState}</h1>;
}

export default Home;
