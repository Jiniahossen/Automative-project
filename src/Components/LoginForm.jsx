import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";

const LoginForm = () => {
    const {logIn}=useContext(AuthContext);
    const navigate=useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;

        console.log(name,email,password);

        if(password.length<6){
            toast.error('Password must have at least 6 characters')
        }
        // if(!/[A-Z] ^[@#](?=.{7,13}$)(?=\w{7,13})(?=[^aeiou_]{7,13})(?=.*[A-Z])(?=.*\d)/.test(password)){
        //     toast.error('Password must contain contain capital letter and special character');
        //     return;
        // }

        logIn(email,password)
        .then(result=>{
            console.log(result.user)
            toast.success('Logged in succesfully')
            navigate('/')
        })
        .catch(error=>{
            console.log(error)
            toast.error('Your email or password is evalid !')

        })

    }
    return (
        <div>

            <div >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="text-base font-serif">
                                <h2>Do not have any account? <span className=" text-[#b50b82]"> <Link to={'/register'}>Register</Link></span></h2>
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-[#b50b82] btn text-white hover:bg-[#b50b82] hover:text-white">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LoginForm;