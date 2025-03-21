import { http, HttpResponse } from "msw";
import { getManagedRestaurantResponse } from "../get-managed-restaurant";

export const getManagedRestaurantMock = http.get<
  never,
  never,
  getManagedRestaurantResponse
>("/managed-restaurant", () => {
  return HttpResponse.json({
    managerId: "customer-1",
    id: "customer-1",
    name: "Pizza Shop",
    description: "descrição do restaurante",
    createdAt: new Date(),
    updatedAt: null,
  });
});
