import React from 'react';
import styles from './ChoresList.module.css'; // Note the change here
export default function ChoresList() {
   return (
      <div>
         <h3 className={styles.choresHeading}>Chores</h3> {/* Apply CSS class */}
         <ol>
            <li className={styles.choresText}>Empty Dishwasher</li>
            <li className={styles.choresText}>Complete Prep Work</li>
            <li className={styles.choresText}>Buy Groceries</li>
         </ol>
      </div>
   );
}