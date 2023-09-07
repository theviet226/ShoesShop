import { getLocalStorage,removeLocalStorage  } from "src/utils";
import React, { useState, useEffect } from "react";
import css from "./header.module.scss";
import searchSvg from "src/assets/images/search.svg";
import { IconCart, IconSearch } from "src/assets/icons";
import imLogo from "src/assets/images/image3.png";
import { Link } from "react-router-dom";
import {  ACCESS_TOKEN } from "src/constants";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập

  // Kiểm tra AccessToken từ Local Storage khi component được tạo
  useEffect(() => {
    const accessToken = getLocalStorage(ACCESS_TOKEN);
    if (accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  const handleLogout = () => {
    // Thực hiện đăng xuất ở đây, ví dụ: xóa AccessToken từ Local Storage và cập nhật trạng thái đăng nhập.
    removeLocalStorage(ACCESS_TOKEN); // Xóa AccessToken
    setIsLoggedIn(false); // Cập nhật trạng thái đăng nhập về false
  };

  return (
    <>
      <header className={css.header}>
        <Link to={"/"}>
          <img src={imLogo} alt="" />
        </Link>
        <div className={css["header-left"]}>
          <div className={css["header-left-search"]}>
            <IconSearch />
            <Link to="/search">Search</Link>
          </div>
          <div className={css["header-left-cart"]}>
            <Link to="/cart">
              <IconCart />
            </Link>
            <span>(1)</span>
          </div>
          <div className={css["header-left-author"]}>
            {isLoggedIn ? (
              // Hiển thị khi đăng nhập thành công
              <>
                <Link to="/profile">Profile</Link>
                <a onClick={handleLogout}>Logout</a>
              </>
            ) : (
              // Hiển thị khi chưa đăng nhập
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </div>
        </div>
      </header>
      <nav>
        <ul className={css["nav"]}>
          <li>
            <Link className={css["active"]} to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/#"}>Men</Link>
          </li>
          <li>
            <Link to={"/#"}>Woman</Link>
          </li>
          <li>
            <Link to={"/#"}>Kid</Link>
          </li>
          <li>
            <Link to={"/#"}>Support</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;


