import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import  {Authcontext} from '../../../Provider/Provider'
const Navbar = () => {
    const navigate=useNavigate()
    const { user, logout } = useContext(Authcontext)
    const handlelogout = () => {
        logout()
            .then(() => {navigate('/login') })
            .catch(error => console.log(error))
    }
    const navlinks=<>
    <li className="uppercase"><NavLink to={'/'}>Home</NavLink></li>
   
    <li className="uppercase"><NavLink to={'/dash'}>DASHBOARD</NavLink></li>
    <li className="uppercase"><NavLink to={'/menu'}>Our Menu</NavLink></li>
    <li className="uppercase"><NavLink to={'/order'}>Our Shop</NavLink></li>
    <li className="uppercase"><NavLink>CONTACT US</NavLink></li>
   
    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-black bg-opacity-10 max-w-screen-xl mx-auto text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">TasteTrove</a>
                </div>
                
                <div className="navbar-end hidden lg:flex gap-4">
                <ul className="flex gap-4 ">
                       {navlinks}
                    </ul>
                   
                    {user ?
                                <div className={`flex items-center gap-3 text-white`}>
                                   
                                    <button onClick={handlelogout} className="hidden lg:block  btn hover:text-white hover:bg-[#e879f9] py-4">Log Out</button>
                                </div>

                                :
                                <Link to={'/login'} className="left-0 hidden lg:block  py-2 font-semibold rounded  dark:bg-violet-400 dark:text-gray-900"> Log in </Link>

                            }
                </div>
            </div>
        </div>
    );
};

export default Navbar;