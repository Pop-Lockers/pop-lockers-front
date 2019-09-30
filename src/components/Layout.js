import React from 'react'
import NavBar from './Navbar'
import Footer from './Footer'
import layoutStyles from './layout.module.css'
const Layout = (props) => {
    return (
        <div className={layoutStyles.layout}>
            <NavBar />
                {props.children}
            <Footer />
        </div>
    )
}

export default Layout