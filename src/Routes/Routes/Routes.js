import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import AddProducts from "../../pages/Dashboard/AddProducts/AddProducts";
import MyOrders from "../../pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../pages/Dashboard/MyProducts/MyProducts";
import ReportedProducts from "../../pages/Dashboard/ReportedProducts/ReportedProducts";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Register/Register";
import Products from "../../pages/Products/Products";
import DisplayError from "../../pages/Shared/DisplayError/DisplayError";
import ErrorPage from "../../pages/Shared/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";
import AdminRoute from "../AdminRoute/AdminRoute";
import AllSellers from "../../pages/Dashboard/AllSellers/AllSellers";
import AllBuyers from "../../pages/Dashboard/AllBuyers/AllBuyers";
import Payment from "../../pages/Dashboard/Payment/Payment";
import MyWishlist from "../../pages/Dashboard/MyWishlist/MyWishlist";
import MyBuyers from "../../pages/Dashboard/MyBuyers/MyBuyers";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/products/:id',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`, { headers: { authorization: `bearer ${localStorage.getItem('accessToken')}` } })
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard/addProducts',
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
                path: '/dashboard/myProducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/myOrders',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            {
                path: '/dashboard/reportedProducts',
                element: <AdminRoute><ReportedProducts></ReportedProducts></AdminRoute>
            },
            {
                path: '/dashboard/allSellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/booked/${params.id}`, { headers: { authorization: `bearer ${localStorage.getItem('accessToken')}` } }),
                element: <PrivateRoute><Payment></Payment></PrivateRoute>
            },
            {
                path: '/dashboard/myWishlist',
                element: <PrivateRoute><MyWishlist></MyWishlist></PrivateRoute>
            },
            {
                path: '/dashboard/myBuyers',
                element: <SellerRoute><MyBuyers></MyBuyers></SellerRoute>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

