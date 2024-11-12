import { api as index } from "..";
type getResponse = {
  id: number;
  name: string;
  author: string;
  image: string;
  created_date: string;
  updated_date: string;
};
type getRequest = void;

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getArticles: build.query<getResponse, getRequest>({
      query: () => ({
        url: "/articles/",
        method: "GET",
      }),
      providesTags: ["articles"],
    }),
  }),
});
export const { useGetArticlesQuery } = api;
