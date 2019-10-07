import React from 'react'


const defaultState = {
    token: localStorage.getItem('token') || '',
    user_id: localStorage.getItem('user_id') || '',
    setToken: () => {},
    setUser: () => {}
}




export const LoginContext = React.createContext(defaultState)

