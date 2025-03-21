import { env } from "@/env";
import { setupWorker } from "msw/browser";

import { signInMock } from "./sign-in-mock";
import { registerRestaurantMock } from "./register-restaurant-mock";
import { getDayOrdersAmountMock } from "./get-day-orders-amount";
import { getMonthCanceledOrdersAmountMock } from "./get-month-canceled-orders-amount";
import { getMonthRevenueMock } from "./get-month-revenue-in-period";
import { getMonthOrdersAmountMock } from "./get-month-orders-amount";
import { getDailyRevenueInPeriodMock } from "./get-daily-revenue-in-period";
import { getPopularProductsMock } from "./get-popular-products-mock";
import { updateProfileMock } from "./update-profile-mock";
import { getManagedRestaurantMock } from "./get-managed-restaurant-mock";

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
);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }
  await worker.start();
}
