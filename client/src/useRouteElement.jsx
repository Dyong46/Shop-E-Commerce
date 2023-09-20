import { useRoutes } from 'react-router-dom';
import path from './constants/path';
import { Fragment, Suspense, lazy } from 'react';

// Layouts
import { CartLayout, MainLayout, RegisterLayout } from './layouts';

// Pages
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Cart = lazy(() => import('./pages/Cart'));
const UserLayout = lazy(() => import('./pages/User/layouts/UserLayout'));
const Profile = lazy(() => import('./pages/User/pages/Profile'));
const ChangePassword = lazy(() => import('./pages/User/pages/ChangePassword'));
const HistoryPurchase = lazy(() => import('./pages/User/pages/HistoryPurchase'));
const ProductDetail = lazy(() => import('./pages/Details'));
const Product = lazy(() => import('./pages/Home/components/Product'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const UseRouteElement = () => {
  const routeElements = useRoutes([
    {
      path: '',
      element: <Fragment />,
      children: [
        {
          path: '',
          element: <RegisterLayout />,
          children: [
            {
              path: path.login,
              element: (
                <Suspense>
                  <Login />
                </Suspense>
              ),
            },
            {
              path: path.register,
              element: (
                <Suspense>
                  <Register />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
    {
      path: '',
      element: <Fragment />,
      children: [
        {
          path: path.cart,
          element: (
            <CartLayout>
              <Suspense>
                <Cart />
              </Suspense>
            </CartLayout>
          ),
        },
        {
          path: path.user,
          element: <UserLayout />,
          children: [
            {
              path: '',
              element: (
                <Suspense>
                  <Profile />
                </Suspense>
              ),
            },
            {
              path: path.changePassword,
              element: (
                <Suspense>
                  <ChangePassword />
                </Suspense>
              ),
            },
            {
              path: path.historyPurchase,
              element: (
                <Suspense>
                  <HistoryPurchase />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: path.productDetail,
          element: (
            <Suspense>
              <ProductDetail />
            </Suspense>
          ),
        },
        {
          path: '',
          // index: true,
          element: (
            <Suspense>
              <Product />
            </Suspense>
          ),
        },
        {
          path: '*',
          element: (
            <Suspense>
              <NotFound />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return routeElements;
};

export default UseRouteElement;
