import React, { useState, useEffect, useContext  } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { FaCirclePlus } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Doctortable } from "./Doctortable";
import { useNavigate } from "react-router-dom";
import AdminDocReg from "./AdminDocReg";
import UserDataContext from "./Context/UserDataContext";

const AdminDoc = () => {
    const docDetailNavigate = useNavigate()
    const [docSearch,setDocSearch]=useState("")
    const [addDoctor,setAddDoctor]= useState()
    const handledocdetail =()=>{
      docDetailNavigate("/home/doctor/details")
    }
    const handleAdd = () => {
        // showPhysiotherapistAdd("CLINIC", "");
        setAddDoctor(true)
      };
      const doctorAboutNavigate = useNavigate();
  const [tableContent, setTableContent] = useState(null);
  const { apiBaseUrl } = useContext(UserDataContext);
  const handlenavigate = (doc) => {
    console.log("treem");
    doctorAboutNavigate("/home/admin/docmoredetail", { state: { doc } });
  };

  useEffect(() => {
    const getAppointmentDetail = async () => {
      try {
        const response = await axios.post(`${apiBaseUrl}get_doctor_list`);
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

    const searchData = docSearch
      ? data.doc_name?.toLowerCase().includes(docSearch.toLowerCase())
      : true  

      const searchCLinic = docSearch
      ? data.Clinic?.toLowerCase().includes(docSearch.toLowerCase())
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
    
  return (
    <div>
          {!addDoctor && 
        <div>
         <div className="d-flex w-100 justify-content-end mt-3 pe-5">
           <div className="doctor-search-container">
             <p>
               Search Doctors <FaMagnifyingGlass className="text-danger" />
             </p>
             <input
               value={docSearch}
                 type="text"
                 className="clinecs-header-div-input"
                 placeholder="Search by Clinic Name or Doctor"
                 onChange={(e)=>setDocSearch(e.target.value)}
               ></input>
           </div>
           <div onClick={handleAdd} className="d-flex flex-row mt-2 align-items-center pe-2 doctor-add">
             <img
               className=" profile-doc-image m-2"
               src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               style={{ width: "60px", height: "60px" }}
             ></img>
             <div className="doc-plus-icon">
               <FaCirclePlus className="doctor-plus-icon" />
             </div>
             <p className="text-white doctor-doc-text">ADD DOCTOR</p>
           </div>
         </div>
         <div className="doc-page-table ">
          
         <Table responsive>
      <thead>
        <tr>
          {filteredItem &&
            filteredItem.length > 0 &&
            Object.keys(filteredItem[0]).map((key, index) =>
              key !== "clinic_id" &&
              key !== "doc_dob" &&
              key !== "doc_experience" &&
              key !== "doc_group" &&
              key !== "doc_fee" &&
              key !== "doc_achievement" &&
              key !== "doc_education" ? (
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
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredItem?.map((element, rowIndex) => {
          return (
            <tr className="patienttable-body-row-container">
              {Object.keys(element).map((rowData, cellIndex) => {
                if (
                  rowData === "clinic_id" ||
                  rowData === "doc_dob" ||
                  rowData === "doc_experience" ||
                  rowData === "doc_group" ||
                  rowData === "doc_fee" ||
                  rowData === "doc_achievement" ||
                  rowData === "doc_education"
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
         </div>
         </div>
         }
         {addDoctor &&    <div><AdminDocReg setAddDoctor={setAddDoctor}></AdminDocReg></div>}
       </div>
  )
}

export default AdminDoc