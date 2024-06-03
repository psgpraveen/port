import React, { useState } from "react";
import IMG from "./Email-campaign-amico.png";
import { motion } from "framer-motion";
import Api from "../api/index";
import axios from "axios";
const Index = () => {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [hidden, setHidden] = useState(true);
  const [m, setM] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    if (!name.length > 0) {
      setM('Please Enter Your Name.');
      setHidden(false);

      setTimeout(() => {
        setHidden(true);
      }, 3000);
    }else if (!email.length > 0) {
      setM('Please Enter Your email.');
    setHidden(false);

    setTimeout(() => {
      setHidden(true);
    }, 3000);} else if (!msg.length>0) {
      setM('Please Enter Your Message.');
      setHidden(false);

      setTimeout(() => {
        setHidden(true);
      }, 3000);
    }
     else {
    try {
      await axios.post("https://portfo1.vercel.app/", {
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
      }, 3000);
    } catch (error) {
      console.log(error);
      }
    }}
    return (
      <>
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="card rounded-none lg:m-16 lg:card-side  lg:shadow-xl">
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
              transition={{ duration: 0.5, delay: 0.25 }}
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
              transition={{ duration: 0.5, delay: 0.5 }}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              required
              value={email}
              placeholder="Type your Email here"
              className="input py-1 input-bordered input-secondary  bg-blue-50 w-full max-w-xs"
            />
            <input
              type="text"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.1 }}
              transition={{ duration: 0.5, delay: 1 }}
              required
              onChange={(e) => {
                setMsg(e.target.value);
              }}
              value={msg}
              placeholder="Type your message here"
              className="input py-1  input-bordered input-secondary  bg-blue-50 w-full max-w-xs"
            />
            <div className="card-actions justify-start">
              <button className="btn btn-primary " onClick={submit}>
                Send
              </button>
            </div>
        <div>
          <Api hidden={hidden} m={m} />
        </div>
          </div>
        </motion.div>
      </>
    );
  };
export default Index;
