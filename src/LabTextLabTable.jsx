import React from 'react'
import { useState } from "react";
import Table from "react-bootstrap/Table";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";

const LabTextLabTable = () => {
    const [startDate, setStartDate] = useState();
    const [toDate, setToDate] = useState();
    const [idSearch,setIdSearch]=useState();
    const [file, setFile] = useState(null);

    const CustomInput = ({ value, onClick }) => (
        <button className="appintment-date-input" onClick={onClick}>
          {value || "DD/MM/YYYY"} <FaCalendarAlt className="homepage-date-icon" />
        </button>
      );


      

  
      

      const tableHeader = [
       
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
            name:"Action"
        },
     
      
      ];

      const tableContent = [
        {
           
           Date: "10-23-2024",
           PatientId: "MT665463",
       PatientName:"Durga",
       Contact:"7894561230",
       Action:""
   
        },
        {
            
           Date: "10-28-2024",
           PatientId: "MT576",
       PatientName:"Ganesh",
       Contact:"7894561230",
       Action:""
   
        },
        {
            
           Date: "10-25-2024",
           PatientId: "MT765463",
       PatientName:"test",
       Contact:"7894561230",
       Action:""
   
        },
        {
           
           Date: "10-29-2024",
           PatientId: "MT865463",
       PatientName:"Durga",
       Contact:"7894561230",
       Action:""
   
        },
        {
            
           Date: "10-30-2024",
           PatientId: "MT965463",
       PatientName:"Game",
       Contact:"7894561230",
       Action:""
   
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
    const handleFileChange = (event, user) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        setFile(selectedFile); // Store the selected file in state
        console.log("Selected file:", selectedFile); // Optional: Log the file
        // You can also perform further actions here, like uploading the file
      }
    };


    const RefreshIcons = ({ user }) => {
      return (
        <div className="labTestPatientTable-refresh-icons-container">
          <input
            type="file"
            style={{ display: 'none' }}
            id={`file-upload-${user.patientId}`}
            onChange={(event) => handleFileChange(event, user)}
          />
          <label htmlFor={`file-upload-${user.patientId}`} className='labTestLabTable-upload-button'>
            Upload
          </label>
        </div>
      );
    };

  return (
    <div>   <div className='labTestPatientTable-main-div'>
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
                {rowData === "Action" && <RefreshIcons user={element} />}
            </td>
          );
        })}
      </tr>
    );
  })}
</tbody>
</Table>
</div></div>
  )
}

export default LabTextLabTable