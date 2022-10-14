import { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../../schema/RegisterSchema";
import { Link } from "react-router-dom";
import "../Login/style.css";
import { Helmet } from "react-helmet";
import ReCAPTCHA from "react-google-recaptcha";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import * as yup from "yup";
import "./style.css"


const validationSchema = yup.object().shape({
  fullName: yup
    .string("Full name should be a string")
    .required("Name address is required"),
  email: yup
    .string("email should be a string")
    .email("please provide a valid email address")
    .required("email address is required"),
  password: yup
    .string("password should be a string")
    .min(5, "password should have a minimum length of 5")
    .max(12, "password should have a maximum length of 12")
    .required("password is required"),
  confirmPassword: yup
    .string("password should be a string")
    .oneOf([yup.ref("password")])
    .required("confirm password is required"),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const secretKey = "6LeZn3ciAAAAAM7JJb8xdKbiCYnc5phJIFXzanCm";
  const captchaRef = useRef(null);

  const onSubmit = (data, e) => {
    e.preventDefault();
    const token = captchaRef.current.getValue();
    if (token) {
      // send data here
      console.log(data);
    }
    captchaRef.current.reset();
  };

  const onChange = (value) => {
    console.log(value);
    console.log("test");
  };

  return (
    <>
      <Helmet>
        <title>Sign up Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="register-container">
        <div className="forms-container">
          <form action="/" className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="login-title">SIGIN UP</h2>

            {/*====== Sign UP Input Start =======*/}
            <div className="login-input-field">
              <i>
                <PersonIcon />
              </i>
              <input
                placeholder="Full Name"
                className={errors.fullName ? "input error-border" : "input"}
                {...register("fullName")}
                type="text"
                name="fullName"
                id="fullName"
              />
              {errors.fullName ? (
                <div className="login-text-danger error">{errors.fullName.message}</div>
              ) : (
                <></>
              )}
            </div>
            <div className="login-input-field">
              <i><EmailIcon /></i>
              <input
                placeholder="Email"
                className={errors.email ? "input error-border" : "input"}
                {...register("email")}
                type="text"
                name="email"
                id="email"
              />
              {errors.email ? (
                <div className=" login-text-danger error">{errors.email.message}</div>
              ) : (
                <></>
              )}
            </div>
            <div className="login-input-field">
            <i><LockIcon /></i>
              <input
                type="password"
                placeholder="Password"
                className={
                  errors.password ? "password error-border" : "password"
                }
                {...register("password")}
                name="password"
                id="password"
              />
              {errors.password ? (
                <div className="login-text-danger error">{errors.password.message}</div>
              ) : (
                <></>
              )}
            </div>
            <div className="login-input-field">
              <i><LockIcon /></i>
              <input
                type="password"
                placeholder="Confirm Password"
                className={
                  errors.confirmPassword
                    ? "password error-border"
                    : "password"
                }
                {...register("confirmPassword")}
                name="confirmPassword"
                id="confirmPassword"
              />
              {errors.confirmPassword ? (
                <div className="login-text-danger error">{errors.confirmPassword.message}</div>
              ) : (
                <></>
              )}
            </div>
            <input type="submit" value="SIGIN UP" className="solid" />
            {/*====== Sign In Input end =======*/}
            <div style={{ cursor: "pointer" }}>
              <ReCAPTCHA
                sitekey={"6LfsAnYiAAAAAK4gpGCB19QOzQTvL0gjYGQKZxSI"}
                ref={captchaRef}
                onChange={onChange}
              />
            </div>
            {/*====== Sign in with social platforms Start =======*/}
            <p className="login-social-text">
              Or Sign in with social platforms
            </p>
            <div className="login-social-media">
              <Link to="#!" className="login-social-icon">
                <FacebookIcon />
              </Link>
              <Link to="#!" className="login-social-icon">
                <LinkedInIcon />
              </Link>
              <Link to="#!" className="login-social-icon">
                <GoogleIcon />
              </Link>
              <Link to="#!" className="login-social-icon">
                <TwitterIcon />
              </Link>
            </div>
            {/*====== Sign in with social platforms end =======*/}
          </form>
        </div>
        <div className="panels-container">
          {/* Sing Up Content */}
          <div className="panel right-panel">
            <div className="content">
              <h3 style={{ color: "#fff" }}>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.
              </p>
              <Link to="/login">
                <button className="btn-item transparent" id="sign-in-btn">
                  SIGN IN
                </button>
              </Link>
            </div>
            <img
              src="https://raw.githubusercontent.com/sefyudem/Sliding-Sign-In-Sign-Up-Form/955c6482aeeb2f0e77c1f3c66354da3bc4d7a72d/img/register.svg"
              className="image"
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
