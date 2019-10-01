import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

const NotFound = () => {
    return (
        <Layout>
            <h1>Page Not Found</h1>
            <p><Link to="/">Head Home</Link></p>
        </Layout>
    )
}

export default NotFound