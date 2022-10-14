import { useForm } from "react-hook-form";
import { useRef } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReCAPTCHA from "react-google-recaptcha";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import "./style.css";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup
    .string("email should be a string")
    .email("please provide a valid email address")
    .required("email address is required"),
  password: yup
    .string("password should be a string")
    .min(5, "password should have a minimum length of 5")
    .max(12, "password should have a maximum length of 12")
    .required("password is required"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: { email: "", password: "" },
  });

  const secretKey = "6LfsAnYiAAAAAGnfctngZTjhfcCjDWbGazgK-YR9";

  const captchaRef = useRef(null);

  const onSubmit = (data, e) => {
    const token = captchaRef.current.getValue();
    if (token) {
      // send data here
      console.log(data);
      captchaRef.current.reset();
    }
  };

  const onChange = (value) => {
    console.log(value);
    console.log("test");
  };
  console.log(errors);
  return (
    <>
      <Helmet>
        <title>Log In Page</title>
        <Link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="container-login container-sign-in">
        <div className="login-forms-container">
          <div className="signin-signup">
            {/* ========= Sign In Form Start========== */}

            <form action="/" className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
              <h2 className="login-title">Sign in</h2>

              {/*====== Sign In Input Start =======*/}
              <div className="login-input-field">
                <i>
                  <EmailIcon />
                </i>
                <input
                  placeholder="Email"
                  className={errors.email ? "input error-border" : "input"}
                  {...register("email")}
                  type="text"
                  name="email"
                  id="email"
                />
                {errors.email ? (
                  <div className="login-text-danger error">{errors.email.message}</div>
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
              <input type="submit" value="LOGIN" className="solid" />
              {/*====== Sign In Input end =======*/}
              <Link to="#!" className="reset">
                Forget Password?
              </Link>
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
            {/*========= Sign In Form End==========*/}
          </div>
          <div className="login-panels-container">
            {/* Sing In Content */}
            <div className="panel left-panel">
              <div className="content">
                <h3 style={{ color: "#fff" }}>New here ?</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!
                </p>
                <Link to="/register">
                  <button className="solid transparent" id="sign-up-btn">SIGN UP
                  </button>
                </Link>
              </div>
              <img src="https://raw.githubusercontent.com/sefyudem/Sliding-Sign-In-Sign-Up-Form/955c6482aeeb2f0e77c1f3c66354da3bc4d7a72d/img/log.svg" className="image" alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;