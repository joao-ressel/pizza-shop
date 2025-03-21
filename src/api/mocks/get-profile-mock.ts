import { http, HttpResponse } from "msw";
import { getProfileResponse } from "../get-profile";

export const getProfileMock = http.get<never, never, getProfileResponse>(
  "/me",
  () => {
    return HttpResponse.json({
      id: "customer-1",
      name: "John Doe",
      email: "johndo@gmailcom",
      phone: "(11) 99999-9999",
      role: "manager",
      createdAt: new Date(),
      updatedAt: null,
    });
  },
);
