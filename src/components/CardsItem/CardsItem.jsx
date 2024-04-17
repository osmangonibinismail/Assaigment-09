import { Link } from "react-router-dom";




const CardsItem = ({ card }) => {
    const { specialTitle, specialName, specialId, description, image} = card;
    return (
        <div className=" gap-10 pt-10 pb-20">
            <div className="card w-90 bg-gray-200 shadow-xl">
                <figure className="">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl font-bold">{specialTitle}</h2>
                    <h3 className="card-title text-large font-bold">{specialName}</h3>
                    {
                        description.length > 50
                            ? <p>{description.slice(0, 50)}
                            <br /><Link className="btn btn-active btn-link"
                                to={`/card/${specialId}`}
                                >Read more.....</Link></p>
                            : <p>{description}</p>
                        }
                </div>
            </div>
        </div>

    );
};

export default CardsItem;
