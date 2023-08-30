import React, { useEffect } from "react";

import { getAllProduct } from "src/services/product.service";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const listProduct = useSelector((state: any) => {
    state.productReducer.listProduct;
  });
  const dispatch = useDispatch();
  // console.log(listProduct)

  // call https://shop.cyberlearn.vn/api/Product

  useEffect(() => {
    // const resp = getAllProduct();
    // //getAllProduct là function async nên giá trị trả về luôn là một promise
    // resp.then((resp) => {
    //   console.log(resp);
    // });
    /**Cách 1: mong muốn sử dụng async */
    // const get = async () =>{
    //   const resp = await getAllProduct();
    // };
    //Cách 2 : mong muốn sử dụng async await = IIFE
    (async () => {
      const resp = await getAllProduct();
      // console.log(resp);
      const action = {
        type: "productSlice/setListProduct",
        payload: resp.content,
      };
      dispatch(action);
    })();
  }, []);
  return (
    <div>
Home
    </div>
  );
}

export default Home;
