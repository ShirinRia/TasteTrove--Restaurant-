import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home";


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
           
        ],
    },
]);

export default Routes;
// SwiperJS , React Slick