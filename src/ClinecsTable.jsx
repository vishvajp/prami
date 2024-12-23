import React, { useState, useEffect, useContext } from "react";
import Table from "react-bootstrap/Table";
import { FaTrash } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import "./ClinecsTable.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserDataContext from "./Context/UserDataContext";

export function ClinecsTable({clinicSearch}) {
  const navigate = useNavigate();
  const handleEdit = (game) => {
    navigate("/home/clinics/edit", { state: { game } });
    console.log(game);
  };

  const handleMoreDetail = (game) => {
    navigate("/home/clinics/moredetail", { state: { game } });
    console.log(game);
  };


  const [tableContent, setTableContent] = useState(null);
  const { apiBaseUrl } = useContext(UserDataContext);

  const tableHeader = [
    {
      name: "Registration Number",
    },
    {
      name: "Name of the Hospital / Clinic",
    },
    {
      name: "Doctor Name",
    },
    {
      name: "Location",
    },
    {
      name: "Contact Person",
    },
    {
      name: "Contact Number",
    },
    {
      name: "",
    },
  ];


  const filteredItem = tableContent?.filter((data)=>{
    console.log("Clinic Search Value:", clinicSearch);
    console.log("Clinic Name Value:", data.clinic_name);
    const searchData =  clinicSearch? data.clinic_name?.toLowerCase().includes(clinicSearch.toLowerCase()) : true

   
   
    return searchData
  })

  useEffect(() => {
    const getAppointmentDetail = async () => {
      try {
        const response = await axios.post(`${apiBaseUrl}get_clinic_list`);
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

  const RefreshIcons = ({ element }) => {
    return (
      <div className="refresh-icons-container justify-content-center">
        <div>
          {/* <button  onClick={()=>handleNavToSpecPat(element)}  className="registerpatient-table-update-button">
            More Details
          </button> */}
          <FaTrash className="clinicstable-trash-icon" />{" "}
          <BiEdit
            onClick={() => handleMoreDetail(element)}
            className="clinicstable-Edit-icon"
          />
        </div>
      </div>
    );
  };
  return (
    <Table responsive>
      <thead>
        <tr>
          {filteredItem &&
            filteredItem.length > 0 &&
            Object.keys(filteredItem[0]).map((key, index) =>
              key !== "clinic_district" &&
              key !== "clinic_state" &&
              key !== "clinic_pincode" &&
              key !== "clinic_country" ? ( // Filter out unwanted columns
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
            <tr className="patienttable-body-row-container">
              {Object.keys(element).map((rowData, cellIndex) => {
                if (
                  rowData === "clinic_district" ||
                  rowData === "clinic_state" ||
                  rowData === "clinic_pincode"||
                  rowData === "clinic_country"
                ) {
                  return null;
                }

                return (
                  <td className="patienttable-body-row" key={cellIndex}>
                    {element[rowData]}
                    {cellIndex < Object.keys(element).length  && (
                      <div className="clinicstable-header-div"></div>
                    )}
                  </td>
                );
              })}

              <td className="patienttable-body-row" key="refresh-icon">
                <RefreshIcons element={element} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
