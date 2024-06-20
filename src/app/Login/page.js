"use client"
import { GlobalContext } from '@/context';
import StudentService from '@/service/studentService';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fieldValidation, setFieldValidation] = useState(false);
    const { Login } = StudentService();
    const { token, setToken, setStudent } = useContext(GlobalContext);
    const router = useRouter();

    const formValidation = () => {
        if (
            email === "" ||
            password === ""

        ) {
            setFieldValidation(true);
            return true;
        } else {
            setFieldValidation(false);
            return false;
        }
    };

    const StudentLogin = async () => {
        if (formValidation()) {
            toast.error("Please fill all fields")
        } else {
            const loginData = {
                email,
                password
            }
            const LoginData = await Login(loginData);
            if (LoginData?.data?.message === "Login Success") {
                const token = LoginData?.data?.token;
                toast.success("Login Success");
                localStorage.setItem("token", token);
                setToken(token);
                setStudent(LoginData?.data?.checkStudent)
                router.push('/HomePage')

            } else if (LoginData?.data?.message === "Password Is Wrong") {
                toast.warning("Password Is Wrong")
            }
            else if (LoginData?.data?.message === "Email Not Register") {
                toast.warning("Email Not Register")
            }
            else {
                toast.warning("Some Error")
            }

        }
    }

    return (
        <section className="w-full flex items-center h-full justify-center font-poppins bg-gradient-to-r from-blue-200 pb-20 pt-0 to-green-200">
            <div className="flex-1">
                <div className="px-2 mx-auto ">
                    <div className="relative ">
                        <div className="relative mt-20 px-4 py-4 bg-gray-100 shadow-md mx-2 rounded-xl md:mx-80 md:py-11 sm:px-8">
                            <div className="max-w-lg mx-auto text-center">
                                <a href="#" className="inline-block mb-4 text-blue-900  lg:mb-7 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor"
                                        className="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path
                                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                    </svg>
                                </a>
                                <h2 className="mb-4 text-2xl font-bold text-gray-700 lg:mb-7 md:text-5xl ">
                                    Student Login</h2>
                                <p className="text-gray-500 ">Your credentials here</p>
                                <div className="mt-4 lg:mt-7 text-start">
                                    <div className="">
                                        <input type="email"
                                            className="w-full px-4 py-3 mt-2 bg-gray-200 text-black rounded-lg lg:py-5"
                                            name="" placeholder={email} onChange={(event) => (setEmail(event.target.value))
                                            }
                                        />
                                        {fieldValidation && email === "" && (
                                            <span className="text-red-500">
                                                Email is Required
                                            </span>
                                        )}
                                    </div>
                                    <div className="mt-4 lg:mt-7 text-start">
                                        <div>
                                            <div className="relative flex items-center">
                                                <input type="password"
                                                    className="w-full px-4 py-3 bg-gray-200 text-black rounded-lg lg:py-5  "
                                                    name="" placeholder={password} onChange={(event) => (setPassword(event.target.value))} />
                                            </div>
                                            {fieldValidation && password === "" && (
                                                <span className="text-red-500">
                                                    Password is Required
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between mt-4 lg:mt-7">


                                    </div>
                                    <button
                                        className="w-full py-3 text-lg font-bold text-gray-300 uppercase bg-blue-700 rounded-md lg:mt-7 mt-7  px-11 md:mt-7 hover:bg-blue-900 "
                                        onClick={() =>
                                            StudentLogin()
                                        }
                                    >LOGIN</button>

                                    <p className="mt-4 text-xs text-gray-700 lg:mt-2  lg:text-base">
                                        Need an account?
                                        <Link href="./Register" className="font-semibold text-blue-400 hover:text-blue-600">
                                            Create an account</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login