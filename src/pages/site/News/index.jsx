import React from "react";
import { Helmet } from "react-helmet";

function News() {
  return <>
    <Helmet>
      <title>News Page</title>
      <link rel="canonical" href="https://www.tacobell.com/" />
    </Helmet>
    <h1>News</h1>
  </>

    ;
}

export default News;
