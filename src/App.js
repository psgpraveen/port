import "./App.css";
import Header from "./Component/Header/index";
import Footer from "./Component/Footer/index";
import CARD from "./Component/card/index";
import INTRO from "./Component/intro/index";
import Skill from "./Component/skill/index";
import Robot from "./Component/ROBO/index";
import Tesla from "./Component/Tesla/index";
import Ldr from "./Component/Ldr/index";
import Feedback from "./Component/feedback/index";
import PROJECT from "./Component/project/index";
import Carousel from "./Component/carousel/index";
import Status from './Component/status/index'
import Comment from './Component/comment/index'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/port"
            element={
              <>
                <Header />
                <INTRO />
                <Carousel />
                <CARD />
                <Status/>
                <Skill />
                <PROJECT />
                <Feedback/>
                <Comment/>
                <Footer />
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
    </>
  );
}

export default App;
