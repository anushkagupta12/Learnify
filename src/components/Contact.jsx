import React from 'react'
import { Link } from 'react-router-dom';
// import Login from './Login';
import { useForm } from "react-hook-form"

function Contact() {
    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div className="w-[600px] dark:bg-slate-900 dark:text-white items-center justify-center border-[2px] p-4 rounded-md">
                    <form method="dialog">
                        {/* <Link to = "/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕</Link>
                         */}
                        <h1 className="font-bold text-3xl dark:bg-slate-900 dark:text-white">Contact Us</h1>
                        <div className="mt-4 space-y-2">
                            <span>Name</span>
                            <br />
                            <input type="text"
                                placeholder="Enter your name"
                                className="w-80 px-3 border rounded-md outline-none"
                            />
                        </div>
                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br />
                            <input type="email"
                                placeholder="Enter your Email"
                                className="w-80 px-3 border rounded-md outline-none"
                            />
                        </div>
                        <div className="mt-4 space-y-2 justify-start">
                            <span>Message</span>
                            <br />
                            {/* <input type="text"
                                placeholder="Enter your password"
                                className="w-80 px-3 border rounded-md outline-none" */}
                            <textarea className="textarea textarea-bordered" placeholder="Type your message"></textarea>
                            {/* /> */}
                        </div>
                        <div className="flex mt-4">
                            <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200">
                                Submit
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
