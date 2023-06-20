import Test from '@/pages/test';
import { Navigate, useRoutes } from 'react-router-dom';
import Home from '../pages/home';

const router = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <div>Login</div>
  },
  {
    path: '*',
    element: <Navigate to='/404' />
  },
  {
    path: '/404',
    element: <div>404</div>
  },
  {
    path: '/403',
    element: <div>403</div>
  },
  {
    path: '/test',
    element: <Test />
  }
];

export default function Router() {
  return useRoutes(router);
}
