import React from "react";
import "../App.css";
import { Link } from "react-router";

export default function SuggestionCard({ input }) {
  return (
    <>
      <Link to={`/FeedBack/${input.title}`}>
        {/*connection to FeedBack page*/}
        <div id="card">
         
          <nav>
            <ul>
            
              <li
              id="Title line">
                <strong>FeedBack Title</strong> {input.title}
              </li>
              <li id="detailLine">
                <strong>Title</strong> {input.detail}
              </li>
              <li id="CategoryLine">
                <strong>Category</strong> {input.category}
              </li>
              
            </ul>
          </nav>
        </div>
      </Link>
    </>
  );
}
