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
      <div className="w-full h-screen flex fixed">
        <div className="shadow-md h-[95vh] w-1/6 bg-slate-900 stiky top-20">
          <nav className="">
            <ul>
              <li className="hover:bg-slate-700 px-4 py-1 flex items-center">
                <div className="w-5 h-5 rounded-full bg-red-600" />
                <NavLink to="" className="text-white text-lg mx-2">
                  Dashboard
                </NavLink>
              </li>
              <li className="hover:bg-slate-700 px-4 py-1 flex items-center">
                <div className="w-5 h-5 rounded-full bg-red-600" />
                <NavLink to="" className="text-white text-lg mx-2">
                  New Product
                </NavLink>
              </li>
              <li className="hover:bg-slate-700 px-4 py-1 flex items-center">
                <div className="w-5 h-5 rounded-full bg-red-600" />
                <NavLink to="" className="text-white text-lg mx-2">
                  Pending Orders
                </NavLink>
              </li>
              <li className="hover:bg-slate-700 px-4 py-1 flex items-center">
                <div className="w-5 h-5 rounded-full bg-red-600" />
                <NavLink to="" className="text-white text-lg mx-2">
                  Reports
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="py-2 w-full">
          <div className="h-3/4">
          {children}
          </div>
          <div className="flex items-center justify-between bg-slate-700 h-20 px-4 w-full bottom-0">
            <div className="text-white py-2 ">&copy;Copyright</div>
            <div className="text-white py-2 ">Powered By Amina</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
