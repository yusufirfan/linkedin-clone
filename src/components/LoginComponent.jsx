import React, { useState } from "react";
import { LoginAPI,GoogleSignInAPI } from "../api/AuthAPI";
import GoogleButton from "react-google-button";
import LinkedinLogo from "../assets/linkedinLogo.png";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom"

export default function LoginComponent() {
  const navigate = useNavigate()

  const [credentails, setCredentails] = useState({});

  const login = async () => {
    try {
      let response = await LoginAPI(credentails.email, credentails.password);
      toast.success('Signed in successfully.')
      navigate('/home')
    } catch (err) {
      toast.error('Please check your informations.')
    }
  };

  const loginwithgoogle = async () => {
    let response = GoogleSignInAPI()
    console.log(response);
  }

  return (
    <div className="login-container">
      <img src={LinkedinLogo} className="linkedinLogo" />

      <div className="login-container-inner">
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading">Stay updated on your proffessional world</p>
        <div className="auth-inputs">
          <input
            type="email"
            className="common-input"
            placeholder="Email"
            onChange={(e) =>
              setCredentails({ ...credentails, email: e.target.value })
            }
          />
          <input
            type="password"
            className="common-input"
            placeholder="Password"
            onChange={(e) =>
              setCredentails({ ...credentails, password: e.target.value })
            }
          />
        </div>

        <button onClick={login} className="login-btn">
          Sign in
        </button>

        <hr className="hr-text" data-content="OR" />
        <div className="google-btn-container">
          <GoogleButton className="google-btn" onClick={loginwithgoogle} />

          <p className="go-to-signup">New to LinkedIn? <span onClick={()=>navigate('/register')} className="join-now">Join now</span></p>
        </div>
      </div>
    </div>
  );
}
