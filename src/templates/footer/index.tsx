import React from "react";
import css from "./footer.module.scss";
function Footer() {
  return (
    <>
      <div className={css["footer-footer"]}>
        <div className={css["footer-content"]}>
          <div>
            <h3 className={css["footer-name"]}>GET HELP</h3>
            <ul className={css["footer-brand"]}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Nike</a>
              </li>
              <li>
                <a href="#">Adidas</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={css["footer-boder"]}>
          <div className={css["footer-content"]}>
            <h3 className={css["footer-name"]}>SUPPORT</h3>
            <ul className={css["footer-brand"]}>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Help</a>
              </li>
              <li>
                <a href="">Phone</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={css["footer-boder"]}>
          <div className={css["footer-content"]}>
            <h3 className={css["footer-name"]}>REGISTER</h3>
            <ul className={css["footer-brand"]}>
              <li>
                <a href="">Register</a>
              </li>
              <li>
                <a href="">Login</a>
              </li>
              <br />
              <br />
              <br />
            </ul>
          </div>
        </div>
      </div>
      <div className={css["footer-reserved"]}>
        <p className={css["footer-text"]}>
          © 2023 Cybersoft All Right Reserved
          <span> |</span> Design Theme by Thanh Quí & Thế Việt
        </p>
      </div>
    </>
  );
}

export default Footer;
