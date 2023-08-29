import {createSlice} from "@reduxjs/toolkit";

const initialState = {
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
            console.log({action});
            state.listProduct = action.payload;
            //
        }
    }
})

export default productSlice.reducer;