import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion} from "framer-motion";
import { useInView } from "react-intersection-observer";
let updatedLike = 0;
let updatedView = 0;
const Index = ({result}) => {
  const [hasRun, setHasRun] = useState(false);
  const [ref, inView] = useInView();
  const [view, setView] = useState(10);
  const [like, setLike] = useState(10);
  const [m, setM] = useState("none");
  useEffect(() => {
    if (result && result.length > 0) {
      setView(result[0].view);
      setLike(result[0].like);
      console.log(result);
    }
 }, [result])
 
  
  const lik = async () => {
    setM(m === "none" ? "red" : "none");
    updatedLike = m === "none" ? like + 1 : like - 1;
    setLike(updatedLike);
    await un();
  };
  const un = async () => {
    try {
      axios.post("https://portfo1.vercel.app/status", {
        like: updatedLike,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const un1 = async () => {
    updatedView = view+1;
    setView(updatedView)
    try {
     await axios.post("https://port-sz4o.onrender.com/status", {
        view: updatedView,
      });
      console.log("view is updadeed : " + updatedView);
    } catch (error) {
      console.log(error);
    }
  };

 

  useEffect(() => {
    if (inView && !hasRun) {
      un1(); 
      setHasRun(true);
    }
  }, [inView,hasRun]);
  return (
    <motion.div   ref={ref} className="flex justify-center justify-content-center mx-3 py-3">
      <div className="lg:stats rounded  bg-orange-800 shadow ">
        <div className="stat ">
          <div className="stat-figure text-primary cursor-pointer">
            <svg
              onClick={lik}  
              xmlns="http://www.w3.org/2000/svg"
              fill={m}
              viewBox="0 0 24 24"
              className="inline-block w-12 h-12 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          <div className="stat-title">Total Likes</div>
          <div className="stat-value text-primary">{like}</div>
          {/* <div className="stat-desc">21% more than last month</div> */}
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary ">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value text-secondary">
            {view}
          </div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        {/* <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
          <div className="stat-value">86%</div>
          <div className="stat-title">Tasks done</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div> */}
      </div>
    </motion.div>
  );
};
export default  Index;
