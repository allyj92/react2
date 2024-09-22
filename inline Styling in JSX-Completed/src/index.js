import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};

customStyle.color = "blue";

// {color:"red"}
//<h1 style="color:red">Hello World!</h1>
// 자바스크립트 코드는 무조건 괄호안에 위치해야함
//   <h1 style={{ color: "red" }}>Hello World!</h1>,

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
