import React from 'react'
import { Router } from "@reach/router"

import TeamPage from './TeamPage'
import TeamMembers from './TeamMembers'
import Register from './RegisterPage'
import Login from './LoginPage'
const Routes = props => {
    return (
        <Router>
            <TeamPage path='/' />
            <TeamMembers path='team/:business_name' />
            <Register path="/register" />
            <Login path="/login" />
        </Router>
    )
}

export default Routes