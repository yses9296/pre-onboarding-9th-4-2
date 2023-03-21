import { createBrowserRouter, Navigate } from "react-router-dom";
import PageLayout from "./layouts/PageLayout";
import AdminPage from "./pages/AdminPage";

import NotFoundPage from "./pages/NotFoundPage";

const Router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/admin" />,
      },
      {
        path: "/admin",
        element: <AdminPage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default Router;
