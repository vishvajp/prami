import React, { useState } from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import Table from "react-bootstrap/Table";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const PharmaInvoice = () => {

const [searchTerm,setSearchTerm]=useState("")
const navigate = useNavigate()

    const handleAdd = ()=>{
        navigate("/home/pharmacy/invoiceregistration")
    }

const handlenavigate = (user)=>{
   navigate("/home/invoice/moredetail",{state:user})
}
    const tableContent = [
        {
          agency_name: "Chennai Pharmacy",
          agency_contactNo: "4563217",
          gst_no: "78945614785469",
          invoice_no: "8596741595",
          invoice_date: "10/22/2025",
          product_Name: "Paracetomol",
          exp_date:"10/22/2025",
          invoice_amt:"1000",
        },
        {
          agency_name: "Anto Agency",
          agency_contactNo: "4563217",
          gst_no: "78945614785469",
          invoice_no: "8596741595",
          invoice_date: "10/22/2025",
          product_Name: "Paracetomol",
          exp_date:"10/22/2025",
          invoice_amt:"1000",
          },
          {
            agency_name: "kalar Pharmacy",
            agency_contactNo: "4563217",
          gst_no: "78945614785469",
          invoice_no: "8596741595",
          invoice_date: "10/22/2025",
          product_Name: "Paracetomol",
          exp_date:"10/22/2025",
          invoice_amt:"1000",
          },
          {
            agency_name: "Sun rise agency",
            agency_contactNo: "4563217",
          gst_no: "78945614785469",
          invoice_no: "8596741595",
          invoice_date: "10/22/2025",
          product_Name: "Paracetomol",
          exp_date:"10/22/2025",
          invoice_amt:"1000",
          },
          {
            agency_name: "Malar Agency",
            agency_contactNo: "4563217",
          gst_no: "78945614785469",
          invoice_no: "8596741595",
          invoice_date: "10/22/2025",
          product_Name: "Paracetomol",
          exp_date:"10/22/2025",
          invoice_amt:"1000",
          },
    
      ];
    
        // const Inbutton = () => {
        //   return <div>IN</div>;
        // };

        const filteredItem = tableContent?.filter((data) => {

            const searchData = searchTerm
              ? data.agency_Name?.toLowerCase().includes(searchTerm.toLowerCase())
              : true  
        
            //   const searchCLinic = docSearch
            //   ? data.Clinic?.toLowerCase().includes(docSearch.toLowerCase())
            //   : true;
              return searchData
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
  <div>
      <p className="pharmacy-1stdiv-text">Pharmacy Invoice</p>
      <div className="pharmacy-1st-div d-flex gap-5">
        <div className=" d-flex align-items-center Pharmacy-search-div">
          <input
            type="search"
            className="pharmacy-1st-search-input-div"
            onChange={(e)=>setSearchTerm(e.target.value)}
            placeholder='search by agency name'
          ></input>
         
        </div>
        <div className=" d-flex justify-content-center">
          <button onClick={handleAdd} className="pharmacy-add-pharmacy-button">
            ADD INVOICE
          </button>
        </div>
       
      </div>
      <div className="pharmacy-table-div">
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
            ACTION
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
   
    </div>
  )
}

export default PharmaInvoice