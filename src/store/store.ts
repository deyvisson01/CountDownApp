import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit'
import { authSlice } from './authSlice'
//import { useDispatch } from 'react-redux'

export const createStore = (
  options?: ConfigureStoreOptions['preloadedState'] | undefined
) =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer
    },
  })

export const store = createStore()

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
