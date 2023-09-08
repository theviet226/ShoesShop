// user.slice.ts
import { createSlice } from "@reduxjs/toolkit";
import { TUserInfo } from "src/types"; 

interface TState {
  userInfo: TUserInfo | null;
}

const initialState: TState = {
  userInfo: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    clearUserInfo: (state) => {
      state.userInfo = null;
    },
  },
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;
export default userSlice.reducer;
