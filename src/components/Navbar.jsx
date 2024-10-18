import { NavbarMenu } from "../constants";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import { FaDumbbell } from "react-icons/fa";
import { useState } from "react";
import { ResponsiveMenu } from "./ResponsiveMenu";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="container flex justify-between items-center p-8">
        {/* logo */}
        <div className=" flex gap-3 font-bold text-2xl items-center ">
          <FaDumbbell />
          <h1> CODERS</h1>
          <h2 className="text-secondary">GYM</h2>
        </div>
        {/* nav items */}
        <div className=" hidden md:block ">
          <ul className="flex space-x-4  items-center text-gray-600">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className=" inline-block py-1 px-3 hover:text-secondary font-semibold"
                >
                  {" "}
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* icon button  */}
        <div className="flex gap-4 text-2xl">
          <button className="  hover:bg-secondary hover:text-white rounded-full p-2 duration-200  ">
            <CiSearch />
          </button>
          <button className=" hover:bg-secondary hover:text-white rounded-full p-2 duration-200  ">
            <BsCart3 />
          </button>
          <button className=" border-2 border-primary rounded-md  text-primary py-2 px-6 font-semibold  hidden md:block hover:bg-primary hover:text-white duration-200">
            Login
          </button>
        </div>
        <div className=" md:hidden " onClick={() => setOpen(!open)}>
          {!open ? (
            <TiThMenu className="text-4xl" />
          ) : (
            <IoCloseSharp className="text-4xl" />
          )}
        </div>
      </nav>
      {/* mobile sidebar section */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
