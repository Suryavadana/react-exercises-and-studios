import React from 'react';

function HobbyLinks() {
  const hobbyLinks = [
    "https://en.wikipedia.org/wiki/Bharatanatyam",
    "https://en.wikipedia.org/wiki/Carnatic_music",
  ];

  return (
    <div>
    <h3 style={{color:"black", textDecoration:"underline" , fontStyle:"italic"}}>Hobbies</h3>
    <a href={hobbyLinks[0]}>Dance</a> <br></br>
    <a href={hobbyLinks[1]}>Music</a>
      
    </div>
  );
}

export default HobbyLinks;