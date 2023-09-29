import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
const NavBar = () => {
  const [openNav, setOpenNav] = useState(false)
  return (
    <div
      className="px-8 py-2 mx-0 w-full flex  bg-slate-200 shadow sticky top-0 justify-between items-center
    "
    >
      <h1 className="w-full text-3xl font-bold text-slate-500">HandCraft</h1>
      <div className="hidden md:block">
        <ul className="flex items-center">
          <div className="flex border-slate-300  border-2 rounded mx-10">
            <input type="text" className="outline-0 w-100  px-4" />
            <button className="bg-slate-500 px-4">
              <AiOutlineSearch size={20} />
            </button>
          </div>
          <li className="p-4 hover:text-slate-500">Home</li>
          <li className="p-4 hover:text-slate-500">Accessories</li>
          <li className="p-4 hover:text-slate-500">About</li>
          <li className="p-4 hover:text-slate-500">
            <AiOutlineShoppingCart size={20} />
          </li>
        </ul>
      </div>
      <div className="block md:hidden lg:hidden" onClick={()=> setOpenNav(!openNav)}>{!openNav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        
      </div>
      <div  className={`fixed left-0  top-0 w-[80%] border-r border-r-gray-300 h-full bg-slate-900 ${openNav ? 'block' : 'hidden'}`}>
      <h1 className="w-full text-3xl py-2 px-8 font-bold text-white">HandCraft</h1>
        <ul className="p-4">
          <li className="py-3 px-4 hover:bg-slate-700 text-white border-b border-b-gray-700">Home</li>
          <li className="py-3 px-4 hover:bg-slate-700 text-white border-b border-b-gray-700">Accessories</li>
          <li className="py-3 px-4 hover:bg-slate-700 text-white border-b border-b-gray-700">About</li>
          <li className="py-3 px-4 hover:bg-slate-700 text-white border-b border-b-gray-700">
            <AiOutlineShoppingCart size={20} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
