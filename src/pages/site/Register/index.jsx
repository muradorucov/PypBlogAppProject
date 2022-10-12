import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../../schema/RegisterSchema";
import { Link } from "react-router-dom";
import "../Login/style.css";
import { Helmet } from "react-helmet";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Helmet>
        <title>Log In Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <section className="form-container forms">
        <div className="form login">
          <div className="form-content">
            <header>Sign Up</header>
            <form method="POST" onSubmit={handleSubmit(onSubmit)}>
              <div className="field input-field">
                <input
                  placeholder="Full Name"
                  className={errors.fullName ? "input error-border" : "input"}
                  {...register("fullName")}
                  type="text"
                  name="fullName"
                  id="fullName"
                />
                {errors.fullName ? (
                  <div className="error">{errors.fullName.message}</div>
                ) : (
                  <></>
                )}
              </div>

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

              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className={
                    errors.confirmPassword ? "password error-border" : "password"
                  }
                  {...register("confirmPassword")}
                  name="confirmPassword"
                  id="confirmPassword"
                />
                {errors.confirmPassword ? (
                  <div className="error">{errors.confirmPassword.message}</div>
                ) : (
                  <></>
                )}
              </div>

              <div className="field button-field">
                <button>Sign Up</button>
              </div>
            </form>

            <div className="form-link">
              <span>
                Already have an account?{" "}
                <Link className="link signup-link" to="/login">
                  Login
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
              <span>SignUp with Google</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
