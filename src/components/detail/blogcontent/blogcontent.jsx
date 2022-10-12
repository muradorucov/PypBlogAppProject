import React from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./blogcontent.css";
import { Link } from "react-router-dom";

function Blogcontent() {
    return <div>
        <div className="blog-section">
            <div className="blog-heading">
                <h2 className="blog-heading-h2">Benefits Of ASync/Await In Programming</h2>
            </div>
            <div className="news-post-meta">
                <div className="news-post-meta-item">
                    <AccessTimeIcon
                        color="primary"
                        fontSize="small" />
                    <span>Jan 23, 2021</span>
                </div>
                <div className="news-post-meta-item">
                    <span>by &nbsp;</span>
                    <Link to="#!">Murad Orujov</Link>
                </div>
                <div className="news-post-meta-item">
                    <ChatBubbleIcon
                        color="primary"
                        fontSize="small" />
                    <span>18</span>
                </div>
            </div>
            <div className="news-post-img">
                <img src="https://muradorucov.github.io/PathSoftTemplateClone/img/news-img-1.jpg" alt="" />
            </div>
            <article className="news-post-article">
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, nemo amet
                    qui sint dolorum sunt? Magni voluptas porro illum blanditiis vero, omnis
                    id. Optio consequuntur est nisi veniam, quod animi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, nemo amet
                    qui sint dolorum sunt? Magni voluptas porro illum blanditiis vero, omnis
                    id. Optio consequuntur est nisi veniam, quod animi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, nemo amet
                    qui sint dolorum sunt? Magni voluptas porro illum blanditiis vero, omnis
                    id. Optio consequuntur est nisi veniam, quod animi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, nemo amet
                    qui sint dolorum sunt? Magni voluptas porro illum blanditiis vero, omnis
                    id. Optio consequuntur est nisi veniam, quod animi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, nemo amet
                    qui sint dolorum sunt? Magni voluptas porro illum blanditiis vero, omnis
                    id. Optio consequuntur est nisi veniam, quod animi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, nemo amet
                    qui sint dolorum sunt? Magni voluptas porro illum blanditiis vero, omnis
                    id. Optio consequuntur est nisi veniam, quod animi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, nemo amet
                    qui sint dolorum sunt? Magni voluptas porro illum blanditiis vero, omnis
                    id. Optio consequuntur est nisi veniam, quod animi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, nemo amet
                    qui sint dolorum sunt? Magni voluptas porro illum blanditiis vero, omnis
                    id. Optio consequuntur est nisi veniam, quod animi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, nemo amet
                    qui sint dolorum sunt? Magni voluptas porro illum blanditiis vero, omnis
                    id. Optio consequuntur est nisi veniam, quod animi.
                </p>
            </article>
            <footer className="news-post-footer">
                <div className="row-item items">
                    <div className="col-md col-6 col-margin">
                        <ul className="news-post-cat">
                            <li>
                                <Link to="#!">Startup</Link>
                            </li>
                            <li>
                                <Link to="#!">Software Development</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-auto col-6 col-margin">
                        <div className="news-post-share items">
                            <p className="news-post-share-title">Share</p>
                            <ul className="page-social-links">
                                <li>
                                    <Link to="#!" title="Facebook">
                                        <FacebookIcon />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#!" title="Instagram">
                                        <InstagramIcon />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#!" title="LinkedIn">
                                        <LinkedInIcon />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#!" title="Twitter">
                                        <TwitterIcon />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>;
}

export default Blogcontent;