import './styles.css';
import oceans from './oceans.json';
import Button from './Button';

const listItems = oceans.map(oceans =>
   <div key={oceans.id}  className={`${oceans.fishCheck === "true" ? "isAFish" : "profile"}`}>
   <img src={oceans.image} alt={oceans.name} className="img"/>
   <h1>{oceans.name}</h1>
   <h3>Fun Facts:</h3>
   <ul>
      <li>{oceans.fact1}</li>
      <li>{oceans.fact2}</li>
      <li>{oceans.fact3}</li>
   </ul>
   <Button />
   </div>
   );
function Profile()
{
   return(
      <>
         <ul>
            {listItems}
         </ul>  
        
      </>  
   );
}

export default Profile;