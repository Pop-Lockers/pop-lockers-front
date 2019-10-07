import React, { Component, Fragment } from 'react'
import { Redirect } from '@reach/router'
import {Form, FormGroup, Button, Label, Input} from 'reactstrap'
import Layout from '../components/Layout/Layout'
import popLockersAPI from '../api/poplockersAPI'
import loginStyles from '../styles/login.module.css'
import { LoginContext } from '../components/loginContext/loginContext'
class Login extends Component {

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
        localStorage.setItem('user_id', response.data.user_id)
        localStorage.setItem('token', response.data.access_token)
        this.props.setUser(response.data.user_id)
        this.props.setToken(response.data.access_token)
        
    }

    renderFormOrRedirect = () => {
        const { token, user_id } = this.props
        if (token && user_id) {
            return (
                
                <Redirect from="/login" to="/add-invoice" noThrow/>
            )
        } else {
            return (
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
            )
        }
        
    }

    render() {
        return (
            <>
                {this.renderFormOrRedirect()}
            </>

        )
    }
}

const LoginWithConsumer = () => {
    return (
        <Layout>
            <LoginContext.Consumer>
                {(value) => {
                    return <Login {...value} />
                }}
                
            </LoginContext.Consumer>
        </Layout>
    )
}

export default LoginWithConsumer