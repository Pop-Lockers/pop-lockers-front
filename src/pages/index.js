import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from '../components/layout'

import Routes from "../components/Routes"

export default () => {
    return (
        <BrowserRouter>
            <Layout />
            <div>
                <Routes />
            </div>
        </BrowserRouter>  
    )
}
