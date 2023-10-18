import IconLogin from "../Components/IconLogin";
import LoginForm from "../Components/LoginForm";


const Login = () => {
    return (
        <div className=" max-w-7xl mx-auto text-center mt-20">

            <h2 className=" text-2xl font-serif font-medium">Login</h2>
            <IconLogin></IconLogin>
            <h2 className=" text-base mt-4 mb-4 font-medium font-serif">Or,</h2>
            <div>
                <LoginForm></LoginForm>

            </div>
            
        </div>
    );
};

export default Login;