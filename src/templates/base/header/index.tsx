import { getLocalStorage,removeLocalStorage  } from "src/utils";
import React, { useState, useEffect } from "react";
import css from "./header.module.scss";
import searchSvg from "src/assets/images/search.svg";
import { IconCart, IconSearch } from "src/assets/icons";
import imLogo from "src/assets/images/image3.png";
import { Link } from "react-router-dom";
import {  ACCESS_TOKEN } from "src/constants";
import { useSelector,useDispatch } from "react-redux";
import { clearCart } from "src/redux/slices/cart.slice";
import { RootState } from "src/redux/config-store";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập
  const cartItems = useSelector((state: RootState) => state.cartReducer.cartItems);
  const dispatch = useDispatch();

  // Đếm số sản phẩm trong giỏ hàng
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);


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
          <div className={css["header-left-author"]}>
            {isLoggedIn ? (
              <>
                <Link to="/profile">Profile</Link>
                <a onClick={handleLogout}>Logout</a>
              </>
            ) : (
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


