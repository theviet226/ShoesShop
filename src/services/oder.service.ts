import { axiosWithoutAuth } from "./config.service";

export const placeOrder = async (orderDetail: Array<{ productId: string; quantity: number }>, email: string) => {
    try {
        const resp = await axiosWithoutAuth({
            method: "POST",
            url: "/Users/order", 
            data: {
                orderDetail,
                email,
            },
        });
        console.log(resp.data)
        return resp.data;
    } catch (error) {
        console.error(error);
    }
};
