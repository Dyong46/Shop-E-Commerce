// Layouts
import { RegisterLayout } from '~/layouts';

// Pages
import Home from '~/pages/Home/Home';
import Cart from '~/pages/Cart';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Order from '~/pages/Order';
import Profile from '~/pages/User/pages/Profile';
import OrderLayout from '~/layouts/OrderLayout';
import ChangePassword from '~/pages/User/pages/ChangePassword';
import HistoryPurchase from '~/pages/User/pages/HistoryPurchase';
import { Fragment } from 'react';
import ProductDetail from '~/pages/ProductDeatail';
import Address from '~/pages/User/pages/Address';

// Pulic routes
export const publicRoutes = [
  { path: '/', component: Home },
  { path: '/cart', component: Cart, layout: Fragment },
  { path: '/login', component: Login, layout: RegisterLayout },
  { path: '/register', component: Register, layout: RegisterLayout },
  { path: '/user/profile', component: Profile },
  { path: '/order', component: Order, layout: OrderLayout },
  { path: '/user/password', component: ChangePassword },
  { path: '/user/address', component: Address },
  { path: '/user/purchase', component: HistoryPurchase },
  { path: '/productdetail', component: ProductDetail, layout: Fragment },
  { path: '/:idProduct', component: ProductDetail },
];

// Private Routes
export const privateRoutes = [];
