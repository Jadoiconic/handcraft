import React from "react";
import AdminHeader from "../components/header/AdminHeader";
import { NavLink } from "react-router-dom";
interface DashboardLayoutProps {
  children: any;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <AdminHeader />
      <div className="hidden w-full h-screen md:flex lg:flex fixed">
        <div className="shadow-md h-[95vh] w-1/6 bg-slate-700 stiky top-20">
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
                <NavLink to="" className="text-white text-lg mx-2">
                  New Product
                </NavLink>
              </li>
              <li className="hover:bg-slate-400 px-4 py-1 flex items-center">
                <div className="w-2 h-2 rounded-full bg-red-300" />
                <NavLink to="" className="text-white text-lg mx-2">
                  Pending Orders
                </NavLink>
              </li>
              <li className="hover:bg-slate-400 px-4 py-1 flex items-center">
                <div className="w-2 h-2 rounded-full bg-red-300" />
                <NavLink to="" className="text-white text-lg mx-2">
                  Reports
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="py-2 w-full h-auto bg-slate-400 overflow-scroll">
          <div className="min-h-screen">
          {children}
          </div>
          <div className="flex items-center justify-between bg-slate-900 h-20 px-4 w-full bottom-0">
            <div className="text-white py-2 ">&copy;Copyright</div>
            <div className="text-white py-2 ">Powered By Amina</div>
          </div>
          <div className="py-4"></div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
