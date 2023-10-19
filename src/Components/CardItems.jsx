import { Link, useLoaderData } from "react-router-dom";


const CardItems = ({data}) => {
    const {category_bg,category_name}=data;
   
    return (
        <div>
            <Link to={`/products/${category_name}`}>
                <div className="card w-96 h-80 shadow-xl image-full">
                    <figure><img src={category_bg} alt="Shoes" className=" w-full h-full " /></figure>
                    <div className="card-body">
                        <h2 className=" text-white font-serif  text-2xl">{category_name}</h2>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default CardItems;