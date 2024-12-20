import React, { useState } from "react";
import "./MenuLab.css";
import MenuLabTable from "./MenuLabTable";
import MenuLabTestStats from "./MenuLabTestStats";
const MenuLab = () => {
  const [labTitle, setLabTitle] = useState("Items Master");
  return (
    <div>
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
            setLabTitle("Test Stats");
          }}
          className="menu-lab-heading"
          style={{
            color: labTitle === "Test Stats" ? "white" : "black",
            backgroundColor: labTitle === "Test Stats" ? "Green" : "gainsboro",
          }}
        >
          Test Stats
        </span>
      </div>
      {labTitle === "Items Master" && (
        <div className="row menu-lab-main-div">
          <div className="col menu-lab-first-col d-flex flex-column gap-4">
            {/* <div className="d-flex flex-column">
              <label className="menu-lab-label">Lab Name</label>
              <select
                className="meulab-input"
                aria-placeholder="Select Lab Name"
              >
                <option>Select Lab Name</option>
              </select>
            </div> */}
            <div className="d-flex flex-column">
              <label className="menu-lab-label">Lab Categories</label>
              <select
                className="meulab-input"
                aria-placeholder="Select Test Categories"
              >
                <option>Select Test Categories</option>
              </select>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <span>(or)</span>
            </div>
            <div className="d-flex flex-column">
              <label className="menu-lab-label">Enter Lab Categories</label>
              <input
                className="meulab-input"
                type="text"
                placeholder="Enter new categorie name with code"
              ></input>
            </div>
            <div className="d-flex flex-column">
              <label className="menu-lab-label">New Test Name</label>
              <input
                className="meulab-input"
                type="text"
                placeholder="Enter test name with code"
              ></input>
            </div>
            <div className="d-flex flex-column">
              <label className="menu-lab-label"> Test Price</label>
              <input
                className="meulab-input"
                type="text"
                placeholder="Enter test price"
              ></input>
            </div>
            <div className="d-flex justify-content-end gap-2">
              {/* <button className="menulab-delete-button">DELETE</button> */}
              <button className="menulab-add-button">ADD</button>
            </div>
          </div>
          <div className="col menu-lab-second-col d-flex flex-column gap-4 ">
            <div className="d-flex justify-content-center">
              <span className="menulab-2nd-col-tabletitle">
                New test details
              </span>
            </div>
            <div>
              <MenuLabTable />
            </div>
            <div className="d-flex justify-content-end align-items-end menulab-submit-button-div">
              <button className="menulab-delete-button">SUBMIT</button>
            </div>
          </div>
        </div>
      )}

      {labTitle === "Test Stats" && (
        <div>
          <MenuLabTestStats />
        </div>
      )}
    </div>
  );
};

export default MenuLab;
