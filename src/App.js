import Header from "./Component/Header/index";
import Footer from "./Component/Footer/index";
import CARD from "./Component/card/index";
import Home from './home/Index'
import Robot from "./Component/ROBO/index";
import Tesla from "./Component/Tesla/index";
import PROJECT from "./Component/project/index";
import Ldr from "./Component/Ldr/index";
import { motion} from "framer-motion";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
function App() {
  const fade = {
    initial: {
      scale:0
    },
    animate: {
      scale:1.3,
      transition: { duration: 2, delay: 1,repeatType: "Infinity"},
    },
  };

  return (
    <> 
   
    <div>
      <Router>
        <Routes>
          <Route
            path="/port"
            element={
             <Home/>
            }></Route>
          <Route
            path="/Robot"
            element={
              <>
                <Header /> <Robot /> <Footer />
              </>
            }></Route>
          <Route
            path="/tesla"
            element={
              <>
                <Header /> <Tesla /> <Footer />
              </>
            }></Route>
          <Route
            path="/Robot"
            element={
              <>
                <Header /> <Robot /> <Footer />
              </>
            }></Route>
          <Route
            path="/project"
            element={
              <>
                <Header /> <PROJECT /> <Footer />
              </>
            }></Route>
          <Route
            path="/about"
            element={
              <>
                <Header /> <CARD /> <Footer />
              </>
            }></Route>
          <Route
            path="/Ldr"
            element={
              <>
                <Header /> <Ldr /> <Footer />
              </>
            }></Route>
        </Routes>
      </Router>
  </div>
  <motion.div  whileHover={{ scale: 1.05 }}
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
    </>
  );
}

export default App;
