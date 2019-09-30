import React, { Component } from 'react'
import { Form, FormGroup, Button, Label, Input} from 'reactstrap'
import popLockersAPI from '../api/poplockersAPI'
import registerStyles from './register.module.css'
export default class Register extends Component {

    state = {
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        team_id: null,
        teams: []
    }





    handleInputChange = (event) => {
        const { name, value } = event.target
        
        this.setState({
            [name]: value
        })
    }

    handleSubmitForm = async (event) => {
        event.preventDefault()
        const response = await popLockersAPI.post("/register", 
        {
            username: this.state.username,
            password: this.state.password,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            phone_number: this.state.phone_number,
            team_id: 1
        },
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
        )
        console.log(response.data)
    }


    
    render() {
        return (
            <Form className={registerStyles.form} onSubmit={this.handleSubmitForm}>
                <FormGroup>
                    <Label for="username">New Username</Label>
                    <Input onChange={this.handleInputChange} name="username" value={this.state.username} type="text"></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="password">New Password</Label>
                    <Input onChange={this.handleInputChange} value={this.state.password} name="password" type="password"></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="first_name">Enter First Name</Label>
                    <Input onChange={this.handleInputChange} value={this.state.first_name} name="first_name" type="text" />
                </FormGroup>
                <FormGroup>
                    <Label for="last_name">Enter Last Name</Label>
                    <Input onChange={this.handleInputChange} name="last_name" value={this.state.last_name} type="text" />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input onChange={this.handleInputChange} name="email" value={this.state.email} type="email" />
                </FormGroup>
                <FormGroup>
                    <Label for="phone_number">Enter Phone Number</Label>
                    <Input onChange={this.handleInputChange} value={this.state.phone_number} name="phone_number" type="number" />
                </FormGroup>
                <FormGroup>
                    <Label for="team_select">Select Team</Label>
                    <Input type="select">
                        <option>Team 1</option>
                        <option>Team 2</option>
                        <option>Team 3</option>
                    </Input>
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        )
    }
}