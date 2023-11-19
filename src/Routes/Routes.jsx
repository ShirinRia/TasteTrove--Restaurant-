import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Orderfood from "../Pages/Orderfood/Orderfood";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Dashboard from "../Pages/Dashboard/Dashboard";



const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        // errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/menu",
                element: <Menu />,
            },
            {
                path: "/order",
                element: <Orderfood />,
            },
            {
                path: "/order/:category",
                element: <Orderfood />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/dash",
                element: <Dashboard />,
            },
           
        ],
    },
]);

export default Routes;
// SwiperJS , React Slick