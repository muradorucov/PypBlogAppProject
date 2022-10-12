import React from "react";
import Blogcontent from "./blogcontent/blogcontent";
import BlogFooter from "./blogfooter";

import "./style.css";


function Detail() {
    return <div>
        <section id="main-contact" className="section-padding">
            <div className="container">
                <div className="row-item">
                    <div className="col-12 item">
                        <Blogcontent />
                        <BlogFooter />
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default Detail;
