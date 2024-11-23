import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import ErrorPage from "../ui/error/ErrorPage";

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
