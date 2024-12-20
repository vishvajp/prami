import React, { useState } from "react";
import "./PastRecordsVisit.css";

const PastRecordsVisit = () => {

    const [pageNo,setPageNo] = useState(1)

    const visitData = [{
     totalNumber : "3",
     visit:"1",
     dateOfVisit : "08/28/2024",
     reason:"Fever"
    },
    {
        totalNumber : "3",
        visit:"2",
        dateOfVisit : "08/31/2024",
        reason:"headache"
       },
       {
        totalNumber : "3",
        visit:"3",
        dateOfVisit : "09/8/2024",
        reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque reiciendis cumque. Repellat placeat commodi, fugiat a at nemo alias fugit, earum quos delectus voluptate error. Aliquam et repudiandae minima."
       }]

const dataToShow= 1

const maxPageNo = Math.ceil(visitData.length / dataToShow);
const lastIndex = dataToShow * pageNo
const firstIndex = lastIndex - dataToShow

const slicedvisitData = visitData.slice(firstIndex,lastIndex)
const handleNextPage = () => {
    setPageNo((prevPageNo) => Math.min(prevPageNo + 1, maxPageNo));
};

const handlePrevPage = () => {
    setPageNo((prevPageNo) => Math.max(prevPageNo - 1, 1));
};

  return (
    <div style={{padding: "10px"}}>
      <div className="d-flex justify-content-end">
        <button className="visit-previous-button" onClick={handlePrevPage}>Previous</button>
        <span className="visit-page-number">{pageNo}</span>
        <button className="visit-Next-button" onClick={handleNextPage}>Next</button>
      </div>
      <div className="d-flex justify-content-center flex-column ">
        {slicedvisitData.map((data)=>(
           
             <div className="row">
             <div className="col d-flex s flex-column gap-3">
               <p className="visit-totalno-text mb-0 text-end">Total Number Of Visits :</p>
               <p className="visit-totalno-text mb-0 text-end">Visit :</p>
               <p className="visit-totalno-text mb-0 text-end">Date Of Visit :</p>
               <p className="visit-totalno-text mb-0 text-end">Reason For Visit :</p>
             </div>
             <div className="col d-flex justify-content-start flex-column gap-3">
               {" "}
               <p className="visit-totalno-number mb-0">{data.totalNumber}</p>
               <p className="visit-totalno-number mb-0">{data.visit}</p>
               <p className="visit-totalno-number mb-0">{data.dateOfVisit}</p>
               <p className="visit-totalno-number mb-0">{data.reason}</p>
             </div>
           </div>
        ))}
       
      </div>
    </div>
  );
};

export default PastRecordsVisit;
