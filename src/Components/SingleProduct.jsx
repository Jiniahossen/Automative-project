import { Link } from "react-router-dom";


const SingleProduct = ({ data }) => {
    const { name, brandname, _id, type, description, img, price, rating } = data || {};
    


    return (
        <div >
            <div>

                {
                    <div className="card  bg-base-100 shadow-xl">
                        <div className="h-48 mb-10">
                            <figure className="px-10 pt-10">
                                <img src={img} alt="Shoes" className="rounded-xl h-48" />
                            </figure>
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className=" text-lg font-serif font-semibold ">{name}</h2>
                            <p className=" text-lg font-serif font-semibold text-blue-600">Brand name:<span className=" text-black" >{brandname} </span></p>
                            <h2 className=" text-lg font-serif font-semibold text-blue-600"> Type:<span className=" text-black">{type}</span></h2>
                            <h2>{description}</h2>
                            <div className=" flex justify-between mb-10">
                                <h2 className=" pe-10  text-lg font-serif font-semibold text-blue-600">Price:$ <span className=" text-black">{price}</span></h2>
                                <h2 className=" pe-10  text-lg font-serif font-semibold text-blue-600">Ratings : <span className=" text-black">{rating}</span></h2>
                            </div>
                            <div className="card-actions">
                                <Link to={`/details/${_id}`}>
                                    <button className=" mt-6 bg-amber-500 text-white font-serif font-medium text-lg px-4 py-1 rounded-sm">View Details</button>
                                </Link>
                                <Link to={`/updateproducts/${name}`}>
                                    <button className=" mt-6 bg-amber-500 text-white font-serif font-medium text-lg px-4 py-1 rounded-sm">Update Product</button>
                                </Link>
                            </div>
                        </div>
                    </div>


                }

            </div>
        </div>
    );
};

export default SingleProduct;