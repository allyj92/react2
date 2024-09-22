import React from "react";
import ReactDOM from "react-dom";
// 전역 특성 목록
// https://www.w3schools.com/tags/ref_standardattributes.asp

// https://picsum.photos/
const img = "http://picsum.photos/200";

ReactDOM.render(
  <div>
    {/* <h1 class="heading">My Favourite Foods</h1> */}
    <h1 className="heading" contentEditable="true">
      My Favourite Foods
    </h1>
    {/* <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul> */}
    {/* <div>
      <img className="food_img" src="./image/avocado.jpg" alt="avocado" />
      <img className="food_img" src="./image/lemon.jpg" alt="lemon" />
      <img className="food_img" src="./image/tomato.jpg" alt="tomato" />
    </div> */}
    <div>
      <img src={img} alt="random" />
      <img src={img + "?grayscale"} alt="random" />
    </div>
  </div>,
  document.getElementById("root")
);
