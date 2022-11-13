import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'
import * as dayjs from 'dayjs'
import { ToastContainer, toast } from 'react-toastify';
//const data = new Date();
var data = dayjs()


// Type for our state
export interface Event {
  id: number
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
  authState: '',
  Events: [
    {
      id: 1,
      title: 'Primeiro evento',
      date: '2022-11-16T13:39:11-03:00',
      description: 'Avaliação técnica'
    }
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
    AddEvents(state, action) {
      state.Events.push(action.payload)
      state.Events.sort((a, b) => (a.date < b.date) ? -1 : 1)
      toast.success("Evento adicionado!", {
        position: toast.POSITION.TOP_RIGHT
      });
    },
    RemoveEvents(state, action) {
      var newEvents = state.Events.filter(event => event.id !== action.payload)
      state.Events = newEvents
      toast.error("Evento excluído!", {
        position: toast.POSITION.TOP_RIGHT
      });
    },
  }
})

export const { setAuthState, setEvents, AddEvents, RemoveEvents } = authSlice.actions

export const selectAuthState = (state: RootState) => state.auth.authState
export const selectEvents = (state: RootState) => state.auth.Events

export default authSlice.reducer
