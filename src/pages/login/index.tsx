import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import FbIcon from "src/assets/icons/fb.icon";
import css from "./login.module.scss";
import {  userLogin } from "src/services/user.service";
import { getLocalStorage, setLocalStorage } from "src/utils";
import { ACCESS_TOKEN } from "src/constants";
// import FacebookLogin from "react-facebook-login";
import { setLogin } from "src/redux/slices/userReducerLogin";
import { useDispatch } from "react-redux";


function Login() {
  const [passwordType, setPasswordType] = useState("password");
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập
  const [loginError, setLoginError] = useState("");

  const [email, setEmail] = useState('')
  useEffect(() => {
    const storedEmail = getLocalStorage("email")
    if (storedEmail) {
      setIsLoggedIn(true)
      setEmail(storedEmail)
    }
  }, [])
  useEffect(() => {
    const accessToken = getLocalStorage(ACCESS_TOKEN);
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const dispatch = useDispatch()
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userLoginResult = {
      email: formLogin.email,
      accessToken: ""
    }
    userLogin(formLogin)
      .then((resp) => {

        setLocalStorage(ACCESS_TOKEN, resp.content.accessToken);
        dispatch(setLogin(userLoginResult))
        const accessToken = resp.content.accessToken;
        const email = formLogin.email
        setLocalStorage("accessToken", accessToken)
        setLocalStorage("email", email)

        navigate("/");
        window.location.reload()

      })
      .catch((err) => {
        setLoginError("Tên tài khoản hoặc mật khẩu không đúng.");
        console.log(err);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormLogin({
      ...formLogin,
      [name]: value,
    });
  };


  // const [loginFacebook, setLoginFacebook] = useState({
  //   facebookToken: "",
  // });
  // const responseFacebook = () => {
  //   loginFacebookUser(loginFacebook)
  //     .then((resp) => {
  //       setLocalStorage(ACCESS_TOKEN, resp.content.accessToken);
  //       setIsLoggedIn(true);
  //       navigate("/");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <>
      <div className={css["login-top"]}>
        <div className={css["login-title"]}>Login</div>
        <hr className={css["login-hr"]} />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className={css["login-form"]}>
            <div>
              {isLoggedIn ? (
                <p>Welcome {email}!</p>
              ) : (
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
                      type={passwordType}
                      placeholder="Password"
                      className={css["login-input"]}
                      onChange={handleChange}
                      name="password"
                    />
                    {passwordType === "text" ? (
                      <i
                        className="fa-regular fa-eye-slash"
                        onClick={() => setPasswordType("password")}
                        style={{
                          position: "relative",
                          right: "40px",
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <i
                        className="fa-regular fa-eye"
                        onClick={() => setPasswordType("text")}
                        style={{
                          position: "relative",
                          right: "40px",
                          cursor: "pointer",
                        }}
                      />
                    )}
                  </div>
                  {loginError && <div className={css["login-error"]}>{loginError}</div>}
                  <div className={css["login-under"]}>
                    <button type="submit" className={css["login-button"]}>
                      Login
                    </button>
                    <span>Don't have an account yet? <Link to={`/register`} className={css["login-register"]}>
                      Register now
                    </Link></span>
                  </div>
                </form>
              )}


              {/* )} */}
            </div>
            {/* <div className="mx-auto">
              <FacebookLogin
                appId="3195280460764608"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                cssClass="btn btn-primary btn-lg"
                icon="fa-facebook"
                size="metro"
              />
            </div> */}
          </div>
        </div>

      </div>

    </>
  );
}

export default Login;



