import { Routes, Route, Link } from "react-router-dom";
import SuggestionCard from "../Components/SuggestionCard";
// header(left side my company board non reactive)Use Css grid or flexbox
//right side nav/bar feedBackButton on the right, icon and counter to the left in the navbar.
//6 buttons (all, ui, ux,enhancement, bug, features)
//display suggestion cards
import { useEffect, useState } from "react";

// import "./index.css";

export default function Home() {
  const [gatheredApiInfo, setGatheredApiInfo] = useState([]);
  //created local variable for information to be stored after it has  been gathered.

  const getApiInfo = async () => {
    try {
      const response = await fetch("/api/get-all-suggestions");
      const data = await response.json();
      console.log(data);
      setGatheredApiInfo(data);
      //saved the api data into the state variable called gathered ApiInfo state variable and changed the value to data
      //data is passed as props to the other pages for the information gathered.
    } catch (error) {
      console.error("Oopsies! Error fetching data:", error);
    }
  };

  // useEffect to fetch the newest suggestion data when the component mounts
  useEffect(() => {
    getApiInfo();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      <div>
        <h1>My Company</h1>
        <h2>Feedback Board</h2>
      </div>

      <div className="filter-container">
        {/* filter stuff */}
        <button>ALL</button>
        <button>UI</button>
        <button>UX</button>
        <button>Enhancement</button>
        <button>Bug</button>
        <button>Feature</button>
      </div>

      <div className="suggestion-container">
        {/* cards */}
        <p>suggestions</p>
      </div>

      {gatheredApiInfo.map((input, index) => (
        <SuggestionCard input={input} key={index}></SuggestionCard>
      ))}
    </>
  );
}
