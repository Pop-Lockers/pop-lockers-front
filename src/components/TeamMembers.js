import React from 'react'
import { Container, Row, Col } from 'reactstrap';

class TeamMembers extends React.Component { 
  
  state = {
    businessName: '',
    location: ''
  }

  componentDidMount() {
    this.fetchTeamMembers()
  }

  fetchTeamMembers() {
      fetch('http://localhost:5000/team/' + this.props.business_name)
        .then(resp => resp.json())
        .then(teamObj => {
          this.setState({
            businessName: teamObj.business_name,
            location: teamObj.location
          })
        })
  }

  render() {
    return (
        <Container>
          <Row>
            <Col>
              <h2>Welcome, {this.state.businessName}</h2>
              <h5>You're located at: {this.state.location}</h5>
            </Col>
          </Row>
        </Container>
    )
  }
}

export default TeamMembers