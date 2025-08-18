import { Routes, Route, Link } from "react-router-dom";
import SuggestionCard from "../Components/SuggestionCard";
// header(left side my company board non reactive)Use Css grid or flexbox
//right side nav/bar feedBackButton on the right, icon and counter to the left in the navbar.
//6 buttons (all, ui, ux,enhancement, bug, features)
//display suggestion cards
import { useEffect, useState } from "react";
import "../index.css";

export default function Home() {
  const [gatheredApiInfo, setGatheredApiInfo] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  //created local variable for information to be stored after it has  been gathered.
  const handleSuggestionFilter = (category) => {
    if (category == "All") {
      setSuggestions(gatheredApiInfo);
    } else {
      const filteredSuggestions = gatheredApiInfo.filter(=>);
    }
    setSuggestions();
  };

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
      <div className="icon">
        <h1>My Company</h1>
        <h3>Feed Back Board</h3>
        <div className="flex-container"></div>{" "}
        <h2>
          Suggestions <button className="filter">Add FeedBack</button>
        </h2>
      </div>
      <div className="filterDiv">
        <div id="myBtnContainer">
          <button
            class="btn active"
            onClick={() => {
              handleSuggestionFilter("All");
            }}
          >
            {" "}
            All
          </button>
          <button
            class="btn"
            onClick={() => {
              handleSuggestionFilter("UI");
            }}
          >
            {" "}
            UI
          </button>
          <button
            class="btn"
            onClick={() => {
              handleSuggestionFilter("UX");
            }}
          >
            {" "}
            UX
          </button>
          <button
            class="btn"
            onClick={() => {
              handleSuggestionFilter("Enhancements");
            }}
          >
            {" "}
            Enhancements
          </button>
          <button
            class="btn"
            onClick={() => {
              handleSuggestionFilter("Bug");
            }}
          >
            {" "}
            Bug
          </button>
          <button
            class="btn"
            onClick={() => {
              handleSuggestionFilter("Feature");
            }}
          >
            Feature
          </button>
        </div>
      </div>

      <div className="card">
        {gatheredApiInfo.map((input, index) => (
          <SuggestionCard input={input} key={index}></SuggestionCard>
        ))}
      </div>
    </>
  );
}
