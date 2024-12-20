import "./Basicdetailmodal.css";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { MdCancel } from "react-icons/md";
import { TiPencil } from "react-icons/ti";
import { BsCake } from "react-icons/bs";
import { FaDroplet } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
// import React from 'react';
import { Collapse, Input } from "antd";

const Basicdetailmodal = ({
  basicisModalOpen,
  basichandleOk,
  basichandleCancel,
}) => {
  const [startDate, setStartDate] = useState();
  const [insureDate, setInsureDate] = useState();
  const CustomInput = ({ value, onClick }) => (
    <button className="dashboard-date-input" onClick={onClick}>
      {value || "DD/MM/YYYY"} <FaCalendarAlt className="homepage-date-icon" />
    </button>
  );
  const { Panel } = Collapse;
  return (
    <div>
      <Modal
        className="basic-modal-content"
        open={basicisModalOpen}
        onOk={basichandleOk}
      >
        <div className="d-flex align-items-end parameter-1st-container">
          <p className="mb-0 parameter-parameter-text">Admission</p>
          <div className="parameter-img-pencil">
            <img
              className=" docimage ms-2"
              src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{ width: "60px", height: "60px" }}
            ></img>
            <TiPencil className="basicmodal-tipencil " />
          </div>

          <span
            onClick={basichandleCancel}
            className="parameter-1stdiv-cancelspan"
          >
            <MdCancel className="parameter-1st-div-cancel" />
          </span>
        </div>
        <div className="row">
          <div className="col basicdetail-1st-col">
            <div className="mb-2">
              <span className="basic-modal-titel">
               Admission Date and Time
              </span>
            </div>
            <div className="row mb-2">
              <div className="col-1 basic-modal-col1">
                <BsCake style={{ width: "20px", height: "20px" }} />
              </div>
              <div
                className="d-flex flex-column basicmodal-date-picker-col col-6"
                style={{ width: "45%" }}
              >
                <label className="docdetail-input-label">DATE*</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  customInput={<CustomInput />}
                />
              </div>
              <div
                className="col-5 d-flex flex-column"
                style={{ width: "43%" }}
              >
                <div>
                  <lablel className="docdetail-input-label">TIME</lablel>
                </div>

                <input className="basicdetail-time-input" type="time"></input>
              </div>
            </div>
            <div className="row">
              <div className="d-flex flex-row">
                <div className="d-flex flex-column me-3">
                  <div
                    className="d-flex align-items-center"
                    style={{ padding: " 2px 0px 2px 33px" }}
                  >
                    <label className="docdetail-input-label">
                      CONSULTING DOCTOR NAME{" "}
                    </label>
                  </div>

                  <div>
                    <BsCake
                      className="me-2"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <select name="man" id="gender">
                      <option value="volvo"></option>
                      <option value="saab">MR</option>
                      <option value="opel">MRS</option>
                      <option value="audi">""</option>
                    </select>

                    <span className="ms-2">
                      <FaDroplet />
                    </span>
                  </div>
                </div>
                <div>
                  <div className="d-flex flex-column  mt-1">
                    <label className="docdetail-input-label">
                      DOCTOR'S CONTACT NUMBER
                    </label>
                    <input
                      className="basicdetail-double-inputfield"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="d-flex flex-column me-3">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: " 2px 0px 2px 33px" }}
                >
                  <label className="docdetail-input-label">PATIENT NAME*</label>
                </div>

                <div>
                  <BsCake
                    className="me-2"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <input
                    className="basicdetail-double-inputfield"
                    type="text"
                  />

                  <span className="ms-2">
                    <FaDroplet />
                  </span>
                </div>
              </div>
              <div>
                <div className="d-flex flex-column  mt-1">
                  <label className="docdetail-input-label">
                    MARITAL STATUS*
                  </label>
                  <select name="man" id="gender">
                    <option value="volvo"></option>
                    <option value="saab">MR</option>
                    <option value="opel">MRS</option>
                    <option value="audi">""</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="d-flex flex-column me-3">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: " 2px 0px 2px 33px" }}
                >
                  <label className="docdetail-input-label">
                    DATE OF BIRTH*
                  </label>
                </div>

                <div>
                  <BsCake
                    className="me-2"
                    style={{ width: "20px", height: "20px" }}
                  />

                  <input
                    className="basicdetail-double-inputfield"
                    type="date"
                  />
                  <span className="ms-2">(or)</span>
                </div>
              </div>
              <div>
                <div className="d-flex flex-column  mt-1">
                  <label className="docdetail-input-label">AGE*</label>
                  <select name="man" id="age">
                    <option value="volvo"> 0 Years</option>
                    <option value="saab">MR</option>
                    <option value="opel">MRS</option>
                    <option value="audi">""</option>
                  </select>
                </div>
              </div>
              <div className="d-flex align-items-end">
                <select name="man" id="age">
                  <option value="volvo">0 Months</option>
                  <option value="saab">MR</option>
                  <option value="opel">MRS</option>
                  <option value="audi">""</option>
                </select>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="d-flex flex-column me-3">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: " 2px 0px 2px 33px" }}
                >
                  <label className="docdetail-input-label">GENDER*</label>
                </div>

                <div>
                  <BsCake
                    className="me-2"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <select name="man" id="gender">
                    <option value="volvo"></option>
                    <option value="saab">MR</option>
                    <option value="opel">MRS</option>
                    <option value="audi">""</option>
                  </select>

                  <span className="ms-2">
                    <FaDroplet />
                  </span>
                </div>
              </div>
              <div>
                <div className="d-flex flex-column  mt-1">
                  <label className="docdetail-input-label">BLOOD GROUP</label>
                  <select name="man" id="gender">
                    <option value="volvo"></option>
                    <option value="saab">O+</option>
                    <option value="opel">O-</option>
                    <option value="audi">A+</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="d-flex flex-row">
              <div className="d-flex flex-column me-3">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: " 2px 0px 2px 33px" }}
                ></div>
              </div>
            </div>
            <div className="d-flex flex-row ">
              <div className="d-flex flex-column me-3">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: " 2px 0px 2px 33px" }}
                >
                  <label className="docdetail-input-label">
                    CONTACT NUMBER
                  </label>
                </div>

                <div>
                  <BsCake
                    className="me-2"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <input
                    className="basicdetail-double-inputfield"
                    type="text"
                  />

                  <span className="ms-2">
                    <FaDroplet />
                  </span>
                </div>
              </div>
              <div>
                <div className="d-flex flex-column  mt-1">
                  <label className="docdetail-input-label">EMAIL ID</label>
                  <input
                    className="basicdetail-double-inputfield"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="d-flex flex-column me-3">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: " 2px 0px 2px 33px" }}
                >
                  <label className="docdetail-input-label">
                    {" "}
                    AADHAAR CARD NUMBER
                  </label>
                </div>

                <div>
                  <BsCake
                    className="me-2"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <input
                    className="basicdetail-double-inputfield"
                    type="text"
                  />

                  <span className="ms-2">
                    <FaDroplet />
                  </span>
                </div>
              </div>
              <div>
                <div className="d-flex flex-column  mt-1">
                  <label className="docdetail-input-label">PAN NUMBER</label>
                  <input
                    className="basicdetail-double-inputfield"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="d-flex flex-row">
              <div className="d-flex flex-column me-3">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: " 2px 0px 2px 33px" }}
                >
                  <label className="docdetail-input-label">
                    PASSPORT NUMBER
                  </label>
                </div>

                <div>
                  <BsCake
                    className="me-2"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <input
                    className="basicdetail-double-inputfield"
                    type="text"
                  />

                  <span className="ms-2">
                    <FaDroplet />
                  </span>
                </div>
              </div>
              <div>
                <div className="d-flex flex-column  mt-1 ">
                  <label className="docdetail-input-label">VISA STATUS</label>
                  <select name="man" id="gender">
                  <option></option>
                  <option>Live</option>
                      <option>Expired</option>
                      </select>
                     
                </div>
              </div>
            </div>
            <div className="mt-2 mb-2">
              <span className="basic-modal-titel ">Emergency Contact</span>
            </div>

            <div className="d-flex flex-row">
              <div className="d-flex flex-column me-3">
                <div
                  className="d-flex align-items-center"
                  style={{ padding: " 2px 0px 2px 33px" }}
                >
                  <label className="docdetail-input-label">RELATIONSHIP</label>
                </div>

                <div>
                  <BsCake
                    className="me-2"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <input
                    className="basicdetail-double-inputfield"
                    type="text"
                  />

                  <span className="ms-2">
                    <FaDroplet />
                  </span>
                </div>
              </div>
              <div>
                <div className="d-flex flex-column  mt-1 ">
                  <label className="docdetail-input-label">
                    CONTACT NUMBER*
                  </label>
                  <input
                    className="basicdetail-double-inputfield"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="d-flex flex-column me-3">
              <div>
                <span className="basic-modal-titel mb-2">
                  Insurance Information
                </span>
              </div>
              <div className="d-flex flex-row">
                <div className="d-flex flex-column me-3">
                  <div
                    className="d-flex align-items-center"
                    style={{ padding: " 2px 0px 2px 33px" }}
                  >
                    <label className="docdetail-input-label">
                      INSURANCE COMPANY
                    </label>
                  </div>

                  <div>
                    <BsCake
                      className="me-2"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <select name="man" id="gender">
                      <option value="volvo"></option>
                      <option value="saab">Ackwo</option>
                      <option value="opel">Check</option>
                      <option value="audi">""</option>
                    </select>
                    <span className="ms-2">
                      <FaDroplet />
                    </span>
                  </div>
                </div>
                <div>
                  <div className="d-flex flex-column  mt-1 ">
                    <label className="docdetail-input-label">
                      INSURANCE ID
                    </label>
                    <input
                      className="basicdetail-double-inputfield"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row">
                <div className="d-flex flex-column me-3">
                  <div
                    className="d-flex align-items-center"
                    style={{ padding: " 2px 0px 2px 33px" }}
                  >
                    <label className="docdetail-input-label">
                      PLACEHOLDER'S NAME
                    </label>
                  </div>

                  <div>
                    <BsCake
                      className="me-2"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <input
                      className="basicdetail-double-inputfield"
                      type="text"
                    />

                    <span className="ms-2">
                      <FaDroplet />
                    </span>
                  </div>
                </div>
                <div style={{ width: "43.5%" }}>
                  <div className="d-flex flex-column  mt-1 ">
                    <label className="docdetail-input-label">
                      DATE OF BIRTH
                    </label>
                    <DatePicker
                      selected={insureDate}
                      onChange={(date) => setInsureDate(date)}
                      customInput={<CustomInput />}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 d-flex justify-content-end">
              <p className="me-5">*Mandatory fields</p>
            </div>
          </div>
          <div className="col">
            <div className="bascidetail-2ndcol-div">
              <div className="mb-2">
                <Collapse
                  style={{ maxWidth: "600px", margin: "0 auto" }}
                  defaultActiveKey={["1"]}
                >
                  <Panel header="CONTACT ADDRESS*" key="1">
                    <div>
                      <div className="d-flex flex-column">
                        <input
                          type="text"
                          placeholder="Address 1"
                          className="basicdetail-collape-input"
                        ></input>
                        <input
                          type="text"
                           placeholder="Address 2"
                          className="basicdetail-collape-input"
                        ></input>
                      </div>
                      <div className="d-flex ">
                        <input
                          type="text"
                          className="basicdetail-collape-doubleinput me-3"
                        ></input>
                        <input
                          type="text"
                          className="basicdetail-collape-doubleinput"
                        ></input>
                      </div>
                      <div className="d-flex ">
                        <input
                          type="text"
                          className="basicdetail-collape-doubleinput me-3"
                        ></input>
                        <input
                          type="text"
                          className="basicdetail-collape-doubleinput"
                        ></input>
                      </div>
                    </div>
                  </Panel>
                </Collapse>
                <div className="mt-2 mb-2">
                  <span className="basic-modal-titel ">Health History</span>
                </div>
                {/* <div>
            <label className="docdetail-input-label">PATIENT NAME*</label>
            </div> */}
                {/* <div className="row">
<div className="col d-flex justify-content-center ">
  <label className="me-2">YES</label> <input type="checkbox"></input>
</div>
<div className="col d-flex">
<label className="me-2">NO</label> <input type="checkbox"></input>
</div>
            </div> */}
                <div className="d-flex flex-column me-3">
                  <div
                    className="d-flex align-items-center"
                    style={{ padding: " 2px 0px 2px 33px" }}
                  >
                    <label className="docdetail-input-label">
                      TAKING ANY MEDICATIONS, CURRENTLY?
                    </label>
                  </div>

                  <div className="d-flex">
                    <BsCake
                      className="me-2"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <div className="row">
                      <div
                        className="col d-flex justify-content-center"
                        style={{ marginLeft: "17px" }}
                      >
                        <label className="me-2">YES</label>{" "}
                        <input type="checkbox"></input>
                      </div>
                      <div className="col d-flex">
                        <label className="me-2">NO</label>{" "}
                        <input type="checkbox"></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column me-3">
                  <div
                    className="d-flex align-items-center"
                    style={{ padding: " 2px 0px 2px 33px" }}
                  >
                    <label className="docdetail-input-label">
                      REASON FOR REGISTRATION
                    </label>
                  </div>

                  <div>
                    <BsCake
                      className="me-2"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <input
                      style={{ width: "95%" }}
                      className="basicmodal-reason-registration"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div
                className="d-flex align-items-center"
                style={{ padding: " 2px 0px 2px 33px" }}
              >
                <label className="docdetail-input-label">
                  ADDITIONAL NOTES
                </label>
              </div>

              <div>
                <BsCake
                  className="me-2"
                  style={{ width: "20px", height: "20px" }}
                />
                <input
                  style={{ width: "93%", height: "100px" }}
                  className="basicmodal-reason-registration"
                  type="text"
                />
              </div>

              <div className="d-flex justify-content-end basicdetail-button-div">
                <button
                  className="basicdetail-cancel-button"
                  onClick={basichandleCancel}
                >
                  CANCEL
                </button>
                <button className=" basicdetail-register-button">
                SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Basicdetailmodal;
