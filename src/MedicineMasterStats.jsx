import React,{useState} from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import Table from "react-bootstrap/Table";

import { FaMagnifyingGlass } from "react-icons/fa6";
import MedicineEditModal from "./MedicineEditModal";

const MedicineMasterStats = () => {
    const [searchCategory, setSearchCategory] = useState("");
    const [specUser,setSpecUser]=useState(null);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const showModal = (user) => {
       setSpecUser(user);
        setIsModalOpen(true);
        console.log("user",user);
      };
  const tableHeader = [
    {
      name: "Medicine Name",
    },
    {
      name: "Generic Name",
    },
    {
      name: "Medicine Type",
    },
    {
      name: "Dosage",
    },
    {
      name: "Action",
    },
  ];

  const tableContent = [
    {
      Medicine_Name: "Paracetamol",
      Generic_Name: "Paracetamol",
      Medicine_Type: "Analgesic (pain reliever) and antipyretic (fever reducer)",
      Dosage: "4 grams",
   
    },
    {
      Medicine_Name: "Novomax",
      Generic_Name: "Metformin",
      Medicine_Type: "Antidiabetic agent",
      Dosage: "500 mg to 1000 mg",
     
    },
    {
      Medicine_Name: "Dolo 650",
      Generic_Name: "Paracetamol (Acetaminophen)",
      Medicine_Type: "Analgesic (pain reliever) and antipyretic (fever reducer)",
      Dosage: "650 mg",
      
    },
    {
      Medicine_Name: "Ibuprofen",
      Generic_Name: "Ibuprofen",
      Medicine_Type: "Nonsteroidal anti-inflammatory drug (NSAID)",
      Dosage: "200 mg to 400 mg",
      
    },
  ];

  const filteredItem = tableContent.filter((tab) => {
    const searchCat =
      tab.Medicine_Name && searchCategory
        ? tab.Medicine_Name.toLowerCase().includes(searchCategory.toLowerCase())
        : true;

    return searchCat;
  });

  const RefreshIcons = ({user}) => (
    <div
      className="d-flex gap-2 justify-content-center"
      style={{ height: "100%", borderRadius: "0px 5px 5px 0px" }}
    >
      <FaRegEdit className="teststats-edit-icon"  onClick={() => showModal(user)} />
      <FaTrash className="teststats-delete-icon" />
    </div>
  );
  return (
    <div>
      {" "}
        <div className="teststats-main-div">
                    <input
                      className="teststats-search-input"
                      placeholder="Search lab category"
                      type="text"
                      value={searchCategory}
                      onChange={(e) => setSearchCategory(e.target.value)}
                    ></input>{" "}
                    <span>
                      <FaMagnifyingGlass style={{ color: "red" }} />
                    </span>
                  </div>
      <Table responsive>
      <thead className="patienttable-head-container">
        <tr>
        {filteredItem &&
            filteredItem.length > 0 &&
            Object.keys(filteredItem[0]).map((key, index) =>
              key !== "city" &&
              key !== "state" &&
              key !== "country" &&
              key !== "pincode" &&
              key !== "landmark" &&
              key !== "role" &&
              key !== "group"
             
            
             ? (
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
                    rowData === "city" ||
                    rowData === "state" ||
                    rowData === "country" ||
                    rowData === "pincode" ||
                    rowData === "landmark" ||
                    rowData === "role" ||
                    rowData === "group"
               
                  
                   
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
      <div>
        <MedicineEditModal specUser={specUser}
        isModalOpen={isModalOpen}
        showModal={showModal}
        setIsModalOpen={setIsModalOpen}></MedicineEditModal>
      </div>
    </div>
  );
};

export default MedicineMasterStats;
