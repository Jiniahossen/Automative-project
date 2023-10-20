

const HomeBanner = () => {
    return (
        <div className=" md:flex ps-2 pe-2 md:ps-0 md:pe-0  mt-6 md:mt-20 gap-6 mb-10">

           

            {/* <div className=" h-96 bg-no-repeat w-96" style={{ backgroundImage: 'url(https://i.ibb.co/rfXB8kL/images.jpg)' }}>
              
            </div> */}

            <div className="md:ps-32 md:pt-32 mb-6 md:mb-0">
                <h2 className=" text-3xl md:text-6xl font-serif font-light ">THE EASY WAY TO<br></br>TAKEOVER A LEASE</h2>
                <h1 className=" text-sm font-serif text-gray-500 mt-4">Live in New York, New Jerset and Connecticut!</h1>
            </div>

            <div className=" md:w-[630px] rounded-lg">
                <img src="https://i.ibb.co/YNtTFFR/hero-banner.jpg" alt="" className=" w-full rounded-lg" />
            </div>

        </div>
    );
};

export default HomeBanner;