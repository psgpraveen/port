import React from "react";
import IMG from "./Email-campaign-amico.png";
import { motion } from "framer-motion";
const index = () => {
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 50, opacity: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
      className="card lg:m-16 lg:card-side lg:border-5 lg:border-black lg:shadow-xl">
      <figure className="lg:w-1/2">
        <img
          src={IMG}
          className="w-1/2 h-auto"
          height="100"
          width="100"
          alt="Album"
        />
      </figure>
      <div className="card-body lg:w-3/4">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="card-title">
          Get in touch with me for any inquiries or collaborations!
        </motion.h2>
        <motion.input
           initial={{ y: 50, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 1.1 }}
           transition={{ duration: 0.5 ,delay:0.25}}
          type="text" required
          placeholder="Type your Full Name here"
          className="input py-1 input-bordered input-secondary  bg-blue-50 w-full max-w-xs"
        />
        <motion.input  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 ,delay:0.5}}
          type="email" required
          placeholder="Type your Email here"
          className="input py-1 input-bordered input-secondary  bg-blue-50 w-full max-w-xs"
        />
        <input
          type="text"  initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 ,delay:1}} required
          placeholder="Type your message here"
          className="input py-1  input-bordered input-secondary  bg-blue-50 w-full max-w-xs"
        />
        <div className="card-actions justify-start">
          <button className="btn btn-primary ">Send</button>
        </div>
      </div>
    </motion.div>
  );
};

export default index;
