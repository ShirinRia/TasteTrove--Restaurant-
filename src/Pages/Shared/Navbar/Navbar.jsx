import { NavLink } from "react-router-dom";


const Navbar = () => {
    const navlinks=<>
    <li><NavLink>Home</NavLink></li>
   
    <li><NavLink>DASHBOARD</NavLink></li>
    <li><NavLink>Our Menu</NavLink></li>
    <li><NavLink>Our Shop</NavLink></li>
    <li><NavLink>CONTACT US</NavLink></li>
   
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
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;