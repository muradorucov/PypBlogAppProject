import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function BlogRecentPost() {
    return <div className="blog-recent col-margin">
        <div className="row-item">
            <div className="col-12">
                <h4 style={{ marginBottom: "2rem", fontSize: "1.5rem" }}>Recent Posts</h4>
            </div>
        </div>
        <div className="row-item respon-d-flex">
            <div className="col-4 col-respon-4">
                <div className="news-item">
                    <Link to="#!" className="news-img">
                        <img src="https://muradorucov.github.io/PathSoftTemplateClone/img/news-img-3.jpg" alt="" />
                    </Link>
                    <div className="news-info">
                        <div className="news-day">
                            <p>07/01/2020</p>
                        </div>
                        <div className="news-item-title">
                            <Link to="#!">
                                <h4>Hibernate Query Language</h4>
                            </Link>
                        </div>
                        <div className="news-item-text">
                            <p>
                                In this tutorial, we will discuss the Hibernate Query Language.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-4 col-respon-4">
                <div className="news-item">
                    <Link to="#!" className="news-img">
                        <img src="https://muradorucov.github.io/PathSoftTemplateClone/img/news-img-3.jpg" alt="" />
                    </Link>
                    <div className="news-info">
                        <div className="news-day">
                            <p>07/01/2020</p>
                        </div>
                        <div className="news-item-title">
                            <Link to="#!">
                                <h4>Hibernate Query Language</h4>
                            </Link>
                        </div>
                        <div className="news-item-text">
                            <p>
                                In this tutorial, we will discuss the Hibernate Query Language.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-4 col-respon-4">
                <div className="news-item">
                    <Link to="#!" className="news-img">
                        <img src="https://muradorucov.github.io/PathSoftTemplateClone/img/news-img-3.jpg" alt="" />
                    </Link>
                    <div className="news-info">
                        <div className="news-day">
                            <p>07/01/2020</p>
                        </div>
                        <div className="news-item-title">
                            <Link to="#!">
                                <h4>Hibernate Query Language</h4>
                            </Link>
                        </div>
                        <div className="news-item-text">
                            <p>
                                In this tutorial, we will discuss the Hibernate Query Language.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default BlogRecentPost;