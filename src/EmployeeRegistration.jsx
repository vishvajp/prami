import React from 'react'
import { useNavigate } from 'react-router-dom'


const EmployeeRegistration = () => {
  const navToEmp = useNavigate()
  return (
    <div> <div>
    {" "}
    <p className="clinecs-1stdiv-text">Employee Registration</p>
    <div className="labregistration-main-div  row bg pe-0">
      <div className="row pe-0">
        <div className="col d-flex flex-column pe-4">
          <label className="labregistration-label">Employee Name*</label>
          <input
          
            className="labregistration-input"
            type="text"
          ></input>
        </div>
        <div className="col d-flex flex-column pe-0 ps-4">
          <label className="labregistration-label">Date Of Join*</label>
          <input
            className="labregistration-input"
            type="Date"
          ></input>
        </div>
      </div>
      <div className="row pe-0">
        <div className="col d-flex flex-column pe-4">
          <label className="labregistration-label">Contact Number</label>
          <input
            placeholder="Enter Address"
            className="labregistration-input"
            type="text"
          ></input>
        </div>
        <div className="col d-flex flex-column pe-0 ps-4">
          <label className="labregistration-label">Date Of Birth</label>
          <input
            placeholder="Enter Contact Person Name"
            className="labregistration-input"
            type="date"
          ></input>
        </div>
      </div>
      <div className="row pe-0">
        <div className="col d-flex flex-column pe-4">
          <label className="labregistration-label">Role</label>
          <input
            placeholder="Enter Address"
            className="labregistration-input"
            type="text"
          ></input>
        </div>
        <div className="col d-flex flex-column pe-0 ps-4">
          <label className="labregistration-label">Group</label>
          <input
            placeholder="Enter Contact Person Name"
            className="labregistration-input"
            type="text"
          ></input>
        </div>
      </div>
      <div className="row pe-0">
        <div className="col d-flex flex-column pe-4">
          <label className="labregistration-label">Experience</label>
          <input
            placeholder="Enter Address"
            className="labregistration-input"
            type="text"
          ></input>
        </div>
        <div className="col d-flex flex-column pe-0 ps-4">
          <label className="labregistration-label">Salary</label>
          <input
            placeholder="Enter Contact Person Name"
            className="labregistration-input"
            type="text"
          ></input>
        </div>
      </div>
     
      
   
      <div className="d-flex justify-content-center gap-2 mt-4">
        <button
          onClick={()=>navToEmp("/home/employee")}
          className="labregistration-cancel-button"
        >
          CANCEL
        </button>
        <button className="labregistration-add-button">ADD</button>
      </div>
    </div>
  </div></div>
  )
}

export default EmployeeRegistration