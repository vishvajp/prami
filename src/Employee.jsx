import React, { useState } from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Table from "react-bootstrap/Table";
import { useNavigate } from 'react-router-dom';
import { FaTrash } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";


const Employee = () => {

    const [employeeSearch, setEmployeeSearch]=useState("")
    const navigate = useNavigate()
    const navToClinicEdit = useNavigate()
    const handleEdit = (game)=>{
      console.log(game)
      navToClinicEdit("/home/employee/edit" , {state:{game}})
      console.log(game)
      
    }
        
    

    const tableHeader = [
        {
          name: "Name",
        },
        {
          name: "Employee Id",
        },
        {
          name: "Date Of Join",
        },
        {
          name: "Date Of Birth",
        },
        {
          name: "Contact No",
        },
        {
          name: "Role",
        },
        {
            name: "Group",
          },
          {
            name: "Experience",
          },
          {
            name: "Salary",
          },
          {
            name:"Action"
          }
        
       
      ];
    
      const tableContent = [
        {
            name: "karan S",
            employeeId: "E001",
            dateOfJoin: "2020-01-01",
          dob: "23-01-1995",
     
          mobileno: "90445669771",
          role: "Employee",
       group:"-",
       experience:"12years",
         salary:"15,000",
         action:""
         
        },
        {
            name: "Vimal S",
            employeeId: "E001",
            dateOfJoin: "2020-01-01",
         
          dob: "23-01-1995",
          
          mobileno: "90445669771",
          role: "Employee",
       group:"-",
       experience:"12years",
         salary:"15,000",
         action:""
        },
        {
            name: "Saran S",
            employeeId: "E001",
            dateOfJoin: "2020-01-01",
       
          dob: "23-01-1995",
         
          mobileno: "90445669771",
          role: "Employee",
       group:"-",
       experience:"12years",
          salary:"15,000",
         action:""
        },
        {
            name: "Josh S",
            employeeId: "E001",
            dateOfJoin: "2020-01-01",
         
          dob: "23-01-1995",
        
          mobileno: "90445669771",
          role: "Employee",
       group:"-",
       experience:"12years",
         salary:"15,000",
         action:""
        },
        {
            name: "English S",
            employeeId: "E001",
            dateOfJoin: "2020-01-01",
          
          dob: "23-01-1995",
         
          mobileno: "90445669771",
          role: "Employee",
       group:"-",
       experience:"12years",
          salary:"15,000",
         action:""
        },
      
      ];
    
      //   const Inbutton = () => {
      //     return <div>IN</div>;
      //   };
      
      const RefreshIcons = ({ element }) => {
        return (
          <div className="refresh-icons-container justify-content-center">
           <div>
              {/* <button  onClick={()=>handleNavToSpecPat(element)}  className="registerpatient-table-update-button">
                More Details
              </button> */}
              <FaTrash className="clinicstable-trash-icon"/> <BiEdit onClick={()=>handleEdit(element)} className="clinicstable-Edit-icon" />
            </div>    
          </div>
        );
      };
      const DocImg = () => {
        return (
          <div>
            <div>
              <img
                className="doc-docimage ms-1"
                src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{ width: "40px", height: "40px" }}
              ></img>
            </div>
          </div>
        );
      };
    

      const filterContent = tableContent.filter((item)=>{
        const byName = employeeSearch ? item.name?.toLowerCase().includes(employeeSearch?.toLowerCase()) : true
        return byName;
      })
      
  return (
    <div><div className="d-flex w-100 justify-content-end mt-3 pe-5">
    <div className="doctor-search-container">
      <p>
        Search Employee <FaMagnifyingGlass className="text-danger" />
      </p>
      {/* <select name="Education" id="doctoreducation">
        <option value="volvo">M.B.B.S, Md,</option>
        <option value="saab">""</option>
        <option value="opel">""</option>
        <option value="audi">""</option>
      </select> */}
      <input value={employeeSearch} onChange={(e)=>setEmployeeSearch(e.target.value)} placeholder='Enter Employee Name' id="doctoreducation" style={{width:"100%"}} type='text'></input>
    </div>
    <div onClick={()=>navigate("/home/employee/registration")} className="d-flex flex-row mt-2 align-items-center pe-2 doctor-add">
      <img
        className=" profile-doc-image m-2"
        src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        style={{ width: "60px", height: "60px" }}
      ></img>
      <div className="doc-plus-icon">
        <FaCirclePlus className="doctor-plus-icon" />
      </div>
      <p className="text-white doctor-doc-text">ADD EMPLOYEE</p>
    </div>
  </div>
  <div className='doc-page-table '>
  <Table responsive>
      <thead className="table-head-container">
      <tr>
          {[...tableHeader].map((ele, index) => (
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
        {filterContent.map((element, rowIndex) => {
          return (
            <tr key={rowIndex} className="doc-table-body-row-container">
              {Object.keys(element).map((rowData, colIndex) => {
                if (colIndex === Object.keys(element).length - 1) {
                  return <RefreshIcons element={element} key={rowData + colIndex} />;
                }
                // if (index === Object.keys(element).length - 9) {
                //   return <Inbutton />;
                // }

                return (
                  <td className="table-body-row-doc" key={rowData + colIndex}>
                  {rowData === "name" && <DocImg />}
                  {rowData === "name" || rowData === "mobileno" ? (
                    <b>{element[rowData]}</b>
                  ) : (
                    element[rowData]
                  )}
                  
                  {colIndex !== Object.keys(element).length - 1 && <div className="table-header-div"></div>}
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

export default Employee