import { GetOrdersDetailsParams, GetOrdersDetailsResponse } from '../get-order-details';
import { http, HttpResponse } from "msw";

export const getOrderDetailsMock = http.get<GetOrdersDetailsParams, never, GetOrdersDetailsResponse>(
  "/orders/:orderId",
  ({params}) => {
    return HttpResponse.json({
     id: params.orderId,
     customer:{
       name: "John Doe",
       email: "johndo@gmailcom",
       phone: "(11) 99999-9999",
      },
      status: "pending",
      createdAt: new Date().toISOString(),
      totalInCents: 5000,
     orderItems: [
       {
        id: 'order-item-1',
        priceInCents: 1000,
        quantity: 1,
        product: {name: "Pizza Pepperoni"},
       },
       {
        id: 'order-item-1',
        priceInCents: 2000,
        quantity: 2,
        product: {name: "Pizza Marguerita"},
       }
     ]
    });
  },
);
