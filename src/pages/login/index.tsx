import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FbIcon from "src/assets/icons/fb.icon";
import css from "./login.module.scss";
import { loginFacebookUser, userLogin } from "src/services/user.servie";
import { getLocalStorage, setLocalStorage } from "src/utils";
import { ACCESS_TOKEN } from "src/constants";
import FacebookLogin from "react-facebook-login";

function Login() {
  const [passwordType, setPasswordType] = useState("password");
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập

  // Kiểm tra AccessToken từ Local Storage khi component được tạo
  useEffect(() => {
    const accessToken = getLocalStorage(ACCESS_TOKEN);
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);

  // Xử lý khi đăng nhập
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userLogin(formLogin)
      .then((resp) => {
        setLocalStorage(ACCESS_TOKEN, resp.content.accessToken);
        setIsLoggedIn(true); // Cập nhật trạng thái ngay sau khi đăng nhập thành công
        navigate("/");
      })
      .catch((err) => {
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


  const [loginFacebook, setLoginFacebook] = useState({
    facebookToken: "",
  });
  const responseFacebook = (resp: any) => {
    loginFacebookUser(loginFacebook)
      .then((resp) => {
        setLocalStorage(ACCESS_TOKEN, resp.content.accessToken);
        setIsLoggedIn(true); // Cập nhật trạng thái ngay sau khi đăng nhập thành công
        navigate("/");
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
          {isLoggedIn ? (
            // Hiển thị thông tin người dùng sau khi đăng nhập thành công
            <>
              <div>
                Welcome, UserNameHere
                <Link to="/profile">Profile</Link>
              </div>
            </>
          ) : (
            // Hiển thị form đăng nhập khi chưa đăng nhập
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
              <div className={css["login-under"]}>
                <Link to={`/register`} className={css["login-register"]}>
                  Register now?
                </Link>
                <button type="submit" className={css["login-button"]}>
                  Login
                </button>
              </div>
            </form>
          )}
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



