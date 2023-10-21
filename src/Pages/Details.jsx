import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Components/Card";


const Details = () => {
    const [card,setCard]=useState(null);
    const { id } = useParams();
    const detailsdata = useLoaderData();


    useEffect(()=>{
        const findDetailsData=detailsdata.find(data=>data._id===id);
        setCard(findDetailsData)

    },[id,detailsdata])

    console.log(id, detailsdata)
    return (
        <div>
            <div>
                {card ? (
                    <Card card={card} />
                ) : (
                    <p>Loading...</p>
                )}
            </div>

        </div>
    );
};

export default Details;