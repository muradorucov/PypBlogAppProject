import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import "./style.css"

function ForgotPassword() {
    return (
        <>
            <Helmet>
                <title>Forgot Password Page</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div className="reset-body">
                <div className="container login-container">
                    <div className="content-color" />
                    <div className="row-item">
                        <div className="col-md-6 reset-logo">
                            <div className="reset-company-logo">
                                <img
                                    src="https://raw.githubusercontent.com/muradorucov/StartUpWiseTime/main/img/resetpage.png"
                                    alt="Blog App"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 login-form">
                            <div className="login-form-in">
                                <h1 className="auth_title text-left">Having a problem logging in?</h1>
                                <form>
                                    <div
                                        className="alert alert-success bg-soft-primary border-0"
                                        role="alert"
                                    >Enter your email address and we'll send you an email with instructions to reset your password.
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Your Email"
                                        />
                                        <span className="reset-text-danger">
                                            This is email not found
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-lg btn-block"
                                        >
                                            Send Mail
                                        </button>
                                    </div>
                                    <div className="form-group other_auth_links">
                                        <Link to="/login">Login</Link>
                                        <Link to="/register">Register</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    className="triangleB"
                    src="https://muradorucov.github.io/StartUpWiseTime/img/triangleB_isffjy.png"
                    alt="Onestop triangle"
                />
            </div>

        </>
    )
}

export default ForgotPassword