import React, { useState, useEffect } from "react";
import { motion,useScroll } from "framer-motion";
const Index = () => {
  const [display, setDisplay] = useState("");
  let [currentIndex, setCurrentIndex] = useState(0);
  let [isReversed, setIsReversed] = useState(false);
  let [index, setIndex] = useState(0);
const {scrollYProgress} =useScroll();
  let [name, setName] = useState([
    "Full Stack web devloper",
    "Electronic Engineer",
  ]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isReversed) {
        if (currentIndex <= name[index].length) {
          setDisplay(name[index].slice(0, currentIndex));
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsReversed(true);
        }
      } else {
        if (currentIndex > 0) {
          setDisplay(name[index].slice(0, currentIndex));
          setCurrentIndex((prevIndex) => prevIndex - 1);
        } else {
          setIsReversed(false);
          setIndex((prevIndex) => (prevIndex + 1) % name.length);
        }
      }
    }, 100);
    return () => clearInterval(interval);
  }, [name, index, currentIndex, isReversed]);
  return (
    <div 
      id="intro"
      className="flex justify-center items-center h-auto w-full p-8">
      <div className="card w-full h-1/2 bg-purple-300 p-1 text-primary-content">
        <div className="card-body overflow-hidden bg-purple-300">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{duration: 3, delay: 0.25} }
            viewport={{once:true}}
            className="text-red-800 text-sm card-title justify-center items-center bg-purple-300">
            Hey! I AM
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0,transition: { duration: 2, delay: 0.50 } }}
           viewport={{once:true}}
            className="bg-purple-300 text-4xl font-bold  text-black card-title justify-center items-center">
            Praveen Gupta
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0,transition: { duration: 3, delay: 1 } }}
            viewport={{once:true}}
            className="bg-purple-300 text-xl font-bold text-red-800 card-title justify-center items-center">
            <h2 className="text-black bg-purple-300">I am </h2>
            {display}
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default Index;
