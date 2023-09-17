import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "./detail.type";
import { getProductById } from "src/services/product.service";
import ListCard from "src/components/list-card";
import css from "./detail.module.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "src/redux/slices/cart.slice";
import { getLocalStorage } from "src/utils";
import { ACCESS_TOKEN } from "src/constants";
import { useNavigate } from "react-router-dom";


type TPrams = {
  productId: string;
};
function Detail() {
  const params = useParams<TPrams>();
  const [productItem, setProductItem] = useState<IProduct>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUserLoggedIn = !!getLocalStorage(ACCESS_TOKEN);
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = () => {
    if (isUserLoggedIn) { // Kiểm tra nếu ACCESS_TOKEN tồn tại
      const productToAdd = {
        productId: productItem?.id,
        name: productItem?.name,
        price: productItem?.price,
        quantity: quantity,
        image: productItem?.image,
      };
      dispatch(addToCart(productToAdd));
    } else {
      alert("Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng.");
      navigate("/login")
    }
  };
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
  const handleIncreaseQuantity = () => {
    // Hàm tăng số lượng
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    // Hàm giảm số lượng (đảm bảo số lượng không nhỏ hơn 1)
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <div className={css["detail-product"]}>
        <div className="image">
          <img
            style={{
              width: 600,
              height: 600,
              backgroundColor: "#F8F8F8",
              alignItems:"center"
            }}
            src={productItem?.image}
          />
        </div>
        <div className={css["content"]}>
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
          <button className={css["content-cart"]} onClick={handleIncreaseQuantity}>+</button>
          <p className={css["content-quality"]}>{quantity}</p>
          <button className={css["content-cart"]} onClick={handleDecreaseQuantity}>-</button>
          <br />
          <button className={css["content-buy"]} onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>

      </div>
      <div>
        <h2 className={css["product-title"]}>-- Relate Product --</h2>
        {productItem?.relatedProducts && (
          <ListCard list={productItem.relatedProducts} />
        )}
      </div>
    </div>
  );
}

export default Detail;
