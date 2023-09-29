import React from "react";
import dummyData from "../../utilities/constants/dummyData";

const Prodcuts = () => {
    console.log(dummyData)
  return (
    <div className="grid md:grid-cols-4 lg:grid-cols-4 md:gap-4">
      {dummyData.map((item) => (
        <>
          <div key={item.id} className="bg-indigo-200  rounded overflow-hidden">
            {item.images[0] && <img src={item.images[0]} alt={item.name} className="w-full" height={100}/>}
            <div className="px-2 flex justify-between">
            <h1>{item.name}</h1>
            <h1>${item.price}</h1>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Prodcuts;
