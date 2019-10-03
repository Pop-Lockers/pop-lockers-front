import React from 'react'
import { Jumbotron } from 'reactstrap'
import teamPageStyles from './teamPage.module.css'
const TeamPage = props => {
  return (  
    <Jumbotron className={teamPageStyles.jumbotron}>
      <h1>Welcome to PopLockers</h1>
      <p className="lead">Login or Sign Up to get started!</p>
    </Jumbotron>
  )
}

export default TeamPage