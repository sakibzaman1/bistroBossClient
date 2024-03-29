import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import Menu from '../Pages/Menu/Menu';
import Order from '../Pages/Order/Order';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Dashboard from '../Pages/Dashboard/Dashboard';
import PrivateRoute from '../PrivateRoutes/PrivateRoute';
import Cart from '../Pages/Dashboard/User/Cart';
import AllUsers from '../Pages/Dashboard/Admin/AllUsers';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import AddItems from '../Pages/Dashboard/Admin/AddItems';
import ManageItems from '../Pages/Dashboard/Admin/ManageItems';
import ManageBookings from '../Pages/Dashboard/Admin/ManageBookings';
import AdminHome from '../Pages/Dashboard/Admin/AdminHome';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/menu',
          element: <Menu></Menu>
        },
        {
          path: '/order/:category',
          element: <Order></Order>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path : '/dashboard/',
          element : <AdminHome></AdminHome>
        },
        {
          path: 'allusers',
          element: <AllUsers></AllUsers>
        },
        {
          path : 'additems',
          element: <AddItems></AddItems>
        },
        {
          path: 'manageitems',
          element: <ManageItems></ManageItems>
        },
        {
          path: 'managebookings',
          element : <ManageBookings></ManageBookings>
        }
      ]
    }
  ]);

