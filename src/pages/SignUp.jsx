import authentication from '../assets/authentication2.png';
import bgImage from '../assets/loginbg.png';
import facebook from '../assets/facebook-icon.png';
import google from '../assets/google.png';
import github from '../assets/github.png';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Authprovider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import toast from 'react-hot-toast';
import useAxiosPublic from '../Hooks/useAxiosPublic';

 

const SignUp = () => {
    const {createUser, googleLogin}=useContext(AuthContext);
    const navigate=useNavigate();
    const axiosPublic =useAxiosPublic();
    const handelSignUp =e=>{
        e.preventDefault();
        const form =e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const data={name,email, password};
        console.log(data);

        createUser(email, password)
        .then(result=>{
            const user=result.user;
            console.log(user);

            updateProfile(result.user, {
                displayName:name
            })
            .then(()=>{
                 const userData={
                    name:name,
                    email:email
                 }
                 axiosPublic.post('/user', userData)
                 .then(res=>{
                    if(res.data.insertedId){
                        toast.success('create user success');
                    }
                    
                 })

            })
            .catch(error=>{
                console.log(error);
            })
            toast.success('Signup success');
            navigate('/');
        })
        .catch(error=>{
             toast.error(error.message);
        })
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
            navigate('/');
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <section>
            <div className="hero min-h-screen py-5" style={{ backgroundImage: `url("${bgImage}")` }}>
                <div className="hero-content flex-col lg:flex-row shadow-2xl shadow-current">
                    <div>
                        <img src={authentication} alt="" className='w-[600px] animate-pulse' />

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl">
                        <h3 className='text-center text-7xl font-bold'>Sign Up</h3>
                        <form onSubmit={handelSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your name" className="input input-bordered focus:outline-none focus:border-[#D1A054]" required />

                            </div>
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

                            <div className="form-control mt-6">
                                <input type="submit" value="Sign Up" className="btn text-white bg-[#D1A054] hover:bg-[#D1A054]" />

                            </div>
                        </form>
                        <div >
                            <Link to="/login">
                                <h3 className='text-center text-[#D1A054]'>Already registered? Go to log in</h3>
                            </Link>
                            <p className='text-center mt-5'>Or sign up with</p>
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

export default SignUp;