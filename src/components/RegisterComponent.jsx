import React, { useState } from "react";
import { GoogleSignInAPI, RegisterAPI } from "../api/AuthAPI";
import GoogleButton from "react-google-button";
import LinkedinLogo from "../assets/linkedinLogo.png";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function RegisterComponents() {
  const navigate = useNavigate();

  const [credentails, setCredentails] = useState({});

  const register = async () => {
    try {
      let response = await RegisterAPI(credentails.email, credentails.password);
      toast.success("Account created successfully.");
      navigate('/home')
    } catch (err) {
      toast.error("Please check your informations.");
    }
  };

  const loginwithgoogle = async () => {
    let response = GoogleSignInAPI();
    console.log(response);
  };

  return (
    <div className="login-container">
      <img src={LinkedinLogo} className="linkedinLogo" />

      <div className="login-container-inner">
        <h1 className="heading">Make the most of your professional life</h1>
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
            placeholder="Password (6 or more characters)"
            onChange={(e) =>
              setCredentails({ ...credentails, password: e.target.value })
            }
          />
        </div>

        <button onClick={register} className="login-btn">
          Aggre & Join
        </button>

        <hr className="hr-text" data-content="OR" />
        <div className="google-btn-container">
          <GoogleButton className="google-btn" onClick={loginwithgoogle} />

          <p className="go-to-signup">
            Already on LinkedIn?{" "}
            <span onClick={() => navigate("/")} className="join-now">
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
