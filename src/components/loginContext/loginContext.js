import React, { createContext, useReducer } from 'react'


export const LoginContext = createContext()

export class LoginProvider extends Component {
    state = {
        user_id: localStorage.getItem('user_id') || '',
        token: localStorage.getItem('token') || ''
    }

    setToken = () => {
        this.setState({
            token: localStorage.getItem('token')
        })
    }

    setUser = () => {
        this.setState({
            user_id: parseInt(localStorage.getItem('user_id'))
        })
    }

    render() {
        return (
            <LoginContext.Provider
                value={{
                    ...this.state,
                    setToken: this.setToken,
                    setUser: this.setUser
                }}
            >
                {this.props.children}
            </LoginContext.Provider>
        )
    }


}
