import React, { useState } from "react";
import LabTestPatientTable from "./LabTestPatientTable";
import "./LabTestPage.css"
import LabTextLabTable from "./LabTextLabTable";

const LabTestPage = () => {
  const [PatientLab, setPatientLab] = useState("Patient List");
  return (
    <div className="bg">
      {" "}
      <div className="d-flex justify-content-center gap-3">
        <span
          className="inventory-title"
          onClick={() => setPatientLab("Patient List")}
          style={{
            backgroundColor: PatientLab === "Patient List" ? "green" : "gray",
            color: PatientLab === "Patient List" ? "white" : "black",
          }}
        >
       Patient List
        </span>
        <span
          className="inventory-title"
          onClick={() => setPatientLab("Lab Result")}
          style={{
            backgroundColor:
            PatientLab === "Lab Result" ? "green" : "gray",
            color: PatientLab === "Lab Result" ? "white" : "black",
          }}
        >
    Lab Result
        </span>
      </div>
      {PatientLab==="Patient List" && <div>
        <LabTestPatientTable/>
        </div>}
        {PatientLab==="Lab Result" && <div><LabTextLabTable></LabTextLabTable></div>}
    </div>
  );
};

export default LabTestPage;
