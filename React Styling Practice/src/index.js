//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  day: "",
  color: "",
};

let today = new Date();
let hour = today.getHours();

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
if (hour < 12) {
  customStyle.day = "Morning";
  customStyle.color = "red";
} else if (hour < 18) {
  customStyle.day = "Afternoon";
  customStyle.color = "green";
} else {
  customStyle.day = "Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={{ color: customStyle.color }}>
    Good, {customStyle.day}
  </h1>,
  document.querySelector("#root")
);

//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
