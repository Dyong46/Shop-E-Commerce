import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import path from './constants/path';
import { Suspense, lazy, useContext } from 'react';

// Layouts
import { CartLayout, MainLayout, RegisterLayout } from './layouts';
import { AppContext } from './contexts/app.contexts';
import Home from './pages/Home';
import Order from './pages/Order';
import Address from './pages/User/pages/Address';

// Pages
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Cart = lazy(() => import('./pages/Cart'));
// const UserLayout = lazy(() => import('./pages/User/layouts/UserLayout'));
const Profile = lazy(() => import('./pages/User/pages/Profile'));
const ChangePassword = lazy(() => import('./pages/User/pages/ChangePassword'));
const HistoryPurchase = lazy(() => import('./pages/User/pages/HistoryPurchase'));
const ProductDetail = lazy(() => import('./pages/ProductDeatail'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)

  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

const UseRouteElement = () => {
  const routeElements = useRoutes([
    {
      path: '',
      element: <RejectedRoute />,
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
      element: <ProtectedRoute />,
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
          path: path.order,
          element: (
            <CartLayout>
              <Suspense>
                <Order />
              </Suspense>
            </CartLayout>
          ),
        },
        {
          path: path.user,
          element: <MainLayout />,
          children: [

            {
              path: path.profile,
              element: (
                <Suspense>
                  <Profile />
                </Suspense>
              )
            },
            {
              path: path.address,
              element: (
                <Suspense>
                  <Address />
                </Suspense>
              )
            },
            {
              path: path.changePassword,
              element: (
                <Suspense>
                  <ChangePassword />
                </Suspense>
              )
            },
            {
              path: path.historyPurchase,
              element: (
                <Suspense>
                  <HistoryPurchase />
                </Suspense>
              )
            }

          ]
        }
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
          index: true,
          element: (
            <Suspense>
              <Home />
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
