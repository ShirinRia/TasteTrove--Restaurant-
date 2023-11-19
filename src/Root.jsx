
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';


const Root = () => {
    const location=useLocation()
    console.log(location)
    const nohf=location.pathname.includes('/login') ||location.pathname.includes('/signup')
    return (
        <div>
           {nohf || <Navbar></Navbar>}
            <Outlet></Outlet>
            {nohf || <Footer></Footer>}
        </div>
    );
};

export default Root;