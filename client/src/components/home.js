import React from "react";
import "../App.css";
import DropDown from "./drop-down";

//This component renders a welcome message and a drop-down for the user to choose which media they would like to search for

function Home() {
  return (
    <div className="drop-container">
      <h1 className="welcome-text">Welcome to the iTunes Media Search</h1>
      <h6 className="instruct-text">Click on an icon or select an option from the drop-down list to search for different media</h6>
        <DropDown/>
    </div>
  );
}

export default Home;
