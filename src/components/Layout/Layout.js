import React, { useState } from 'react'
import NavBar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import layoutStyles from './layout.module.css'
import { LoginContext } from '../loginContext/loginContext'
const Layout = ({ children }) => {
  const [token, setToken] = useState('')
  const [user_id, setUser] = useState('')
  if (typeof window !== `undefined`) {
    setToken(localStorage.getItem('token'))
    setUser(localStorage.getItem('user_id'))
  }
  return (
    <div className={layoutStyles.layout}>
      <LoginContext.Provider
        value={{
          token,
          user_id,
          setToken,
          setUser
        }}
      >
        <NavBar />
        {children}
        <Footer />
      </LoginContext.Provider>
    </div>
  )
}

export default Layout
