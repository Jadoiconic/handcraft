import React from "react";

const FooterSection = () => {
  return (
    <>
    <div className="py-2 px-8 bg-slate-800 md:flex md:justify-between">
      <div>
        <h1 className="text-[#00f900] border-b border-b-slate-500 text-xl font-bold">Get to Know Us</h1>
        <ul className="py-2">
          <li className="py-2 text-slate-200">Blog</li>
          <li className="py-2 text-slate-200">About Handcraft</li>
          <li className="py-2 text-slate-200">Investors Relatios</li>
        </ul>
      </div>
      <div>
        <h1 className="text-[#00f900] border-b border-b-slate-500 text-xl font-bold">Our Misstion</h1>
      </div>
      <div>
        <h1 className="text-[#00f900] border-b border-b-slate-500 text-xl font-bold">Our Vision</h1>
      </div>
      <div>
        <h1 className="text-red-600 border-b border-b-slate-500 text-xl font-bold">Subscribe</h1>
        <h2 className="text-slate-300 text-lg py-4 outline-none">for  more Information</h2>
        <div className="flex rounded overflow-hidden bg-red-600">
          <input type="text" className=" p-2 rounded  border border-red-600 border-1" />
          <button className=" p-2">Subscirbe</button>
        </div>
      </div>
    </div>
    <div className="py-5 px-8 text-center bg-slate-900 w-full">
      <h1 className="text-white">&copy; Copyright Handcraft</h1>
    </div>
    </>
  );
};

export default FooterSection;
