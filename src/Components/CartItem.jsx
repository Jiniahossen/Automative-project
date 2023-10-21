import Swal from "sweetalert2";


const CartItem = ({ data }) => {
    const { name, brandname, _id, type, description, img, price, rating } = data || {};


    const handlDelete=(_id)=>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            fetch(`http://localhost:5000/mycart/${_id}`,{
                method:"DELETE"
            })
            .then((res)=>res.json())
            .then((data)=>{console.log(data)
            if(data.message==='Document deleted successfully'){
                  Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
            })
            }
          })
    }
    return (
        <div>
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
                                    <button className=" mt-6 bg-amber-500 text-white font-serif font-medium text-lg px-4 py-1 rounded-sm" onClick={()=>handlDelete(_id)}>Delete</button>
                                
                    
                            </div>
                        </div>
                    </div>


                }

            </div>

        </div>
    );
};

export default CartItem;