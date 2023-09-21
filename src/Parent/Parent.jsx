
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Layout from '../Layout/Layout';
import About from '../Pages/About/About';
import Products from '../Pages/Products/Products';
import Dashboard from '../Pages/Dashboard/Dashboard';
import ProductDetails from '../Pages/Products/ProductDetails';
import Items from '../Pages/Dashboard/Items/Items';
import Profile from '../Pages/Dashboard/Profile/Profile';
import EditProfile from '../Pages/Dashboard/EditProfile/EditProfile';
import ProItems from '../Pages/Dashboard/ProItems/ProItems';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
        {
         path:'/',
         element: <Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/products',
             loader:()=>fetch('https://dummyjson.com/products'),
            element: <Products></Products>
        },
        {
            path:'/product/:id',
            loader:({params})=> fetch(`https://dummyjson.com/products/${params.id}`),
            element:<ProductDetails></ProductDetails>
        },
        {
            path:'/dashboard',
            element: <Dashboard></Dashboard>,
            children:[
                {
                    path:'/dashboard',

                    element:<Items></Items>,
                },
                {
                path:'/dashboard/items',
                loader: ()=>fetch('https://dummyjson.com/products'),
                element:<ProItems></ProItems>
                },
                {
                    path:'/dashboard/profile',
                    element:<Profile></Profile>
                },
                {
                    path:'/dashboard/editProfile',
                    element:<EditProfile></EditProfile>
                }
            ]
        }
    ]
  },
  
]);


export default router
