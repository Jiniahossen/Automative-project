
import { useLoaderData } from "react-router-dom";
import Aboutus from "../Components/Aboutus";
import CardItems from "../Components/CardItems";
import Servic from "../Components/Servic";
import HomeBanner from "../Components/HomeBanner";



const Home = () => {
    const cards = useLoaderData();
    return (
        <div>
            <HomeBanner></HomeBanner>

            <div>
                <h2 className=" my-6 text-3xl font-serif font-semibold text-center">
                    Our Categories
                </h2>
                <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {
                        cards.map(data => <CardItems key={data.id} data={data} ></CardItems>)
                    }

                </div>
            </div>

            <div className=" my-10">
                <h2 className=" text-3xl font-serif mb-6 font-medium text-center">Showcasing our product</h2>
            <Aboutus></Aboutus>
            </div>
            <Servic></Servic>

        </div>
    );
};

export default Home;