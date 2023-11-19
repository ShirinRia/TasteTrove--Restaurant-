import { Link } from 'react-router-dom';
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { Authcontext } from '../../Provider/Provider';
const Signup = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm()

    const { createuser } = useContext(Authcontext)


    const onSubmit = (data) => {
        console.log(data)
        createuser(data.email, data.password)
            .then(result => {
                console.log(result)
                // update
                reset()
            }
            )
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident </p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                            <div className="space-y-4">
                                <div className="space-y-2">

                                    <input type="name" {...register("name", { required: true })} placeholder="leroy jenkins" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                                    {errors.name && <span>This is required.</span>}
                                </div>
                                <div className="space-y-2">

                                    <input type="email" {...register("email", { required: true })} id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                                    {errors.email && <span>This is required.</span>}
                                </div>

                                <div className="space-y-2">

                                    <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, })} placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                                    {errors.password?.type === 'required' && <p>REquired</p>}
                                    {errors.password?.type === 'minLength' && <p>6length</p>}
                                    {/* {errors.password?.type==='pattern' && <p>pattern</p>} */}
                                </div>


                            </div>
                            {/* <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Sign in</button> */}
                            <input type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900" value="Sign up" />
                        </form>
                        <Link>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;