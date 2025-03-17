import React, { useState } from "react";
import IMG from "./Email-campaign-amico.png";
import { motion } from "framer-motion";
import Api from "../api/index";
import axios from "axios";
// import {Helmet} from "react-helmet";
const Index = () => {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [hidden, setHidden] = useState(true);
  const url = process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : "http://localhost:5000";
  const [m, setM] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!name.length > 0) {
        setM('Please Enter Your Name.');
        setHidden(false);
  
        setTimeout(() => {
          setHidden(true);
        }, 3000);
      } else if (!email.length > 0) {
        setM('Please Enter Your email.');
        setHidden(false);
  
        setTimeout(() => {
          setHidden(true);
        }, 3000);
      } else if (!msg.length > 0) {
        setM('Please Enter Your Message.');
        setHidden(false);
  
        setTimeout(() => {
          setHidden(true);
        }, 3000);
      }
      else {
       
          await axios.post(`${url}` || "http://localhost:5000/", {
            msg,
            email,
            name,
          });
          setM("Message sent successfully.");
          setMsg("");
          setEmail("");
          setName("");
          setHidden(false);
  
          setTimeout(() => {
            setHidden(true);
          }, 3000);}
      
    } catch (error) {
      console.log(error);
    }finally {
      setLoading(false); 
    }
    }
  
  
  return (
    <>
    
    <div className="lg:p-16">
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="card rounded-none lg:rounded-3xl  lg:card-side lg:mx-[3rem] lg:shadow-xl">
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
            transition={{ duration: 0.5, delay: 0.15 }}
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            required
            placeholder="Type your Full Name here"
            className="input py-1 input-bordered input-secondary  bg-blue-50 w-full max-w-xs"
          />
          <motion.input
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            required
            value={email}
            placeholder="Type your Email here"
            className="input py-1 input-bordered input-secondary  bg-blue-50 w-full max-w-xs"
          />
          <motion.input
            type="text"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            required
            onChange={(e) => {
              setMsg(e.target.value);
            }}
            value={msg}
            placeholder="Type your message here"
            className="input py-1  input-bordered input-secondary  bg-blue-50 w-full max-w-xs"
          />
          <div className="card-actions justify-start">
          <button
              className={`btn btn-primary ${loading ? "loading" : ""}`}
              onClick={submit}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
          <div>
            <Api hidden={hidden} m={m} />
          </div>
        </div>
      </motion.div></div>
    </>
  );
};
export default Index;
