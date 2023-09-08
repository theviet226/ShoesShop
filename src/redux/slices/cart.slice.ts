import { createSlice } from "@reduxjs/toolkit";
import { TCardItem } from "src/types"

type TState = {
  cartItems: TCardItem[]
}

const initialState: TState = {
  cartItems: [],
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      console.log("first",action.payload)
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.productId
      );
      if (existingItem) {
        const updatedItem = { ...existingItem };
        updatedItem.quantity += newItem.quantity;
        state.cartItems = state.cartItems.map((item) =>
          item.id === newItem.productId ? updatedItem : item
        );
      } else {
        state.cartItems.push(newItem);
      }
    },
    deleteItemCart: (state, action) => {
      const productIdToDelete = action.payload;
      console.log("2",action.payload)
      console.log("id:",productIdToDelete)
      const remainingItems = state.cartItems.filter(
        (item) => item.id !== productIdToDelete
      );
      state.cartItems = [...remainingItems];
    },
    clearCart: (state) => {
      // Xoá toàn bộ giỏ hàng
      state.cartItems = [];
    },
    
  },
});


export const { addToCart,clearCart,deleteItemCart  } = cartSlice.actions;

export default cartSlice.reducer;
