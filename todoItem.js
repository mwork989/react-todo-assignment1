import React from 'react';

export default function TodoItemComponent(props) {
    const {index, text, checked, handleCheckboxClick, handleCheckboxClick1} = props;
    const styleValue = checked ? '' : 'none';
    return (
     <div>
      <label>
        <input 
          type="checkbox" 
          checked={checked}
          onClick={e => handleCheckboxClick(index)}/>
        {text}
      </label>
      <span style={{display:styleValue}}>✔</span>
      </div>
    );
  }