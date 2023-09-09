import { getLocalStorage, removeLocalStorage } from "src/utils";
import React, { useState, useEffect } from "react";
import css from "./header.module.scss";

import { IconCart, IconSearch } from "src/assets/icons";
import imLogo from "src/assets/images/image3.png";
import { Link, useNavigate } from "react-router-dom";
import { ACCESS_TOKEN } from "src/constants";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "src/redux/slices/cart.slice";
import { RootState } from "src/redux/config-store";
import { clearUser } from "src/redux/slices/userReducerLogin";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập
  const cartItems = useSelector(
    (state: RootState) => state.cartReducer.cartItems,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Đếm số sản phẩm trong giỏ hàng
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  useEffect(() => {
    const accessToken = getLocalStorage(ACCESS_TOKEN);
    if (accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  const handleLogout = () => {
    removeLocalStorage(ACCESS_TOKEN);
    setIsLoggedIn(false);
    removeLocalStorage("userCart");
    removeLocalStorage("tempCart");
    removeLocalStorage(ACCESS_TOKEN);
    dispatch(clearCart());
    dispatch(clearUser());
    window.location.reload();
    navigate("/");
  };

  const renderLogin = () => {
    const { userLogin } = useSelector(
      (state: RootState) => state.userReducerLogin,
    );
    const isLoggedIn = userLogin !== null;
    if (isLoggedIn) {
      return (
        <div className={css["header-left-author"]}>
          <Link to="/profile">{userLogin.email}</Link>
          <Link
            to="/"
            className={css["header-left-author"]}
            onClick={handleLogout}
          >
            Logout
          </Link>
        </div>
      );
    }
    return (
      <>
        <div className={css["header-left-author"]}>
          <Link to="/login">Login</Link>
        </div>
        <div className={css["header-left-author"]}>
          <Link to="/register">Register</Link>
        </div>
      </>
    );
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
            <span>({cartItemCount})</span>
          </div>
          {renderLogin()}
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
