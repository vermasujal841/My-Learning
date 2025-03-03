import { apiSlice } from "../api/apiSlice";

export const ordersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: (type) => ({
        url: `get-orders`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    createOrder: builder.mutation({
      query: ({ courseId }) => ({
        url: "create-order",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ courseId}), 
        credentials: "include" as const,
      }),
    }),
  }),
});

export const { useGetAllOrdersQuery,useCreateOrderMutation} =
  ordersApi;