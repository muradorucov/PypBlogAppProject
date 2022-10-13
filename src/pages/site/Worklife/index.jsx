import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../../../components/common/footer/Footer'
import Navbar from '../../../components/common/navbar'

function Worklife() {
    return (
        <>
            <Helmet>
                <title>Worklife Page</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Navbar />
            <h1>Worklife</h1>
            <Footer />
        </>
    )
}

export default Worklife