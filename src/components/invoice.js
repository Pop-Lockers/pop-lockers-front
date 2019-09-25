import React from 'react'

const Invoice = (props) => {
    return (
        <tr>
            <th scope="row">{props.invoice.address}</th>
            <td>{props.invoice.phone_number}</td>
            <td>{props.invoice.amount}</td>
            <td>{props.invoice.date}</td>
            <td>{props.invoice.make}</td>
            <td>{props.invoice.model}</td>
            <td>{props.invoice.year}</td>
            <td>{props.invoice.color}</td>
            <td>{props.invoice.license_plate_number}</td>
            <td>{props.invoice.drivers_license_number}</td>
            <td>{props.invoice.license_state}</td>
            <td>{props.invoice.plate_state}</td>
            <td>{props.invoice.user_id}</td>
        </tr>
    )
}
export default Invoice