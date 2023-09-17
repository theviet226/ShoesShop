import { createSlice,PayloadAction  } from "@reduxjs/toolkit";
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
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.productId === newItem.productId
      );
      
      console.log(newItem.productId)
    
      if (existingItemIndex !== -1) {

        state.cartItems[existingItemIndex].quantity += newItem.quantity;
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
      state.cartItems = [];
    },
    updateItemQuantity: (state, action: PayloadAction<{ productId: number; quantity: number }>) => {
      const { productId, quantity } = action.payload;
      const productIndex = state.cartItems.findIndex(item => item.id === productId);
      if (productIndex !== -1) {
        state.cartItems[productIndex].quantity = quantity;
      }
    },
    
  },
});


export const { addToCart,clearCart,deleteItemCart,updateItemQuantity   } = cartSlice.actions;

export default cartSlice.reducer;
