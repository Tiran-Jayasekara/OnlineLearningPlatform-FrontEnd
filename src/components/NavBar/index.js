"use client";
import React, { useContext, useState } from "react";
import { navOptions } from "../utils";
import CommenModal from "../CommenModal";
import { useRouter } from "next/navigation";
import { GlobalContext } from "@/context";


function NavItem({ isModalView = false, router, setShowNavModal, LogOut, token }) {
  return (
    <>
      <div
        className={`item
        -center justify-between w-full mx-auto md:flex md:w-auto items-center border-none ${isModalView ? "" : "hidden"
          }`}
        id="nav-items"
      >
        <ul
          className={`flex flex-col p-4 lg:p-0 md:items-center font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ${isModalView ? "" : ""
            }`}
        >
          <>
            {navOptions.map((item) => (
              <li
                className="cursor-pointer  block py-2 pl-3 pr-4 text-gray-700 rounded md:p-0 hover:text-blue-500"
                key={item.id}
                onClick={() => {
                  router.push(item.path);
                  setShowNavModal(false);
                }}
              >
                {item.label}
              </li>
            ))}

          </>

        </ul>

      </div>
      {token && <div className="cursor-pointer  block py-2 pl-3 pr-4 text-gray-700 rounded md:p-0 hover:text-blue-500 mr-4" onClick={LogOut}>LogOut</div>}

    </>
  );
}

const NavBar = () => {
  const [showNavModal, setShowNavModal] = useState(false);
  const router = useRouter();
  const { token , setToken } = useContext(GlobalContext)
  const LogOut = () => {
    router.push("./Login");
    setToken("")
    localStorage.setItem("token", "")
  }
  return (
    <>
      {/* <Sidebar /> */}
      <nav className="bg-opacity-60 backdrop-blur-lg bg-white fixed w-full z-20 top-0 border-none">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <NavItem router={router} setShowNavModal={setShowNavModal} LogOut={LogOut} token={token} />
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="justify-center p-2 text-sm  text-gray-900 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => {
              setShowNavModal((prevState) => !prevState);
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <CommenModal
        showModalTitle={false}
        mainContent={
          <NavItem
            isModalView={true}
            router={router}
            setShowNavModal={setShowNavModal}
            LogOut={LogOut}
            token={token}
          />
        }
        show={showNavModal}
        setShow={setShowNavModal}
      />
    </>
  );
};

export default NavBar;
