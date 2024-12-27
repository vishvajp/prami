import React from 'react'
import "./RegisterPatient.css"
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

const RegisterPatientTable = ({searchInput}) => {
  const navToRegisterMore = useNavigate()
    const tableHeader = [
        {
          name: "Admission_No",
        },
        {
          name: "Admission_Date",
        },
        {
          name: "Name",
        },
        {
          name: "Address",
        },
        {
          name: "Mobile",
        },
        {
          name: "Marital_Status",
        },
        {
          name: "Gender",
        },
        {
            name: "Age",
          },
          {
            name: "Action",
          },
      ];
    
      const tableContent = [
        {
          admission_No: "Ih475",
          admission_Date: "08-30-24",
    consulting_doctor: "Dr. John",
    doctor_contact_no: "9874563211",
          patient_name: "Monica",
          marital_status: "Married",
          patient_dob : "12-12-1990",
          age:"34",
          gender:"male",
          blood_group:"O+ve",
          mobile: "9874563211",
          email:"john@gmail.com",
          aadhar_no:"123456789012",
          pan_no:"ABCDE1234F",
          passport_no:"P1234567",
          visa_status:"N/A",
          admission_Address: "Chennai",
          medications:"N/A",
          reason_register:"Fever",
          additonal_notes:"N/A",
      emergency_relation:"Father",
      emergency_contact:"9874563211",
      insurance_company:"Star Health",
      insurance_id:"123456789",
      placeholers_name:"John",
      emergency_dob:"12-12-1990",
        },
        {
          admission_No: "Ih475",
          admission_Date: "08-30-24",
    consulting_doctor: "Dr. John",
    doctor_contact_no: "9874563211",
          patient_name: "Kiruba",
          marital_status: "Married",
          patient_dob : "12-12-1990",
          age:"34",
          gender:"male",
          blood_group:"O+ve",
          mobile: "9874563211",
          email:"john@gmail.com",
          aadhar_no:"123456789012",
          pan_no:"ABCDE1234F",
          passport_no:"P1234567",
          visa_status:"N/A",
          admission_Address: "Chennai",
          medications:"N/A",
          reason_register:"Fever",
          additonal_notes:"N/A",
      emergency_relation:"Father",
      emergency_contact:"9874563211",
      insurance_company:"Star Health",
      insurance_id:"123456789",
      placeholers_name:"John",
      emergency_dob:"12-12-1990",
        },
        {
          admission_No: "Ih475",
          admission_Date: "08-30-24",
    consulting_doctor: "Dr. John",
    doctor_contact_no: "9874563211",
          patient_name: "Kathir",
          marital_status: "Married",
          patient_dob : "12-12-1990",
          age:"34",
          gender:"male",
          blood_group:"O+ve",
          mobile: "9874563211",
          email:"john@gmail.com",
          aadhar_no:"123456789012",
          pan_no:"ABCDE1234F",
          passport_no:"P1234567",
          visa_status:"N/A",
          admission_Address: "Chennai",
          medications:"N/A",
          reason_register:"Fever",
          additonal_notes:"N/A",
      emergency_relation:"Father",
      emergency_contact:"9874563211",
      insurance_company:"Star Health",
      insurance_id:"123456789",
      placeholers_name:"John",
      emergency_dob:"12-12-1990",
        },
          {
            admission_No: "Ih475",
            admission_Date: "08-30-24",
      consulting_doctor: "Dr. John",
      doctor_contact_no: "9874563211",
            patient_name: "Michel",
            marital_status: "Married",
            patient_dob : "12-12-1990",
            age:"34",
            gender:"male",
            blood_group:"O+ve",
            mobile: "9874563211",
            email:"john@gmail.com",
            aadhar_no:"123456789012",
            pan_no:"ABCDE1234F",
            passport_no:"P1234567",
            visa_status:"N/A",
            admission_Address: "Chennai",
            medications:"N/A",
            reason_register:"Fever",
            additonal_notes:"N/A",
        emergency_relation:"Father",
        emergency_contact:"9874563211",
        insurance_company:"Star Health",
        insurance_id:"123456789",
        placeholers_name:"John",
        emergency_dob:"12-12-1990",
          },
          {
            admission_No: "Ih475",
            admission_Date: "08-30-24",
      consulting_doctor: "Raanav",
      doctor_contact_no: "9874563211",
            patient_name: "Jerry",
            marital_status: "Married",
            patient_dob : "12-12-1990",
            age:"34",
            gender:"male",
            blood_group:"O+ve",
            mobile: "9874563211",
            email:"john@gmail.com",
            aadhar_no:"123456789012",
            pan_no:"ABCDE1234F",
            passport_no:"P1234567",
            visa_status:"N/A",
            admission_Address: "Chennai",
            medications:"N/A",
            reason_register:"Fever",
            additonal_notes:"N/A",
        emergency_relation:"Father",
        emergency_contact:"9874563211",
        insurance_company:"Star Health",
        insurance_id:"123456789",
        placeholers_name:"John",
        emergency_dob:"12-12-1990",
          },
          {
            admission_No: "Ih475",
            admission_Date: "08-30-24",
      consulting_doctor: "Dr. John",
      doctor_contact_no: "9874563211",
            patient_name: "Steve",
            marital_status: "Married",
            patient_dob : "12-12-1990",
            age:"34",
            gender:"male",
            blood_group:"O+ve",
            mobile: "9874563211",
            email:"john@gmail.com",
            aadhar_no:"123456789012",
            pan_no:"ABCDE1234F",
            passport_no:"P1234567",
            visa_status:"N/A",
            admission_Address: "Chennai",
            medications:"N/A",
            reason_register:"Fever",
            additonal_notes:"N/A",
        emergency_relation:"Father",
        emergency_contact:"9874563211",
        insurance_company:"Star Health",
        insurance_id:"123456789",
        placeholers_name:"John",
        emergency_dob:"12-12-1990",
          },
      ];

      const filteredItem = tableContent.filter((tab) => {
        const searchTerm = tab.mobile && tab.mobile.includes(searchInput);
        const nameSearchTerm = tab.name && searchInput && tab.name.toLowerCase().includes(searchInput.toLowerCase());
        
       
        
        return searchTerm || nameSearchTerm;
    });
console.log(searchInput)

const handleNavToSpecPat = (element)=>{
  console.log(element)
  navToRegisterMore("/home/patientadmission/moredet" , {state:{element}})
  }
  

const RefreshIcons = ({ user }) => {
  return (
    <div className="refresh-icons-container justify-content-center">
     <div>
        <button  onClick={()=>handleNavToSpecPat(user)}  className="registerpatient-table-update-button">
          More Details
        </button>
      </div>    
    </div>
  );
};
  return (
    <Table responsive>
      <thead className="patienttable-head-container">
        <tr>
        {filteredItem &&
            filteredItem.length > 0 &&
            Object.keys(filteredItem[0]).map((key, index) =>
              key !== "consulting_doctor" &&
              key !== "doctor_contact_no" &&
              key !== "blood_group" &&
              key !== "email" &&
              key !== "aadhar_no" &&
              key !== "pan_no" &&
              key !== "passport_no" &&
              key !== "visa_status" &&
            
              key !== "medications" &&
              key !== "reason_register" &&
              key !== "additonal_notes" &&
              key !== "emergency_relation" &&
              key !== "emergency_contact" &&
              key !== "insurance_company" &&
              key !== "insurance_id" &&
              key !== "placeholers_name" &&
              key !== "emergency_dob"? (
                // Filter out unwanted columns
                <th className="table-header-col" key={index}>
                  {key.replace(/_/g, " ").toUpperCase()}{" "}
                  {/* Capitalize key and replace underscores with spaces */}
                  {index < Object.keys(filteredItem[0]).length && (
                    <div className="table-header-div"></div>
                  )}
                </th>
              ) : null
            )}
          <th className="table-header-col" key="refresh">
            ACTION
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredItem.map((element) => {
          return (
            <tr className="patienttable-body-row-container">
            {Object.keys(element).map((rowData, cellIndex) => {
              if (
                rowData === "consulting_doctor" ||
                rowData === "doctor_contact_no" ||
                rowData === "blood_group" ||
                rowData === "email" ||
                rowData === "aadhar_no" ||
                rowData === "pan_no" ||
                rowData === "passport_no" ||
                rowData === "visa_status" ||
              
                rowData === "medications" ||
                rowData === "reason_register" ||
                rowData === "additonal_notes" ||
                rowData === "emergency_relation" ||
                rowData === "emergency_contact" ||
                rowData === "insurance_company" ||
                rowData === "insurance_id" ||
                rowData === "placeholers_name" ||
                rowData === "emergency_dob"
              ) {
                return null;
              }

              return (
                <td className="patienttable-body-row" key={cellIndex}>
                  {element[rowData]}
                  {cellIndex < Object.keys(element).length && (
                    <div className="clinicstable-header-div"></div>
                  )}
                </td>
              );
            })}

            <td className="patienttable-body-row" key="refresh-icon">
              <RefreshIcons user={element} />
            </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  )
}

export default RegisterPatientTable