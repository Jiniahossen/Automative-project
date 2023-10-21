import { useLoaderData } from "react-router-dom";


const Updateproduct = () => {

    const product=useLoaderData();
    console.log(product)
    const { name, brandname, _id, type, description, img, price, rating } = product || {};
    



    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandname = form.brandname.value;
        const type = form.type.value;
        const description = form.description.value;
        const img = form.img.value;
        const price = form.price.value;
        const rating = form.rating.value;

        const addedData = {
            name, brandname, type, description, img, price, rating
        }

        console.log(addedData);

        fetch(`https://automotive-server-8p9e7xelh-jinia-akters-projects.vercel.app/products/${_id}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(addedData)
        })
        .then((res)=>res.json())
        .then((data)=>{
            if(data.acknowledged){
                alert('data added ')
            }
            console.log(data)
        })

    }

    return (
        <div>
            <div className=" max-w-6xl mx-auto  mt-28">

                <div>
                    <h1 className=" font-serif font-semibold text-3xl text-center mb-10">Update Your Product!</h1>
                </div> 

                <form onSubmit={handleUpdateProduct} className=" w-full md:max-w-5xl md:mx-auto border  shadow-md lg:p-10 md:ps-10 ">

                    <div className=" md:flex lg:gap-20 md:gap-4 w-full mb-4">
                        <div>
                            <label className="label">
                                <span className=" font-serif ">Name</span>
                            </label>
                            <input type="text" defaultValue={name} placeholder="Model name" name="name" className="input border border-black input-sm lg:w-96 md:w-72 w-full" />
                        </div>
                        <div>
                            <label className="label">
                                <span className=" font-serif">Brand Name</span>
                            </label>
                            <input type="text" defaultValue={brandname} placeholder="Brand name" name="brandname" className="input border border-black input-sm  lg:w-96 md:w-72 w-full" />
                        </div>
                    </div>
                    <div className=" md:flex lg:gap-20 md:gap-4 w-full mb-4">
                        <div>
                            <label className="label">
                                <span className=" font-serif ">Type</span>
                            </label>
                            <input type="text" defaultValue={type} placeholder="type" name="type" className="input border border-black input-sm lg:w-96 md:w-72 w-full" />
                        </div>
                        <div>
                            <label className="label">
                                <span className=" font-serif">Short Description</span>
                            </label>
                            <input type="text" defaultValue={description} placeholder="Description" name="description" className="input border border-black input-sm  lg:w-96 md:w-72 w-full" />
                        </div>
                    </div>
                    <div className=" md:flex lg:gap-20 md:gap-4 w-full mb-4">
                        <div>
                            <label className="label">
                                <span className=" font-serif ">Image</span>
                            </label>
                            <input type="text" defaultValue={img} placeholder="URL" name="img" className="input border border-black input-sm lg:w-96 md:w-72 w-full" />
                        </div>
                        <div>
                            <label className="label">
                                <span className=" font-serif">Price</span>
                            </label>
                            <input type="text" defaultValue={price} placeholder="Price" name="price" className="input border border-black input-sm  lg:w-96 md:w-72 w-full" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className="label">
                                <span className=" font-serif">Ratings</span>
                            </label>
                            <input type="text" defaultValue={rating} placeholder="Rating" name="rating" className="input border border-black input-sm lg:w-96 md:w-72 w-full" />
                        </div>
                    </div>
                    <div>

                    </div>
                    <div className=" pt-6 text-center">
                        <button className="w-full  bg-pink-600 text-white py-2 rounded-md">Update</button>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default Updateproduct;