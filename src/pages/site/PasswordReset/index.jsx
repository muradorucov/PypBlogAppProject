import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import "./style.css"

function ResetPassword() {
    return (
        <>
            <Helmet>
                <title>Reset Password Page</title>
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
                                <h1 className="auth_title text-left">Reset password</h1>
                                <form>
                                    <div
                                        className="alert alert-success bg-soft-primary border-0"
                                        role="alert"
                                    >Create a new password that you don't have and haven't used before.
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="New Password"
                                        />
                                        <span className="reset-text-danger">
                                            Create a password at least 6 characters long.
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="confirimpassword"
                                            placeholder="Confirim New Password"
                                        />
                                        <span className="reset-text-danger">
                                            Create a password at least 6 characters long.
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-lg btn-block"
                                        >
                                            Reset Password
                                        </button>
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

export default ResetPassword