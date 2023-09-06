import { axiosWithoutAuth } from "./config.service";

export const userLogin = async(data:{email:string;password:string}) =>{
    try {
        const resp = await axiosWithoutAuth({
            method:"post",
            url:'/Users/signin',
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
            method:"post",
            url:'/Users/facebooklogin',
            data
        })
        return resp.data
    } catch (error) {
        console.log(error)
    }
}