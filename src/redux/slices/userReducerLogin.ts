import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PROFILE, USER_LOGIN } from "src/constants";

import { getLocalStorage } from "src/utils";
export interface userProfile {
    ordersHistory: OrdersHistory[];
    email: string;
    name: string;
    password: null;
    gender: boolean;
    phone: string;
    facebookId: string;
    deleted: boolean;
    avatar: string;
    image: string;
}

export interface OrdersHistory {
    orderDetail: OrderDetail[];
    id: number;
    date: Date;
    status: null;
    email: string;
    alias: string;
}

export interface OrderDetail {
    name: string;
    alias: string;
    shortDescription: string;
    quantity: number;
    price: number;
    image: string;
    description: string;
}




export interface UserLoginResult {
    email: string,
    accessToken: string
}
export interface UserState {
    userLogin: UserLoginResult | null
    userProfile: userProfile | null
}
const initialState: UserState = {
    userLogin: getLocalStorage(USER_LOGIN) || null,
    userProfile: getLocalStorage(PROFILE) || null
}

const userReducerLogin = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        setLogin: (state: UserState, action: PayloadAction<UserLoginResult>) => {
            state.userLogin = action.payload
        },
        clearUser: (state) => {
            state.userLogin
        },
        setProfile: (state: UserState, action: PayloadAction<userProfile>) => {
            state.userProfile = action.payload
        },
        updateOrderHistory: (state: UserState, action: PayloadAction<OrdersHistory[]>) => {
            if (state.userProfile) {
              state.userProfile.ordersHistory = action.payload;
            }
          },
    },
})


export const { setLogin, clearUser, setProfile,updateOrderHistory  } = userReducerLogin.actions
export default userReducerLogin.reducer

