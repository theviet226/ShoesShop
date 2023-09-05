import React, { useState } from "react";
import { Link } from "react-router-dom";
import FbIcon from "src/assets/icons/fb.icon";
import css from "./login.module.scss";
function Login() {
  const [passwordType, setPasswordType] = useState("password");
  const hanldeChangeType = () => {
    setPasswordType((prevType) => (prevType === "text" ? "password" : "text"));
  };
  return (
    <>
      <div className={css["login-top"]}>
        <div className={css["login-title"]}>Login</div>
        <hr className={css["login-hr"]} />
      </div>
      <div className={css["login-form"]}>
        <div>
          <div className={css["login-text"]}>
            <form>
              <label htmlFor="Email" className={css["login-name"]}>
                Email
              </label>
              <br />
              <input
                type="email"
                placeholder="Email"
                className={css["login-input"]}
              />
            </form>
          </div>
          <div className={css["login-text"]}>
            <form className={css["login-eyes"]}>
              <label htmlFor="Password" className={css["login-name"]}>
                Password
              </label>
              <br />
              <input
                id="password"
                type={passwordType}
                placeholder="Password"
                className={css["login-input"]}
              />
              {passwordType === "text" ? (
                <i
                  className="fa-regular fa-eye-slash "
                  onClick={hanldeChangeType}
                />
              ) : (
                <i className="fa-regular fa-eye" onClick={hanldeChangeType} />
              )}
            </form>
          </div>
          <div className={css["login-under"]}>
            <Link to={`/register`} className={css["login-register"]}>
              Register now?
            </Link>
            <button type="submit" className={css["login-button"]}>
              Login
            </button>
          </div>
        </div>
        <div>
          <button className={css["login-buttonfb"]}>
            <FbIcon />
            <Link to={``} className={css["login-fb"]}>
              Continue with Facebook
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
