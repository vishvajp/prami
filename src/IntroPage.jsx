import React ,{useState,useEffect,useContext}from "react";
import "./IntroPage.css";
import { useLocation, useNavigate } from "react-router-dom";
import saalu from "./img/saaluvar.png"
import UserDataContext from "./Context/UserDataContext";
const IntroPage = ({getDetailFromIntro}) => {

  const [selectUser, setSelectUser]=useState("")
  const navToLogin = useNavigate()
const location = useLocation();
const { apiBaseUrl,setRefreshAppointments,baseUrl } = useContext(UserDataContext);


  useEffect(() => {
    if (selectUser) {
      getDetailFromIntro(selectUser);
      navToLogin("/login");
    }
  }, [selectUser, getDetailFromIntro, navToLogin]);

  const handleUserSelection = (userType) => {
    setSelectUser(userType);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      localStorage.clear();
    }
  }, [location.pathname]);

  return (
    <div className="intro-full-div" style={{ height: "100vh" }}>
      <div className="intro-page-whole-div">
        <div>
          <img src={saalu} style={{ width: "30%", marginBottom: "50px" }} />
        </div>
        <div
          className="d-flex intro-page-main-container justify-content-center
      "
        >
          <div
            onClick={() => handleUserSelection("DOCTOR")}
            className="d-flex flex-column align-items-center intro-page-center-parent"
          >
            <div className="intro-page-center-container">
              <img
                style={{ width: "100%", height: "80%" }}
                src={`${baseUrl}/loginimages/Doc.png`}
              ></img>
              <p className="intro-page-designation-text">Doctor</p>
            </div>
            <img
              style={{ width: "100%", marginTop: "-18px" }}
              src={`${baseUrl}/loginimages/sa.png`}
            ></img>
          </div>
          <div
            onClick={() => handleUserSelection("RECEPTIONIST")}
            className="d-flex flex-column align-items-center intro-page-center-parent"
          >
            <div className="intro-page-center-container">
              <img
                style={{ width: "100%", height: "80%" }}
                src={`${baseUrl}/loginimages/Nur.png`}
              ></img>
              <p className="intro-page-designation-text">Receptionist</p>
            </div>
            <img
              style={{ width: "100%", marginTop: "-18px" }}
              src={`${baseUrl}/loginimages/sa.png`}
            ></img>
          </div>
          <div
            onClick={() => handleUserSelection("LAB")}
            className="d-flex flex-column align-items-center intro-page-center-parent"
          >
            <div className="intro-page-center-container">
              <img
                style={{ width: "100%", height: "80%" }}
                src={`${baseUrl}/loginimages/Lab.png`}
              ></img>
              <p className="intro-page-designation-text">Lab</p>
            </div>
            <img
              style={{ width: "100%", marginTop: "-18px" }}
              src={`${baseUrl}/loginimages/sa.png`}
            ></img>
          </div>
          <div
            onClick={() => handleUserSelection("PHARMACY")}
            className="d-flex flex-column align-items-center intro-page-center-parent"
          >
            <div className="intro-page-center-container">
              <img
                style={{ width: "100%", height: "80%" }}
                src={`${baseUrl}/loginimages/Parma.png`}
              ></img>
              <p className="intro-page-designation-text">Pharmacy</p>
            </div>
            <img
              style={{ width: "100%", marginTop: "-18px" }}
              src={`${baseUrl}/loginimages/sa.png`}
            ></img>
          </div>
        </div>
      </div>

      <p className="intro-footer">©{new Date().getFullYear()}.saaluvar.com</p>
    </div>
  );
};

export default IntroPage;
