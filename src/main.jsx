import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './root/Root';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Shop from './pages/Shop';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AuthProvider from './Authprovider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Dashboard from './root/Dashboard';
import Cart from './pages/Dashboard/Cart';
import PrivetRout from './privetRout/PrivetRout';
import Users from './pages/Dashboard/Users';
import AdminRoute from './privetRout/AdminRoute';
import AddProduct from './pages/Dashboard/AddProduct';
import AllProducts from './pages/Dashboard/AllProducts';
import UpdateProduct from './pages/Dashboard/UpdateProduct';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/menu",
        element: <Menu></Menu>
      },
      {
        path: "/shop",
        element: <Shop></Shop>
      }
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  },
  {
    path:'dashboard',
    element:<PrivetRout><Dashboard></Dashboard></PrivetRout>,
    children:[
      {
        path:'cart',
        element:<PrivetRout><Cart></Cart></PrivetRout>
      },
      {
        path:'users',
        element:<PrivetRout><AdminRoute><Users></Users></AdminRoute></PrivetRout>
      },
      {
        path:'add-product',
        element:<PrivetRout><AdminRoute><AddProduct></AddProduct></AdminRoute></PrivetRout>
      },
      {
        path:'products',
        element:<PrivetRout><AdminRoute><AllProducts></AllProducts></AdminRoute></PrivetRout>
      },
      {
        path:'menu/updated/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader:({params})=> fetch(`http://localhost:5000/updated/${params.id}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Toaster></Toaster>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>


  </React.StrictMode>,
)
