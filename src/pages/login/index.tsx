import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FbIcon from "src/assets/icons/fb.icon";
import css from "./login.module.scss";
import { loginFacebookUser, userLogin } from "src/services/user.servie";
import { getLocalStorage, removeLocalStorage, setLocalStorage } from "src/utils";
import { ACCESS_TOKEN } from "src/constants";
import FacebookLogin from "react-facebook-login";
function Login() {
  const [passwordType, setPasswordType] = useState("password");
  const hanldeChangeType = () => {
    setPasswordType((prevType) => (prevType === "text" ? "password" : "text"));
  };
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userLogin(formLogin)
      .then((resp) => {
        setLocalStorage(ACCESS_TOKEN,resp.content.accessToken);
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(formLogin);
  };
  // const accessToken = getLocalStorage(ACCESS_TOKEN)
  // if(accessToken){
  //   console.log("accessToken:",accessToken)
  // }else{
  //   console.log('accessToken không tồn tại')
  // }
  // removeLocalStorage(ACCESS_TOKEN)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormLogin({
      ...formLogin,
      [name]: value,
    });
  };
  const [loginFacebook, setLoginFacebook] = useState({
    facebookToken: "",
  });
  const responseFacebook = (resp: any) => {
    console.log(resp);
    loginFacebookUser(loginFacebook)
      .then((resp) => {
        setLocalStorage(ACCESS_TOKEN, resp.content.accessToken);
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className={css["login-top"]}>
        <div className={css["login-title"]}>Login</div>
        <hr className={css["login-hr"]} />
      </div>
      <div className={css["login-form"]}>
        <div>
          <form onSubmit={handleLogin}>
            <div className={css["login-text"]}>
              <label htmlFor="Email" className={css["login-name"]}>
                Email
              </label>
              <br />
              <input
                type="email"
                placeholder="Email"
                className={css["login-input"]}
                value={formLogin.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className={css["login-text"]}>
              <label htmlFor="Password" className={css["login-name"]}>
                Password
              </label>
              <br />
              <input
                value={formLogin.password}
                // id="password"
                type={passwordType}
                placeholder="Password"
                className={css["login-input"]}
                onChange={handleChange}
                name="password"
              />
              {passwordType === "text" ? (
                <i
                  className="fa-regular fa-eye-slash "
                  onClick={hanldeChangeType}
                  style={{
                    position:"relative",
                    right:"40px",
                    cursor:"pointer",
                  }}
                />
              ) : (
                <i className="fa-regular fa-eye" onClick={hanldeChangeType} style={{
                  position:"relative",
                  right:"40px",
                  cursor:"pointer",
                }} />
              )}
            </div>
            <div className={css["login-under"]}>
              <Link to={`/register`} className={css["login-register"]}>
                Register now?
              </Link>

              <button type="submit" className={css["login-button"]}>
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="mx-auto">
          <FacebookLogin
            appId="3195280460764608"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="btn btn-primary btn-lg"
            icon="fa-facebook"
            size="metro"
          />
        </div>
      </div>
    </>
  );
}

export default Login;
