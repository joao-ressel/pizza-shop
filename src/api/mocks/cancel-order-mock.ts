import { http, HttpResponse } from "msw";
import { CancelOrderParams } from "../cancel-order";

export const cancelOrderMock = http.patch<CancelOrderParams, never, never>(
  "/orders/:orderId/cancel",
  ({ params }) => {
    if (params.orderId === "error-order-1") {
      return new HttpResponse(null, { status: 400 });
    }
    return new HttpResponse(null, { status: 204 });
  },
);
