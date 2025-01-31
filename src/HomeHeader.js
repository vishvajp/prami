import React from "react";
import { GrSchedule } from "react-icons/gr";
import { MdArrowDropDownCircle } from "react-icons/md";
import { useState,useContext } from "react";
// import saaluvar from "./loginimages/Prami-Final-Logo.png";
import saalu from "./img/saaluvar.png"
import PatientBooking from "./PatientBooking";
import { useNavigate } from "react-router-dom";
import UserDataContext from "./Context/UserDataContext";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate()
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { apiBaseUrl, baseUrl } = useContext(UserDataContext);

const handleLogout = ()=>{
  localStorage.clear()
  navigate('/')
}

  return (
    <div className="d-flex flex-row align-items-center navbar h-auto p-0">
      <div className="d-flex align-items-center">
        <img
          src={saalu}
          style={{ width: "170px", height: "70px", padding: "8px",marginLeft: "20px" }}
        />
      </div>

      <div className="d-flex  header-logo-right-div">
        <div className="d-flex align-items-center">
          <div className=" first-cont " onClick={showModal}>
            <p className="homeheader-book-text">
              BOOK APPOINTMENT{" "}
              <GrSchedule className="ms-2 mb-1 calender" />{" "}
            </p>
          </div>
        </div>
        <div>
          <img className="headerline  px-0" src={`${baseUrl}/loginimages/Line.png`} />
        </div>

        <div className="second-cont d-flex align-items-center">
          <div
            className=" d-flex user-detail  "
            style={{ borderRadius: "30px" }}
          >
            <div className="mt-1">
              <p className="mb-3 text-end welcome">Welcome to</p>
              <p className="mb-3 red-font fw-bold text-end">Dr. Karunakaran</p>
              <p className="mb-0 text-end welcome">
                <b>Spine Center</b>
              </p>
            </div>
            <div className="">
              <img
                className=" docimage ms-2"
                src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{ width: "45px", height: "45px" }}
              ></img>
            </div>
          </div>

          {/* <div
            className="drophead d-flex justify-content-end align-items-center px-0 "
            style={{ marginLeft: "-35px" }}
          >
            <MdArrowDropDownCircle
              className="pe-1 "
              style={{ width: "28px", height: "28px", color:"red" }}
            />
          </div> */}
          <div className="d-flex align-items-center logout-button-div">
            <button className="logout-button" onClick={handleLogout}>LOGOUT</button>
          </div>
        </div>
      </div>
      <PatientBooking
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default Header;
