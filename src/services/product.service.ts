import { axiosWithoutAuth } from "src/services/config.service";

 export const getAllProduct = async () => {
    const resp = await axiosWithoutAuth("/product")
    console.log(resp)
    return resp.data;
  }