import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";
import CartItem from "../Components/CartItem";
import Swal from "sweetalert2";

const Mycart = () => {
    const { user } = useContext(AuthContext);
    const email = user.email;
    const [cartedItem, setCartedItem] = useState(null);

    // Use the toaster hook to show a toast message
    

    useEffect(() => {
        fetch(`http://localhost:5000/mycart/${email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCartedItem(data);

                // Show a success toast when an item is added
            });
    }, [email]);

    return (
        <div>
            <div className="max-w-5xl mx-auto">
                {cartedItem && cartedItem.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {cartedItem.map((data) => (
                            <CartItem key={data._id} data={data} />
                        ))}
                    </div>
                ) : (
                    <p className="text-2xl md:text-6xl text-center my-20">No products available in your cart.</p>
                )}
            </div>
        </div>
    );
};

export default Mycart;
