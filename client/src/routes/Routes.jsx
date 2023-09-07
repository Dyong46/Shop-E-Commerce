// Layouts
import { RegisterLayout } from '~/layouts';

// Pages
import Home from '~/pages/Home/Home';
import Login from '~/pages/Login';

// Pulic routes
export const publicRoutes = [
  { path: '/', component: Home },
  { path: '/login', component: Login, layout: RegisterLayout },
];

// Private Routes
export const privateRoutes = [];
