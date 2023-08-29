import React from "react";
import css from "./header.module.scss";
import searchSvg from "src/assets/images/search.svg";
import { IconCart, IconSearch } from "src/assets/icons";
import imLogo from "src/assets/images/image3.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
    <header className={css.header}>
      <Link to={"/"}>
        <img src={imLogo} alt="" />
      </Link>
      <div className={css["header-left"]}>
        <div className={css["header-left-search"]}>
          <IconSearch />
          <span>Search</span>
        </div>
        <div className={css["header-left-cart"]}>
          <Link to="/cart">
            <IconCart />
          </Link>
          <span>(1)</span>
        </div>
        <div className={css["header-left-author"]}>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </header>
    <nav >
      <ul className={css["nav"]}>
        <li>
          <Link className={css["active"]} to={"/home"}>Home</Link>
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
