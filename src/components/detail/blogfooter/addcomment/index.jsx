import React from "react";
import { Textarea } from '@chakra-ui/react'
import "./style.css";
import { Link } from "react-router-dom";

function AddComments() {
    return <div className="blog-form">
        <div className="row-item">
            <div className="col-12">
                <h3 style={{ marginBottom: "2rem" }}>Add Your Comment</h3>
            </div>
        </div>
        <div className="row-item">
            <div className="col-12">
                <form action="#" className="contact-form">
                    <div className="row-item">
                        <div className="col-12">
                            <Textarea placeholder='Your Comment' size='lg' />
                        </div>
                    </div>
                    <div className="row-item">
                        <div className="col-12 d-flex justify-content-start">
                            <div className="bttn-row" style={{ marginTop: 20 }}>
                                <Link to="/">
                                    <div className="bttn">
                                        <span>Add Comment</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>;
}

export default AddComments;