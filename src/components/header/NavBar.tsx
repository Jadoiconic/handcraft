import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  // AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const [openNav, setOpenNav] = useState(false)
  return (
    <div
      className="px-8 py-2 mx-0 w-full flex  bg-slate-200 shadow sticky top-0 justify-between items-center">
      <h1 className="w-full text-3xl font-bold text-slate-500">HandCraft</h1>
      <div className="hidden md:block">
        <nav className="flex items-center">
         
          <NavLink to="/" className="p-4 hover:text-slate-500">Home</NavLink>
          <NavLink to="/accessories" className="p-4 hover:text-slate-500">Accessories</NavLink>
          <NavLink to="/about" className="p-4 hover:text-slate-500">About</NavLink>
          <NavLink to="/carts" className="p-4 hover:text-slate-500">
            <AiOutlineShoppingCart size={20} />
          </NavLink>
          <NavLink to="/login" className="p-4 hover:text-slate-500">Login</NavLink>
        </nav>
      </div>
      <div className="block md:hidden lg:hidden" onClick={()=> setOpenNav(!openNav)}>{!openNav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        
      </div>
      <div  className={`fixed left-0  top-0 w-[80%] border-r border-r-gray-300 h-full bg-slate-900 ${openNav ? 'block' : 'hidden'}`}>
      <h1 className="w-full text-3xl py-2 px-8 font-bold text-white">HandCraft</h1>
        <ul className="p-4">
          <NavLink to="/" className="py-3 px-4 hover:bg-slate-700 text-white border-b border-b-gray-700">Home</NavLink>
          <NavLink to="/accessories" className="py-3 px-4 hover:bg-slate-700 text-white border-b border-b-gray-700">Accessories</NavLink>
          <NavLink to="/about" className="py-3 px-4 hover:bg-slate-700 text-white border-b border-b-gray-700">About</NavLink>
          <NavLink to="/carts" className="py-3 px-4 hover:bg-slate-700 text-white border-b border-b-gray-700">
            <AiOutlineShoppingCart size={20} />
          </NavLink>
          <NavLink to="/login" className="py-3 px-4 hover:bg-slate-700 text-white border-b border-b-gray-700">Login</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
