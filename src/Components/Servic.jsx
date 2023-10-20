import {BsCreditCard2Back ,BsDatabaseFillAdd} from 'react-icons/bs'
import {FaCarAlt} from 'react-icons/fa'
import {FcBusinesswoman} from 'react-icons/fc'

const Servic = () => {
    return (
       <div className=" max-w-6xl mx-auto mt-20 font-serif">
        <h1 className=" font-semibold text-3xl mb-10">Get started with 4 simple steps</h1>
         <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="card bg-base-100 shadow-xl">
                <div className='pt-6 ps-8 text-4xl'>
                    <BsDatabaseFillAdd></BsDatabaseFillAdd>
                    
                </div>
                <div className="card-body">
                    <h2 className=" text-lg font-serif font-semibold">Create a profile</h2>
                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure.</p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <div className='pt-6 ps-8 text-4xl'>
                    <FaCarAlt></FaCarAlt>
                </div>
                <div className="card-body">
                    <h2 className="text-lg font-serif font-semibold">Tell us what car you want</h2>
                    <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose</p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <div className='pt-6 ps-8 text-4xl'>
                    <FcBusinesswoman></FcBusinesswoman>
                    
                </div>
                <div className="card-body">
                    <h2 className="text-lg font-serif font-semibold">Match with seller</h2>
                    <p>It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <div className='pt-6 ps-8 text-4xl'>
                    <BsCreditCard2Back></BsCreditCard2Back>
                </div>
                <div className="card-body">
                    <h2 className="text-lg font-serif font-semibold">Make a deal</h2>
                    <p>There are many variations of passages of Lorem available, but the majority have suffered alteration</p>
                </div>
            </div>

        </div>
       </div>
    );
};

export default Servic;