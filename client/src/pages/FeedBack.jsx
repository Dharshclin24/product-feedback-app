import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function FeedBack({}) {
  // State variables for form inputs and retrieved suggested information
  const [inputs, setInputs] = useState({
    title: "",
    details: "",
    category: "",
  });

  // Function to handle changes in form input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };
  // Function to send form data to the API (POST request)
  const storeFormData = async () => {
    try {
      const response = await fetch("/api/add-one-suggestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: inputs.id,
          title: inputs.title,
          details: inputs.details,
          category: inputs.category,
        }),
      });
    } catch (error) {
      console.error("Error storing form data:", error);
      alert(`Error updating profile: ${error.message}`);
    }
  };
  // useEffect to fetch the newest user data when the component mounts
  useEffect(() => {}, []); // Empty dependency array means this runs once on mount

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior (page reload)
    storeFormData(); // Call the async function to store data
  };
  return (
    <>
    <h1>Add FeedBack</h1>
      <form onSubmit={handleSubmit}>
        <div id="containerForm">
          {" "}
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={inputs.title}
              onChange={handleChange}
              placeholder="Enter your full suggestion"
            />
          </label>
          <label>
            Details:
            <textarea
              name="details"
              value={inputs.details}
              onChange={handleChange}
              placeholder="Tell us the details"
            />
          </label>
          <div className="buttons">
            <label htmlFor="category">Choose a category:</label>
            <select onChange={handleChange} name="category" id="category">
              <option value="All">All</option>
              <option value="UI">UI</option>
              <option value="UX">UX</option>
              <option value="Enhancement">Enhancement</option>
              <option value="Bug">Bug</option>
              <option value="Feature">Feature</option>
            </select>
          </div>
          <Link to="/Feedback">
            <button className="FeedBack"> Add feedback</button>
          </Link>
          <Link to="/Home">
            <button className="Home">Cancel</button>
          </Link>
        </div>
      </form>
    </>
  );
}
export default FeedBack;
