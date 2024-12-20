import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" bg-white text-white menubar">
      <div className=" d-flex justify-content-end menuhead   align-items-center ms-3">
        <img
          className=" docimage ms-2"
          src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{ width: "40px", height: "40px" }}
        ></img>
        <div class="vertical-line"></div>
        <div className="d-flex flex-column w-100">
          <p className="m-0 p-0 docname"> Dr.Karunakaran S</p>

          <p className="mb-0 d-flex  welcome text-black">Spine center</p>
        </div>
      </div>
      <div className="d-flex flex-column">
        <Link to="/home">Home</Link>
        <Link to="/profile"> Profile</Link>
        <Link to="/clinecs"> Clinecs</Link>
        <Link to="/doctor"> Doctor</Link>
        <Link to="/appointment"> Appointment</Link>
        <Link to="/patients"> Patients</Link>
        <Link to="/treatment"> Treatment</Link>
        <Link to="/employee"> Employee</Link>
        <Link to="/inventory"> Inventory</Link>
        <Link to="/lab"> Lab</Link>
        <Link to="/pharmacy"> Pharmacy</Link>
        <Link to="/security"> Security</Link>
        <Link to="/canteen"> Canteen</Link>
        <Link to="/taxi"> Taxi</Link>
        <Link to="/housekeeping"> Housekeeping</Link>
        <Link to="/ambulance"> Ambulance</Link>
        <Link to="/history"> History</Link>
      </div>
    </div>
  );
};

export default Sidebar;
