"use client";
import { useRouter } from 'next/navigation';
import React from 'react'
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
    const [token, setToken] = useState();
    const [student, setStudent] = useState();
    const router = useRouter();

    useEffect(() => {
        router.push('./Login')
    }, [])

    return (
        <GlobalContext.Provider
            value={{
                token,
                setToken,
                student,
                setStudent
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState