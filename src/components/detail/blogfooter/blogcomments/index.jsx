import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function BlogComments() {
    return <div className="blog-Comment">
        <div className="row-item">
            <div className="col-12">
                <h4 style={{ marginBottom: "2rem",fontSize: "1.5rem" }}>Comments</h4>
            </div>
        </div>
        <div className="row-item">
            <div className="col-12">
                <div className="blog-comment-item">
                    <div className="comment-item">
                        <div className="comment-item-person">
                            <div className="row-item">
                                <div className="col">
                                    <div className="comment-item-author items">
                                        <div className="comment-item-author-img">
                                            <img src="https://muradorucov.github.io/PathSoftTemplateClone/img/auth-img-1.jpg" alt="" />
                                        </div>
                                        <div className="comment-item-author-info">
                                            <h4>Catherine Williams</h4>
                                            <p>Jan 23, 2021</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <Link to="#!" className="comment-item-replay">
                                        Reply
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="comment-item-desc">
                            <p>
                                PathSoft offers a high caliber of resources skilled in Microsoft
                                Azure.NET, mobile and Quality Assurance. They became our true
                                business partners over the past three years.
                            </p>
                        </div>
                    </div>
                    <div className="comment-replay">
                        <div className="comment-item">
                            <div className="comment-item-person">
                                <div className="row-item">
                                    <div className="col">
                                        <div className="comment-item-author items">
                                            <div className="comment-item-author-img">
                                                <img src="https://muradorucov.github.io/PathSoftTemplateClone/img/auth-img-2.jpg" alt="" />
                                            </div>
                                            <div className="comment-item-author-info">
                                                <h4>Rupert Wood</h4>
                                                <p>Jan 23, 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <Link to="#!" className="comment-item-replay">
                                            Reply
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-item-desc">
                                <p>
                                    PathSoft offers a high caliber of resources skilled in
                                    Microsoft Azure.NET
                                </p>
                            </div>
                        </div>
                        <div className="comment-item">
                            <div className="comment-item-person">
                                <div className="row-item">
                                    <div className="col">
                                        <div className="comment-item-author items">
                                            <div className="comment-item-author-img">
                                                <img src="https://muradorucov.github.io/PathSoftTemplateClone/img/auth-img-1.jpg" alt="" />
                                            </div>
                                            <div className="comment-item-author-info">
                                                <h4>Catherine Williams</h4>
                                                <p>Jan 23, 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <Link to="#!" className="comment-item-replay">
                                            Reply
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-item-desc">
                                <p>PathSoft offers a high caliber</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog-comment-item">
                    <div className="comment-item">
                        <div className="comment-item-person">
                            <div className="row-item">
                                <div className="col">
                                    <div className="comment-item-author items">
                                        <div className="comment-item-author-img">
                                            <img src="https://muradorucov.github.io/PathSoftTemplateClone/img/auth-img-1.jpg" alt="" />
                                        </div>
                                        <div className="comment-item-author-info">
                                            <h4>Samantha Brow-itemn</h4>
                                            <p>Jan 23, 2021</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <Link to="#!" className="comment-item-replay">
                                        Reply
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="comment-item-desc">
                            <p>
                                PathSoft offers a high caliber of resources skilled in Microsoft
                                Azure.NET, mobile and Quality Assurance. They became our true
                                business partners over the past three years.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default BlogComments;