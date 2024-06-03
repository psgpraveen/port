import React, { useState, useEffect } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import ScrollToBottom from "react-scroll-to-bottom";

const Index = () => {
  const [v, setV] = useState("");
  const [name, setName] = useState("");
  const [na, setNa] = useState("");
  const [he, setHe] = useState("none");
  const [com, setCom] = useState([]);
  const sortArrayReverse=(arr)=> {
    arr.sort((a, b) => a - b);
    arr.reverse();
    return arr;
}

  const Get = async () => {
    try {
      const res = await axios.get("https://portfo1.vercel.app/comment");
      const result = await res.data;
      await sortArrayReverse(result)
      setCom(result);
      // console.log(">>>>", com);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    Get();
  }, [Get]);
  const send = async () => {
    try {
      if (v.length > 0) {
        await axios.post("https://port-sz4o.onrender.com/comment", {
          comment: v,
          Name:name,
          Time: new Date().toISOString(),
        });
        setV("");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getTimeInIndianTimezone = (timeString) => {
    const date = new Date(timeString);
    return formatDistanceToNow(date, { addSuffix: true, locale: enUS });
  };
  const emo = () => {
    setHe(he === "none" ? "block" : "none");
  };
  
  return (
    <div id="comment"className="p-2 border-black lg:mx-96 bg-[url('https://cdn2.vectorstock.com/i/1000x1000/77/61/chat-wallpaper-social-media-message-background-vector-30037761.jpg')] rounded border lg:p-16  ">
      <h1 className="text-center text-3xl bg-white">Write Your Opinion</h1>
      <ScrollToBottom className="p-4 bg-opacity-20 chat-start max-h-72  overflow-auto">
        {com.map((data) => {
          return (
            <div key={data._id}>
              <div className="chat-header text-rose-500">{data.Name}</div>
              <div className="chat-bubble">{data.comment}</div>
              <div className="chat-footer opacity-50 px-8">
                {getTimeInIndianTimezone(data.Time)}
              </div>
            </div>
          );
        })}
      </ScrollToBottom>
      {
         name.length>0?<>
        <label htmlFor="chat" className="sr-only">
          Your message
        </label>
        <div className="flex items-center px-3 py-2 h-16 rounded-lg bg-gray-50 dark:bg-gray-700">
          <button
            type="button"
            onClick={emo}
            className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"
              />
            </svg>
            <span className="sr-only">EmojiPicker</span>
          </button>
          {he === "block" && (
            <span className="z-10 mt-96">
              <Picker data={data} onEmojiSelect={(emoji) => {setV(v + emoji.native) }} />
            </span>
          )}
          <textarea
            id="chat"
            rows="1"
            value={v}
            onChange={(e) =>{setV(e.target.value)}}
            onKeyDown={ (e) => {if (e.key === "Enter") {e.preventDefault();send();}}}
            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 text-center dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."></textarea>
          <button
            type="submit"
            onClick={send}
            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
            <svg
              className="w-5 h-5 rotate-90 rtl:-rotate-90"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20">
              <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
            </svg>
            <span className="sr-only">Send message</span>
          </button>
        </div>
      </>:
      <>
        <label htmlFor="chat" className="sr-only">
          Enter Your Name
        </label>
        <div className="flex items-center bg-black px-3 py-2 h-16 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <textarea
            id="chat"
            rows="1"
            value={na}
            onChange={(e)=>{setNa(e.target.value)}}
            onKeyDown={ (e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                setName(na);
              }
            }}
            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 text-center dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Name..."></textarea>
          <button
            type="submit"
            onClick={()=>{setName(na)}}
            className="inline-flex justify-center p-2 text-white-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
            <svg
              className="w-5 h-5 rotate-90 text-orange-500 rtl:-rotate-90"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 18 20">
              <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
            </svg>
            <span className="sr-only">Send message</span>
          </button>
        </div>
      </>}
    </div>
  );
};

export default Index;
