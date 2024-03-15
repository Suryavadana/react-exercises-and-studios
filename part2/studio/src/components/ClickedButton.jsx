import React from 'react'
import './styling.css';
function ClickedButton() {
  const handleClick = () => {
    alert('You have already saved this pin!');
  };

  return (
    <button id="clickedButton" onClick={handleClick}>
    Saved
  </button>
  );
}

export default ClickedButton;

//create alert to inform user that the pin has been saved
//create button 
//import styling and assign correct className clickedButton
