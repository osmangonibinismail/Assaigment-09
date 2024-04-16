// import { useEffect } from "react";
// import { useState } from "react";
// import Card from "../Card/Card";



// const CardsItem = () => {
//     const [cardsItem, setCardsItem] = useState([]);

//     useEffect(() => {
//         fetch('Speciality.json')
//             .then(res => res.json())
//             .then(data => setCardsItem(data));
//     }, [])
//     return (
//         <div>
//             <div className="grid md:grid-cols-3 gap-10 pt-20">
//                 {
//                     cardsItem.map(card => <Card key={card.specialId} card={card}></Card>)
//                 }
//             </div>
//         </div>

//     );
// };

// export default CardsItem;
