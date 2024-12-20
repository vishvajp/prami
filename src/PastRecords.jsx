import React, { useState } from "react";
import "./PastRecords.css";
import { FaNotesMedical } from "react-icons/fa";
import { MdOutlineNoteAlt } from "react-icons/md";
import PastRecordMedication from "./PastRecordMedication";
import PastRecordsVisit from "./PastRecordsVisit";

const PastRecords = () => {
const [selectedBtnName,setSelectedBtnName]= useState()
const [selectedButton,setSelectedButton]=useState()



  const subtitile = [
    "Visits",
    // "Medications",
    // "Notes",
    // "Treatment",
    "Lab Tests/Scans",
    "Attachments",
  "Payment History",
    "Admin Rating/comments",
  ];

  const handleButton = (index)=>{
    setSelectedBtnName(subtitile[index])
    setSelectedButton(index)
  }
  console.log(selectedBtnName)
  return (
    <div className="bg">
      <div className="d-flex pastrecords-header-div">
        <div
          className="d-flex pastrecords-monica"
          style={{ margin: "4px 0px" }}
        >
          <img
            className="docimage ms-2 me-2"
            src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ width: "45px", height: "45px" }}
          ></img>
          <div style={{ padding: "0px 18px 0px 0px" }}>
            <p className="mb-0 pastrecords-header-name">Monica</p>
            <p className="mb-0 pastrecords-header-age">24 Year - Female</p>
          </div>
        </div>
        <div
          className="d-flex align-items-center bg-white "
          style={{ height: "63px" }}
        >
          <div className="me-4 ms-4 pastrecord-contact-patient">
            <p className="mb-0">Contact No:</p>
            <p className="mb-0 pastrecords-phone-id">944445 58756</p>
          </div>
          <div className="docdetail-days-vertical-line me-4"></div>
          <div className="me-4 pastrecord-contact-patient">
            <p className="mb-0">Patient ID:</p>
            <p className="mb-0 pastrecords-phone-id">UHID - 287</p>
          </div>
          <div className="d-flex gap-2 me-3 pastrecords-header-icons-div ">
            <FaNotesMedical className="pastrecods-header-icons " />
            <FaNotesMedical className="pastrecods-header-icons " />
            <FaNotesMedical className="pastrecods-header-icons " />
            <FaNotesMedical className="pastrecods-header-icons " />
          </div>
        </div>
        <div style={{    marginLeft: "25px"
}} className="text-center me-4">
          <p className="mb-0 pastrecords-date">31-08-2024</p>
          <p className="mb-0 pastrecords-timer">00 : 00 : 00</p> 
        </div>
      </div>
      <div className="d-flex pastrecords-2nd-div">
       {subtitile.map((sub,index)=>(
        <span 

        style={{color:selectedButton===index ? "white" : "black",
          backgroundColor:selectedButton===index ? "green" : "gray"
        }}
        onClick={()=>handleButton(index)}
      
        key={index}>{sub}</span>
       ))}
      </div>
     {!selectedBtnName && <div className="pastrecords-main-div">
        <div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <MdOutlineNoteAlt className="pastrecords-main-div-notes" />
            No Previous visit by this patient
          </div>
        </div>
      </div>
}
      <div>
        {selectedBtnName==="Medications" && <PastRecordMedication></PastRecordMedication>}
        {selectedBtnName==="Visits" && <PastRecordsVisit>
          
          </PastRecordsVisit>}
      </div>
    </div>
  );
};

export default PastRecords;
