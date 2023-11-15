import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";



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
           
        ],
    },
]);

export default Routes;
// SwiperJS , React Slick