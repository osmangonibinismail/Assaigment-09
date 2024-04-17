import { useEffect, useState } from "react";



const Card = () => {
    const [card, setCard] = useState([]);
    const { specialName} = card;
    useEffect(() => {
        fetch('card.json')
            .then(res => res.json())
            .then(data => setCard(data));
    }, [])

    return (
        <div>
            <div className="mt-20 mb-20 card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <h2>{specialName}</h2>
                    <h2>hi</h2>
                </div>
            </div>
        </div>

    );
};

export default Card;