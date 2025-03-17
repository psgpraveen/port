import React, { useState, useEffect } from "react";
import { motion} from "framer-motion";
import './ccs.css'
const Index = () => {
  const [display, setDisplay] = useState("");
  let [currentIndex, setCurrentIndex] = useState(0);
  let [isReversed, setIsReversed] = useState(false);
  let [index, setIndex] = useState(0);
  let [name] = useState([
    "Full Stack web devloper",
    "Engineer","Technophile",
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
    <>
      <div className="diff aspect-[16/9] lg:aspect-[22/9] lg:-mt-[5rem] lg:p-16 mx-auto lg:w-3/4" >
        <div className="diff-item-1 ">
          <div className="bg-tab-content text-primary-content text-black text-9xl font-black grid place-content-center">
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 3, delay: 0.25 }}
              viewport={{ once: true }}
              className=" text-sm card-title text-red-800 justify-center items-center">
              Hey! I AM
            </motion.h3>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 2, delay: 0.5 },
              }}
              viewport={{ once: true }}
              className=" text-4xl font-bold  card-title justify-center items-center">
              Praveen Gupta
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 3, delay: 1 },
              }}
              viewport={{ once: true }}
              className=" text-xl font-bold text-red-800 card-title justify-center items-center">
              <h2>I am </h2>
              {display}|.
            </motion.h2>
          </div>
        </div>
        <div className="diff-item-2 lg:opacity-0">
          <div className="bg-black bg-opacity-50 text-9xl text-cyan-400  font-black grid place-content-center">
            <h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 3, delay: 0.25 }}
              viewport={{ once: true }}
              className=" text-sm card-title text-black justify-center items-center">
              Hey! I AM
            </h3> 
            <h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 2, delay: 0.5 },
              }}
              viewport={{ once: true }}
              className=" text-4xl font-bold  card-title justify-center items-center">
              Praveen Gupta
            </h1>
            <h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 3, delay: 1 },
              }}
              viewport={{ once: true }}
              className=" text-xl font-bold text-Fuchsia-600 card-title justify-center items-center">
              <h2 className="text-black">I am </h2>
              {display}|.
            </h2>
          </div>
        </div>
        <div className="diff-resizer w-[3rem] lg:opacity-0"></div>
      </div>
    </>
  );
};

export default Index;
