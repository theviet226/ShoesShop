export interface userProfile {
    ordersHistory: OrdersHistory[];
    email:         string;
    name:          string;
    password:      null;
    gender:        boolean;
    phone:         string;
    facebookId:    string;
    deleted:       boolean;
    avatar:        string;
    image:         string;
}

interface OrdersHistory {
    orderDetail: OrderDetail[];
    id:          number;
    date:        Date;
    status:      null;
    email:       string;
    alias:       string;
}

interface OrderDetail {
    name:             string;
    alias:            string;
    shortDescription: string;
    quantity:         number;
    price:            number;
    image:            string;
    description:      string;
}
