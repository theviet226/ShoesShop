import React, { useEffect } from "react";

import { getAllProduct } from "src/services/product.service";
import { useSelector, useDispatch } from "react-redux";
import HomeCarousel from "./home-carousel";
import ProductFeature from "./product-feature";
import { useAppSelector } from "src/redux/config-store";
import { setListProduct } from "src/redux/slices/product.slice";

function Home() {
  const listProduct = useAppSelector((state) => {
    return state.productReducer.listProduct;
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
      const action = setListProduct(resp.content);
      dispatch(action);
    })();
  }, []);
  return (
    <div>
      <HomeCarousel />
      <ProductFeature />
    </div>
  );
}

export default Home;
