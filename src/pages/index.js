import React, { Component } from 'react'
// import { Button } from 'reactstrap';
import popLockersAPI from '../api/poplockersAPI'

export default class Index extends Component {

async componentDidMount() {
    const response = await popLockersAPI.get('user/james')
    console.log(response.data)
}
    render() {
        return (
            <div>
            </div>
        )
    }
}