import { Navigate, Outlet, useRoutes } from "react-router-dom";

// Comp
import SignIn from "layouts/authentication/sign-in";
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Products from "layouts/products";
import OrderDetail from "layouts/orderDetail";
import { useMaterialUIController } from "context";

function ProtectedRoute() {
  const [controller] = useMaterialUIController();
  const { isAuthenticated } = controller;
  return isAuthenticated ? <Outlet /> : <Navigate to="/authentication/sign-in" />;
}

function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext);
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

const UseRouteElement = () => {
  const routeElements = useRoutes([
    {
      path: "/authentication/sign-in",
      element: <SignIn />,
    },
    {
      path: "",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/orders",
          element: <Tables />,
        },
        {
          path: "/orders/:orderId",
          element: <OrderDetail />,
        },
        {
          path: "/products",
          element: <Products />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/dashboard" />,
    },
  ]);
  return routeElements;
};

export default UseRouteElement;
