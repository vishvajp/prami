import React, { useState } from "react";
import { FaWeightScale } from "react-icons/fa6";
import "./MedicHistoryParameter.css";

const MedicHistoryParameter = ({ isMedicalHistory }) => {
  const [parameterData, setParameterData] = useState([
    {
      bp_bef: "",
      bp_after: "",
      height: "",
      weight: "",
      temperature: "",
      fasting_pp_bef: "",
      fasting_pp_aft: "",
      bmi: "",
      spo2: "",
      pulse_rate: "",
      sugar_random: "",
      hba1c: "",
      pefr: "",
      res_rate: "",
      liquid_profile: "",
      total_cholesterol: "",
      hdl: "",
      serum_creatine: "",
      tryglycerides: "",
      ldl: "",
      blood_group: "",
      head_circumference: "",
      waist_circumference: "",
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParameterData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <div className="medic-his-parent-div">
        <p className="mb-0 medic-parameter-text">Parameters</p>

        <div className="row parameter-1st-rwo">
          <div className="col  ">
            <div className="d-flex medic-1col-container mt-3">
              <div className="d-flex align-items-center m-2">
                <FaWeightScale style={{ width: "30px", height: "30px" }} />
              </div>
              <div className="d-flex flex-column me-2">
                <label className="docdetail-input-label">BP (Mm/ Hg)</label>
                <input
                  className="medic-parameter-double-input"
                  type="text"
                  name="bp_bef"
                  value={parameterData.bp}
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex align-items-end">
                <input
                  className="medic-parameter-double-input"
                  type="text"
                  name="bp_after"
                  value={parameterData.bp_after}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="d-flex medic-1col-container mt-3">
              <div className="d-flex align-items-center m-2">
                <FaWeightScale style={{ width: "30px", height: "30px" }} />
              </div>
              <div className="d-flex flex-column me-2">
                <label className="docdetail-input-label">Fasting & PP</label>
                <input
                  className="medic-parameter-double-input"
                  type="text"
                  name="fasting_pp_bef"
                  value={parameterData.fasting_pp_bef}
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex align-items-end">
                <input className="medic-parameter-double-input" type="text" 
                name="fasting_pp_aft"
                value={parameterData.fasting_pp_aft}
                onChange={handleChange}
               
                />
              </div>
            </div>
            <div className="d-flex medic-1col-container mt-3">
              <div className="d-flex align-items-center m-2">
                <FaWeightScale style={{ width: "30px", height: "30px" }} />
              </div>
              <div className="d-flex flex-column flex-column-div">
                <label className="docdetail-input-label">Sugar Random</label>
                <input className="medic-parameter-2nd-col-input "  type="text"  
                name="sugar_random"
                value={parameterData.sugar_random}
                onChange={handleChange}
                
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex medic-1col-container mt-3">
              <div className="d-flex align-items-center m-2">
                <FaWeightScale style={{ width: "30px", height: "30px" }} />
              </div>
              <div className="d-flex flex-column flex-column-div">
                <label className="docdetail-input-label">Height(cms)</label>
                <input className="medic-parameter-2nd-col-input " type="text" 
                name="height"
                value={parameterData.height}
                onChange={handleChange}
                />
              </div>
            </div>
            <div className="d-flex medic-1col-container mt-3">
              <div className="d-flex align-items-center m-2">
                <FaWeightScale style={{ width: "30px", height: "30px" }} />
              </div>
              <div className="d-flex flex-column flex-column-div">
                <label className="docdetail-input-label">BMI</label>
                <input className="medic-parameter-2nd-col-input " type="text"
                name="bmi"
                value={parameterData.bmi}
                onChange={handleChange}
                 />
              </div>
            </div>
            <div className="d-flex medic-1col-container mt-3">
              <div className="d-flex align-items-center m-2">
                <FaWeightScale style={{ width: "30px", height: "30px" }} />
              </div>
              <div className="d-flex flex-column flex-column-div">
                <label className="docdetail-input-label">HbA1c(%)</label>
                <input className="medic-parameter-2nd-col-input " type="text" 
                name="hba1c"
                value={parameterData.hba1c}
                onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="col">
            <div className="d-flex medic-1col-container mt-3">
              <div className="d-flex align-items-center m-2">
                <FaWeightScale style={{ width: "30px", height: "30px" }} />
              </div>
              <div className="d-flex flex-column flex-column-div">
                <label className="docdetail-input-label">Weight (Kgs)</label>
                <input className="medic-parameter-2nd-col-input " type="text" 
                name="weight"
                value={parameterData.weight}
                onChange={handleChange}
                />
              </div>
            </div>
            <div className="d-flex medic-1col-container mt-3">
              <div className="d-flex align-items-center m-2">
                <FaWeightScale style={{ width: "30px", height: "30px" }} />
              </div>
              <div className="d-flex flex-column flex-column-div">
                <label className="docdetail-input-label">SPO2(%)</label>
                <input className="medic-parameter-2nd-col-input " type="text" 
                name="spo2"
                value={parameterData.spo2}
                onChange={handleChange}
                />
              </div>
            </div>
            <div className="d-flex medic-1col-container mt-3">
              <div className="d-flex align-items-center m-2">
                <FaWeightScale style={{ width: "30px", height: "30px" }} />
              </div>
              <div className="d-flex flex-column flex-column-div">
                <label className="docdetail-input-label">PEFR(L/min)</label>
                <input className="medic-parameter-2nd-col-input " type="text" 
                name="pefr"
                value={parameterData.pefr}
                onChange={handleChange}

                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex medic-1col-container mt-3">
              <div className="d-flex align-items-center m-2">
                <FaWeightScale style={{ width: "30px", height: "30px" }} />
              </div>
              <div className="d-flex flex-column flex-column-div">
                <label className="docdetail-input-label">Temperature</label>
                <input className="medic-parameter-2nd-col-input " type="text" 
                name="temperature"
                value={parameterData.temperature}
                onChange={handleChange}
                
                />
              </div>
            </div>
            <div className="d-flex medic-1col-container mt-3">
              <div className="d-flex align-items-center m-2">
                <FaWeightScale style={{ width: "30px", height: "30px" }} />
              </div>
              <div className="d-flex flex-column flex-column-div">
                <label className="docdetail-input-label">
                  Pulse Rate (Bpm)
                </label>
                <input className="medic-parameter-2nd-col-input " type="text" 
                name="pulse_rate"
                value={parameterData.pulse_rate}
                onChange={handleChange}
                
                />
              </div>
            </div>
            <div className="d-flex medic-1col-container mt-3">
              <div className="d-flex align-items-center m-2">
                <FaWeightScale style={{ width: "30px", height: "30px" }} />
              </div>
              <div className="d-flex flex-column flex-column-div">
                <label className="docdetail-input-label">
                  Respiratory Rate (per Min)
                </label>
                <input className="medic-parameter-2nd-col-input " type="text" 
                name="res_rate"
                value={parameterData.res_rate}
                onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row parameter-2nd-row">
          <div className="col">
            <div className="d-flex medic-2col-container mt-3 ">
              <div className="d-flex flex-column flex-column-div">
                <label className="docdetail-input-label">
                  Lipid Profile (Mg/DL)
                </label>
                <input className="medic-parameter-2nd-row-input " type="text" 
                name="lipid_profile"
                value={parameterData.lipid_profile}

                onChange={handleChange}
                />
              </div>
            </div>
            <div className="d-flex medic-2col-container mt-3">
              <div className="d-flex flex-column flex-column-div">
                <label className="docdetail-input-label">Serum Creatine</label>
                <input className="medic-parameter-2nd-row-input " type="text"
                name="serum_creatine"
                value={parameterData.serum_creatine}
                onChange={handleChange}
                
                />
              </div>
            </div>
            <div className="d-flex medic-2col-container mt-3">
              <div className="d-flex flex-column flex-column-div">
                <label className="docdetail-input-label">Blood Group</label>
                <input className="medic-parameter-2nd-row-input " type="text" 
                name="blood_group"
                value={parameterData.blood_group}
                onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex medic-2col-container mt-3">
              <div className="d-flex flex-column flex-column-div">
                <label className="docdetail-input-label">
                  Total Cholesterol (Mg/DL)
                </label>
                <input className="medic-parameter-2nd-row-input " type="text"
                name="total_cholesterol"
                value={parameterData.total_cholesterol}
                onChange={handleChange}
                />
              </div>
            </div>
            <div className="d-flex medic-2col-container mt-3">
              <div className="d-flex flex-column flex-column-div">
                <label className="docdetail-input-label">
                  Triglycerides (Mg/DL)
                </label>
                <input className="medic-parameter-2nd-row-input " type="text" 
                name="triglycerides"
                value={parameterData.triglycerides}
                onChange={handleChange}
                />
              </div>
            </div>
            <div className="d-flex medic-2col-container mt-3">
              <div className="d-flex flex-column flex-column-div">
                <label className="docdetail-input-label">
                  Head Cirumference
                </label>
                <input className="medic-parameter-2nd-row-input " type="text" 
                name="head_circumference"
                value={parameterData.head_circumference}
                onChange={handleChange}
                
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex medic-2col-container mt-3">
              <div className="d-flex flex-column flex-column-div">
                <label className="docdetail-input-label">HDL (Mg/DL)</label>
                <input className="medic-parameter-2nd-row-input " type="text" 
                name="hdl"
                value={parameterData.hdl}
                onChange={handleChange}
                />
              </div>
            </div>
            <div className="d-flex medic-2col-container mt-3">
              <div className="d-flex flex-column flex-column-div">
                <label className="docdetail-input-label">LDL (Mg/Dl)</label>
                <input className="medic-parameter-2nd-row-input " type="text" 
                name="ldl"
                value={parameterData.ldl}
                onChange={handleChange}
                />
              </div>
            </div>
            <div className="d-flex medic-2col-container mt-3">
              <div className="d-flex flex-column flex-column-div">
                <label className="docdetail-input-label">
                  Waist Circumference (cm)
                </label>
                <input className="medic-parameter-2nd-row-input " type="text" 
                name="waist_circumference"
                value={parameterData.waist_circumference}
                onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicHistoryParameter;
