import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import AddProducts from "../../pages/Dashboard/AddProducts/AddProducts";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Register/Register";
import Products from "../../pages/Products/Products";
import DisplayError from "../../pages/Shared/DisplayError/DisplayError";
import ErrorPage from "../../pages/Shared/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

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
                element: <Products></Products>,
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
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

