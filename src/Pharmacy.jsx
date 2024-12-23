import React, { useEffect, useState } from "react";

import "./Pharmacy.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { PharmacyTable } from "./PharmacyTable";
import PharmacyRegistration from "./PharmacyRegistration";
import { useNavigate } from "react-router-dom";

const Pharmacy = () => {
const [addPharmacy,setAddPharmacy]=useState()
const navigate = useNavigate()
  const handleAdd = () => {
    setAddPharmacy(true)
  };

  const [checked, setChecked] = useState("no");

  useEffect(()=>{
    if(checked==="yes")
    {
      navigate("/home/pharmacy/inventory")
    }
  },[checked])
  return (
    <div>
      {!addPharmacy && <div>
      <p className="pharmacy-1stdiv-text">Pharmacy</p>
      <div className="pharmacy-1st-div d-flex gap-5">
        <div className=" d-flex align-items-center Pharmacy-search-div">
          <input
            type="search"
            className="pharmacy-1st-search-input-div"
          ></input>
          <span className="pharmacy-search-icon-span">
            <FaMagnifyingGlass className="pharmacy-search-icon" />
          </span>
        </div>
        <div className=" d-flex justify-content-center">
          <button onClick={handleAdd} className="pharmacy-add-pharmacy-button">
            ADD PHARMACY
          </button>
        </div>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <p className="mb-0">Pharmacy Inventory Setting</p>
            <span className="pharmacy-1st-div-span">( What is this?)</span>

            <p
              onClick={()=>setChecked("yes")}
              className="pharmacy-3rd-col-yes mb-0"
              style={{ backgroundColor: checked==="yes" ? "green" : "gray" }}
            >
              YES
            </p>
            <p
              onClick={()=>setChecked("no")}
              className="pharmacy-3rd-col-no mb-0"
              style={{ backgroundColor: checked==="no" ? "green" : "gray" }}
            >
              NO
            </p>
          </div>
        </div>
      </div>
      <div className="pharmacy-table-div">
        <PharmacyTable />
      </div>
    </div>}
      {addPharmacy && <PharmacyRegistration setAddPharmacy={setAddPharmacy}></PharmacyRegistration>}
    </div>
  );
};

export default Pharmacy;
