import { api as index } from "..";
type getResponse = {
  id: number;
  name: string;
  description: string;
  created_date: string;
};
type getRequest = void;

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getFreeWorkShops: build.query<getResponse, getRequest>({
      query: () => ({
        url: "/freeworkshops/",
        method: "GET",
      }),
      providesTags: ["freeworkshops"],
    }),
  }),
});
export const { useGetFreeWorkShopsQuery } = api;
