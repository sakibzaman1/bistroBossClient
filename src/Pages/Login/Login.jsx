import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { BiLowVision, BiShowAlt } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import loginImg from '../../assets/others/authentication2.png'

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const { signInUser, signInWithGoogle, goToTop } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

    const [disabled, setDisabled] = useState(true)

    const captchaRef = useRef(null)

    useEffect(()=> {
        loadCaptchaEnginge(6)
    },[])
    const handleLogin = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      setLoginError("");
  
      signInUser(email, password)
        .then(() => {
          swal({
            position: "top-center",
            icon: "success",
            title: "Successfully Signed In",
            showConfirmButton: false,
            showCancelButton: false,
            timer: 2000,
          });
          // navigate user
          setTimeout(() => {
            navigate(location?.state ? location.state : "/");
          }, 2000);
        })
        .catch(() => {
          setLoginError("Invalid User. Please Check Email or Password Again");
        });
    };

    const handleGoogleSignIn = () => {
      signInWithGoogle()
        .then(() => {
          swal({
            position: "top-center",
            icon: "success",
            title: "Successfully Logged In",
            showConfirmButton: false,
            showCancelButton: false,
            timer: 2000,
          });
          // navigate user
          setTimeout(() => {
            navigate(location?.state ? location.state : "/");
          }, 2000);
        })
        .catch((error) => {
          setLoginError(error.message);
        });
  }

  const handleValidateCaptcha = () => {
    const userCaptchaValue = captchaRef.current.value;
    
    if(validateCaptcha(userCaptchaValue)){
      alert('Captcha MAtched');
      setDisabled(false);
    }
    else{
      alert('Captcha Not Matched')
      setDisabled(true)
    }
  }
    return (
        <div>
            <div className="hero text-sm py-6 px-20 bg-base-200">
  <div className="hero-content flex-col lg:flex-row gap-28">
    <div className="text-center lg:text-left">
      <img src={loginImg} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl h-2/3 bg-base-100">
      <h1 className='text-3xl text-center my-2'>Login</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex items-center relative">
                                    <input name="password" type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered w-full" required />
                                    <div className="absolute right-4">
                                        {
                                            !showPassword ? <BiLowVision className="cursor-pointer" size="20px" onClick={() => setShowPassword(!showPassword)}></BiLowVision> : <BiShowAlt className="cursor-pointer" size="20px" onClick={() => setShowPassword(!showPassword)}></BiShowAlt>
                                        }
                                    </div>
                                </div>
                            </div>

                            
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="Type the captcha above" ref={captchaRef} placeholder="Captcha" name='captcha' className="input input-bordered" required />
          <button onClick={handleValidateCaptcha} className="btn btn-xs my-4">Validate</button>
        </div>
        <div className="form-control mt-2">
          <button disabled={disabled} className="btn btn-primary">Login</button>
        </div>
        <div className="mx-auto mb-4 pt-4  w-full px-10 text-center">
                                {
                                    loginError && <p className="text-rose-800 italic text-bold">{loginError}</p>
                                }
                            </div>
        <div className="flex flex-col justify-between mt-10 mb-6 space-y-6 lg:space-y-0">
                                <button onClick={handleGoogleSignIn} className="text-black btn btn-outline rounded-none bg-transparent hover:rounded-none capitalize">
                                    <FcGoogle></FcGoogle>
                                    Sign in with Google
                                </button>
                            </div>

                            <div className="text-center pt-6">
                                <small className="font-medium text-black">New to this Website? Please<Link to="/register" className="text-red-700 ml-1"><button onClick={goToTop}>Register</button></Link></small>
                            </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;