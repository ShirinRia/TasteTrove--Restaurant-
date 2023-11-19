import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from "react";
import { Link,useNavigate,useLocation } from 'react-router-dom';
import { Authcontext } from '../../Provider/Provider';
const Login = () => {
    const {signin}=useContext(Authcontext)
    const [disabled, setdisabled] = useState(true)
    const captcharef = useRef(null)
    const navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.from?.pathname || '/'
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const validatecaptcha = () => {
        const captchavalue = captcharef.current.value;
        if (validateCaptcha(captchavalue) == true) {
            alert('Captcha Matched');
            setdisabled(false)
        }

        else {
            alert('Captcha Does Not Match');
        }
    }
    const handlelogin = e => {
        e.preventDefault();
        const logform = new FormData(e.currentTarget)
        const email = logform.get('email')
        const password = logform.get('password')
        // setlogerror('')

        console.log(email, password)
        signin(email, password)
        .then(result=>{
            const user=result.user
            console.log(user)
            navigate(from,{replace:true})
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handlelogin} className="space-y-8">
                            <div className="space-y-4">
                                <div className="space-y-2">

                                    <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                                </div>
                                <div className="space-y-2">

                                    <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                                </div>
                                <div className="space-y-2">
                                    <label className='label'>
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input type="text" name="captcha" ref={captcharef} placeholder="type captcha" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                                    <button onClick={validatecaptcha} className='btn-sm'>Validate</button>
                                </div>

                            </div>
                            {/* <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Sign in</button> */}
                            <input type="submit" disabled={disabled} className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900" value="Sign In" />
                        </form>
                        <Link to={'/signup'}>Signup</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;