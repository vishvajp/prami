import React, { useState } from "react";
import { Modal } from "antd";
import { FaPlusSquare } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import "./AddProfileModal.css";
const AddProfileModal = ({isModalOpen,handleOk,handleCancel}) => {
  
  return (
    <div>
     
      <Modal className="addprofile-modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="row addprofile-header">
          <div className="col">
            <span> Add Profile</span>
          </div>
          <div className="col text-end">
            <span> Basic Information</span>
          </div>
        </div>
        {/* <span
              onClick={handleCancel}
              className="addprofile-1stdiv-cancelspan"
            >
              <MdCancel className="addprofile-1st-div-cancel" />
            </span>
        <div className="d-flex flex-column">
          <label className="addprofile-label">First Name*</label>
          <input className="addprofile-input-select" type="text"></input>
        </div>
        <div className="d-flex flex-column">
          <label className="addprofile-label">Initial / Lastname*</label>
          <input className="addprofile-input-select"  type="text"></input>
        </div>
        <div className="row">
          <div className="col-4 d-flex flex-column">
            <label className="addprofile-label">Contact Number*</label>
            <select className="addprofile-input-select">
              <option></option>
            </select>
          </div>
          <div className="col-2 d-flex align-items-end">
            <select  className="addprofile-input-select" style={{ width: "100%" }}>
              <option></option>
            </select>
          </div>
          <div className="col-6 d-flex align-items-end">
            <input className="addprofile-input-select" type="text" style={{ width: "100%" }}></input>
          </div>
        </div>
        <div className="d-flex justify-content-end" style={{marginTop: "5px"}}>
          <p className="mb-0 d-flex align-items-center addprofile-additional-para">
            <FaPlusSquare className="addprofile-plus-icon" /> Add Additional Number
          </p>
        </div>
        <div className="d-flex flex-column">
            <label className="addprofile-label">Gender*</label>
           <select className="addprofile-input-select">
            <option></option>
           </select>
        </div>
        <div className="d-flex flex-column">
            <label className="addprofile-label">Select Role*</label>
           <select className="addprofile-input-select">
            <option></option>
           </select>
        </div>
        <div className="d-flex flex-column">
            <label className="addprofile-label">Select Group*</label>
           <select className="addprofile-input-select">
            <option></option>
           </select>
        </div>
        <div className="d-flex flex-column">
            <label className="addprofile-label">Experience (Years)*</label>
           <input className="addprofile-input-select" type="text"></input>
        </div>
        <div className="d-flex flex-column">
            <label className="addprofile-label">User Login Id*</label>
            <input className="addprofile-input-select" type="text"></input>
        </div>  
        <div className="row">
            <div className="col">
            <div className="d-flex flex-column">
            <label className="addprofile-label">Password*</label>
            <input className="addprofile-input-select" type="text"></input>
        </div> 
            </div>
            <div className="col">
            <div className="d-flex flex-column">
            <label className="addprofile-label">Confirm Password*</label>
            <input className="addprofile-input-select" type="text"></input>
        </div> 
            </div>
        </div> */}

        <div className="d-flex flex-column">
            <label className="addprofile-label">ID Number</label>
            <input className="addprofile-input-select" type="text"></input>
        </div> 
        <div className="d-flex flex-column">
            <label className="addprofile-label">Name</label>
            <input className="addprofile-input-select" type="text"></input>
        </div> 
        <div className="d-flex flex-column">
            <label className="addprofile-label">Phone Number</label>
            <input className="addprofile-input-select" type="tel"></input>
        </div> 
        <div className="d-flex flex-column">
            <label className="addprofile-label">Role</label>
            <input className="addprofile-input-select" type="tel"></input>
        </div> 
        <div className="d-flex flex-column">
            <label className="addprofile-label">Group</label>
            <input className="addprofile-input-select" type="tel"></input>
        </div> 
        <div className="d-flex flex-column">
            <label className="addprofile-label">User Id </label>
            <input className="addprofile-input-select" type="tel"></input>
        </div> 
        <div className="d-flex flex-column">
            <label className="addprofile-label">Password</label>
            <input className="addprofile-input-select" type="tel"></input>
        </div> 
        <div className="d-flex flex-column">
            <label className="addprofile-label">Confirm Password</label>
            <input className="addprofile-input-select" type="tel"></input>
        </div> 
        <div className="d-flex justify-content-center gap-3" style={{marginTop:"15px"}}>
            <button className="addprofile-cancel-button" onClick={handleCancel}>Cancel</button>
            <button className="addprofile-submit-button">Submit</button>
        </div>
      </Modal>
    </div>
  );
};

export default AddProfileModal;
