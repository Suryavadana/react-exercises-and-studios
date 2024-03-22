import { useState } from 'react';

export default function BoardAssignment () {
   
   const [boardName, setBoardName]=useState('No boards Yet!');
   const boards = [{ label: 'Favorites', value: 'favorites' },
   { label: 'Healthy Recipes', value: 'healthy_recipes' },
   { label: 'Quick Meals', value: 'quick_meals' }];

   const handleChange = (event) => {
      setBoardName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map(board => (
            <option key={board.value} value={board.value}>{board.label}</option>
         ))}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
