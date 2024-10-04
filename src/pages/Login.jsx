import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha} from 'react-simple-captcha';
import authentication from '../assets/authentication2.png';
import bgImage from '../assets/loginbg.png';
import facebook from '../assets/facebook-icon.png';
import google from '../assets/google.png';
import github from '../assets/github.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authprovider/AuthProvider';
import toast from 'react-hot-toast';
import useAxiosPublic from '../Hooks/useAxiosPublic';


const Login = () => {
    const {userLogin, googleLogin}=useContext(AuthContext);
    const navigate=useNavigate();
    const location =useLocation();
    const axiosPublic =useAxiosPublic();

    const captcherValue=useRef(null);
    const [disable, setDisable]=useState(true);
    const hendelLogin =e=>{
        e.preventDefault();
        const form =e.target;
        const email=form.email.value;
        const password=form.password.value;
        const data={email, password};
        console.log(data);

        userLogin(email, password)
        .then(result=>{
            const loginUser=result.user;
            console.log(loginUser);
            toast.success('login success');
            navigate(location?.state ? location.state : "/");
        })
        .catch(error=>{
            toast.error('Invalid email or password');
            console.log(error);
            
        })
    }
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[]);

    const handelCaptcher =()=>{
        const userValue=captcherValue.current.value;
        if (validateCaptcha(userValue)==true) {
            setDisable(false);
        }
   
        else {
            alert('Captcha Does Not Match');
        }
    
    }

    
    const handelGoogle=()=>{
        googleLogin()
        .then(result=>{
            const user=result.user;
            const userInfo ={
                name:result.user?.displayName,
                email:result.user?.email
            }
            axiosPublic.post('/user', userInfo)
            .then(res=>{
                console.log(res.data);
            })
            console.log(user);
            navigate(location?.state ? location.state : "/");
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <section>
            <div className="hero min-h-screen py-5" style={{backgroundImage:`url("${bgImage}")`}}>
                <div className="hero-content flex-col lg:flex-row shadow-2xl shadow-current">
                    <div> 
                        <img src={authentication} alt=""  className='w-[600px] animate-pulse'/>
                    
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl">
                        <h3 className='text-center text-7xl font-bold'>Login</h3>
                        <form onSubmit={hendelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered focus:outline-none focus:border-[#D1A054]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered focus:outline-none focus:border-[#D1A054]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                <LoadCanvasTemplate />
                                </label>
                                <input type="text" ref={captcherValue} name='captcher' placeholder="Type here" className="input input-bordered focus:outline-none focus:border-[#D1A054]" required />
                                <button onClick={handelCaptcher} className='btn btn-outline btn-xs mt-2'>Validate</button>
                                
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disable} type="submit" value="Login" className="btn text-white bg-[#D1A054] hover:bg-[#D1A054]"/>
                                
                            </div>
                        </form>
                        <div >
                            <Link to="/signup">
                                <h3 className='text-center text-[#D1A054]'>New here? Create a New Account</h3>
                            </Link>
                            <p className='text-center mt-5'>Or sign in with</p>
                        </div>
                        <div className='flex justify-center gap-4 mt-3 pb-4'>
                            <img className='cursor-pointer' src={facebook} alt="" />
                            <img onClick={handelGoogle} className='cursor-pointer' src={google} alt="" />
                            <img className='cursor-pointer' src={github} alt="" />
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;