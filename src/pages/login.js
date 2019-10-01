import React, { Component } from 'react'
import {Form, FormGroup, Button, Label, Input} from 'reactstrap'
import Layout from '../components/Layout'
import popLockersAPI from '../api/poplockersAPI'
import loginStyles from '../styles/login.module.css'
export default class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = async (event) => {
        event.preventDefault()
        const response = await popLockersAPI.post("/auth",
        {
            "username": this.state.username, "password": this.state.password
        },
        {
            headers: {
                "Content-Type": "application/json"
            }
        })
        console.log(response.data.access_token)
        localStorage.setItem('token', response.data.access_token)
    }

    render() {
        return (
            <Layout>
                <Form className={loginStyles.form} onSubmit={this.handleFormSubmit}>
                    <FormGroup>
                        <Label for="enterUsername">Enter Username</Label>
                        <Input onChange={this.handleInputChange} name="username" value={this.state.username} type="text"  />
                    </FormGroup>
                    <FormGroup>
                        <Label for="enterPassword">Enter Password</Label>
                        <Input onChange={this.handleInputChange} name="password" value={this.state.password} type="password" />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </Layout>
        )
    }
}