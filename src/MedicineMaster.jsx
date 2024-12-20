import React,{useState} from "react";
import "./MedicineMaster.css"
import MedicineMasterTable from "./MedicineMasterTable";
import MedicineMasterStats from "./MedicineMasterStats";

const MedicineMaster = () => {
  const [labTitle, setLabTitle] = useState("Items Master");
  return (
    <div>
      {" "}
      <div className="d-flex justify-content-center gap-2">
        <span
          onClick={() => {
            setLabTitle("Items Master");
          }}
          className="menu-lab-heading"
          style={{
            color: labTitle === "Items Master" ? "white" : "black",
            backgroundColor:
              labTitle === "Items Master" ? "Green" : "gainsboro",
          }}
        >
          Items Master
        </span>
        <span
          onClick={() => {
            setLabTitle("Medicine Stats");
          }}
          className="menu-lab-heading"
          style={{
            color: labTitle === "Medicine Stats" ? "white" : "black",
            backgroundColor: labTitle === "Medicine Stats" ? "Green" : "gainsboro",
          }}
        >
          Medicine Stats
        </span>
      </div>
      {labTitle==="Items Master" && 
      <div className="row medicinemaster-main-div-row">
      <div className="col medicinemaster-1st-col d-flex flex-column gap-4">
        <div className="d-flex flex-column">
          <label className="medicinemaster-1st-col-label">Medicine Name</label>
          <input className="medicinemaster-1st-col-input" type="text"></input>
        </div>
        <div className="d-flex flex-column">
          <label className="medicinemaster-1st-col-label">Generic Name</label>
          <input className="medicinemaster-1st-col-input" type="text"></input>
        </div>
        <div className="d-flex flex-column">
          <label className="medicinemaster-1st-col-label">Medicine Type</label>
          <input className="medicinemaster-1st-col-input" type="text"></input>
        </div>
        <div className="d-flex flex-column">
          <label className="medicinemaster-1st-col-label">Dosage</label>
          <input className="medicinemaster-1st-col-input" type="text"></input>
        </div>
        <div className="d-flex justify-content-end">
          <button className="medicinemaster-1st-col-add-button">ADD</button>
        </div>

      </div>
      <div className="col medicinemaster-2nd-col">
<div className="d-flex justify-content-center">
  <span className="medicinemaster-2nd-col-tabletitle">New Medicine Details</span>
</div>
<div>
  <MedicineMasterTable/>
</div>
<div className="d-flex justify-content-end">
<button className="medicinemaster-2nd-col-submit-button">SUBMIT</button>
</div>
      </div>
      </div>
      }
<div className="medicinemaster-test-stats-main-div">
      {labTitle==="Medicine Stats" && <MedicineMasterStats/>}
      </div>
    </div>
  );
};

export default MedicineMaster;




