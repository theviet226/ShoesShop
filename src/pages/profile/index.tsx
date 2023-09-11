import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "src/redux/config-store";
import { setProfile, userProfile } from "src/redux/slices/userReducerLogin";
import { getUserProfile } from "src/services/user.service";

function Profile() {
  const { userProfile } = useSelector(
    (state: RootState) => state.userReducerLogin
  );

  const dispatch = useDispatch();
  const userFormProfile = useFormik({
    initialValues: {
      email: userProfile?.email || "",
      name: userProfile?.name || "",
      phone: userProfile?.phone || "",
      password: userProfile?.password || "",
      avatar: userProfile?.avatar || "",
    },
    onSubmit: (values: any) => {
      // Xử lý khi người dùng gửi biểu mẫu
    },
  });


  useEffect(() => {
    getUserProfile()
      .then((resp) => {
        const infoUser = resp.content
        if (resp) {
          dispatch(setProfile(infoUser));
          console.log(resp);
          userFormProfile.setValues({
            email: infoUser.email || "",
            name: infoUser.name || "",
            phone: infoUser.phone || "",
            password: infoUser.password || "",
            avatar: infoUser.avatar || "",
          });
        }
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div style={{ paddingTop: "30px" }}>
      <h3
        style={{
          fontFamily: "Inter",
          fontSize: "40px",
          fontWeight: "400",
          color: "#ffffff",
          background: " linear-gradient(180deg, #F21299 0%, #1B02B5 100%)",
          width: "575px",
        }}
      >
        Profile
      </h3>
      <div className="container">
        <div
          style={{
            margin: "30px 0",
          }}
        >
          <div className="row">
            <div className="col-4 text-center">
              <img
                src={userProfile?.avatar}
                onChange={userFormProfile.handleChange}
                onBlur={userFormProfile.handleBlur}
                className=" rounded-circle"
                width={200}
                height={200}
              // {...userFormProfile.getFieldProps('avtar')}
              />
            </div>
            <div className="col-8">
              <form>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <p
                        style={{
                          fontFamily: "Roboto",
                          fontSize: "18px",
                          fontWeight: "500",
                          color: "#00000099",
                        }}
                      >
                        Email
                      </p>
                      <input
                        className="form-control"
                        type="email"

                        style={{
                          height: "54px",
                          fontSize: "16px",
                          fontFamily: "Roboto",
                          fontWeight: "400",
                          color: "#000000DE",
                          background: "#21212114",
                        }}
                        value={userFormProfile?.values.email}
                      // onChange={userFormProfile.handleChange}
                      // onBlur={userFormProfile.handleBlur}
                      // {...userFormProfile.getFieldProps('email')}
                      />
                    </div>
                    <div className="form-group">
                      <p
                        style={{
                          fontFamily: "Roboto",
                          fontSize: "18px",
                          fontWeight: "500",
                          color: "#00000099",
                        }}
                      >
                        Phone
                      </p>
                      <input
                        className="form-control"
                        type="phone"
                        placeholder="Phone"
                        style={{
                          height: "54px",
                          fontSize: "16px",
                          fontFamily: "Roboto",
                          fontWeight: "400",
                          color: "#000000DE",
                          background: "#21212114",
                        }}
                        // value={userProfile?.phone}
                        // onChange={userFormProfile.handleChange}
                        // onBlur={userFormProfile.handleBlur}
                        {...userFormProfile.getFieldProps('phone')}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <p
                        style={{
                          fontFamily: "Roboto",
                          fontSize: "18px",
                          fontWeight: "500",
                          color: "#00000099",
                        }}
                      >
                        Name
                      </p>
                      <input
                        className="form-control"
                        type="name"
                        placeholder="Name"
                        style={{
                          height: "54px",
                          fontSize: "16px",
                          fontFamily: "Roboto",
                          fontWeight: "400",
                          color: "#000000DE",
                          background: "#21212114",
                        }}
                        // value={userProfile?.name}
                        // onChange={userFormProfile.handleChange}
                        // onBlur={userFormProfile.handleBlur}
                        {...userFormProfile.getFieldProps('name')}
                      />
                    </div>
                    <div className="form-group">
                      <p
                        style={{
                          fontFamily: "Roboto",
                          fontSize: "18px",
                          fontWeight: "500",
                          color: "#00000099",
                        }}
                      >
                        Password
                      </p>
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        style={{
                          height: "54px",
                          fontSize: "16px",
                          fontFamily: "Roboto",
                          fontWeight: "400",
                          color: "#000000DE",
                          background: "#21212114",
                        }}

                        // value={
                        //   userProfile?.password ? userProfile?.password : "123"
                        // }
                        // onChange={userFormProfile.handleChange}
                        // onBlur={userFormProfile.handleBlur}
                        {...userFormProfile.getFieldProps('password')}
                      />
                    </div>
                    <div className="form-group d-flex ">
                      <div className="text-right w-25 mt-5">
                        <button
                          type="submit"
                          className="btn"
                          style={{
                            background: "#6200EE",
                            color: "#eeeeee",
                            width: "121px",
                            height: "48px",
                            fontSize: "20px",
                            borderRadius: "50px",
                            fontWeight: "500",
                            fontFamily: "Roboto",
                          }}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <ul>
            <li
              style={{
                display: "inline",
                padding: "0 15px",
                fontSize: "32px",
                fontWeight: "400",
                fontFamily: "Inter",
                borderLeft: "solid 1px #DEDDDC",
                borderBottom: "solid 1px #DEDDDC",
                borderRight: "solid 1px #DEDDDC",
              }}
            >
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#DD2AED",
                  padding: "0 20px",
                  margin: "10px 0",
                }}
              >
                Order history
              </a>
            </li>
            <li
              style={{
                display: "inline",
                padding: "0 15px",
                fontSize: "32px",
                fontWeight: "400",
                fontFamily: "Inter",
                borderBottom: "solid 1px #DEDDDC",
                borderRight: "solid 1px #DEDDDC",
              }}
            >
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#000000",
                  padding: "0 30px",
                  margin: "10px 0",
                }}
              >
                Favourite
              </a>
            </li>
          </ul>
        </div>
        <div
          style={{
            padding: "40px 0",
          }}
        >
          <p
            style={{
              fontFamily: "Roboto",
              fontSize: "20px",
              fontWeight: "400",
              color: "#cb0dc3",
            }}
          >
            + Orders have been placed on 09 - 19 - 2020
          </p>
          <div className="table">
            <table className="table" style={{ border: "transparent" }}>
              <thead className="table-secondary">
                <tr
                  style={{
                    border: "transparent",
                    fontFamily: "Inter",
                    fontSize: "20px",
                    textAlign: "center",
                  }}
                >
                  <td scope="col">ID</td>
                  <td scope="col">Img</td>
                  <td scope="col">Name</td>
                  <td scope="col">Price</td>
                  <td scope="col">Quantity</td>
                  <td scope="col">Total</td>
                </tr>
              </thead>
              <tr style={{ textAlign: "center" }}>
                <td>1</td>
                <td>
                  <img
                    src="https://i.pravatar.cc"
                    style={{
                      width: "75px",
                      height: "75px",
                    }}
                    alt=""
                  />
                </td>
                <td>Product 1</td>
                <td>1000</td>
                <td>1</td>
                <td>1000</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
