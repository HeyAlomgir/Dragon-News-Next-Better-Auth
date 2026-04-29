"use client"

import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {


    const {register,
        handleSubmit,
         formState:{errors}}=useForm();


    const handleLoginFunc = (data)=>{
        console.log(data);
    }

    return (
        <div className='container mx-auto bg-slate-100 mih-h-[80vh] flex justify-center items-center mt-10 rounded-2xl'>

            <div className='p-4 rounded-xl bg-white m-10'>
                <h2 className='font-bold text-3xl mb-4 text-center'>Login your account</h2>



                <form onSubmit={handleSubmit(handleLoginFunc)} className='space-y-4'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" 
                        className="input"
                         placeholder="Enter Your Email"
                         {...register("email",{ required: "Password field is required", })} />
                          
                       
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" 
                        className="input"
                        placeholder="Enter Your Password"
                        {...register("password",{ required: "Password field is required", })} />

                        {errors.password &&  (
                            <p>{errors.password.message}</p>
                        ) }
                        
                       
                    </fieldset>

                    <button className="btn w-full bg-slate-800 text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Login</button>


                    <p>Dont't have an account? <Link href={"/register"} className="text-blue-500">Register</Link></p>
                   
                </form>
            </div>

        </div>
    );
};

export default LoginPage;