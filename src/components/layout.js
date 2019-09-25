import React from 'react'
import { Link } from 'gatsby'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem
    } from 'reactstrap';

export default () => {
    return (
        <Navbar color="dark" light>
            <NavbarBrand>PopLockers</NavbarBrand>
                <Nav className="ml-auto">
                    <NavItem>
                        <Link to="/">
                            Home
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/register">
                            Register
                        </Link>
                    </NavItem>
                </Nav>
        </Navbar>
    )
}