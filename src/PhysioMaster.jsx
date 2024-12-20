import React, { useState } from "react";
import PhysioMasterTable from "./PhysioMasterTable";
import PhysioAssetStats from "./PhysioAssetStats";

const PhysioMaster = () => {
  const [labTitle, setLabTitle] = useState("Physiotherapy Item Master");
  return (
    <div>
      {" "}
      <div className="d-flex justify-content-center gap-2">
        <span
          onClick={() => {
            setLabTitle("Physiotherapy Item Master");
          }}
          className="menu-lab-heading"
          style={{
            color: labTitle === "Physiotherapy Item Master" ? "white" : "black",
            backgroundColor:
              labTitle === "Physiotherapy Item Master" ? "Green" : "gainsboro",
          }}
        >
          Physiotherapy Item Master
        </span>
        <span
          onClick={() => {
            setLabTitle("Medicine Stats");
          }}
          className="menu-lab-heading"
          style={{
            color: labTitle === "Medicine Stats" ? "white" : "black",
            backgroundColor:
              labTitle === "Medicine Stats" ? "Green" : "gainsboro",
          }}
        >
          Assest Stats
        </span>
      </div>
      {labTitle === "Physiotherapy Item Master" && (
        <div className="row medicinemaster-main-div-row">
          <div className="col medicinemaster-1st-col d-flex flex-column gap-4">
            <div className="d-flex flex-column">
              <label className="medicinemaster-1st-col-label">Asset Type</label>
              <input
                className="medicinemaster-1st-col-input"
                type="text"
              ></input>
            </div>

            <div className="d-flex flex-column">
              <label className="medicinemaster-1st-col-label">
                Asset Price
              </label>
              <input
                className="medicinemaster-1st-col-input"
                type="text"
              ></input>
            </div>
            <div className="d-flex justify-content-end">
              <button className="medicinemaster-1st-col-add-button">ADD</button>
            </div>
          </div>
          <div className="col medicinemaster-2nd-col">
            <div className="d-flex justify-content-center">
              <span className="medicinemaster-2nd-col-tabletitle">
                New Physio Details
              </span>
            </div>
            <div>
              <PhysioMasterTable />
            </div>
            <div className="d-flex justify-content-end">
              <button className="medicinemaster-2nd-col-submit-button">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      )}
      {labTitle === "Medicine Stats" && (
        <div className="medicinemaster-test-stats-main-div">
          <PhysioAssetStats />
        </div>
      )}
    </div>
  );
};

export default PhysioMaster;
