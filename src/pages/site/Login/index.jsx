import { useForm } from "react-hook-form";
import { useRef } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReCAPTCHA from "react-google-recaptcha";
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
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <section className="form-container forms">
        <div className="form login">
          <div className="form-content">
            <header>Login</header>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="field input-field">
                <input
                  placeholder="Email"
                  className={errors.email ? "input error-border" : "input"}
                  {...register("email")}
                  type="text"
                  name="email"
                  id="email"
                />
                {errors.email ? (
                  <div className="error">{errors.email.message}</div>
                ) : (
                  <></>
                )}
              </div>

              <div className="field input-field">
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
                  <div className="error">{errors.password.message}</div>
                ) : (
                  <></>
                )}
              </div>

              <div className="form-link">
                <a href="#" className="forgot-pass">
                  Forgot password?
                </a>
              </div>
              <div style={{ margin: " 5px auto", width: "80%" }}>
                <ReCAPTCHA
                  sitekey={"6LfsAnYiAAAAAK4gpGCB19QOzQTvL0gjYGQKZxSI"}
                  ref={captchaRef}
                  onChange={onChange}
                />
              </div>
              <div className="field button-field">
                <button>Login</button>
              </div>
            </form>

            <div className="form-link">
              <span>
                Don't have an account?{" "}
                <Link className="link signup-link" to="/register">
                  Signup
                </Link>
              </span>
            </div>
          </div>

          <div className="line"></div>

          <div className="media-options">
            <a href="#" className="field google">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
              </svg>
              <span>Login with Google</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
