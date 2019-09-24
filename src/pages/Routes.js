import React from 'react'
import { Route, Switch } from 'react-router-dom'

// import index from './index'
import TeamMembers from './TeamMembers'

const Routes = props => {
    return (
        <Switch>
            {/* <Route exact path='/' component={index} /> */}
            <Route path='/:teamName' component={TeamMembers} />
        </Switch>
    )
}

export default Routes