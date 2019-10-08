import React, {Component} from 'react'
import { Form, FormGroup, Button, Label, Input } from "reactstrap"
import popLockersAPI from '../../api/poplockersAPI'
import { navigate } from 'gatsby'
import newTeamFormStyles from './newTeam.module.css'
export default class NewTeamForm extends Component {

    state = {
        business_name: '',
        location: ''
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFormSubmit = async (event) => {
        event.preventDefault()
        await popLockersAPI.post(`/team/${this.state.business_name}`, 
        {
            location: this.state.location
        },
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
        )
        navigate('/register')
    }


    render() {
        return (
            <Form className={newTeamFormStyles.form} onSubmit={this.handleFormSubmit}>
                <FormGroup>
                    <Label for="createBusinessName">Enter Team Name</Label>
                    <Input
                    onChange={this.handleInputChange}
                    name="business_name"
                    value={this.state.business_name}
                    type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="createLocation">Enter Location</Label>
                    <Input
                    onChange={this.handleInputChange}
                    name="location"
                    value={this.state.location}
                    type="text"
                    />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        )
    }
}