import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import Swal from "sweetalert2";


const IconLogin = () => {
    const {googleSignin,githubSignIn} =useContext(AuthContext);
    const navigate=useNavigate()


    const handleGoogleSignin=(media)=>{
 

        media()
        .then(res=>{
            console.log(res.user);
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Login successfully',
                showConfirmButton: false,
                timer: 1500
              })
            navigate('/')
        })
        .catch(err=>{
            console.log(err)
            toast.error(err)
        })
    }
    return (
        <div>

            <div >
                <button className="mt-4 font-serif px-4 py-1 text-lg border border-[#b50b82] text-[#b50b82]" onClick={()=>handleGoogleSignin(googleSignin)}>Login with Google</button>
            </div>
            <div >
                <button className="mt-2 font-serif px-4 py-1 text-lg border border-[#b50b82] text-[#b50b82]" onClick={()=>handleGoogleSignin(githubSignIn)}>Login with Github</button>
            </div>
            
        </div>
    );
};

export default IconLogin;