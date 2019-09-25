import React, { Component} from 'react'
import {Table} from 'reactstrap'
import Invoice from '../components/invoice'

const invoices = [{
    'invoice_id': 1,
    'address': '130 Beech St, Long Beach, CA',
    'phone_number': '310-555-1212',
    'amount': 59,
    'date': '09/23/19',
    'make': 'Ford',
    'model': 'F-150',
    'year': 2010,
    'color': 'white',
    'license_plate_number': 'PXD234',
    'drivers_license_number': 'N6532571',
    'license_state': 'CA',
    'plate_state': 'WA',
    'user_id': 101
},
{
    "invoice_id": 2,
    "address": "132 cornelia st",
    "phone_number": "(555)555-5555",
    "amount": 50000000,
    "make": "Tesla",
    "model": "Model 3",
    "year": 5000,
    "color": "pink",
    "license_plate_number": "CASIU31",
    "drivers_license_number": "DA83838",
    "license_state": "NY",
    "plate_state": "NY", 
    "user_id": 200
}]

export default class Invoices extends Component{
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
            {invoices.map((invoice, index) => (<Invoice invoice={invoice} key={index} />))}
            
        </tbody>
            </Table>
        </div>
    )
    }
}
