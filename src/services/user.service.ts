import { TParamsRegister } from "src/pages/register";
import { axiosWithoutAuth } from "./config.service";

export const userLogin = async(data:{email:string;password:string}) =>{
    try {
        const resp = await axiosWithoutAuth({
            method:"POST",
            url:'/api/Users/signin',
            data
        })
        return resp.data
    } catch (error) {
        console.log(error)
    }
}
export const loginFacebookUser = async(data:{facebookToken:string}) =>{
    try {
        const resp = await axiosWithoutAuth({
            method:"POST",
            url:'/Users/facebooklogin',
            data
        })
        return resp.data
    } catch (error) {
        console.log(error)
    }
}
export const signup = async(data:TParamsRegister) =>{
    try {
        const resp = await axiosWithoutAuth({
            method:'POST',
            url:'/Users/signup',
            data,
        })
        return resp.data
    } catch (error) {
        console.log(error)
    }
}