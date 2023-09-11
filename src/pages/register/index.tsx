import React, { useState } from "react";
import css from "./register.module.scss";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Y from "yup";
import { signup } from "src/services/user.service";
export type TParamsRegister = {
  email: string;
  password: string;
  name: string;
  gender: boolean;
  phone: string;
};
const registerSchema = Y.object({
  email: Y.string().email().required("Bạn chưa nhập Email"),
  name: Y.string()
    .min(5, "Name phải nhiều hơn 5 ký tự")
    .max(20, "Name phải ít hơn 20 ký tự")
    .required("Bạn chưa nhập vào Name"),
  password: Y.string()
    .min(5, "Password phải nhiều hơn 5 ký tự")
    .max(20, "Password phải ít hơn 20 ký tự")
    .required("Bạn chưa nhập vào Password"),
  confirmPassword: Y.string()
    .oneOf([Y.ref("password")], "Phải đúng với Password")
    .required("Bạn chưa nhập vào Password cofirm"),
  phone: Y.string()
    .min(10, "Phone không dưới 10 số")
    .max(11, "Phone không quá 11 số")
    .required("Bạn chưa nhập Phone"),
});
function Register() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      phone: "",
    },
    validationSchema: registerSchema,
    onSubmit: (value) => {
      const data: TParamsRegister = {
        email: value.email,
        gender: true,
        phone: value.phone,
        password: value.password,
        name: value.name,
      };
      signup(data)
        .then(() => {
          navigate("/login");
        })
        .catch((error) => {
          alert("Error");
          console.log(error)
        });
      console.log({ value });
    },
  });

  const [passwordType, setPasswordType] = useState("password");
  const hanldeChangeType = () => {
    setPasswordType((prevType) => (prevType === "text" ? "password" : "text"));
  };
  const [passwordConfirmType, setPasswordConfirmType] = useState("password");
  const hanldeChangeType1 = () => {
    setPasswordConfirmType((prevType) =>
      prevType === "text" ? "password" : "text",
    );
  };
  return (
    <div className={css["register-main"]}>
      <div className={css["register-title"]}>Register</div>
      <hr className={css["register-hr"]} />
      <form onSubmit={formik.handleSubmit}>
        <div className={css["register-form"]}>
          <div className={css["register-left"]}>
            <div>
              <label htmlFor="Email" className={css["register-name"]}>
                Email
              </label>
              <br />
              <input
                // type="email"
                placeholder="email"
                className={css["register-input"]}
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <p className={css["register-p"]}>{formik.errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="Password" className={css["register-name"]}>
                Password
              </label>
              <br />
              <input
              
                // id="password"
                type={passwordType}
                placeholder="password"
                className={css["register-input"]}
                {...formik.getFieldProps("password")}
              />
              {passwordType === "text" ? (
                <i
                  className="fa-regular fa-eye-slash "
                  onClick={hanldeChangeType}
                  style={{
                    position:"relative",
                    left:"417px",
                    bottom:"39px",
                    cursor:"pointer"
                  }}
                />
              ) : (
                <i className="fa-regular fa-eye" onClick={hanldeChangeType} style={{
                  position:"relative",
                  left:"417px",
                  bottom:"39px",
                  cursor:"pointer"
                }} />
              )}

              {formik.touched.password && formik.errors.password && (
                <p className={css["register-p"]}  style={{position:"relative",
                bottom:"25px"}}>{formik.errors.password}</p>
              )}
            </div>
            <div className={css["register-cofirm"]}>
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
                {...formik.getFieldProps("confirmPassword")}
              />
              {passwordConfirmType === "text" ? (
                <i
                  className="fa-regular fa-eye-slash "
                  onClick={hanldeChangeType1}
                  style={{
                    position:"relative",
                    left:"412px",
                    bottom:"39px",
                    cursor:"pointer"
                  }}
                />
              ) : (
                <i className="fa-regular fa-eye" onClick={hanldeChangeType1} style={{
                  position:"relative",
                  left:"412px",
                  bottom:"39px",
                  cursor:"pointer"
                }}/>
              )}

              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <p className={css["register-p"]} style={{position:"relative",
                  bottom:"25px"}}>
                    {formik.errors.confirmPassword} 
                  </p>
                )}
            </div>
          </div>
          <div className={css["register-right"]}>
            <div>
              <label htmlFor="Name" className={css["register-name"]}>
                Name
              </label>
              <br />
              <input
                type="text"
                placeholder="name"
                className={css["register-input"]}
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name && (
                <p className={css["register-p"]}>{formik.errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="Phone" className={css["register-name"]}>
                Phone
              </label>
              <br />
              <input
                // type="number"
                placeholder="phone"
                className={css["register-input"]}
                {...formik.getFieldProps("phone")}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className={css["register-p"]}>{formik.errors.phone}</p>
              )}
            </div>
            <div>
              <label htmlFor="Gender" className={css["register-name"]}>
                Gender
              </label>
              <ul className={css["register-ul"]}>
                <li className={css["register-male"]}>
                  <input
                    type="radio"
                    // name="selector"
                    // id="male"
                    className={css["register-selector"]}
                    {...formik.getFieldProps("gender")}
                  />
                  <label htmlFor="male">Male</label>
                </li>
                <li className={css["register-femail"]}>
                  <input
                    type="radio"
                    // name="selector"
                    // id="femail"
                    className={css["register-selector"]}
                    {...formik.getFieldProps("gender")}
                  />
                  <label htmlFor="femail">Femail</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={css["register-dk"]}>
          <button type="submit" className={css["register-button"]}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
