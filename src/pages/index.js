import React from "react"
import { BrowserRouter } from 'react-router-dom'


import Routes from "../components/Routes"

export default () => {
    return (
      <BrowserRouter>
        <div>
            <Routes />
        </div>
      </BrowserRouter>  
    )
}
