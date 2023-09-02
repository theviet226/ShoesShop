import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "./detail.type";
import { getProductById } from "src/services/product.service";
import ListCard from "src/components/list-card";
import css from "./detail.module.scss"

type TPrams = {
  productId: string;
};
function Detail() {
  const params = useParams<TPrams>();
  const [productItem, setProductItem] = useState<IProduct>();
  useEffect(() => {
    if (!params.productId) return;
    getProductById(params.productId)
      .then((resp) => {
        console.log(resp);
        setProductItem(resp.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.productId]);
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [params.productId]);
    return (
    <div>
      <div className={css["detail-product"]}>
        <div className="image">
          <img
            style={{
              width: 400,
              height: 400,
              backgroundColor: "#F8F8F8"
            }}
            src={productItem?.image}
          />
        </div>
        <div className="content">
          <p className={css["content-name"]}>{productItem?.name}</p>
          <p className={css["content-title"]}>{productItem?.description}</p>
          <p className={css["content-size"]}>Available size</p>
          <br />
          <button className={css["content-button"]}>36</button>
          <button className={css["content-button"]}>37</button>
          <button className={css["content-button"]}>38</button>
          <button className={css["content-button"]}>39</button>
          <button className={css["content-button"]}>40</button>
          <button className={css["content-button"]}>41</button>
          <button className={css["content-button"]}>42</button>
          <br />
            <p className={css["content-price"]}>{productItem?.price}$</p>
            <button className={css["content-cart"]}>+</button>
            <p className={css["content-quality"]}>1</p>
            <button className={css["content-cart"]}>-</button>
            <br />
            <button className={css["content-buy"]}>Add to cart</button>
        </div>
        
      </div>
      <div>
        <h2>-- Relate Product --</h2>
        {productItem?.relatedProducts && (
          <ListCard list={productItem.relatedProducts} />
        )}
      </div>
    </div>
  );
}

export default Detail;
