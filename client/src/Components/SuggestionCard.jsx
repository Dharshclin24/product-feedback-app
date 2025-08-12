import React from "react";
import "../App.css";

export default function SuggestionCard({ input }) {
  return (
    <>
      <div id="card">
        <nav>
          <ul>
            <li id="Title line">{input.title}</li>
            <li id="detailLine">{input.detail}</li>
            <li id="CategoryLine">{input.category}</li>
          </ul>
        </nav>
      </div>
    </>
  );
}
