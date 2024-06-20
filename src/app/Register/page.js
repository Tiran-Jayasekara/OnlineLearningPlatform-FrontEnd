"use client"
import { GlobalContext } from '@/context';
import StudentService from '@/service/studentService';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [address, setAddress] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [fieldValidation, setFieldValidation] = useState(false);
    const { token, setToken, setStudent } = useContext(GlobalContext);
    const router = useRouter();
    const { Register } = StudentService();

    const formValidation = () => {
        if (
            email === "" ||
            name === "" ||
            dob === "" ||
            address === "" ||
            mobile === "" ||
            password === ""

        ) {
            setFieldValidation(true);
            return true;
        } else {
            setFieldValidation(false);
            return false;
        }
    };

    const StudentRegister = async () => {
        if (formValidation()) {
            toast.error("Please Fill All Fields")
        } else if (password != confirmPassword) {
            toast.error("Password doesn't match")
        } else {
            const registerForm = {
                name,
                email,
                dob,
                address,
                mobile,
                password
            }
            const register = await Register(registerForm);
            if (register?.data?.message === "Student add success") {
                toast.success("Student add success");
                router.push('./Login')

            } else if (register?.data?.message === "Student Already Exist") {
                toast.warning("Student Already Exist");
            } else {
                toast.error(register?.data?.message);
            }
        }

    }

    return (
        <section className="w-full flex items-center justify-center h-full font-poppins bg-gradient-to-r from-blue-200 pb-20 pt-0 to-green-200">
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
                                <h2 className="mb-4 text-xl font-bold text-gray-700 lg:mb-7 md:text-2xl ">
                                    Student Register</h2>
                                <p className="text-gray-500 ">Your credentials here</p>
                                <div className="mt-4 lg:mt-7 text-start text-black">
                                    <div className="">
                                        <input type="text"
                                            className="w-full px-4 py-3 mt-2  bg-gray-300 text-black rounded-lg lg:py-5"
                                            name="" placeholder="Name" onChange={(event) => (setName(event.target.value))
                                            }
                                        />
                                        {fieldValidation && name === "" && (
                                            <span className="text-red-500">
                                                Name is Required
                                            </span>
                                        )}
                                    </div>

                                    <div className="">
                                        <input type="email"
                                            className="w-full px-4 py-3 mt-2  bg-gray-300 text-black rounded-lg lg:py-5"
                                            name="" placeholder="Email" onChange={(event) => (setEmail(event.target.value))
                                            }
                                        />
                                        {fieldValidation && email === "" && (
                                            <span className="text-red-500">
                                                Email is Required
                                            </span>
                                        )}
                                    </div>


                                    <div className="">
                                        <input type="text"
                                            className="w-full px-4 py-3 mt-2  bg-gray-300 text-black rounded-lg lg:py-5"
                                            name="" placeholder="Birth Day" onChange={(event) => (setDob(event.target.value))
                                            }
                                        />
                                        {fieldValidation && dob === "" && (
                                            <span className="text-red-500">
                                                Date of Birth is Required
                                            </span>
                                        )}
                                    </div>

                                    <div className="">
                                        <input type="number"
                                            className="w-full px-4 py-3 mt-2  bg-gray-300 text-black rounded-lg lg:py-5"
                                            name="" placeholder="Mobile Number" onChange={(event) => (setMobile(event.target.value))
                                            }
                                        />
                                        {fieldValidation && mobile === "" && (
                                            <span className="text-red-500">
                                                Mobile is Required
                                            </span>
                                        )}
                                    </div>

                                    <div className="">
                                        <input type="text"
                                            className="w-full px-4 py-3 mt-2  bg-gray-300 text-black rounded-lg lg:py-5"
                                            name="" placeholder="Address" onChange={(event) => (setAddress(event.target.value))
                                            }
                                        />
                                        {fieldValidation && address === "" && (
                                            <span className="text-red-500">
                                                Address is Required
                                            </span>
                                        )}
                                    </div>

                                    <div className="mt-4 lg:mt-7 text-start">
                                        <div>
                                            <div className="relative flex items-center">
                                                <input type="password"
                                                    className="w-full px-4 py-3 bg-gray-300 text-black rounded-lg lg:py-5  "
                                                    name="" placeholder="Password" onChange={(event) => (setPassword(event.target.value))} />
                                            </div>
                                            {fieldValidation && password === "" && (
                                                <span className="text-red-500">
                                                    Password is Required
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="">
                                        <input type="password"
                                            className="w-full px-4 py-3 mt-2  bg-gray-300 text-black rounded-lg lg:py-5"
                                            name="" placeholder="Confirm Password" onChange={(event) => (setConfirmPassword(event.target.value))
                                            }
                                        />
                                        {fieldValidation && confirmPassword === "" && (
                                            <span className="text-red-500">
                                                Confirm Password is Required
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex flex-wrap items-center justify-between mt-4 lg:mt-7">


                                    </div>
                                    <button
                                        className="w-full py-3 text-lg font-bold text-gray-300 uppercase bg-blue-700 rounded-md lg:mt-7 mt-7  px-11 md:mt-7 hover:bg-blue-900 "
                                        onClick={() =>
                                            StudentRegister()
                                        }
                                    >Register</button>
                                    <p className="mt-4 text-xs text-gray-700 lg:mt-2  lg:text-base">
                                        Already Have Account?
                                        <Link href="./Login" className="font-semibold text-blue-400 hover:text-blue-600 ml-4">
                                            Login</Link>
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

export default Register