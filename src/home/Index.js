import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../Component/Header/index";
import Footer from "../Component/Footer/index";
import CARD from "../Component/card/index";
import PROJECT from "../Component/project/index";
import INTRO from "../Component/intro/index";
import Skill from "../Component/skill/index";
import Feedback from "../Component/feedback/index";
import Carousel from "../Component/carousel/index";
import Status from "../Component/status/index";
import Comment from "../Component/comment/index";
import img from "../Component/Header/psglogo.png";
import Phone from '../Component/Phone/Index'
import MyServices from '../Component/MyService/Index'
import {Helmet} from "react-helmet";

import axios from "axios";

const Index = () => {
  const url = process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : "http://localhost:5000";

  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState([])
  const fetchData = async () => {
    try {
      const res = await axios.get(`${url}status`);
      const d = await res.data;
      console.log(d);
      setResult(d)


    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }; useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (result.length > 0) {
      setIsLoading(false);
    }
  }, [result]);

  return (<> <Helmet>
    <meta charSet="utf-8" />
    <title>Psgpraveen</title>
    <link rel="canonical" href="https://ghscschool.vercel.app" />
    <meta name="description" content="Explore my portfolio showcasing my projects, skills, and services. Get in touch for inquiries or collaborations." />
    <meta name="keywords" content="Portfolio, Psgpraveen, projects, skills, services, contact" />
    <meta name="author" content="Psgpraveen" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index, follow" />
  </Helmet>
    <div className="relative ">
      {isLoading ? (
        <div className="w-full back1 bg-red-300 bg-opacity-25 h-dvh  center flex-col mx-auto grid justify-center justify-items-center"><motion.img className="opacity-30 h-1/3 mix-blend-darken my-auto w-fit" src={img} alt="Loading..."
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5, repeat: Infinity }} />
          <motion.h2 className=" " initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5, repeat: Infinity }}>Loading...</motion.h2>
          <motion.h2 className=" " initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5, repeat: Infinity }}>Please! Wait while backend server start...</motion.h2></div>
      ) : (
        <div>
          <Header />
          <Phone/>
          <INTRO />
          <Carousel />
          <CARD />
          <Status result={result} />
          <Skill />
          <PROJECT />
          <div className="bg-gradient-to-r from-blue-100 to-blue-50" ><MyServices />
          <Feedback />
          <Comment /></div>
          <Footer /></div>)}
    </div></>
  );
};

export default Index;
