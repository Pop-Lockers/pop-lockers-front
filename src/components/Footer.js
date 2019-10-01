import React from 'react'
import {Navbar, NavbarBrand} from 'reactstrap'
import footerStyles from './footer.module.css'

const Footer = () => {
    return (
        <Navbar color="dark">
            <NavbarBrand >
                <p className={footerStyles.footer}>Created For Chingu Voyage 11</p>
            </NavbarBrand>
        </Navbar>
    )
}

export default Footer