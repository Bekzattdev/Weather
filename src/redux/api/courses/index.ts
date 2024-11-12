import { api as index } from "..";
type getResponse = {
  id: number;
  name: string;
  author: string;
  price: number;
  image: string;
  description: string;
  city: string;
  created_date: string;
  updated_date: string;
};
type getRequest = void;

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getCourses: build.query<getResponse, getRequest>({
      query: () => ({
        url: "/courses/",
        method: "GET",
      }),
      providesTags: ["courses"],
    }),
  }),
});
export const { useGetCoursesQuery } = api;
