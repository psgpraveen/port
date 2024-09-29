import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Interiorpic from './img/image1.png';
import GHSCPic from './img/image.png';
import {Helmet} from "react-helmet";

const MyServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const data = [
    {
      title: "Interior Design Website",
      description: "Explore my professional interior design website that showcases my design skills and portfolio. This website is built with full production readiness in mind, ensuring high performance and reliability.",
      urllink: "https://psgpraveen.github.io/interior-design/",
      img: Interiorpic,
    },
    {
      title: "GHSC Government School",
      description: "Explore the GHSC Government School website to learn more about our commitment to providing quality education to students. Our school focuses on holistic development, offering modern facilities and a nurturing environment for academic and personal growth.",
      urllink: "https://ghscschool.vercel.app/",
      img: GHSCPic,
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]); 

  return (
    <section className=" py-16">

<Helmet>
    <meta charSet="utf-8" />
    {/* <title>My Services - Psgpraveen</title> */}
    <link rel="canonical" href="https://ghscschool.vercel.app/my-services" />
    <meta name="description" content="Explore my services including Interior Design and GHSC Government School website. Discover my design skills and projects dedicated to quality education." />
    <meta name="keywords" content="Interior Design, Web Development, GHSC Government School, Quality Education, Professional Services" />
    <meta name="author" content="Psgpraveen" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index, follow" />
</Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          My Services
        </h2>

        <div
          className="relative overflow-hidden  "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {data.map((service, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-30 absolute'}`}
              initial={{ y: 50, opacity: 0 }}
            whileInView={index === currentIndex ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-full md:w-1/2">
                <motion.img
                  src={service.img}
                  alt={`${service.title} Preview`}
                  className="rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
                />
              </div>
              <motion.div initial={{ y: 50, opacity: 0 }}
                whileInView={index === currentIndex ? { opacity: 1, y: 0 } : {}}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.1 }}
                transition={{ duration: 0.5, delay: 0.6 }} className="w-full md:w-1/2 text-center md:text-left p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-3xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-4 mb-6">
                  {service.description}
                </p>
                <a
                  href={service.urllink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full shadow-md hover:bg-red-700 hover:shadow-lg transition duration-300 transform hover:scale-105"
                >
                  Visit Website
                </a>
                <p className="text-gray-500 mt-4 italic">
                  This website is intended for production use.
                </p>
              </motion.div>
            </motion.div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white px-2 lg:px-4 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>

          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white px-2 lg-px-4 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center"
          >

            <svg
              className="w-5 h-5 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyServices;
