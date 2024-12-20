import React, { useState, useRef } from "react";
import Table from "react-bootstrap/Table";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { DownloadTableExcel } from "react-export-table-to-excel";

import "./MenuLab.css";
import MenuLabTestStatsModal from "./MenuLabTestStatsModal";
const MenuLabTestStats = () => {
  const [pageCount, setPageCount] = useState(1);
  const itemsPerPage = 5;
  const [searchCategory, setSearchCategory] = useState("");
  const tableRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
   
    setIsModalOpen(true);
  };

  const tableHeader = [
    {
      name: "Lab Category",
    },
    {
      name: " Test Name",
    },
    {
      name: "Test Price",
    },
    {
      name: "Actions",
    },
  ];

  const tableContent = [
    {
      labCategorie: "Iodine test",
      testName: "Iodine test level",
      testPrice: "250.00",
      Action: "",
    },
    {
      labCategorie: "Bone Density",
      testName: "Bone Width",
      testPrice: "500.00",
      Action: "",
    },
    {
      labCategorie: "Skull test",
      testName: " test level 2 ",
      testPrice: "300.00",
      Action: "",
    },
    {
      labCategorie: "leg test",
      testName: "Iodine test level",
      testPrice: "250.00",
      Action: "",
    },
    {
      labCategorie: "Iodine test",
      testName: "Iodine test level",
      testPrice: "250.00",
      Action:"",
    },
    {
      labCategorie: "Iodine test",
      testName: "Iodine test level",
      testPrice: "250.00",
      Action: "",
    },
    {
      labCategorie: "Iodine test",
      testName: "Iodine test level",
      testPrice: "250.00",
      Action: "",
    },
  ];

  const ActionButtons = () => (
    <div className="d-flex gap-2 justify-content-center" style={{height:"100%"}}>
      <FaRegEdit className="teststats-edit-icon" onClick={showModal} />
      <FaTrash className="teststats-delete-icon" />
    </div>
  );

  const filteredItem = tableContent.filter((tab) => {
    const searchCat =
      tab.labCategorie && searchCategory
        ? tab.labCategorie.toLowerCase().includes(searchCategory.toLowerCase())
        : true;

    return searchCat;
  });

  const lastItem = itemsPerPage * pageCount;
  const firstItem = lastItem - itemsPerPage;
  const currentItems = filteredItem.slice(firstItem, lastItem);
  const totalPages = Math.ceil(filteredItem.length / itemsPerPage);

  const increasePageCount = () => {
    if (pageCount < totalPages) {
      setPageCount(pageCount + 1);
    }
  };

  const decreasePageCount = () => {
    setPageCount(pageCount < 1 ? pageCount - 1 : 1);
  };

  return (
    <div>
      <div>
        <div className="d-flex justify-content-end me-4">
          <DownloadTableExcel
            filename="users table"
            sheet="users"
            currentTableRef={tableRef.current}
          >
            <button className="teststats-export-button">Export to excel</button>
          </DownloadTableExcel>
        </div>
        <div className="row teststats-top-row">
          <div className="col d-flex align-items-center ">
            <label className="teststats-labname-text">LAB NAME </label>{" "}
            <div className="teststats-main-div">
              <input
                className="teststats-search-input"
                placeholder="Search lab name"
                type="text"
              ></input>{" "}
              <span>
                <FaMagnifyingGlass style={{ color: "red" }} />
              </span>
            </div>
          </div>

          <div className="col d-flex align-items-center ">
            <label className="teststats-labname-text">LAB CATEGORY</label>{" "}
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
          </div>
          <div className="col d-flex justify-content-end">
            <div className="d-flex align-items-center gap">
              <p
                className="mb-0 doctorfee-previous-text"
                onClick={decreasePageCount}
              >
                Previous
              </p>
              <p className="mb-0 doctorfee-1-text">{pageCount}</p>
              <p
                className="mb-0 doctorfee-next-text"
                onClick={increasePageCount}
              >
                Next
              </p>
            </div>
          </div>
        </div>
      </div>
      <div ref={tableRef} className="menulab-testStats-maindiv">
        <Table responsive ref={tableRef}>
          <thead className="patienttable-head-container">
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
            {currentItems.map((element) => {
              return (
                <tr className="patienttable-body-row-container">
                  {Object.keys(element).map((rowData, cellIndex) => {
                    if (cellIndex === Object.keys(element).length - 1) {
                      return <ActionButtons key={cellIndex} />;
                    }
                    return (
                      <td className="patienttable-body-row" key={cellIndex}>
                        {cellIndex < Object.keys(element).length - 1 ? (
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
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <MenuLabTestStatsModal isModalOpen={isModalOpen} showModal={showModal} setIsModalOpen={setIsModalOpen}/>
    </div>
  );
};

export default MenuLabTestStats;
