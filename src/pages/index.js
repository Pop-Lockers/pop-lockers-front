import React, { Component } from 'react'
// import { Button } from 'reactstrap';
import popLockersAPI from '../api/poplockersAPI'



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
