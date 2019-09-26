import React, { Component } from 'react'
import { Form, FormGroup, Button, Label, Input} from 'reactstrap'

export default class Register extends Component {
    
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="username">New Username</Label>
                    <Input type="text"></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="password">New Password</Label>
                    <Input type="password"></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="first_name">Enter First Name</Label>
                    <Input type="text" />
                </FormGroup>
                <FormGroup>
                    <Label for="last_name">Enter Last Name</Label>
                    <Input type="text" />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input type="email" />
                </FormGroup>
                <FormGroup>
                    <Label for="phone_number">Enter Phone Number</Label>
                    <Input type="number" />
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