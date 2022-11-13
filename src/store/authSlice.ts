import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'

const data = new Date();

// Type for our state
export interface AuthState {
  authState: string,
  Events: [{
    titulo: string,
    data: Date,
    descricao: string
  }]
}

// Initial state
const initialState: AuthState = {
  authState: 'TESTE HOMESSSSS',
  Events: [
    {
      titulo: 'Teste',
      data: data,
      descricao: 'Teste descrição'
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
  }
})

export const { setAuthState, setEvents } = authSlice.actions

export const selectAuthState = (state: RootState) => state.auth.authState
export const selectEvents = (state: RootState) => state.auth.Events

export default authSlice.reducer
