import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'; // ES6
import { useContext } from "react";
import  {Authcontext} from '../Provider/Provider'
import RingLoader from "react-spinners/RingLoader";
const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(Authcontext)
    const location=useLocation()
    console.log(loading)
    if(loading){
        return <div  className=" h-[80vh] flex items-center justify-center"><RingLoader color="#212121" size="100px"/></div>
    }
    else{
    if(user){
        return children
    }
    else{
        return (
            <Navigate state={{from:location}} to={'/login'} replace></Navigate>
            );
    }
}
   
    
};
PrivateRoute.propTypes = {
    children:PropTypes.node,
};
export default PrivateRoute;