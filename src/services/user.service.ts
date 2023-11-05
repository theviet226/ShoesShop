import { TParamsRegister } from "src/pages/register";
import { axiosWithAuth, axiosWithoutAuth } from "./config.service";
import { getLocalStorage } from "src/utils";
import { ACCESS_TOKEN } from "src/constants";
import { TProfile } from "src/pages/profile";

export const userLogin = async (data: { email: string; password: string }) => {
  try {
    const resp = await axiosWithoutAuth({
      method: "POST",
      url:"/Users/signin",
      data,
    });
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
export const loginFacebookUser = async (data: { facebookToken: string }) => {
  try {
    const resp = await axiosWithoutAuth({
      method: "POST",
      url: "/Users/facebooklogin",
      data,
    });
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
export const signup = async (data: TParamsRegister) => {
  try {
    const resp = await axiosWithoutAuth({
      method: "POST",
      url: "/Users/signup",
      data,
    });
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
export const getUserProfile = async () =>{
  
  const resp = await axiosWithAuth({
      url: "/Users/getProfile",
      method:"POST",
  
  })
  
  return resp.data
}
export const getUpdateProfile = async (data:TProfile) =>{
    const resp = await axiosWithAuth({
      url:"/Users/updateProfile",
      method:"post",
      data
    })
    return resp.data
  
}