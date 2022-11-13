import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'
import * as dayjs from 'dayjs'

//const data = new Date();
var data = dayjs()

// Type for our state
export interface Event {
  title: string,
  date: string,
  description: string
}
export interface AuthState {
  authState: string,
  Events: Event[]
}

// Initial state
const initialState: AuthState = {
  authState: 'TESTE HOMESSSSS',
  Events: [
    {
      title: 'Teste',
      date: '2022-11-15T13:39:11-03:00',
      description: 'Teste descrição'
    },
    {
      title: 'Teste2',
      date: '2022-11-17T13:39:11-03:00',
      description: 'Teste descrição2'
    },
    {
      title: 'Teste3',
      date: '2022-11-19T13:39:11-03:00',
      description: 'Teste descrição3'
    },
  ]
}

// Actual Slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState(state, action) {
      state.authState = action.payload
    },
    setEvents(state, action) {
      state.Events = action.payload
    },
  }
})

export const { setAuthState, setEvents } = authSlice.actions

export const selectAuthState = (state: RootState) => state.auth.authState
export const selectEvents = (state: RootState) => state.auth.Events

export default authSlice.reducer
