import { Routes, Route, Link } from "react-router-dom";
// header(left side my company board non reactive)Use Css grid or flexbox
//right side nav/bar feedBackButton on the right, icon and counter to the left in the navbar.
//6 buttons (all, ui, ux,enhancement, bug, features)
//display suggestion cards
// import { useEffect, useState } from "react";
// import "./index.css";

export default function Home() {
  //const [gatheredApiInfo, setGatheredApiInfo] = useState([]);
  //created local variable for information to be stored after it has  been gathered.

  const getApiInfo = async () => {
    try {
      const response = await fetch(
        " http://localhost:3000/get-all-suggestions"
      );
      const data = await response.json();
      console.log(data);
      setGatheredApiInfo(data);
      //saved the api data into the state variable called gathered ApiInfo state variable and changed the value to data
      //data is passed as props to the other pages for the information gathered.
    } catch (error) {
      console.error("Oopsies! Error fetching data:", error);
    }
  };

  // we run useEffect when the page loads
  // it has an empty dependency array, meaning no dependencies, but we still have to include because it's required useEffect syntax
  //
  // useEffect to fetch the newest user data when the component mounts
  // useEffect(() => {
  //   getApiInfo();
  // }, []); // Empty dependency array means this runs once on mount

  return (
    <h1>
      {" "}
      Suggestions!
      <button id="FeedBackButt">{/* <Link to="/">Home</Link> */}</button>
      <button id="savedbutt">
        {" "}
        <div id="myBtnContainer">
          <button class="btn" onclick="filterSelection('all')">
            {" "}
            Show all
          </button>
          <button class="btn" onclick="filterSelection('UI')">
            {" "}
            UI
          </button>
          <button class="btn" onclick="filterSelection('UX')">
            {" "}
            UX
          </button>
          <button class="btn" onclick="filterSelection('enhancement')">
            {" "}
            Enhancement
          </button>
          <button class="btn" onclick="filterSelection('Bug')">
            Bug
          </button>
          <button class="btn" onclick="filterSelection('Features')">
            Features
          </button>
        </div>
        <Link to="/FeedBack">FeedBack</Link>
      </button>
    </h1>

    // - Navbar/header (from design system)
    // - Title: 'Suggestions'
    // - New Suggestion button (links to '/add')
    // - For each suggestion in suggestions:
    //     - Display SuggestionCard(title, category, status, upvotes, etc.)
  );
}
