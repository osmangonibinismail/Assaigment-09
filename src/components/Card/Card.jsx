import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const Card = () => {
    
    const [card, setCard] = useState({});
    const { specialName, image, specialTitle, facilities, Area, location, description} = card;
    const {id} = useParams();
    console.log(id)
    useEffect(() => {
        fetch('/card.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCard(data.find(item => item.specialId == id))
                
            });
    }, [id])
console.log(card);
    return (
        <div>
            <div className="mt-20 mb-20 card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-center text-xl font-bold">Title: {specialTitle}</h2>
                    <h3 className="text-xl font-semibold">Name: {specialName}</h3>
                    <p className="">Description: {description}</p>
                    <h5 className="">Facilities: {facilities}</h5>
                    <h6 className="">Area: {Area}</h6>
                    <h6 className=""><a className="font-bold">Location:</a> {location}</h6>
                </div>
            </div>
        </div>

    );
};

export default Card;