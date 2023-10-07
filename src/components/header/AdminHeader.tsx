import React from "react";

const AdminHeader = () => {
  return (
    <>
      <div className="w-full h-10 bg-white py-7 shadow-lg px-2 sm:px-8 md:px-8 flex sticky top-0 z-10 justify-between items-center">
        <div className="text-xl ">HandCraft</div>
        <div>
          <nav className="text-xl">
            <div className="hidden w-10 h-10 bg-indigo-400 rounded-full text-white text-lg font-bold justify-center items-center md:flex"> T</div>
            
          </nav>
        </div>
      </div>
      <div className="bg-slate-700 h-screen w-5/6">
        <h1 className="f-1">Hell Navigation</h1>
      </div>
    </>
  );
};

export default AdminHeader;
