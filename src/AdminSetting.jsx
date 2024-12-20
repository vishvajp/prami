import React, { useEffect, useState,useContext } from "react";
import "./AdminSetting.css";
import Clinecs from "./Clinecs";
import Lab from "./Lab";
import Pharmacy from "./Pharmacy";
import Doctor from "./Doctor";
import Physiotherapist from "./Physiotherapist";
import UserDataContext from "./Context/UserDataContext";

const AdminSetting = () => {
  // const [selectedButton, setSelectedButton] = useState(0);
  // const [selectedBtnName, setSelectedBtnName] = useState("CLINIC");
  
  const {selectedButton, setSelectedButton,selectedBtnName, setSelectedBtnName} = useContext(UserDataContext)

  const handleSelectButton = (e, index) => {
    setSelectedBtnName(e.target.value);
    setSelectedButton(index);
  };

  const btnName = [
    { name: "CLINIC" },
    { name: "LAB" },
    { name: "PHARMACY" },
    { name: "DOCTOR" },
    { name: "PHYSIOTHERAPY" },
  ];

  // Function to show the Physiotherapist section

  return (
    <div>
      {selectedBtnName && (
        <div className="d-flex gap-2 justify-content-center">
          {btnName.map((btn, index) => (
            <button
              style={{
                color: selectedButton === index ? "black" : "white",
                backgroundColor: selectedButton === index ? "green" : "red",
              }}
              onClick={(e) => handleSelectButton(e, index)}
              key={index}
              value={btn.name}
              className="adminsetting-button"
            >
              {btn.name}
            </button>
          ))}
        </div>
      )}
      {selectedBtnName === "CLINIC" && (
        <Clinecs  />
      )}
      {selectedBtnName === "LAB" && (
        <Lab  />
      )}
      {selectedBtnName === "PHARMACY" && (
        <Pharmacy  />
      )}
      {selectedBtnName === "DOCTOR" && <Doctor />}
      {selectedBtnName === "PHYSIOTHERAPY" && (
        <Physiotherapist />
      )}
      {/* {addBtnName === "PHYSIOTHERAPY" && (
        <AddPhysiotherapy showPhysiotherapist={showPhysiotherapist} />
      )}
      {addBtnName === "CLINIC" && (
        <ClinecsRegistration showPhysiotherapist={showPhysiotherapist} />
      )}
      {addBtnName === "LAB" && (
        <LabRegistration showPhysiotherapist={showPhysiotherapist} />
      )}
      {addBtnName === "PHARMACY" && (
        <PharmacyRegistration showPhysiotherapist={showPhysiotherapist} />
      )} */}
    </div>
  );
};

export default AdminSetting;
