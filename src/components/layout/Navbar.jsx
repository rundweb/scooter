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
      <div className="flex items-center justify-between p-4">
        <div className="z-20">
          <h1 className="font-medium text-gray-900 text-lg">RHS_Shop</h1>
        </div>
        <div className="hidden sm:flex items-center gap-8 flex-1 justify-center">
          {menus.map((item) => (
            <div key={item.id}>
              <a
                href=""
                className="text-gray-800 text-sm font-medium tracking-wide hover:text-blue-primary duration-300 ease-in-out transition-all"
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
        <div
          className={`sm:hidden flex flex-col items-center justify-center fixed top-0  min-h-screen w-full bg-white z-10 gap-4 ${
            openMenu ? "right-0" : "-right-full"
          } transition-all duration-700 ease-in-out`}
        >
          {menus.map((item) => (
            <div key={item.id}>
              <a
                href=""
                className="font-medium text-xl tracking-wide text-gray-800"
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="cursor-pointer">
            <FiSearch className="text-lg text-gray-700" />
          </div>
          <div className="cursor-pointer">
            <FiUser className="text-lg text-gray-700" />
          </div>
          <div
            className="block sm:hidden cursor-pointer z-20"
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
