import React from "react";
import Prodcuts from "../../components/product/Prodcuts";

const HomePage = () => {
  return (
    <>
      <section className="h-[80vh] bg-slate-700 w-full  overflow-hidden">
        <div className="bg-blend-overlay">sdkjdsj</div>
            <img src="https://plus.unsplash.com/premium_photo-1677700640509-0de0e668e03b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" className="w-full object-cover" alt="" />
        
      </section>
      <section className="md:px-8 lg:px-8 py-4">
        <Prodcuts />
      </section>
    </>
  );
};

export default HomePage;
