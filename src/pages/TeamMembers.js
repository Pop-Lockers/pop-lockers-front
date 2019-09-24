import React from 'react'
import { Container, Row, Col } from 'reactstrap';

class TeamMembers extends React.Component {  

  componentDidMount() {

  }

  fetchTeamMembers() {
      fetch('http://localhost:5000/')
  }

  render() {
    return (
        <Container>
          <Row>
            <Col>
              
            </Col>
          </Row>
        </Container>
    )
  }
}

export default TeamMembers