
import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./AddNewDoctor.css"


const AddNewDoctor = ({handleCancel,handleOk,isModalOpen}) => {
    
  return (
    <div>
  

    <Modal open={isModalOpen} onOk={handleOk} className="addnewdoctor-modal">
      <div>
        <div className="addnewdoctor-head d-flex justify-content-center">
          <p className="mb-0">Add New Practising Doctor</p>
        </div>
        <div className="row">
            <div className="col addnewdoctor-1st-col">
                <div className="d-flex flex-column">
                    <label>Doctor Name*</label>
                    <input type="text"></input>
                </div>
                <div className="d-flex flex-column">
                    <label>Speciality*</label>
                    <input type="text"></input>
                </div>
                <div className="d-flex flex-column">
                    <label>Email Id*</label>
                    <input type="text"></input>
                </div>
            </div>
            <div className="col addnewdoctor-2nd-col">
            <div className="d-flex flex-column">
                    <label>Gender*</label>
                    <div className="d-flex">
                    <div className="me-3 d-flex align-items-center" >
                    <input className="addnewdoctor-2nd-col-checkinput ms-2 me-2" type="radio"></input>
                    <span>Male</span>
                    </div>
                    <div className="d-flex align-items-center">
                    <input  className="addnewdoctor-2nd-col-checkinput me-2" type="radio"></input>
                    <span>Female</span>
                    </div>
                    </div>
                    </div>
                    <div className="d-flex flex-column">
                    <label>Contact Number*</label>
                    <input className="addnewdoctor-2nd-col-input" type="text"></input>
                </div>
                <div className="d-flex flex-column">
                    <label>Practising Hospital</label>
                    <input className="addnewdoctor-2nd-col-input" type="text"></input>
                </div>
            </div>
        </div>
       
        
        <div className="d-flex justify-content-center mt-3">
          <button onClick={handleCancel} className="addnewdoctor-cancel">CANCEL</button>
          <button className="addnewdoctor-add ">ADD</button>
        </div>
      </div>
    </Modal>
  </div>
  )
}

export default AddNewDoctor