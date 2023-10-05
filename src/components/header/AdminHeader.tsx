import React from "react";

const AdminHeader = () => {
  return (
    <>
      <div className="w-full h-10 bg-white py-7 shadow-lg sm:px-2 md:px-8 flex sticky top-0 z-10 justify-between items-center">
        <div className="text-xl">HandCraft</div>
        <div>
          <nav className="text-xl">
            <div className="w-10 h-10 bg-indigo-400 rounded-full text-white text-lg font-bold justify-center items-center flex"> T</div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
