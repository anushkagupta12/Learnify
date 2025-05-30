import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import SignUp from './Signup';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        }
       await axios.post("https://learnify-7p7l.onrender.com/user/login", userInfo)
        .then((res)=>{
            console.log(res.data)
            if(res.data) {
                toast.success('Login success');
                document.getElementById("my_modal_3").close();
                setTimeout(()=> {
                    
                    window.location.reload();
                    localStorage.setItem("Users", JSON.stringify(res.data.user));
                },1000);
               
               
            }
            
        })
        .catch((err) =>{
           if(err.response){
            console.log(err);
            toast.error("Error: " + err.response.data.message);
            setTimeout(()=>{},2000)
           }
        })
    }

    return (
        <div className="">

            <dialog id="my_modal_3" className="modal ">
                <div className="modal-box dark:bg-slate-900 dark:text-white">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <Link to="/" 
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={()=> document.getElementById("my_modal_3").close()}>
                            ✕</Link>

                        <h3 className="font-bold text-lg">Login</h3>
                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br />
                            <input type="email"
                                placeholder="Enter your Email"
                                className="w-80 px-3 border rounded-md outline-none"
                                {...register("email", { required: true })} />
                            <br />
                            {errors.email && <span className="text-red-700">This field is required</span>}
                        </div>
                        <div className="mt-4 space-y-2">
                            <span>Password</span>
                            <br />
                            <input type="password"
                                placeholder="Enter your password"
                                className="w-80 px-3 border rounded-md outline-none"
                                {...register("password", { required: true })} />
                            <br />
                            {errors.password && <span className="text-red-700">This field is required</span>}
                        </div>
                        <div className="flex justify-around mt-4">
                            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                                Login
                            </button>
                            <p>
                                Note registered?{" "}
                                <Link
                                    to="/signup"
                                    className="underline text-blue-500 cursor-pointer">
                                    SignUp</Link>{" "}
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login
