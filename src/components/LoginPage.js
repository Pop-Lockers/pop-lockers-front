import React, { Component } from 'react'
import {
    Form,
    FormGroup,
    Button,
    Label,
    Input
} from 'reactstrap'

export default class Login extends Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="enterUsername">Enter Username</Label>
                    <Input type="text"  />
                </FormGroup>
                <FormGroup>
                    <Label for="enterPassword">Enter Password</Label>
                    <Input type="password" />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        )
    }
}