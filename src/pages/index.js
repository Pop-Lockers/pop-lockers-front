import React from "react"
import { BrowserRouter } from 'react-router-dom'
import { Button } from 'reactstrap'

import Routes from "./Routes"

export default () => {
    return (
      <BrowserRouter>
        <div>
            <p>Hello world!</p>
            <Button color="success">reactstrap layout</Button>
            <Routes />
        </div>
      </BrowserRouter>  
    )
}
