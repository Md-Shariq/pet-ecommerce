import React, { useState } from 'react'
import "./login.css"
import pet_11 from "../../assets/pet-11.jpg"
import { useNavigate } from 'react-router-dom'
import { loginApi } from '../../service/apiService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

    const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

   const data ={
     email:email,
     password:password,
}

  function onLogin() {
      console.log(data);
       loginApi(data).then((result)=>{
        console.log(result);
        localStorage.setItem('token', result.data.token);
      navigate("/home")


       }).catch(()=> {
        toast.error('You have entered wrong email or password');
       })
  }

  return (
    <section class="register-page">
         <ToastContainer />
            <div class="row gx-0 h-100">
                <div class="col-md-6 h-100">
                    <div class="login-left-box">
                        <img src={pet_11} alt="" class="login-img" />
                    </div>
                </div>
                <div class="col-md-6 h-100">
                    <div class="login-right-box">
                        <div class="col-md-7 mt-5">
                            <p class="register">Login</p>
                            <p class="fs-13 gray mb-3">Before moving further, we need some information to make your work
                               easy</p>
                            <div class="mt-3">
                                <p class="name-color fs-16 fw-600 m-0 mb-2">Email Address</p>
                                <input type="text" class="register-input" value={email} onChange={(event) => setEmail(event.target.value)} />
                            </div>
                            <div class="mt-3">
                                <p class="name-color fs-16 fw-600 m-0 mb-2">Password</p>
                                <input type="text" class="register-input" value={password} onChange={(event) => setPassword(event.target.value)} />
                                {/* { !checkValidation && <small className='text-danger'>You have entered wrong email or password</small>} */}
                            </div>


                            <button class="btn btn-primary signup-btn" onClick={onLogin}>Sign in</button>
                            <div>
                                {/* <p class="text-center mt-4  fw-600 fs-13">Or don't have any account? <span><a href="" class="fs-14">Make New One</a></span></p> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
