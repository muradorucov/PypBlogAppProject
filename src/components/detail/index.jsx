import React from "react";
import Blogcontent from "./blogcontent/blogcontent";
import Crumbs from "./crumbs/crumbs";

import "./style.css";


function Detail() {
    return <div>
        <Crumbs />
        <section id="main-contact" className="section-padding">
            <div className="container">
                <div className="row-item">
                    <div className="col-12 item">
                        <Blogcontent />
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default Detail;
