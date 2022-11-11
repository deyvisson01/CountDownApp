import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Type for our state
export interface AuthState {
  authState: string
}

// Initial state
const initialState: AuthState = {
  authState: 'TESTE HOMESSSSS'
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
  }
})

export const {
  setAuthState
} = authSlice.actions

export const selectAuthState = (state: RootState) => state.auth.authState

export default authSlice.reducer
