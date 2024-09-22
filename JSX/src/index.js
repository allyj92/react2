import React from "react";
import ReactDOM from "react-dom";

// const name = "eunjae";
// ReactDOM.render(<h1>Hello name!</h1>, document.getElementById("root"));

const name = "AllyJ";
const number = 7;
const fName = "Ally";
const lName = "J";

// HTML 내에 자바스크립트 삽입할시 ==> 중괄호
ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your lucky number is {number}</p>
    <p>Your lucky number is {3 + 9}</p>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
    <p>Hello, {fName + " " + lName}</p>
    {/* <p>Your lucky number is {
            if (name === "Angela"){
                return 7;
            }else{
                return 12;
            }
        }</p> */}
  </div>,
  document.getElementById("root")
);
