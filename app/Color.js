import React from 'react';


const Color = (props) => {
    const isSelected = props.selected === props.color ? 'selected' : null;
    return (
      <div className={`${props.color} ${isSelected}`} onClick={() => props.someFunction(props.color)}>
      </div>
    )
}

export default Color;