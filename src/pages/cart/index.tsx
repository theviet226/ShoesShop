import React, { useEffect, useState } from "react";
import css from "./cart.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setLocalStorage, getLocalStorage } from "src/utils";
import { deleteItemCart,updateItemQuantity  } from "src/redux/slices/cart.slice";
import { ACCESS_TOKEN } from "src/constants";
import { RootState } from "src/redux/config-store";
type TPrams = {
  productId: string;
};

function Cart() {
  const dispatch = useDispatch();
  const params = useParams<TPrams>();
  const cartItems = useSelector((state: RootState) => state.cartReducer.cartItems);
  const [quantity, setQuantity] = useState<number[]>(cartItems.map(item => item.quantity));
  const [totalPrice, setTotalPrice] = useState<number[]>(cartItems.map(item => item.price * item.quantity));
  const totalAmount = totalPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


  const handleDelete = (productId: number) => {
    console.log("Deleting product with ID:", productId);
    dispatch(deleteItemCart(params.productId));
  };

  const handleIncreaseQuantity = (index: number) => {
    // Tăng số lượng sản phẩm và cập nhật giá tiền
    const updatedQuantity = [...quantity];
    const updatedTotalPrice = [...totalPrice];

    updatedQuantity[index]++;
    updatedTotalPrice[index] = cartItems[index].price * updatedQuantity[index];

    setQuantity(updatedQuantity);
    setTotalPrice(updatedTotalPrice);

    // Dispatch action để cập nhật số lượng sản phẩm trong Redux
    dispatch(updateItemQuantity({ productId: cartItems[index].id, quantity: updatedQuantity[index] }));
  };
  const handleDecreaseQuantity = (index: number) => {
    // Giảm số lượng sản phẩm và cập nhật giá tiền
    if (quantity[index] > 1) {
      const updatedQuantity = [...quantity];
      const updatedTotalPrice = [...totalPrice];

      updatedQuantity[index]--;
      updatedTotalPrice[index] = cartItems[index].price * updatedQuantity[index];

      setQuantity(updatedQuantity);
      setTotalPrice(updatedTotalPrice);

      // Dispatch action để cập nhật số lượng sản phẩm trong Redux
      dispatch(updateItemQuantity({ productId: cartItems[index].id, quantity: updatedQuantity[index] }));
    }
  };


  // Cập nhật Local Storage mỗi khi giỏ hàng thay đổi
  useEffect(() => {
    setLocalStorage("cart", cartItems);
  }, [cartItems]);

  return (
    <>
      <div className="container">
        <div className={css["cart-cart"]}>
          <div className={css["cart-header"]}>
            <p className={css["cart-title"]}>Cart</p>
            <hr className={css["cart-hr"]} />
          </div>
          <div className={css["cart-table"]}>
            <table className="table align-middle">
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
                  <td scope="col">
                    <i
                      className="fa-solid fa-square-check"
                      style={{ color: "#6200EE" }}
                    ></i>
                  </td>
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
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">
                      <i
                        className="fa-solid fa-square-check"
                        style={{ color: "#6200EE" }}
                      ></i>
                    </th>
                    <td>{index + 1}</td>
                    <td>
                      <img src={item.image} style={{ width: "100px", height: "100px" }} alt={item.name} />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}$</td>
                    <td>
                      <button
                        className="me-3 btn"
                        style={{
                          boxShadow: "0px 5px 5px 0px #00000033",
                          backgroundColor: "#6200EE",
                          border: "transparent",
                          width: "40px",
                          height: "31px",
                          color: "#ffffff",
                          fontSize: "14px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleDecreaseQuantity(index)}
                      >
                        -
                      </button>
                      <span
                        className="px-5"
                        style={{
                          backgroundColor: "#D9D9D9",
                          width: "80px",
                          fontSize: "20px",
                        }}
                      >
                        {quantity[index]}
                      </span>
                      <button
                        className="ms-3 btn"
                        style={{
                          boxShadow: "0px 5px 5px 0px #00000033",
                          backgroundColor: "#6200EE",
                          border: "transparent",
                          width: "40px",
                          height: "31px",
                          color: "#ffffff",
                          fontSize: "14px",
                          cursor: "pointer",
                        }}

                        onClick={() => handleIncreaseQuantity(index)}
                      >
                        +
                      </button>
                    </td>
                    <td>{totalPrice[index]}$</td>
                    <td>
                      <button
                        className="btn ms-3"
                        style={{
                          boxShadow: "0px 5px 5px 0px #00000033",
                          width: "80px",
                          height: "36px",
                          color: "#ffffff",
                          backgroundColor: "#EB5757",
                          fontSize: "14px",
                          fontWeight: "500",
                          cursor: "pointer",
                        }}
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot
                className="align-middle"
                style={{
                  textAlign: "center",
                  height: "31px",
                }}
              >
                 <td colSpan={7}></td>
          <td>
            <div>
              Total: {totalAmount}$ {/* Hiển thị tổng giá tiền */}
            </div>
            <button
              className="btn"
              style={{
                fontSize: "14px",
                fontWeight: "500",
                backgroundColor: "#F2994A",
                color: "#FFFFFF",
                width: "152px",
                height: "41px",
                boxShadow: "0px 5px 5px 0px #00000033",
              }}
            >
              SUBMIT ORDER
            </button>
          </td>

              </tfoot>
            </table>
          </div>
        </div>



      </div>



    </>
  );
}

export default Cart;
