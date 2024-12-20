import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";

const Login = ({introData,baseUrl}) => {
  const [passwordView, setPasswrodView] = useState(true);
  const [userName, setuserName] = useState(null);
  const [password, setpassword] = useState(null);

  const handleViewPass = () => {
    setPasswrodView(!passwordView);
  };

  const homeNavigate = useNavigate();
  const handleSignIn = function (e) {
    e.preventDefault();
    if (userName === "admin" && password === "admin") {
      homeNavigate("/home/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <div className="login-full-div" style={{height:"100vh",}}>
      <form className="login-form-main-div">
        <div className="login-top-image-div" style={{width:"85px",height:"85px"}}>
          <img className="login-top-doc-image" style={{width:"100%", height:"100%"}} src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
        </div>  

        <p className="login-person-name">{introData}</p>
        <div style={{textAlign : "center"}}>
        <img
          src={`${baseUrl}/loginimages/logo.jpg`}
          alt="pramilogo"
          className="login-prami-logo"
        ></img>
        </div>
        <div className="d-flex flex-column align-items-center mb-2">
          <label className="mb-1">Username</label>
          
          <input type="text" className="login-username-input"
          value={userName} onChange={(e)=>setuserName(e.target.value)} ></input>
          
        </div>
        <div className="d-flex flex-column align-items-center">
          <label className="mb-1">Password</label>
          <div className="login-password-input-div">
            <input
              type={passwordView ? "password" : "text"}
              className="login-password-input"
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
            ></input>{" "}
            <span onClick={handleViewPass}>
              {passwordView ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
          </div>
        </div>
        <button className="login-signin-button" onClick={handleSignIn}>Sign In</button>
      </form>
      <div className="login-emty-div-gradient"></div>
      <div className="login-bottom-div">@2024.prami.com</div>
    </div>
  );
};

export default Login;
