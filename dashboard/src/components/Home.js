import React from "react";
import  { useState, useEffect } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import ChatAi from "./ChatAi";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);




useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const tokenFromURL = urlParams.get("token");

  if (tokenFromURL) {
    localStorage.setItem("token", tokenFromURL);

    // URL clean karo (important)
    window.history.replaceState({}, document.title, "/");
  }
}, []);

  return (
    <>
     {/* <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button> */}
      <TopBar />
      <Dashboard />
       <ChatAi/>

    </>
  );
};

export default Home;
