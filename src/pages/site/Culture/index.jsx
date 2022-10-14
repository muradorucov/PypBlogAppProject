import React from 'react'
import { Helmet } from 'react-helmet'
import BlogCard from '../../../components/common/card'
import Footer from '../../../components/common/footer/Footer'
import Navbar from '../../../components/common/navbar'

function Culture() {
  return (
    <>
            <Helmet>
                <title>Culture Page</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Navbar />
            <BlogCard name='Culture News'/>
            <Footer />
        </>
  )
}

export default Culture