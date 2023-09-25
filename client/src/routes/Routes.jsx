// Layouts
import { RegisterLayout } from '~/layouts';

// Pages
import Home from '~/pages/Home/Home';
import Cart from '~/pages/Cart';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Profile from '~/pages/User/pages/Profile';
import { Fragment } from 'react';
 import ProductDetail from '~/pages/ProductDeatail';

// Pulic routes
export const publicRoutes = [
  { path: '/', component: Home },
  { path: '/login', component: Login, layout: RegisterLayout },
  { path: '/register', component: Register, layout: RegisterLayout },
  { path: '/user/profile', component: Profile },
  { path: '/cart', component: Cart, layout: Fragment },
  { path: '/productdetail', component:ProductDetail,layout:Fragment}
];

// Private Routes
export const privateRoutes = [];
