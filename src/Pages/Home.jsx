
import { useLoaderData } from "react-router-dom";
import Aboutus from "../Components/Aboutus";
import CardItems from "../Components/CardItems";



const Home = () => {
    const cards = useLoaderData();
    return (
        <div>
            
            <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {
                    cards.map(data =><CardItems key={data.id} data={data} ></CardItems>)
                }

            </div>

            <Aboutus></Aboutus>
            
        </div>
    );
};

export default Home;