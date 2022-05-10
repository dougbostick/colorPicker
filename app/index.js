import React from "react";
import { createRoot } from "react-dom/client";
const container = document.getElementById("app");
const root = createRoot(container);
// write your Color component here

const Picker = () => {
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className="red">red</div>
      </div>
      <div id="colors-list">{/* colors go here */}</div>
    </div>
  );
};

root.render(<Picker />);
