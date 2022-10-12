import React from "react";

import "./style.css";

function AddComments() {
    return <div className="blog-form">
        <div className="row">
            <div className="col-12">
                <h3 style={{ marginBottom: "2rem" }}>Add Your Comment</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <form action="#" className="contact-form">
                    <div className="row">
                        <div className="col-12">
                            <textarea
                                cols={30}
                                rows={8}
                                placeholder="Your Comment"
                                className="textarea"
                                defaultValue={""}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-start">
                            <div className="bttn-row " style={{ marginTop: 20 }}>
                                <a href="/">
                                    <div className="bttn">
                                        <span>Add Comment</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>;
}

export default AddComments;