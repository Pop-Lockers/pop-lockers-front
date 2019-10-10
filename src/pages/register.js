import React, { Component } from "react"
import { Form, FormGroup, Button, Label, Input } from "reactstrap"
import Layout from "../components/Layout/Layout"
import popLockersAPI from "../api/poplockersAPI"
import registerStyles from "../styles/register.module.css"
import poplockersAPI from "../api/poplockersAPI"
import { navigate } from "@reach/router"
import NewTeamForm from '../components/NewTeamForm/NewTeamForm'
export default class Register extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    team_id: "",
    teams: [],
    showNewTeamForm: false
  }

  async componentDidMount() {
    const response = await poplockersAPI.get("/teams")
    this.setTeams(response)
  }


  setTeams = (res) => {
    this.setState({
        teams: res.data.teams
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }

  showTeamForm = () => {
      this.setState((prevState) => ({
        showNewTeamForm: !prevState.showNewTeamForm
      }))
  }

  handleSelectInputChange = event => {
    this.setState({
      team_id: parseInt(event.target.value),
    })
  }

  handleSubmitForm = async event => {
    event.preventDefault()
    const response = await popLockersAPI.post(
      "/register",
      {
        username: this.state.username,
        password: this.state.password,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        phone_number: this.state.phone_number,
        team_id: this.state.team_id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    console.log(response.data)
    navigate("/login")
  }

  renderTeamOptions = () => {
    return this.state.teams.map(team => {
      return (
        <option key={team.id} data-id={team.id} value={team.id}>
          {team.business_name}, {team.location}
        </option>
      )
    })
  }

  render() {
    return (
      <Layout>
        <Form className={registerStyles.form} onSubmit={this.handleSubmitForm}>
          <FormGroup>
            <Label for="username">New Username</Label>
            <Input
              onChange={this.handleInputChange}
              name="username"
              value={this.state.username}
              type="text"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="password">New Password</Label>
            <Input
              onChange={this.handleInputChange}
              value={this.state.password}
              name="password"
              type="password"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="first_name">Enter First Name</Label>
            <Input
              onChange={this.handleInputChange}
              value={this.state.first_name}
              name="first_name"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="last_name">Enter Last Name</Label>
            <Input
              onChange={this.handleInputChange}
              name="last_name"
              value={this.state.last_name}
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Enter Email</Label>
            <Input
              onChange={this.handleInputChange}
              name="email"
              value={this.state.email}
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone_number">Enter Phone Number</Label>
            <Input
              onChange={this.handleInputChange}
              value={this.state.phone_number}
              name="phone_number"
              type="number"
            />
          </FormGroup>

          <FormGroup>
            <Label for="team_select">Select Team</Label>
            <Input
              onChange={this.handleSelectInputChange}
              name="team_id"
              type="select"
            >
              <option defaultValue="select an option">
                Pick Team from Dropdown
              </option>
              {this.renderTeamOptions()}
            </Input>
          </FormGroup>

          <Button type="submit">Submit</Button>
        </Form>
        <Button className={registerStyles.button} onClick={this.showTeamForm}>Create New Team</Button>
        {this.state.showNewTeamForm ? <NewTeamForm showTeamForm={this.showTeamForm} setTeams={this.setTeams} /> : null}
      </Layout>
    )
  }
}
