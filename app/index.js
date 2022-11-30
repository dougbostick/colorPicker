import React, {useState} from "react";
import { createRoot } from "react-dom/client";
import Whatever from './Color'

const container = document.getElementById("app");
const root = createRoot(container);
// write your Color component here
// const Color = (props) => {
//   const isSelected = props.selected === props.color ? 'selected' : null;
//   return (
//     <div className={`${props.color} ${isSelected}`} onClick={() => props.someFunction(props.color)}>
//     </div>
//   )
// }

const Picker = () => {
  const [selectedColor, setSelectedColor] = useState('red');
  //another state that tracks selected color
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Whatever color='red' someFunction={ setSelectedColor } selected={selectedColor}/>
        <Whatever color='yellow' someFunction={ setSelectedColor } selected={selectedColor}/>  
        <Whatever color='green' someFunction={ setSelectedColor } selected={selectedColor}/>  
      </div>
    </div>
  );
};

root.render(<Picker />);
