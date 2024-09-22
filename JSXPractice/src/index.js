//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
import { isJSDocAllType } from "typescript";
//It should display 2 paragraph HTML elements.
const fName = "ally";
const lName = "J";
let now = new Date();
let year = now.getFullYear(); // 연도

ReactDOM.render(
  <div>
    <p>Create by {fName + " " + lName}.</p>
    <p>Copyright {year}</p>
  </div>,
  document.querySelector("#root")
);
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
