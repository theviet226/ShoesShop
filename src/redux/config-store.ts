import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./slices/product.slice"
import cartReducer from "./slices/cart.slice"
import userReducer from "./slices/cart.slice"

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import userReducerLogin from './slices/userReducerLogin'

export const store = configureStore({
  reducer: {
    productReducer,
    cartReducer,
    userReducer,
    userReducerLogin:userReducerLogin
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const settings = {
  getStorageJson :(name:string):any|undefined =>{
    if (localStorage.getItem(name)){
      const dataStore:string | undefined |null =localStorage.getItem(name)
      if (typeof dataStore == 'string'){
        const data = JSON.parse(dataStore)
        return data
      }
      return undefined
    }
    return
  }
 }