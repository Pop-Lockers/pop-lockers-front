import React from 'react'
let token = ''
let user_id = ''
if (typeof window !== undefined) {
  token = localStorage.getItem('token') || ''
  user_id = localStorage.getItem('user_id') || ''
}
const defaultState = {
  token: token,
  user_id: user_id,
  setToken: () => {},
  setUser: () => {}
}

export const LoginContext = React.createContext(defaultState)
