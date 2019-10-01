import React from 'react'
import { Container, Row, Col, Table } from 'reactstrap';

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
        <tr key={user.id}>
          <td>{user.username}</td>
          <td>{user.first_name} {user.last_name}</td>
          <td>{user.email}</td>
          <td>{user.phone_number}</td>
          <td>{user.admin ? "Admin" : "Not Admin"}</td>
        </tr>
      )
    })

    if (this.state.businessName) {
      return (
          <Container>
            <Row>
              <Col>
                <h2>Welcome, {this.state.businessName}</h2>
                <h5>You're located at: {this.state.location}</h5>
                <Table striped responsive>
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Admin Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
      )
    } else {
      return (
        <Container>
          <Row>
            <Col>
              <h1>This isn't a Team!</h1>
            </Col>
          </Row>
        </Container>
      )
    }
  }
}

export default TeamMembers