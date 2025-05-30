import { env } from "@/env";
import { setupWorker } from "msw/browser";

import { signInMock } from "./sign-in-mock";
import { getOrdersMock } from "./get-orders-mock";
import { registerRestaurantMock } from "./register-restaurant-mock";
import { getDayOrdersAmountMock } from "./get-day-orders-amount";
import { getMonthRevenueMock } from "./get-month-revenue-in-period";
import { getMonthOrdersAmountMock } from "./get-month-orders-amount";
import { getDailyRevenueInPeriodMock } from "./get-daily-revenue-in-period";
import { updateProfileMock } from "./update-profile-mock";
import { getPopularProductsMock } from "./get-popular-products-mock";
import { getManagedRestaurantMock } from "./get-managed-restaurant-mock";
import { getMonthCanceledOrdersAmountMock } from "./get-month-canceled-orders-amount";
import { getOrderDetailsMock } from "./get-order-details-mock";
import { cancelOrderMock } from "./cancel-order-mock";
import { deliverOrderMock } from "./deliver-order-mock";
import { approveOrderMock } from "./approve-order-mock";
import { dispatchOrderMock } from "./dispatch-order-mock";

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  registerRestaurantMock,
  updateProfileMock,
  getManagedRestaurantMock,
  getOrdersMock,
  getOrderDetailsMock,
  cancelOrderMock,
  deliverOrderMock,
  approveOrderMock,
  dispatchOrderMock
);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }
  await worker.start();
}
