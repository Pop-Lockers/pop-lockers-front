import React from 'react'
import { Link } from 'gatsby'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    Button
    } from 'reactstrap';
import navStyles from './navbar.module.css'
import { LoginContext } from '../loginContext/loginContext'

const Menu = ({token, user_id, setUser, setToken}) => {


    const logOut = () => {
        localStorage.clear()
        setToken('')
        setUser('')

    }


    const renderNavLinks = () => {
        if (token && user_id) {
            return (
                <>
                    <NavItem className={navStyles.navLink} >
                        <Link activeClassName={navStyles.activeLink} to="/add-invoice">
                            Add Invoice
                        </Link>
                    </NavItem>
                    <NavItem className={navStyles.navLink}>
                        <Link activeClassName={navStyles.activeLink} to="/invoices">
                            Invoices
                        </Link>
                    </NavItem>
                    <NavItem className={navStyles.navLink}>
                        <Button color="danger" onClick={logOut}>Log Out</Button>
                    </NavItem>
                </>
            )
        } else {
            return (
                <>
                    <NavItem className={navStyles.navLink}>
                    <Link activeClassName={navStyles.activeLink} to="/register">
                        Register
                    </Link>
                    </NavItem>
                    <NavItem className={navStyles.navLink}>
                    <Link activeClassName={navStyles.activeLink} to="/login">
                        Login
                    </Link>
                    </NavItem>
                </>
            )
        }
    }




    return (
        <Navbar className={navStyles.navbar}  color="dark" light>
            <NavbarBrand><Link to="/">PopLockers</Link></NavbarBrand>
            <Nav>
                {renderNavLinks()}
            </Nav>
        </Navbar>
    )
}

const NavBarWrappedWithContext = () => {
    return (
        <LoginContext.Consumer>
            {(value) => {
                return <Menu {...value}/>
            }}
        


        </LoginContext.Consumer>
    )
}

export default NavBarWrappedWithContext;
