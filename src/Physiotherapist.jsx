import React,{useState} from "react";
import "./Physiotherapist.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import PhysiotherapyTable from "./PhysiotherapyTable.jsx";
import AddPhysiotherapy from "./AddPhysiotherapy.jsx";

const Physiotherapist = () => {
  const [addPhysio,setAddPhysio]=useState()
  const [searchPhysio,setSearchPhysio]=useState('')
  const handleAdd = () => {
    // showPhysiotherapistAdd("LAB", "");
    setAddPhysio(true)
  };

  return (
    <div>
      {!addPhysio && 
      <div>
      <p className="clinic-title">Physiotherapy</p>
      <div className="d-flex w-100   pe-5 align-items-center">
        <div className="clinec-search-container ">
          <p>
            Search Physiotherapist <FaMagnifyingGlass className="text-danger" />
          </p>
          <input
            type="text"
            className="clinecs-header-div-input"
            placeholder="Search by  Name or Clinic
            "
            value={searchPhysio}
            onChange={(e) => setSearchPhysio(e.target.value)}
          ></input>
        </div>
        <div>
          <button onClick={handleAdd} className="clinecs-addclinecs-button">
            {" "}
            ADD PHYSIOTHERAPIST
          </button>
        </div>
      </div>
      <div className="physitherapy-table-div">
        <PhysiotherapyTable searchPhysio={searchPhysio} />
      </div>
      </div>
      }
      {addPhysio &&    <div><AddPhysiotherapy setAddPhysio={setAddPhysio} ></AddPhysiotherapy></div>}
    </div>
  );
};

export default Physiotherapist;
