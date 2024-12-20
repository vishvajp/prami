import React from 'react'
import { useLocation } from 'react-router-dom'
import Table from "react-bootstrap/Table";
import { MdDelete } from "react-icons/md";

const LabTestPatientMoreBut = () => {

    const location = useLocation()
    const userData = location.state
    console.log(userData)

    const tableHeader = [
        {
            name: "Lab Category",
          },
        {
          name: "Test Name",
        },
        {
          name: "Test Price",
        },
        {
            name: "Action",
          },
        
      
      ];

      const tableContent = [
        {
            LabCategory:"Spine Center",
           TestName: "Blood",
           TestPrice: "500",
      Action:""
   
        },
        {
            LabCategory:"Spine Center",
           TestName: "Blood",
           TestPrice: "500",
      Action:""
   
        },
        {
            LabCategory:"Spine Center",
           TestName: "Blood",
           TestPrice: "500",
      Action:""
   
        },
        {
            LabCategory:"Spine Center",
           TestName: "Blood",
           TestPrice: "500",
      Action:""
   
        },
        {
            LabCategory:"Spine Center",
           TestName: "Blood",
           TestPrice: "500",
      Action:""
   
        },
      ];

      const RefreshIcons = ({user}) => {
        return (
          <div  className="labTestPatientTable-refresh-icons-container">
          {/* <div className="labTestPatient-table-more-detail-div">     */}
    <span className='d-flex align-items-center' ><MdDelete className='labtestpatient-morebutton-page-delete-icon'/></span>
          </div>
        // </div>  
        );
      };
  return (
    <div className='p-3 '>
        <p className='labTestPatient-table-more-detail-title'>Patients Lab Details</p>
        <div className='row mb-3 labtest-patient-morebutton-page-row-div'>
            <div className='col-3  d-flex justify-content-center'>
            <div className='d-flex flex-column'>
                <label className='labtest-patient-morebutton-page-label'>Patient ID</label>
                <span className='labtest-patient-morebutton-page-Id-span'>{userData?.user?.PatientId}</span>
            </div>
            </div>
            <div className='col-6  '>
            <div className='d-flex flex-column'>
<lable className='labtest-patient-morebutton-page-label'>Patient Name</lable>
<span className='labtest-patient-morebutton-page-name-span'>{userData?.user?.PatientName}</span>
            </div>
            </div>
            <div className='col-3'>
            <div className='d-flex flex-column'>
                <label className='labtest-patient-morebutton-page-label'>Patient Mobile Number</label>
                <div className='d-flex labtest-patient-morebutton-page-mob-div'>
                <span className='labtest-patient-morebutton-91-span'>+91</span>
                <span className='d-flex align-items-center'>{userData?.user?.Contact}</span>
                </div>
            </div>
            </div>
        </div>
        <div className='labtest-patient-morebutton-table-main-div'>
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
      {tableContent.map((element,rowIndex) => {
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
                  
                  {rowData === "Action" && <RefreshIcons user={element} />}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  </Table>
  </div>
  <div className='d-flex align-items-center justify-content-end'>
    <div className='d-flex align-items-center labtest-patient-morebutton-total-div'>
        <span className='labtest-patient-morebutton-total-text-span'>TOTAL : Rs.600</span><button className='labtest-patient-morebutton-print-button'>Print</button>
    </div>
  </div>
        
    </div>
  )
}

export default LabTestPatientMoreBut