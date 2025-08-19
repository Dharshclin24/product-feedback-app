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
      console.log(gatheredApiInfo, "allSuggestions");
    } else {
      const filteredSuggestions = gatheredApiInfo.filter(
        (apiSuggestion) => apiSuggestion.category === category
      );
      console.log(filteredSuggestions, "filt lab");
      setSuggestions(filteredSuggestions);
    }
    // console.log(suggestions, "sugg Label");
  };

  const getApiInfo = async () => {
    try {
      const response = await fetch("/api/get-all-suggestions");
      const data = await response.json();
      console.log(data);
      await setGatheredApiInfo(data);
      handleSuggestionFilter("All");
      console.log();

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
      </div>

      <div className="suggestionsHeader">
        <img
          src="../assets/suggestions/icon-suggestions.svg"
          alt="suggestions Icon"
        />
        {/* <p>{setSuggestions.length} Suggestions</p> */}

        <button className="addFeedback">+ Add feedback</button>
      </div>
      <div className="filterDiv">
        <div id="myBtnContainer">
          <button
            className="btn active"
            onClick={() => {
              handleSuggestionFilter("All");
            }}
          >
            {" "}
            All
          </button>
          <button
            className="btn"
            onClick={() => {
              handleSuggestionFilter("UI");
            }}
          >
            {" "}
            UI
          </button>
          <button
            className="btn"
            onClick={() => {
              handleSuggestionFilter("UX");
            }}
          >
            {" "}
            UX
          </button>
          <button
            className="btn"
            onClick={() => {
              handleSuggestionFilter("Enhancements");
            }}
          >
            {" "}
            Enhancements
          </button>
          <button
            className="btn"
            onClick={() => {
              handleSuggestionFilter("Bug");
            }}
          >
            {" "}
            Bug
          </button>
          <button
            className="btn"
            onClick={() => {
              handleSuggestionFilter("Feature");
            }}
          >
            Feature
          </button>
        </div>
      </div>

      <div className="card">
        {suggestions?.map((input, index) => (
          <SuggestionCard input={input} key={index}></SuggestionCard>
        ))}
      </div>
    </>
  );
}
