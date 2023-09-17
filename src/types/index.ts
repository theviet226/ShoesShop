export type TCardItem = {
    productId: any;
    id: number;
    name: string;
    alias: string;
    price: number;
    description: string;
    size: string;
    shortDescription: string;
    quantity: number;
    deleted: boolean;
    categories: string;
    relatedProducts: string;
    feature: boolean;
    image: string;
  };

  export type TUserInfo = {
    id: number;
    username: string;
    email: string;
    sdt:string;
    // Thêm các trường thông tin khác của người dùng nếu cần
  };
  export type TUser = {
    email:string
    accessToken:string
  }