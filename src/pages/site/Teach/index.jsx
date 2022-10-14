import React from 'react'
import { Helmet } from 'react-helmet'
import BlogCard from '../../../components/common/card'
import Footer from '../../../components/common/footer/Footer'
import Navbar from '../../../components/common/navbar'

function Tech() {
    return (
        <>
            <Helmet>
                <title>Tech Page</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Navbar />
            <BlogCard name='Tech News'/>
            <Footer />
        </>
    )
}

export default Tech