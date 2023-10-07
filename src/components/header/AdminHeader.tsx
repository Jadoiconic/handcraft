import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const AdminHeader = () => {
  const [openNav,setOpenNav] = useState(false)
  return (
    <>
      <div className="w-full h-10 bg-white py-7 shadow-lg px-2 sm:px-8 md:px-8 flex sticky top-0 z-10 justify-between items-center">
        <div className="text-xl">HandCraft</div>
        <div>
          <nav className="text-xl">
            <div className="hidden w-10 h-10 bg-indigo-400 rounded-full text-white text-lg font-bold justify-center items-center md:flex">
              {" "}
              T
            </div>
            <button onClick={()=>setOpenNav(!openNav)} className="px-4 md:hidden lg:hidden">
              <GiHamburgerMenu />
            </button>
          </nav>
        </div>
      </div>
      <div className={`bg-slate-700 md:hidden lg:hidden h-screen w-5/6 ${openNav ? 'block':'hidden'}`}>
      <nav className="py-4">
            <ul>
              <li className="hover:bg-slate-400 px-4 py-1 flex items-center">
                <div className="w-2 h-2 rounded-full bg-red-300" />
                <NavLink to="/dashboard" className="text-white text-lg mx-2">
                  Dashboard
                </NavLink>
              </li>
              <li className="hover:bg-slate-400 px-4 py-1 flex items-center">
                <div className="w-2 h-2 rounded-full bg-red-300" />
                <NavLink to="/newPrduct" className="text-white text-lg mx-2">
                  New Product
                </NavLink>
              </li>
              <li className="hover:bg-slate-400 px-4 py-1 flex items-center">
                <div className="w-2 h-2 rounded-full bg-red-300" />
                <NavLink to="/orders" className="text-white text-lg mx-2">
                  Pending Orders
                </NavLink>
              </li>
              <li className="hover:bg-slate-400 px-4 py-1 flex items-center">
                <div className="w-2 h-2 rounded-full bg-red-300" />
                <NavLink to="/reports" className="text-white text-lg mx-2">
                  Reports
                </NavLink>
              </li>
            </ul>
          </nav>
          <button className=" absolute bottom-0 px-10 py-2 text-white font-bold">Sign Out</button>

      </div>
    </>
  );
};

export default AdminHeader;
