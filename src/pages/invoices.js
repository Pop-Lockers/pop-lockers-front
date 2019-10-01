import React, { Component} from 'react'
import {Table} from 'reactstrap'
import Invoice from '../components/invoice'



export default class Invoices extends Component{
  state = {
    invoices: []
  }
    componentDidMount() {
        try {
          fetch('http://127.0.0.1:5000/invoices').then((response)=> {
          response.json().then(data => {
            if (data.error) {
              console.log(data.error)
            } else {
              this.setState ({
                invoices: data.invoices
              })
            }
          })
        })
      } catch (e) {
        console.log('Error loading data')
      }
    }
    render() {
    return (
        
        <div>
            <h1>Invoices</h1>
          
              <Table responsive>
                <thead>
                  <tr>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Color</th>
                    <th>Driver's License State</th>
                    <th>Driver's License Number</th>
                    <th>License Plate State</th>
                    <th>License Plate Number</th>
                    <th>User Id</th>
                  </tr>
                </thead>
              <tbody>
              {this.state.invoices.map((invoice, index) => (<Invoice invoice={invoice} key={index} />))}
              
              </tbody>
            </Table>
        </div>
    )
    }
}
