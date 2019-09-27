import React from 'react'
import NavBar from './Navbar'
import Footer from './Footer'

const Layout = (props) => {
    return (
        <div>
            <NavBar />
                {props.children}
            <Footer />
        </div>
    )
}

export default Layout