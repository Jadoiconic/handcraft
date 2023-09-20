import React, { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "./components/header/NavBar";
function App() {
  const [zoom, setZoom] = useState(0.5);
  const [rotation, setRotation] = useState(0);
  const [xAxis, setXAxis] = useState(0);
  const [yAxis, setYAxis] = useState(0);
  return (
    <>
    <NavBar />
      <div className="w-screen h-[80vh] flex justify-center items-center">
        <motion.h1
          className=" bg-slate-400 rounded px-10 py-5"
          animate={{
            x: xAxis,
            y: yAxis,
            scale: zoom,
            rotate: rotation, transition:[0,1],
          }}
          drag
           whileDrag={{backgroundColor:'teal'}}
        >
          Hello How are you!
        </motion.h1>
      </div>
      <div className="px-10">
        <button
          onClick={() => setXAxis(xAxis - 5)}
          className="px-4 py-2 bg-indigo-400 text-white rounded mr-2"
        >
          Left
        </button>
        <button
          onClick={() => setYAxis(yAxis - 5)}
          className="px-4 py-2 bg-indigo-400 text-white rounded mr-2"
        >
          Top
        </button>
        <button
          onClick={() => setXAxis(xAxis + 5)}
          className="px-4 py-2 bg-indigo-400 text-white rounded mr-2"
        >
          Right
        </button>
        <button
          onClick={() => setYAxis(yAxis + 5)}
          className="px-4 py-2 bg-indigo-400 text-white rounded mr-2"
        >
          Bottom
        </button>
        <button
          onClick={() => setRotation(rotation + 5)}
          className="px-4 py-2 bg-indigo-400 text-white rounded mr-2"
        >
          Rotate
        </button>
        <button
          onClick={() => setZoom(zoom + 0.1)}
          className="px-4 py-2 bg-indigo-400 text-white rounded mr-2"
        >
          Zoom In
        </button>
        <button
          onClick={() => setZoom(zoom - 0.1)}
          className="px-4 py-2 bg-indigo-400 text-white rounded mr-2"
        >
          Zoom Out
        </button>
      </div>
    </>
  );
}

export default App;
