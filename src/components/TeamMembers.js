import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

class TeamMembers extends React.Component { 
  
  state = {
    businessName: '',
    location: '',
    users: []
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
            location: teamObj.location,
            users: teamObj.users
          })
        })
  }

  render() {

    const userList = this.state.users.map(user => {
      return (
        <ListGroup key={user.id}>
          <ListGroupItem>{user.first_name} {user.last_name}</ListGroupItem>
          <ListGroupItem>{user.email}</ListGroupItem>
          <ListGroupItem>{user.phone_number}</ListGroupItem>
          <ListGroupItem>{user.admin ? "Admin" : "Not Admin"}</ListGroupItem>
        </ListGroup>
      )
    })

    return (
        <Container>
          <Row>
            <Col>
              <h2>Welcome, {this.state.businessName}</h2>
              <h5>You're located at: {this.state.location}</h5>
                {userList}
            </Col>
          </Row>
        </Container>
    )
  }
}

export default TeamMembers