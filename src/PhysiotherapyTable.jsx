import React, { useState,useEffect, useContext } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import UserDataContext from "./Context/UserDataContext";
import { useNavigate } from "react-router-dom";


const PhysiotherapyTable = ({searchPhysio}) => {

  const [tableContent,setTableContent]=useState(null)
  const {apiBaseUrl}=useContext(UserDataContext)
  const navigate = useNavigate()
  // const tableHeader = [
  //   {
  //     name: "Name",
  //   },
  //   {
  //     name: "Specialist",
  //   },
  //   {
  //     name: "Mobile Number",
  //   },
  //   {
  //     name: "Email Id",
  //   },
  //   {
  //     name: "Address",
  //   },
  // ];

  // const tableContent = [
  //   {
  //     name: "Dr Santhosh",
  //     Specialist: "leg",
  //     mobileNumber: "7894561231",
  //     emailId: "testing@gmail.com",
  //     address: "No25 A velacherry chennai",
  //   },
  //   {
  //     name: "Dr Santhosh",
  //     Specialist: "leg",
  //     mobileNumber: "7894561231",
  //     emailId: "testing@gmail.com",
  //     address: "No25 A velacherry chennai",
  //   },
  //   {
  //     name: "Dr kiran",
  //     Specialist: "hand",
  //     mobileNumber: "7894561231",
  //     emailId: "testing@gmail.com",
  //     address: "No25 A velacherry chennai",
  //   },
  //   {
  //     name: "Dr Kiran",
  //     Specialist: "hand",
  //     mobileNumber: "7894561231",
  //     emailId: "testing@gmail.com",
  //     address: "No25 A velacherry chennai",
  //   },
  //   {
  //     name: "Dr Gopal",
  //     Specialist: "hand",
  //     mobileNumber: "7894561231",
  //     emailId: "testing@gmail.com",
  //     address: "No25 A velacherry chennai",
  //   },
  //   {
  //     name: "Dr Gopal",
  //     Specialist: "fullBody",
  //     mobileNumber: "7894561231",
  //     emailId: "testing@gmail.com",
  //     address: "No25 A velacherry chennai",
  //   },
  // ];


  useEffect(() => {
    const getAppointmentDetail = async () => {
      try {
        const response = await axios.post(`${apiBaseUrl}get_physiotherapy_list`);
        if (response.data) {
          setTableContent(response.data.data);
          console.log(response.data.data);
        }
      } catch (err) {
        console.log("Error fetching data: ", err);
      }
    };

    getAppointmentDetail();
  }, []);


  const filteredItem = tableContent?.filter((data) => {

    const searchData = searchPhysio
      ? data.physio_name?.toLowerCase().includes(searchPhysio.toLowerCase())
      : true  

     

      const searchCLinic = searchPhysio
      ? data.Clinic?.toLowerCase().includes(searchPhysio.toLowerCase())
      : true;
      return searchData || searchCLinic;
  });

  const RefreshIcons = ({ user }) => {
    return (
      <div className="refresh-icons-container justify-content-center">
        <div>
          <button
            onClick={() => handlenavigate(user)}
            className="registerpatient-table-update-button"
          >
            More Details
          </button>
        </div>
      </div>
    );
  };

  const handlenavigate = (doc) => {
 
    navigate("/home/physiotheray/moredetails", { state: { doc } });
  };

  return (
    <Table responsive>
      <thead className="patienttable-head-container">
        <tr>
        {filteredItem &&
            filteredItem.length > 0 &&
            Object.keys(filteredItem[0]).map((key, index) =>
              
              key !== "physio_dob" &&
              key !== "physio_experience" &&
              key !== "physio_fee"&&
              key !== "physio_achievement" &&
              key !== "physio_reg_no" &&
              key !== "physio_gender" &&
              key !== "physio_education" &&
              key !== "physio_group" &&
              key !== "date_of_joining" 

              
              ? ( // Filter out unwanted columns
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
            Action
          </th>
        </tr>
      </thead>
      <tbody>
  {filteredItem?.map((element) => {
    return (
      <tr className="patienttable-body-row-container" key={element.id}>
        {Object.keys(element).map((rowData, cellIndex) => {
          if (
           
            rowData === "physio_dob" ||
            rowData === "physio_experience" ||
            rowData === "physio_fee" ||
            rowData === "physio_achievement" ||
            rowData === "physio_reg_no" ||
            rowData === "physio_gender" ||
            rowData === "physio_education" ||
            rowData === "physio_group" ||
            rowData === "date_of_joining"
          ) {
            return null;
          }
          return (
            <td className="patienttable-body-row" key={cellIndex}>
              {cellIndex < Object.keys(element).length ? (
                <>
                  {element[rowData]}
                  <div className="clinicstable-header-div"></div>
                </>
              ) : (
                element[rowData]
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
  );
};

export default PhysiotherapyTable;
