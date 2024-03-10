export default function BookList() {
   let pageTitle = "Best Books";
   let book1 = "https://m.media-amazon.com/images/I/81KVRenYv+L._SY522_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/71sERFosMeL._SY522_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/71ZdvpJTYbL._SY522_.jpg";

   return (
      <div >
         <h3 style={{color:"blue", textDecoration:"underline" , fontStyle:"italic"}}>{pageTitle} </h3>
         <img src={book1} alt="SUDHA MURTHY- Here there and everywhere!!" width= "100" height="200"/>
         <img src={book2} alt="A.P.J.ABDUL KALAM-Learning How to Fly!!"  width= "190" height="230"/>
         <img src={book3} alt="Dr. RANGAN CHATTERJEE-Happy Mind Happy Life!!"  width= "100" height="200" />
       
      </div>      
   );
}