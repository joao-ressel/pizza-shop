import { http, HttpResponse } from "msw";
import { DispatchOrderParams } from "../dispatch-order";

export const dispatchOrderMock = http.patch<DispatchOrderParams, never, never>(
  "/orders/:orderId/dispatch",
  ({ params }) => {
    if (params.orderId === "error-order-1") {
      return new HttpResponse(null, { status: 400 });
    }
    return new HttpResponse(null, { status: 204 });
  },
);
