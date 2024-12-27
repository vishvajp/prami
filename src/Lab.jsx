import React, { useState,useContext } from "react";
import "./Lab.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { LabTable } from "./LabTable";
import { Link } from "react-router-dom";
import LabRegistration from "./LabRegistration";
import UserDataContext from "./Context/UserDataContext";

const Lab = () => {
  const {addLab, setAddLab}=useContext(UserDataContext)
  const [searchInput,setSearchInput]=useState("")
  const handleAdd = () => {
    // showPhysiotherapistAdd("LAB", "");
    setAddLab(true)
  };

 
  return (
    <div className="bg">
    {!addLab &&  <div>
      {" "}
      <p className="lab-title">Labs</p>
      <div>
        <div className="d-flex w-100  pe-5 align-items-center">
          <div className="lab-search-container">
            <p>
              Search Lab <FaMagnifyingGlass className="text-danger" />
            </p>
            <input
              type="text"
              className="lab-header-div-input"
              placeholder="Search by lab Name or Location"
            ></input>
          </div>
          <div>
            <button className="lab-addclinecs-button" onClick={handleAdd}>
              {" "}
              ADD LAB
            </button>
          </div>
        </div>
        <div className="lab-table-div">
          <LabTable searchInput={searchInput} />
        </div>
        </div>
      </div>}  
   {addLab && <div><LabRegistration setAddLab={setAddLab}></LabRegistration></div>}
      
    </div>
  );
};

export default Lab;
