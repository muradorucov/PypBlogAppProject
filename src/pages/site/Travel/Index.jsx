import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../../../components/common/footer/Footer'
import Navbar from '../../../components/common/navbar'

function Travel() {
    return (
        <>
            <Helmet>
                <title>Travel Page</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Navbar />
            <h1>Travel</h1>
            <Footer />
        </>
    )
}

export default Travel