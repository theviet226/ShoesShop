import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { USER_LOGIN } from "src/constants";
import { userLogin } from "src/services/user.servie";
import { getLocalStorage, setLocalStorage} from "src/utils";


export interface UserLoginResult {
    email:string,
    accessToken:string
}
export interface UserState {
    userLogin: UserLoginResult | null
}
const initialState:UserState={
    userLogin: getLocalStorage(USER_LOGIN) || null
}

const userReducerLogin = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        setLogin:(state:UserState,action:PayloadAction<UserLoginResult>) =>{
            state.userLogin = action.payload
        },
        clearUser: (state) =>{
            state.userLogin
        }
    },
})


export const {setLogin,clearUser} = userReducerLogin.actions
export default userReducerLogin.reducer