import React from 'react'
import { Router } from "@reach/router"

import TeamPage from './TeamPage'
import TeamMembers from './TeamMembers'

const Routes = props => {
    return (
        <Router>
            <TeamPage path='/' />
            <TeamMembers path='team/:business_name' />
        </Router>
    )
}

export default Routes