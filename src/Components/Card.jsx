import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";
import Swal from "sweetalert2";


const Card = ({card}) => {
    const {user}=useContext(AuthContext);
    const email=user.email;
    console.log(email)
    const { name, brandname, _id, type, description, img, price, rating } = card || {};

    const cartProduct={
        name, brandname, type, description, img, price, rating,email
    }

    const handlecard=()=>{
        fetch('http://localhost:5000/mycart',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(cartProduct)
        })
        .then((res)=>res.json())
        .then((data)=>{console.log(data)
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Product added to your cart',
                showConfirmButton: false,
                timer: 1500
              })})
    }

   
    return (
        <div>
            <div className=" max-w-5xl mx-auto mt-20">
                <div className="card card-side bg-base-100 shadow-xl ">
                    <figure>
                        <img src={img} alt={name} className="h-full w-[1000px]" />
                    </figure>
                    <div className=" ms-6">
                        <h2 className="card-title pt-6 pb-1 text-xl font-serif font-semibold">{name}</h2>
                        <h2 className="card-title  pb-1 text-xl font-serif font-semibold">{brandname}</h2>
                        <h2 className="card-title   text-xl font-serif font-semibold">{type}</h2>
                        <p className=" text-base font-serif font-medium my-4"> {description}</p>
                        <p className="text-lg font-sans font-semibold">Price:${price}</p>
                        <div className="card-actions">
                        <p className="text-lg font-sans font-semibold">Ratings: {rating}</p>
                        <div className="card-actions my-6">
                            
                            <button onClick={handlecard} className=" mt-6 bg-amber-500 text-white font-serif font-medium text-lg px-4 py-1 rounded-sm">Add to cart</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Card;