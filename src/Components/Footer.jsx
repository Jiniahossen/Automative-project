

const Footer = () => {
    return (
        <div className=" mt-20">
            <footer className="footer p-10 bg-[#db2877] text-base-content">
                <aside>
                    
                    <p className=" text-lg text-white font-serif font-semibold">MARUTI.SUZUKI<br />Providing reliable service since 1992</p>
                </aside>
                <nav>
                    <header className=" text-white text-xl font-serif">Services</header>
                    <a className=" text-white font-serif font-normal text-md">Branding</a>
                    <a className=" text-white font-serif font-normal text-md">Design</a>
                    <a className=" text-white font-serif font-normal text-md">Marketing</a>
                    <a className=" text-white font-serif font-normal text-md">Advertisement</a>
                </nav>
                <nav>
                    <header className="text-white text-xl font-serif">Company</header>
                    <a className=" text-white font-serif font-normal text-md">About us</a>
                    <a className=" text-white font-serif font-normal text-md">Contact</a>
                    <a className=" text-white font-serif font-normal text-md">Jobs</a>
                    <a className=" text-white font-serif font-normal text-md">Press kit</a>
                </nav>
                <nav>
                    <header className="text-white text-xl font-serif">Legal</header>
                    <a className=" text-white font-serif font-normal text-md">Terms of use</a>
                    <a className=" text-white font-serif font-normal text-md">Privacy policy</a>
                    <a className=" text-white font-serif font-normal text-md">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;