import { http, HttpResponse } from "msw";
import { ApproveOrderParams } from "../approve-order";

export const approveOrderMock = http.patch<ApproveOrderParams, never, never>(
  "/orders/:orderId/approve",
  ({ params }) => {
    if (params.orderId === "error-order-1") {
      return new HttpResponse(null, { status: 400 });
    }
    return new HttpResponse(null, { status: 204 });
  },
);
