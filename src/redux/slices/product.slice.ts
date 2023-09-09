import {createSlice} from "@reduxjs/toolkit";
import {TCardItem} from "src/types"


type TState = {
    listProduct :TCardItem[]
}
const initialState:TState = {
    listProduct: [],
};

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        //name + reducer :
        setListProduct: (state, action) => {
            //redux + immer: giúp chùng ta clone object, không cần quan tâm đến địa chỉ.
            //ko cần dùng return
            // console.log({action});
            state.listProduct = action.payload;
            //
        }
    }
})

export const {setListProduct} = productSlice.actions
export default productSlice.reducer;
