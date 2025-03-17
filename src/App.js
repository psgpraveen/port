import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "./Component/Header/index";
import Footer from "./Component/Footer/index";
import CARD from "./Component/card/index";
import Home from "./home/Index";
import Robot from "./Component/ROBO/index";
import Tesla from "./Component/Tesla/index";
import PROJECT from "./Component/project/index";
import Ldr from "./Component/Ldr/index";
import Service from "./Component/MyService/Index.js";
import "./App.css";
import { initGA, trackPageView } from "./utils/analytics";
import { useEffect } from "react";
const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return null;
};

function App() {
  useEffect(() => {
    initGA();
  }, []);
  return (
    <HelmetProvider>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Psgpraveen",
          "url": "https://psgpraveen.github.io/port/",
          "image": "https://psgpraveen.github.io/port/assets/image.webp",
          "jobTitle": "Full-Stack Developer",
          "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
          },
          "sameAs": [
            "https://github.com/psgpraveen",
            "https://www.linkedin.com/in/psgpraveen"
          ]
        })}</script>

        <title>Psgpraveen | Full-Stack Developer & MERN Stack Expert</title>
        <meta name="description" content="Hi, I'm Psgpraveen, a Full-Stack Web Developer specializing in React, Node.js, and MongoDB. Explore my projects & skills!"/>
        <meta name="keywords" content="Full-Stack Developer, MERN Stack, React, Node.js, MongoDB, JavaScript, Web Development, Portfolio"/>
        <meta property="og:image" content="https://psgpraveen.github.io/port/assets/image.webp"/>
        <link rel="canonical" href="https://psgpraveen.github.io/port/"/>
      </Helmet>

      <Router basename="/port">
      <AnalyticsTracker />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tesla" element={<Tesla />} />
          <Route path="/robot" element={<Robot />} />
          <Route path="/project" element={<PROJECT />} />
          <Route path="/about" element={<CARD />} />
          <Route path="/ldr" element={<Ldr />} />
          <Route path="/service" element={<Service />} />
        </Routes>
        <Footer />
      </Router>

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          variants={{
            initial: { scale: 0 },
            animate: { scale: 1.3, transition: { duration: 2, delay: i * 0.2, repeat: 3 } },
          }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          className={`ani${i + 1} ani`}
        />
      ))}
    </HelmetProvider>
  );
}

export default App;
