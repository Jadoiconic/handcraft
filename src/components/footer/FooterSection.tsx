import React from "react";
import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <>
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="py-3 px-8 ease-in delay-100 bg-slate-700 md:flex md:justify-between"
      >
        <div>
          <h1 className="text-slate-300 border-b border-b-slate-500 text-xl font-bold">
            Get to Know Us
          </h1>
          <ul className="py-2">
            <li className="py-2 text-slate-200">Blog</li>
            <li className="py-2 text-slate-200">About Handcraft</li>
            <li className="py-2 text-slate-200">Investors Relatios</li>
          </ul>
        </div>
        <div>
          <h1 className="text-slate-300 border-b border-b-slate-500 text-xl font-bold">
            Our Misstion
          </h1>
        </div>
        <div>
          <h1 className="text-slate-300 border-b border-b-slate-500 text-xl font-bold">
            Our Vision
          </h1>
        </div>
        <div>
          <h1 className="text-slate-200 border-b border-b-slate-500 text-xl font-bold">
            Subscribe
          </h1>
          <h2 className="text-slate-300 text-lg py-4 outline-none">
            for more Information
          </h2>
          <div className="flex rounded overflow-hidden bg-slate-900">
            <input
              type="text"
              className=" p-2 rounded  border border-slate-200 border-1"
            />
            <button className=" p-2 text-slate-200">Subscirbe</button>
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="py-5 px-8 text-center bg-slate-900 w-full"
      >
        <h1 className="text-white">&copy; Copyright Handcraft</h1>
      </motion.div>
    </>
  );
};

export default FooterSection;
