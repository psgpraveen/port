import React, { useState, useEffect } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import ScrollToBottom from "react-scroll-to-bottom";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [v, setV] = useState("");
  const [name, setName] = useState("");
  const [na, setNa] = useState("");
  const [he, setHe] = useState("none");
  const url = process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : "http://localhost:5000";
  const [com, setCom] = useState([]);

  const sortArrayReverse = (arr) => {
    arr.sort((a, b) => a - b).reverse();
    return arr;
  };

  const Get = async () => {
    try {
      const res = await axios.get(`${url}comment` || "http://localhost:5000/comment");
      const result = res.data;
      setCom(sortArrayReverse(result));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    Get();
  }, []);

  const send = async () => {
    try {
      setLoading(true);
      if (v.length > 0) {
        await axios.post(`${url}comment` || "http://localhost:5000/comment", {
          comment: v,
          Name: name,
          Time: new Date().toISOString(),
        });
        setV("");
        Get();
      }
    } catch (error) {
      console.error("Error sending comment:", error);
    } finally {
      setLoading(false);
    }
  };

  const getTimeInIndianTimezone = (timeString) => {
    const date = new Date(timeString);
    return formatDistanceToNow(date, { addSuffix: true, locale: enUS });
  };

  const toggleEmojiPicker = () => {
    setHe(he === "none" ? "block" : "none");
  };

  return (
    <div id="comment" className="p-4 lg:mx-64 bg-white rounded-lg shadow-lg lg:p-8">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">Share Your Thoughts</h1>
      <ScrollToBottom className="p-4 bg-gray-100 rounded-lg shadow-inner max-h-80 overflow-auto">
        <AnimatePresence>
          {com.map((data) => (
            <motion.div
              key={data._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-4"
            >
              <div className="text-lg font-semibold text-blue-500">{data.Name}</div>
              <div className="bg-gray-200 text-gray-800 p-4 rounded-lg shadow-md">
                {data.comment}
              </div>
              <div className="opacity-75 text-sm text-gray-500 mt-1">
                {getTimeInIndianTimezone(data.Time)}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </ScrollToBottom>
      {name.length > 0 ? (
        <div className="relative flex items-center px-3 py-2 mt-4 bg-gray-100 rounded-lg shadow-lg">
          <button
            type="button"
            onClick={toggleEmojiPicker}
            className="p-2 text-gray-600 rounded-lg hover:text-gray-900 hover:bg-gray-200 transition duration-300"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"
              />
            </svg>
            <span className="sr-only">Emoji Picker</span>
          </button>
          {he === "block" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-16 right-4 z-10"
            >
              <Picker
                data={data}
                onEmojiSelect={(emoji) => setV(v + emoji.native)}
              />
            </motion.div>
          )}
          <textarea
            rows="1"
            value={v}
            onChange={(e) => setV(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                send();
              }
            }}
            className="flex-1 mx-4 p-2.5 text-sm text-gray-800 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your message..."
          ></textarea>
          <button
            type="submit"
            onClick={send}
            className={`p-2 text-blue-600 rounded-full transition duration-300 ${
              loading ? "bg-gray-300" : "hover:bg-blue-100"
            }`}
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-5 h-5 rotate-90 rtl:-rotate-90"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
              </svg>
            )}
            <span className="sr-only">Send message</span>
          </button>
        </div>
      ) : (
        <div className="flex items-center bg-gradient-to-r from-purple-500 via-pink-600 to-red-600 px-3 py-2 mt-4 rounded-lg shadow-lg">
          <textarea
            rows="1"
            value={na}
            onChange={(e) => setNa(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                setName(na);
              }
            }}
            className="flex-1 mx-4 p-2.5 text-sm text-gray-800 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter Your Name..."
          ></textarea>
          <button
            type="submit"
            onClick={() => setName(na)}
            className="p-2 text-white rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300"
          >
            <svg
              className="w-5 h-5 rotate-90 text-orange-400 rtl:-rotate-90"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
            </svg>
            <span className="sr-only">Submit Name</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;
