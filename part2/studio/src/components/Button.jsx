import React from 'react';
import SaveButton from './SaveButton';
import ClickedButton from './ClickedButton';
import './styling.css';

function Button(props) {
  // If saveButton is true, render SaveButton, else render ClickedButton
  return(
  <div>
    {props.saveButton ? <SaveButton /> : <ClickedButton />}
  </div>
  );
}

 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 