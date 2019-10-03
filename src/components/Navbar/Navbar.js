import React from 'react'
import { Link } from 'gatsby'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem
    } from 'reactstrap';
import navStyles from './navbar.module.css'

export default () => {
    return (
        <Navbar className={navStyles.navbar}  color="dark" light>
            <NavbarBrand><Link to="/">PopLockers</Link></NavbarBrand>
                <Nav >
                    <NavItem className={navStyles.navLink}>
                        <Link to="/register">
                            Register
                        </Link>
                    </NavItem>
                    <NavItem className={navStyles.navLink}>
                        <Link to="/login">
                            Login
                        </Link>
                    </NavItem>
                </Nav>
        </Navbar>
    )
}