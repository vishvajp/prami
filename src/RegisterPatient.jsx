import React, { useState } from "react";
import "./RegisterPatient.css"
import RegisterPatientTable from "./RegisterPatientTable";
import Basicdetailmodal from "./Basicdetailmodal";

const RegisterPatient = () => {
    const [basicisModalOpen, basicsetIsModalOpen] = useState(false);

    const [searchInput, setSearchInput]=useState("")

    const basicshowModal = () => {
        basicsetIsModalOpen(true);
      };
      const basichandleOk = () => {
        basicsetIsModalOpen(false);
      };
      const basichandleCancel = () => {
        basicsetIsModalOpen(false);
      };

  return (
    <div>
      {" "}
      <div  className="d-flex align-items-center appointment-input-register">
        <input
          onChange={(e)=>setSearchInput(e.target.value)}
          className="appointment-1stdiv-input"
          type="search"
          placeholder="Enter Name / Number"
        ></input>
        <p
          onClick={basicshowModal}
          className="mb-0 appointment-1stdiv-register me-5"
        >
          ADMISSION
        </p>
      </div>
      <div className="registerPatient-table-div">
        <RegisterPatientTable
        searchInput={searchInput}
        ></RegisterPatientTable>
      </div>
      <Basicdetailmodal
        basicisModalOpen={basicisModalOpen}
        basichandleOk={basichandleOk}
        basichandleCancel={basichandleCancel}
      />
    </div>
  );
};

export default RegisterPatient;
