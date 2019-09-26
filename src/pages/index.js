import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../components/Navbar'

import Routes from "../components/Routes"

export default () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div>
                <Routes />
            </div>
        </BrowserRouter>  
    )
}
