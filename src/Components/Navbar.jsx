import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";
import toast from "react-hot-toast";
import UpperNavbar from "./UpperNavbar";
import '../index.css'


const Navbar = () => {

    const navLinks = <>
        <Link to='/'> <li>Home</li></Link>
        <Link to='/addproducts'><li>Add Product</li></Link>
        <Link to='/mycart'><li>My cart</li></Link>
    </>

    const { user, signout } = useContext(AuthContext);

    const handleSignOutButton = () => {
        signout()
            .then(
                toast.success('Logged out successfully')
            )
            .catch(error => {
                toast.error(error)
            })
    }

    return (
        <div>
            <UpperNavbar></UpperNavbar>
            <div className=" max-w-6xl mx-auto">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-serif">
                                {
                                    navLinks
                                }
                            </ul>
                        </div>
                        <a className=" normal-case text-xl font-serif font-semibold text-[#b50b82]">MARUTI.SUZUKI</a>
                    </div>
                    <div className="navbar-center  lg:flex" id="large-device-menu">
                        <ul className="menu menu-horizontal px-1 gap-6 font-serif text-lg">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ?
                                <div className="navbar-end flex gap-2">
                                    <h2>{user.displayName}</h2>
                                    <img src={user.photoURL} className="w-8 rounded-full" alt='' />
                                    <button className="bg-[#b50b82] text-white px-4 py-1 font-serif" onClick={handleSignOutButton}>Logout</button>
                                </div>
                                :
                                <div className="navbar-end flex gap-2">
                                    <img src={''} className="w-8" alt="" />
                                    <Link to='/login'><button className="bg-[#b50b82] text-white px-4 py-1 font-serif">Login</button></Link>
                                </div>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;