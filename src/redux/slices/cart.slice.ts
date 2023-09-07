import { createSlice } from "@reduxjs/toolkit";
import { TCardItem } from "src/types"

type TState = {
    cartItems: TCardItem[]
}

const initialState: TState = {
    cartItems: [],
};

// Thay đổi reducer của giỏ hàng
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addToCart: (state, action) => {
        const newItem = action.payload;
        const existingItem = state.cartItems.find(
          (item) => item.id === newItem.productId
        );
  
        if (existingItem) {
          // Tạo một bản sao của sản phẩm đã tồn tại trong giỏ hàng
          const updatedItem = { ...existingItem };
          // Thay đổi số lượng trong sản phẩm đã tồn tại
          updatedItem.quantity += newItem.quantity;
  
          // Tìm và cập nhật sản phẩm đã tồn tại trong mảng giỏ hàng
          state.cartItems = state.cartItems.map((item) =>
            item.id === newItem.productId ? updatedItem : item
          );
        } else {
          // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm mới vào mảng
          state.cartItems.push(newItem);
        }
      },
      // Các reducers khác liên quan đến giỏ hàng
    },
  });
  

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
