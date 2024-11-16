import { createBrowserRouter } from "react-router-dom";
// import Layout from "../components/layout/Layout";
import HomePage from "../components/pages/HomePage";
// import HomePage from "../components/pages/HomePage";

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);
