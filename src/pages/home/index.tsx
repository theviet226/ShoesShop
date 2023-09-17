import  { useEffect } from "react";

import { getAllProduct } from "src/services/product.service";
import {  useDispatch } from "react-redux";
import HomeCarousel from "./home-carousel";
import ProductFeature from "./product-feature";

import { setListProduct } from "src/redux/slices/product.slice";

function Home() {
  // const listProduct = useAppSelector((state) => {
  //   return state.productReducer.listProduct;
  // });
  const dispatch = useDispatch();
  // console.log(listProduct)

  // call https://shop.cyberlearn.vn/api/Product

  useEffect(() => {

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
