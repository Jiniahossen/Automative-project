import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleProduct from "../Components/SingleProduct";

const Product = () => {
    const [product, setProduct] = useState(null);
    const { brandname } = useParams();
    const products = useLoaderData();

    useEffect(() => {
        const brandProducts = products.filter((brandproduct) => brandproduct.brandname === brandname);
        setProduct(brandProducts);
    }, [brandname, products]);

    return (
        <div className="max-w-5xl mx-auto mt-20">
            {product && product.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.map(data => (
                        <SingleProduct key={data._id} data={data} />
                    ))}
                </div>
            ) : (
                <p className=" text-2xl md:text-6xl text-center my-20">No products available for {brandname}.</p>
            )}
        </div>
    );
};

export default Product;
