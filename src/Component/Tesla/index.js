import React,{useEffect} from "react";
import circuit from "./img/Inkedtesla-circuits.jpg";
import tesla2 from "./img/tesla2.mp4";
import {motion} from 'framer-motion'
import tesla3 from "./img/Tesla3.mp4";
import Comment from '../comment/index.js'

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  }, [])
  return (
     <div id='tes' className="py-3 overflow-hidden"> 
      <motion.h1   initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}className="text-center font-bold text-black  underline">
        Objective: To Glow Bulb Wirelessly
      </motion.h1>
      <motion.p  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}className="p-8">
        An electrical resonant transformer circuit designed by inventor Nikola
        Tesla in 1891. A high current high frequency transistor like 2N2222 is
        used to supply current through the primary coil. The whole set up is
        powered by a 9V battery. The positive end of the battery reaches the
        collector of Transistor through the primary coil, and the emitter is
        grounded. This means that whenever the transistor conducts, current is
        flown through the primary coil. The LED diode and one end of the
        secondary coil is also connected to base of transistor to make the
        circuit oscillate, this way the transistor will send a oscillating
        current into primary coil. hence will produce a carrying magnetic flux
        around it. Now, this coil is wound around the secondary coil and this is
        very large than primary coil. hence this coil will have a very strong
        electric flux around it that is powerful enough to glow normal CFL bulbs
        and is used in Wireless Power Transmission
      </motion.p>
      <motion.img  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}src={circuit} className="px-56 py-16" alt="Circuit" />
      <motion.h2  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}className="text-center font-bold underline text-black">WORKING MODEL</motion.h2>
      <div className="lg:flex gap-5 mx-16 my-12 justify-center justify-content-center ">
        <motion.video  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }} viewport={{once:true}} class="h-80 border-black drop-shadow-md mb-4  lg:mb-0 rounded-lg border-3" autoPlay muted controls>
          <source src={tesla2} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
        <motion.video  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }} viewport={{once:true}}class="h-80 border-3 rounded-lg drop-shadow-md border-black" autoPlay muted controls>
          <source src={tesla3} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      </div>        <div className="w-full"><Comment/></div>

    </div>
  );
};

export default Index;
