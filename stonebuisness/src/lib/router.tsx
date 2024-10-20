import App from "@/App";
import { AdminDashboardLayout } from "@/components/AdminDashboard";
import { Layout } from "@/components/Layout";
import About from "@/pages/About";
import Login from "@/pages/auth/login";
import ProductDetails from "@/pages/auth/product/ProductDetails";
import Register from "@/pages/auth/register";
import BusinessAndProducts from "@/pages/BusinessAndProducts";
import ContactPage from "@/pages/Contact";
import Management from "@/pages/Management";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/management",
        element: <Management />,
      },
      {
        path: "/business",
        element: <BusinessAndProducts />,
      },
      {
        path: "/business/product/:name",
        element: <ProductDetails />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminDashboardLayout />,
  },
]);

export default router;
