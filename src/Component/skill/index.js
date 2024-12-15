import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skills = [
  { name: 'HTML', img: 'https://icon-library.com/images/html5-icon-png/html5-icon-png-1.jpg', desc: 'Markup language for creating web pages.' },
  { name: 'CSS', img: 'https://cdn-icons-png.flaticon.com/512/732/732190.png', desc: 'Style sheet language for designing web pages.' },
  { name: 'JavaScript', img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', desc: 'Programming language for web development.' },
  { name: 'React', img: 'https://i0.wp.com/www.diginixai.com/wp-content/uploads/2020/02/pngkey.com-react-logo-png-2224863-350x250.png', desc: 'JavaScript library for building user interfaces.' },
  { name: 'Node.js', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', desc: 'Runtime for executing JavaScript on the server.' },
  { name: 'MongoDB', img: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg', desc: 'NoSQL database for modern applications.' },
  { name: 'Express.js', img: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png', desc: 'Web application framework for Node.js.' },
  { name: 'Git', img: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png', desc: 'Version control system for tracking changes.' },
  { name: 'Bootstrap', img: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg', desc: 'CSS framework for building responsive websites.' },
  { name: 'Tailwind CSS', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', desc: 'Utility-first CSS framework for rapid UI development.' },
  { name: 'React Native', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', desc: 'Framework for building native mobile apps using React.' },
  { name: 'MySQL', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg', desc: 'Relational database management system.' }
];

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 4;

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(true);
      setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % skills.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const visibleSkills = skills.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="w-full flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold text-black mb-8">My Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 overflow-hidden">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-4 flex justify-center items-center"
            >
              <p className="text-xl font-semibold text-gray-700">Loading...</p>
            </motion.div>
          ) : (
            visibleSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center bg-white p-3 sm:p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="h-16 w-16 sm:h-20 sm:w-20 object-contain mb-3 sm:mb-4"
                />
                <h2 className="text-sm sm:text-lg font-semibold text-gray-800 text-center">{skill.name}</h2>
                <p className="text-xs sm:text-sm text-gray-600 text-center mt-1 sm:mt-2">{skill.desc}</p>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
