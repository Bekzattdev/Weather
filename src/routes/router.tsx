import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // children: [
      //   {
      //     path: "/",
      //     element: <Header />,
      //   },
      //   {
      //     path: "/about",
      //     element: <Footer />,
      //   },
      // ],
    },
  ]);
