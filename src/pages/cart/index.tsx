import React from "react";
import css from "./cart.module.scss";
function Cart() {
  return (
    <>
      <div className={css["cart-cart"]}>
        <div className={css["cart-header"]}>
          <p className={css["cart-title"]}>Cart</p>
          <hr className={css["cart-hr"]} />
        </div>
        <div className={css["cart-table"]}>
          <table className="table align-middle ">
            <thead
              className="table-secondary align-middle"
              style={{
                border: "transparent",
                textAlign: "center",
                fontSize: "20px",
                lineHeight: "24.2px",
                height: "50px",
                alignItems: "center",
              }}
            >
              <tr>
                <td scope="col"><i className="fa-solid fa-square-check" style={{color:"#6200EE"}}></i></td>
                <td scope="col">ID</td>
                <td scope="col">Img</td>
                <td scope="col">Name</td>
                <td scope="col">Price</td>
                <td scope="col">Quantity</td>
                <td scope="col">Total</td>
                <td scope="col">Action</td>
              </tr>
            </thead>
            <tbody
              className="align-middle"
              style={{
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              
                <th scope="row"><i className="fa-solid fa-square-check" style={{color:"#6200EE"}}></i></th>
                <td>1</td>
                <td>
                  <img
                    src="../../assets/images/pro1.png"
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>
                <td>product1</td>
                <td>100$</td>
                <td>
                  <button
                    className="me-3 btn"
                    style={{
                      boxShadow: "0px 5px 5px 0px #00000033",
                      backgroundColor: "#6200EE",
                      border:"transparent",
                      width:"40px",
                      height:"31px",
                      color:"#ffffff",
                      fontSize:"14px",
                      cursor:"pointer"
                    }}
                  >
                    +
                  </button>
                  <span className="px-5" style={{
                    backgroundColor:"#D9D9D9",
                    width:"80px",
                    fontSize:"20px"
                  }}>1</span>
                  <button className="ms-3 btn" style={{
                      boxShadow: "0px 5px 5px 0px #00000033",
                      backgroundColor: "#6200EE",
                      border:"transparent",
                      width:"40px",
                      height:"31px",
                      color:"#ffffff",
                      fontSize:"14px",
                      cursor:"pointer"
                      
                    }}>-</button>
                </td>
                <td>100$</td>
                <td>
                  <button className="btn me-3" style={{
                    boxShadow: "0px 5px 5px 0px #00000033",
                    width:"80px",
                    height:"36px",
                    color:"#ffffff",
                    backgroundColor:"#6200EE",
                    fontSize:"14px",
                    fontWeight:"500",
                    cursor:"pointer"
                  }}>Edit</button>
                  <button className="btn ms-3"  style={{
                    boxShadow: "0px 5px 5px 0px #00000033",
                    width:"80px",
                    height:"36px",
                    color:"#ffffff",
                    backgroundColor:"#EB5757",
                    fontSize:"14px",
                    fontWeight:"500",
                    cursor:"pointer"
                  }}>Delete</button>
                </td>
              
            </tbody>
            <tfoot className="align-middle" style={{
              textAlign:"center",
              height:"31px"
            }}>
                  
                <td colSpan={7}></td>
                <td >
                  <button className="btn" style={{
                    fontSize:"14px",
                    fontWeight:"500",
                    backgroundColor:"#F2994A",
                   
                    color:"#FFFFFF",
                    width:"152px",
                    height:"41px",
                    boxShadow: "0px 5px 5px 0px #00000033"
                  }}>SUBMIT ORDER</button>
                </td>
              
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
}

export default Cart;
