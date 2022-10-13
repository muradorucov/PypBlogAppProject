import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../../components/common/navbar";
import Side from "../../../components/home/sideContent/side/Side";
import NewsBox from "../../../components/news";
import Footer from "../../../components/common/footer/Footer";

function News() {
  return <>
    <Helmet>
      <title>News Page</title>
      <link rel="canonical" href="https://www.tacobell.com/" />
    </Helmet>
    <Navbar />
    <main>
      <div className='container'>
        <section className='mainContent'>
          <NewsBox />
        </section>
        <section className='sideContent'>
          <Side />
        </section>
      </div>
    </main>
    <Footer />
  </>;
}

export default News;
