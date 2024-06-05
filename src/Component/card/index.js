import React from "react";
import { motion } from "framer-motion";
import Psg from "./img/PSG1.jpg";
import cv from "./img/Praveen Resume2.pdf";
// import { motion} from "framer-motion";
import "../../App.css"


const index = () => {
  const fade = {
    initial: {
      scale:0
    },
    animate: {
      scale:1.3,
      transition: { duration: 2, delay: 1,repeatType: "Infinity"},
    },
  };

  return (<>
    <div id="card" className="lg:flex w-full lg:h-[33rem] -mt-[3.5rem] lg:-mt-[5rem] px-8 lg:px-48 py-8">
      <div className="grid overflow-hidden lg:w-1/3 h-2/5 m-10 lg:m-0 lg:h-auto flex-grow card bg-base-300 rounded-box place-items-center">
        <motion.img
          style={{ x: -100 }}
          whileInView={{ x: 1, transition: { duration: 1 } }}
          className="h-fit w-fit"
          src={Psg}
          height={90}
          width={100}
        />
      </div>
      <div className="divider divider-horizontal"></div>
      <div className=" lg:w-4/5 overflow-hidden shadow  lg:p-8 flex-grow card  rounded-box ">
        <motion.span
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          whileHover={{ scaleX: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 1 }}
          className="font-bold text-4xl top-1 mx-4 lg:h-28 underline">
          <div className="border-solid border-2 border-sky-500 rounded-3xl rounded-l-none w-fit p-3 lg:-ml-16 -ml-8 mt-1 lg:-mt-4 lg:p-6  bg-sky-300">
            About
          </div>
        </motion.span>
        <motion.p
          style={{ height: "auto" }}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="p-2 overflow-hidden">
          "I'm Praveen, a Full-Stack and MERN Stack Developer with a passion for crafting comprehensive web solutions. My expertise lies in JavaScript, React, Node.js, Express, and MongoDB, enabling me to build dynamic, responsive applications. Committed to clean code and continuous learning, I aim to understand project needs and deliver scalable, efficient results. If you're seeking a developer with a meticulous approach to both front-end and back-end development, let's connect to create something impactful together."
        </motion.p>
        <table className="lg:m-16 m-3 p-8 font-bold text-black">
          <thead>
            <motion.tr
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}>
              <th className="text-black">Name:</th>
              <th className="text-slate-500">Praveen Kumar Gupta</th>
            </motion.tr>
          </thead>
          <tbody>
            <motion.tr
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}>
              <td className="text-black">Phone:</td>
              <td className="text-slate-500">+91-7985942726</td>
            </motion.tr>
            <motion.tr
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}>
              <td className="text-black">Email:</td>
              <td email="psgpraveen08@gmail.com" className="text-slate-500">
                psgpraveen08@gmail.com
              </td>
            </motion.tr>
            <motion.tr
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}>
              <td className="text-black">Follow me!</td>
              <td>
                <div className="grid grid-flow-col w-fit gap-2 my-3">
                  <motion.a
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 2 }}
                    whileTap={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    href="https://github.com/psgpraveen"
                    target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-github cursor-pointer"
                      viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </motion.a>
                  <motion.a
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 2 }}
                    whileTap={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    href="https://www.linkedin.com/in/praveen-kumar-gupta-10a8851a6/"
                    target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="blue"
                      class="bi bi-linkedin  cursor-pointer"
                      viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                    </svg>
                  </motion.a>
                  <motion.a
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 2 }}
                    whileTap={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    href=""
                    target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="blue"
                      class="bi bi-twitter  cursor-pointer"
                      viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                    </svg>
                  </motion.a>
                  <motion.a
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 2 }}
                    whileTap={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    href="https://www.instagram.com/psgpraveen0804/"
                    target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="red"
                      class="bi bi-instagram  cursor-pointer"
                      viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                    </svg>
                  </motion.a>
                </div>
              </td>
            </motion.tr>
          </tbody>
        </table>
        <div className="flex justify-center"><motion.a
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.5 }}
          // whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          href={cv}
          download="Praveen Resume"
          target="_blank">
          <button className="btn btn-primary  w-fit mb-3">
            Download CV
          </button>
        </motion.a></div><motion.div  whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.1 }} 
            variants={fade}
            initial="initial"
            whileInView="animate"
            className="ani1 ani"></motion.div>
    <motion.div  whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.1 }} 
            variants={fade}
            initial="initial"            
            whileInView="animate"
            viewport={{once:true}} className="ani2 ani"></motion.div>
    <motion.div  whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.1 }} 
            variants={fade}
            initial="initial"            
            whileInView="animate"
            viewport={{once:true}} className="ani3 ani"></motion.div>
    <motion.div  whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.1 }} 
            variants={fade}
            initial="initial"            
            whileInView="animate"
            viewport={{once:true}} className="ani4 ani"></motion.div>
    <motion.div  whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.1 }} 
            variants={fade}
            initial="initial"            
            whileInView="animate"
            viewport={{once:true}} className="ani5 ani"></motion.div>
    <motion.div  whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.1 }} 
            variants={fade}
            initial="initial"            
            whileInView="animate"
            viewport={{once:true}} className="ani6 ani"></motion.div>
      </div>

    </div>
    
    </>
  );
};

export default index;
