import React, { useContext,useState } from "react";
import { Modal } from "antd";
import "./ParameterModal.css";
import { MdCancel } from "react-icons/md";
import { FaWeightScale } from "react-icons/fa6";
import UserDataContext from "./Context/UserDataContext";

const ParameterModal = ({ isModalOpen, handleOk, handleCancel }) => {
  const [labTitle, setLabTitle] = useState("Parameter");
  const {baseUrl} =  useContext(UserDataContext);
  return (
    <div>
      <Modal open={isModalOpen} onOk={handleOk}>
        <div className="d-flex align-items-center parameter-1st-container">
          <p className="mb-0 parameter-parameter-text">Parameters</p>
          <span onClick={handleCancel} className="parameter-1stdiv-cancelspan">
            <MdCancel className="parameter-1st-div-cancel" />
          </span>
        </div>
        <div className="d-flex justify-content-center gap-2 mt-2">
        <span
          onClick={() => {
            setLabTitle("Parameter");
          }}
          className="menu-lab-heading"
          style={{
            color: labTitle === "Parameter" ? "white" : "black",
            backgroundColor:
              labTitle === "Parameter" ? "Green" : "gainsboro",
          }}
        >
      Parameter
        </span>
        <span
          onClick={() => {
            setLabTitle("History");
          }}
          className="menu-lab-heading"
          style={{
            color: labTitle === "History" ? "white" : "black",
            backgroundColor:
              labTitle === "History" ? "Green" : "gainsboro",
          }}
        >
        History
        </span>
        <span
          onClick={() => {
            setLabTitle("Notes");
          }}
          className="menu-lab-heading"
          style={{
            color: labTitle === "Notes" ? "white" : "black",
            backgroundColor:
              labTitle === "Notes" ? "Green" : "gainsboro",
          }}
        >
      Notes
        </span>
      </div>
      {labTitle==="Parameter" &&   <div>
        <div className="row parameter-1st-rwo">
          <div className="col  ">
            <div className="d-flex parameter-1col-container mt-3">
              <div className="d-flex align-items-center m-2">
                <img src={`${baseUrl}/loginimages/bp.png`} style={{ width: "30px", height: "30px" }} />
              </div>
              <div className="d-flex flex-column me-2">
                <label className="docdetail-input-label">BP (Mm/ Hg)</label>
                <input className="parameter-double-input" type="text" />
              </div>
              <div className="d-flex align-items-end">
                <input className="parameter-double-input" type="text" />
              </div>
            </div>
            <div className="d-flex parameter-1col-container mt-3">
              <div className="d-flex align-items-center m-2">
                <FaWeightScale style={{ width: "30px", height: "30px" }} />
              </div>
              <div className="d-flex flex-column me-2">
                <label className="docdetail-input-label">Fasting & PP</label>
                <input className="parameter-double-input" type="text" />
              </div>
              <div className="d-flex align-items-end">
                <input className="parameter-double-input" type="text" />
              </div>
            </div>
            <div className="d-flex parameter-1col-container mt-3">
              <div className="d-flex align-items-center m-2">
                <FaWeightScale style={{ width: "30px", height: "30px" }} />
              </div>
              <div className="d-flex flex-column ">
                <label className="docdetail-input-label">Sugar Random</label>
                <input className="parameter-2nd-col-input " type="text" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex parameter-1col-container mt-3">
              <div className="d-flex align-items-center m-2">
                <FaWeightScale style={{ width: "30px", height: "30px" }} />
              </div>
              <div className="d-flex flex-column ">
                <label className="docdetail-input-label">Height(cms)</label>
                <input className="parameter-2nd-col-input " type="text" />
              </div>
            </div>
            <div className="d-flex parameter-1col-container mt-3">
              <div className="d-flex align-items-center m-2">
                <FaWeightScale style={{ width: "30px", height: "30px" }} />
              </div>
              <div className="d-flex flex-column ">
                <label className="docdetail-input-label">BMI</label>
                <input className="parameter-2nd-col-input " type="text" />
              </div>
            </div>
            <div className="d-flex parameter-1col-container mt-3">
              <div className="d-flex align-items-center m-2">
                <FaWeightScale style={{ width: "30px", height: "30px" }} />
              </div>
              <div className="d-flex flex-column ">
                <label className="docdetail-input-label">HbA1c(%)</label>
                <input className="parameter-2nd-col-input " type="text" />
              </div>
            </div>
          </div>

          <div className="col">
            <div className="d-flex parameter-1col-container mt-3">
              <div className="d-flex align-items-center m-2">
                <FaWeightScale style={{ width: "30px", height: "30px" }} />
              </div>
              <div className="d-flex flex-column ">
                <label className="docdetail-input-label">Weight (Kgs)</label>
                <input className="parameter-2nd-col-input " type="text" />
              </div>
            </div>
            <div className="d-flex parameter-1col-container mt-3">
              <div className="d-flex align-items-center m-2">
                <FaWeightScale style={{ width: "30px", height: "30px" }} />
              </div>
              <div className="d-flex flex-column ">
                <label className="docdetail-input-label">SPO2(%)</label>
                <input className="parameter-2nd-col-input " type="text" />
              </div>
            </div>
            <div className="d-flex parameter-1col-container mt-3">
              <div className="d-flex align-items-center m-2">
                <FaWeightScale style={{ width: "30px", height: "30px" }} />
              </div>
              <div className="d-flex flex-column ">
                <label className="docdetail-input-label">PEFR(L/min)</label>
                <input className="parameter-2nd-col-input " type="text" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex parameter-1col-container mt-3">
              <div className="d-flex align-items-center m-2">
                <FaWeightScale style={{ width: "30px", height: "30px" }} />
              </div>
              <div className="d-flex flex-column ">
                <label className="docdetail-input-label">Temperature</label>
                <input className="parameter-2nd-col-input " type="text" />
              </div>
            </div>
            <div className="d-flex parameter-1col-container mt-3">
              <div className="d-flex align-items-center m-2">
                <FaWeightScale style={{ width: "30px", height: "30px" }} />
              </div>
              <div className="d-flex flex-column ">
                <label className="docdetail-input-label">
                  Pulse Rate (Bpm)
                </label>
                <input className="parameter-2nd-col-input " type="text" />
              </div>
            </div>
            <div className="d-flex parameter-1col-container mt-3">
              <div className="d-flex align-items-center m-2">
                <FaWeightScale style={{ width: "30px", height: "30px" }} />
              </div>
              <div className="d-flex flex-column ">
                <label className="docdetail-input-label">
                  Respiratory Rate (per Min)
                </label>
                <input className="parameter-2nd-col-input " type="text" />
              </div>
            </div>
          </div>
        </div>

        <div className="row parameter-2nd-row">
          <div className="col">
            <div className="d-flex parameter-2col-container mt-3 ">
              <div className="d-flex flex-column parameter-2col-field-div ">
                <label className="docdetail-input-label">
                  Lipid Profile (Mg/DL)
                </label>
                <input className="parameter-2nd-row-input " type="text" />
              </div>
            </div>
            <div className="d-flex parameter-2col-container mt-3">
              <div className="d-flex flex-column parameter-2col-field-div ">
                <label className="docdetail-input-label">Serum Creatine</label>
                <input className="parameter-2nd-row-input " type="text" />
              </div>
            </div>
            <div className="d-flex parameter-2col-container mt-3">
              <div className="d-flex flex-column parameter-2col-field-div ">
                <label className="docdetail-input-label">Blood Group</label>
                <select id="parameter-blood">
                  <option></option>
                  <option>O+</option>
                  <option>O-</option>
                  <option>B+</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex parameter-2col-container mt-3">
              <div className="d-flex flex-column parameter-2col-field-div ">
                <label className="docdetail-input-label">
                 BA
                </label>
                <input className="parameter-2nd-row-input " type="text" />
              </div>
            </div>
            <div className="d-flex parameter-2col-container mt-3">
              <div className="d-flex flex-column parameter-2col-field-div ">
                <label className="docdetail-input-label">
                 DM
                </label>
                <input className="parameter-2nd-row-input " type="text" />
              </div>
            </div>
            <div className="d-flex parameter-2col-container mt-3">
              <div className="d-flex flex-column parameter-2col-field-div ">
                <label className="docdetail-input-label">
                  HTN
                </label>
                <input className="parameter-2nd-row-input " type="text" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex parameter-2col-container mt-3">
              <div className="d-flex flex-column parameter-2col-field-div ">
                <label className="docdetail-input-label">IHD</label>
                <input className="parameter-2nd-row-input " type="text" />
              </div>
            </div>
            <div className="d-flex parameter-2col-container mt-3">
              <div className="d-flex flex-column parameter-2col-field-div ">
                <label className="docdetail-input-label">TH</label>
                <input className="parameter-2nd-row-input " type="text" />
              </div>
            </div>
            <div className="d-flex parameter-2col-container mt-3">
              <div className="d-flex flex-column parameter-2col-field-div ">
                <label className="docdetail-input-label">
                 Allergy
                </label>
                <input className="parameter-2nd-row-input " type="text" />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3 gap-2">
          <button onClick={handleCancel} className="parameter-cancel-button">
            CANCEL
          </button>
          <button className="parameter-save-button">SAVE</button>
        </div>
        </div>}
    
      </Modal>
    </div>
  );
};

export default ParameterModal;
