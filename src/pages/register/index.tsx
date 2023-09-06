import React, { useState } from "react";
import css from "./register.module.scss";

function Register() {
  const [passwordType, setPasswordType] = useState("password");
  const hanldeChangeType = () => {
    setPasswordType((prevType) => (prevType === "text" ? "password" : "text"));
  };
  const [passwordConfirmType, setPasswordConfirmType] = useState("password")
  const hanldeChangeType1 = () => {
    setPasswordConfirmType((prevType) => (prevType === "text" ? "password" : "text"));
  };
  return (
    <div className={css["register-main"]}>
      <div className={css["register-title"]}>Register</div>
      <hr className={css["register-hr"]} />
      <div className={css["register-form"]}>
        <div className={css["register-left"]}>
          <div>
            <form>
              <label htmlFor="Email" className={css["register-name"]}>
                Email
              </label>
              <br />
              <input
                type="email"
                placeholder="email"
                className={css["register-input"]}
              />
            </form>
          </div>
          <div>
            <form className={css["register-eyes"]}>
              <label htmlFor="Password" className={css["register-name"]}>
                Password
              </label>
              <br />
              <input
                id="password"
                type={passwordType}
                placeholder="password"
                className={css["register-input"]}
              />
              {passwordType === 'text' ? (<i className="fa-regular fa-eye-slash " onClick={hanldeChangeType}/>) :(<i className="fa-regular fa-eye" onClick={hanldeChangeType} />)}
              
              
            </form>
          </div>
          <div>
            <form className={css["register-eyes"]}>
              <label
                htmlFor="Password confirm"
                className={css["register-name"]}
              >
                Password confirm
              </label>
              <br />
              <input
                type={passwordConfirmType}
                placeholder="password confirm"
                className={css["register-input"]}
              />
              {passwordConfirmType === 'text' ? (<i className="fa-regular fa-eye-slash " onClick={hanldeChangeType1}/>) :(<i className="fa-regular fa-eye" onClick={hanldeChangeType1} />)}
            </form>
          </div>
        </div>
        <div className={css["register-right"]}>
          <div>
            <form>
              <label htmlFor="Name" className={css["register-name"]}>
                Name
              </label>
              <br />
              <input
                type="text"
                placeholder="name"
                className={css["register-input"]}
              />
            </form>
          </div>
          <div>
            <form>
              <label htmlFor="Phone" className={css["register-name"]}>
                Phone
              </label>
              <br />
              <input
                type="number"
                placeholder="phone"
                className={css["register-input"]}
              />
            </form>
          </div>
          <div>
            <form>
              <label htmlFor="Gender" className={css["register-name"]}>
                Gender
              </label>
              <ul className={css["register-ul"]}>
                <li className={css["register-male"]}>
                  <input
                    type="radio"
                    name="selector"
                    id="male"
                    className={css["register-selector"]}
                  />
                  <label htmlFor="male">Male</label>
                </li>
                <li className={css["register-femail"]}>
                  <input
                    type="radio"
                    name="selector"
                    id="femail"
                    className={css["register-selector"]}
                  />
                  <label htmlFor="femail">Femail</label>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <div className={css["register-dk"]}>
        <button type="submit" className={css["register-button"]}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Register;
