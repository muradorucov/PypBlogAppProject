import React from "react";
import { Link } from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import "./crumbs.css";

function Crumbs() {
    return <div>
        <section id="crumbs">
            <div className="container crumbs-bread">
                <div className="row">
                    <div className="col-auto">
                        <div className="crumbs-info">
                            <span className="crumbs-home">
                                <Link to="/">Home</Link>
                            </span>
                            <ChevronRightIcon
                                color="primary"
                                fontSize="small" />
                            <span className="crumbs-home">
                                <Link to="/news">News</Link>
                            </span>
                            <ChevronRightIcon
                                color="primary"
                                fontSize="small" />
                            <span className="crumbs-about">Benefits Of ASync/Await In Programming</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>;
}

export default Crumbs;