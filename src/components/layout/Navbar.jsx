import React, { useState } from "react";

// icons
import { FiSearch } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menus = [
    {
      id: 1,
      name: "Home",
      path: "",
    },
    {
      id: 2,
      name: "About",
      path: "",
    },
    {
      id: 3,
      name: "Services",
      path: "",
    },
    {
      id: 4,
      name: "Packaging",
      path: "",
    },
  ];
  return (
    <div className="max-w-7xl m-auto">
      <div className="flex items-center justify-between p-6">
        <div className="z-20">
          <h1 className="font-medium text-gray-900 text-lg">SC_Shop</h1>
        </div>
        {/* desktop */}
        <div className="hidden sm:flex items-center gap-8 flex-1 justify-center">
          {menus.map((item) => (
            <div key={item.id}>
              <a
                href=""
                className="text-gray-500 text-sm tracking-wide hover:text-gray-800 duration-300 ease-in-out transition-all"
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>

        {/* mobile */}
        <div
          className={`sm:hidden fixed top-0 w-full bg-white min-h-screen px-6 py-16 ${openMenu ? "right-0" : "-right-full"} duration-300 transition-all ease-in-out`}
        >
          <div className="border-t py-4 border-gray-500 flex flex-col gap-1 w-full">
            {menus.map((item) => (
              <div
                key={item.id}
                className={`w-full p-2 rounded-xs text-gray-700 font-medium ${item.name === "Home" ? "bg-gray-100" : "bg-white "} hover:bg-cyan-600 hover:text-white transition-all duration-300 ease-in-out`}
              >
                <a href="">{item.name}</a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="cursor-pointer bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center">
            <FiSearch className="text-lg text-gray-700" />
          </div>
          <div className="cursor-pointer bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center">
            <FiUser className="text-lg text-gray-700" />
          </div>
          <div
            className="sm:hidden cursor-pointer z-20 bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? (
              <FiX className="text-xl text-gray-700" />
            ) : (
              <FiMenu className="text-xl text-gray-700" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
