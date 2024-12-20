import React from "react";
import { FaWeightScale } from "react-icons/fa6";
import "./MedicHistoryParameter.css";

const MedicHistoryParameter = ({ isMedicalHistory }) => {
  return (
    <div>
     <div
    className="medic-his-parent-div"
    
  >
    <p className="mb-0 medic-parameter-text">Parameters</p>

    <div className="row parameter-1st-rwo">
      <div className="col  ">
        <div className="d-flex medic-1col-container mt-3">
          <div className="d-flex align-items-center m-2">
            <FaWeightScale style={{ width: "30px", height: "30px" }} />
          </div>
          <div className="d-flex flex-column me-2">
            <label className="docdetail-input-label">BP (Mm/ Hg)</label>
            <input className="medic-parameter-double-input" type="text" />
          </div>
          <div className="d-flex align-items-end">
            <input className="medic-parameter-double-input" type="text" />
          </div>
        </div>
        <div className="d-flex medic-1col-container mt-3">
          <div className="d-flex align-items-center m-2">
            <FaWeightScale style={{ width: "30px", height: "30px" }} />
          </div>
          <div className="d-flex flex-column me-2">
            <label className="docdetail-input-label">Fasting & PP</label>
            <input className="medic-parameter-double-input" type="text" />
          </div>
          <div className="d-flex align-items-end">
            <input className="medic-parameter-double-input" type="text" />
          </div>
        </div>
        <div className="d-flex medic-1col-container mt-3">
          <div className="d-flex align-items-center m-2">
            <FaWeightScale style={{ width: "30px", height: "30px" }} />
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">Sugar Random</label>
            <input className="medic-parameter-2nd-col-input " type="text" />
          </div>
        </div>
      </div>
      <div className="col">
        <div className="d-flex medic-1col-container mt-3">
          <div className="d-flex align-items-center m-2">
            <FaWeightScale style={{ width: "30px", height: "30px" }} />
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">Height(cms)</label>
            <input className="medic-parameter-2nd-col-input " type="text" />
          </div>
        </div>
        <div className="d-flex medic-1col-container mt-3">
          <div className="d-flex align-items-center m-2">
            <FaWeightScale style={{ width: "30px", height: "30px" }} />
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">BMI</label>
            <input className="medic-parameter-2nd-col-input " type="text" />
          </div>
        </div>
        <div className="d-flex medic-1col-container mt-3">
          <div className="d-flex align-items-center m-2">
            <FaWeightScale style={{ width: "30px", height: "30px" }} />
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">HbA1c(%)</label>
            <input className="medic-parameter-2nd-col-input " type="text" />
          </div>
        </div>
      </div>

      <div className="col">
        <div className="d-flex medic-1col-container mt-3">
          <div className="d-flex align-items-center m-2">
            <FaWeightScale style={{ width: "30px", height: "30px" }} />
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">Weight (Kgs)</label>
            <input className="medic-parameter-2nd-col-input " type="text" />
          </div>
        </div>
        <div className="d-flex medic-1col-container mt-3">
          <div className="d-flex align-items-center m-2">
            <FaWeightScale style={{ width: "30px", height: "30px" }} />
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">SPO2(%)</label>
            <input className="medic-parameter-2nd-col-input " type="text" />
          </div>
        </div>
        <div className="d-flex medic-1col-container mt-3">
          <div className="d-flex align-items-center m-2">
            <FaWeightScale style={{ width: "30px", height: "30px" }} />
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">PEFR(L/min)</label>
            <input className="medic-parameter-2nd-col-input " type="text" />
          </div>
        </div>
      </div>
      <div className="col">
        <div className="d-flex medic-1col-container mt-3">
          <div className="d-flex align-items-center m-2">
            <FaWeightScale style={{ width: "30px", height: "30px" }} />
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">Temperature</label>
            <input className="medic-parameter-2nd-col-input " type="text" />
          </div>
        </div>
        <div className="d-flex medic-1col-container mt-3">
          <div className="d-flex align-items-center m-2">
            <FaWeightScale style={{ width: "30px", height: "30px" }} />
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">Pulse Rate (Bpm)</label>
            <input className="medic-parameter-2nd-col-input " type="text" />
          </div>
        </div>
        <div className="d-flex medic-1col-container mt-3">
          <div className="d-flex align-items-center m-2">
            <FaWeightScale style={{ width: "30px", height: "30px" }} />
          </div>
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">
              Respiratory Rate (per Min)
            </label>
            <input className="medic-parameter-2nd-col-input " type="text" />
          </div>
        </div>
      </div>
    </div>

    <div className="row parameter-2nd-row">
      <div className="col">
        <div className="d-flex medic-2col-container mt-3 ">
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">
              Lipid Profile (Mg/DL)
            </label>
            <input className="medic-parameter-2nd-row-input " type="text" />
          </div>
        </div>
        <div className="d-flex medic-2col-container mt-3">
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">Serum Creatine</label>
            <input className="medic-parameter-2nd-row-input " type="text" />
          </div>
        </div>
        <div className="d-flex medic-2col-container mt-3">
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">Blood Group</label>
            <input className="medic-parameter-2nd-row-input " type="text" />
          </div>
        </div>
      </div>
      <div className="col">
        <div className="d-flex medic-2col-container mt-3">
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">
              Total Cholesterol (Mg/DL)
            </label>
            <input className="medic-parameter-2nd-row-input " type="text" />
          </div>
        </div>
        <div className="d-flex medic-2col-container mt-3">
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">
              Triglycerides (Mg/DL)
            </label>
            <input className="medic-parameter-2nd-row-input " type="text" />
          </div>
        </div>
        <div className="d-flex medic-2col-container mt-3">
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">Head Cirumference</label>
            <input className="medic-parameter-2nd-row-input " type="text" />
          </div>
        </div>
      </div>
      <div className="col">
        <div className="d-flex medic-2col-container mt-3">
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">HDL (Mg/DL)</label>
            <input className="medic-parameter-2nd-row-input " type="text" />
          </div>
        </div>
        <div className="d-flex medic-2col-container mt-3">
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">LDL (Mg/Dl)</label>
            <input className="medic-parameter-2nd-row-input " type="text" />
          </div>
        </div>
        <div className="d-flex medic-2col-container mt-3">
          <div className="d-flex flex-column ">
            <label className="docdetail-input-label">
              Waist Circumference (cm)
            </label>
            <input className="medic-parameter-2nd-row-input " type="text" />
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  
  );
};

export default MedicHistoryParameter;
