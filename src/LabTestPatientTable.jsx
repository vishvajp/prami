import React from 'react'
import { useState } from "react";
import Table from "react-bootstrap/Table";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const LabTestPatientTable = () => {
    const [startDate, setStartDate] = useState();
    const [toDate, setToDate] = useState();
    const [idSearch,setIdSearch]=useState();
    const navigate = useNavigate()
//     const [totalPageCount, setTotalPageCount] = useState(null);
//   const [pageCount, setPageCount] = useState(1);


    const CustomInput = ({ value, onClick }) => (
        <button className="appintment-date-input" onClick={onClick}>
          {value || "DD/MM/YYYY"} <FaCalendarAlt className="homepage-date-icon" />
        </button>
      );

    const tableHeader = [
        {
            name: "S.No",
          },
        {
          name: "Date",
        },
        {
          name: "Patient ID",
        },
        {
            name:"patient Name"
        },
      
        {
            name:"Contact"
        },
        {
            name:"More Details"
        },
     
      
      ];

      const tableContent = [
        {
            Sno:"",
           Date: "10-23-2024",
           PatientId: "MT465463",
       PatientName:"Durga",
       Contact:"7894561230",
       MoreDetail:""
   
        },
        {
            Sno:"",
           Date: "10-23-2024",
           PatientId: "MT576",
       PatientName:"Durga",
       Contact:"7894561230",
       MoreDetail:""
   
        },
        {
            Sno:"",
           Date: "10-25-2024",
           PatientId: "MT465463",
       PatientName:"Durga",
       Contact:"7894561230",
       MoreDetail:""
   
        },
        {
            Sno:"",
           Date: "10-23-2024",
           PatientId: "MT465463",
       PatientName:"Durga",
       Contact:"7894561230",
       MoreDetail:""
   
        },
        {
            Sno:"",
           Date: "10-23-2024",
           PatientId: "MT465463",
       PatientName:"Durga",
       Contact:"7894561230",
       MoreDetail:""
   
        },
      ];


      const filteredItem = tableContent.filter((item) => {
        const isDateInRange =
          startDate && toDate
            ? new Date(item.Date) >= startDate && new Date(item.Date) <= toDate
            : true;

            const searchPatientId = idSearch ? item.PatientId?.toLowerCase().includes(idSearch?.toLowerCase()) : true;
            return isDateInRange && searchPatientId
      }
    )

    const RefreshIcons = ({user}) => {
        return (
          <div  className="labTestPatientTable-refresh-icons-container">
          <div className="labTestPatient-table-more-detail-div" onClick={()=>navigate("/home/lab/moredetail",{state:{user}})}>    
            <p className="doc-more mb-0">More</p>
            <p className="doc-details">Details...</p>
          </div>
        </div>  
        );
      };
  return (
    <div  >   
        <div className='labTestPatientTable-main-div'>
        <div className="d-flex justify-content-evenly">
    <div className='row mb-2 ms-2'>
        <div className='col'>
            <div className="d-flex gap-3">
            <div className='d-flex'>
                <label className="inventory-label me-2">From</label>
                <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
        }}
        customInput={<CustomInput />}
      />
            </div>
            <div className='d-flex'>
                <label className="inventory-label me-2">To</label>
                <DatePicker
        selected={toDate}
        onChange={(date) => setToDate(date)}
        customInput={<CustomInput />}
      />
      </div>
            </div>
        </div>
     
    </div>
    <div>
    <div className="d-flex align-items-center">
     <input className='labTestPatientTable-search' type='text' placeholder='Search Patient Id' value={idSearch} onChange={(e)=>setIdSearch(e.target.value)}></input>
      </div>
    </div>
    </div>
    <Table responsive>
    
    <thead className="patienttable-head-container">
      <tr>
        {tableHeader.map((ele, index) => (
          <th className="patienttable-header-col" key={index}>
            {ele.name}
            {index < tableHeader.length - 1 && (
              <>
                <div className="clinicstable-header-div"></div>
              </>
            )}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {filteredItem.map((element,rowIndex) => {
        return (
          <tr className="patienttable-body-row-container">
            {Object.keys(element).map((rowData, cellIndex) => {
              
              return (
                <td className="patienttable-body-row" key={cellIndex}>
                   
                  {cellIndex < Object.keys(element).length - 1 ? (
                    <>
                      {element[rowData]}
                      <div className="clinicstable-header-div"></div>
                    </>
                  ) : (
                    element[rowData]
                  )
                  
                  }
                   {rowData === "Sno" && <span>{rowIndex + 1}</span>}
                  
                  {rowData === "MoreDetail" && <RefreshIcons user={element} />}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  </Table>
    </div>
    </div>
  )
}

export default LabTestPatientTable