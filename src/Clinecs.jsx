import React, { useState } from "react";

import { FaMagnifyingGlass } from "react-icons/fa6";
import "./Clinecs.css";
import { ClinecsTable } from "./ClinecsTable";
import ClinecsRegistration from "./ClinecsRegistration";

const Clinecs = () => {

  const [addClinic,setAddClinic]= useState()
  const [clinicSearch, setClinicSearch]=useState("")
  const handleAdd = () => {
    // showPhysiotherapistAdd("CLINIC", "");
    setAddClinic(true)
  };
  return (
    <div className="bg">
      {!addClinic && <div>
      <p className="clinic-title">Clinic Stats</p>
      <div>
        <div className="d-flex w-100   pe-5 align-items-center">
          <div className="clinec-search-container ">
            <p>
              Search Clinics <FaMagnifyingGlass className="text-danger" />
            </p>
            <input
            value={clinicSearch}
              type="text"
              className="clinecs-header-div-input"
              placeholder="Search by Clinic Name or Location"
              onChange={(e)=>setClinicSearch(e.target.value)}
            ></input>
          </div>
          <div>
            <button className="clinecs-addclinecs-button" onClick={handleAdd}>
              {" "}
              ADD CLINIC
            </button>
          </div>
        </div>
        <div className="clinecs-table-div">
          <ClinecsTable clinicSearch = {clinicSearch}></ClinecsTable>
        </div>
        </div>
      </div> }
      
      {addClinic &&    <div><ClinecsRegistration setAddClinic={setAddClinic}></ClinecsRegistration></div>}
   
    </div>
  );
};

export default Clinecs;
