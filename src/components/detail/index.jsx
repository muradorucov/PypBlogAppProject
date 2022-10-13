import React from "react";
import Side from "../home/sideContent/side/Side";
import Blogcontent from "./blogcontent/blogcontent";
import BlogFooter from "./blogfooter";

import "./style.css";


function Detail() {
    return <div>
        <section id="main-contact" className="section-padding">
            <div className="container">
                <div className="row-item">
                    <div className="col-lg-9 col-12 item">
                        <Blogcontent />
                        <BlogFooter />
                    </div>
                    <div className="col-lg-3 col-12 item">
                        <Side />
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default Detail;
