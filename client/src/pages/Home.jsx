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
  filterSelection("all")
function filterSelection(c) {
  var x, i;
   x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
//   // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
   for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
// }

// // Show filtered elements
// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {
//       element.className += " " + arr2[i];
//     }
//   }
// }

// // Hide elements that are not selected
// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");
// }

// // Add active class to the current control button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
}









  return (
    <>
      <div className="flex-container">
        <h1>My Company</h1>
        <h3>Feed Back Board</h3>
        <div className="flex-container2"></div>{" "}
        <h2>
          Suggestions <button className="feedbackButton">Add FeedBack</button>
        </h2>
      </div>

      <div className="filterDiv">
        <div id="myBtnContainer">
          <button class="btn active" onClick="filterSelection('all')">
            {" "}
            All
          </button>
          <button class="btn" onClick="filterSelection('UI')">
            {" "}
            UI
          </button>
          <button class="btn" onClick="filterSelection('UX')">
            {" "}
            UX
          </button>
          <button class="btn" onClick="filterSelection('Enhancement')">
            {" "}
            Fruits
          </button>
          <button class="btn" onClick="filterSelection('bug')">
            {" "}
            Bug
          </button>
          <button class="btn" onClick="filterSelection('feature')">
            Feature
          </button>
        </div>

        {/* <button>UI</button>
          <button>UX</button>
          <button>Enhancement</button>
          <button>Bug</button>
          <button>Feature</button> */}
      </div>

      <div className="card">
        {gatheredApiInfo.map((input, index) => (
          <SuggestionCard input={input} key={index}></SuggestionCard>
        ))}
      </div>
    </>
  );
}
