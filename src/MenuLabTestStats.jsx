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
  const [specUser, setSpecUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (user) => {
    setSpecUser(user);
    setIsModalOpen(true);
    console.log("user", user);
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
      lab_Categorie: "Iodine test",
      test_Name: "Iodine test level",
      test_Price: "250.00",
    },
    {
      lab_Categorie: "Bone Density",
      test_Name: "Bone Width",
      test_Price: "500.00",
    },
    {
      lab_Categorie: "Skull test",
      test_Name: " test level 2 ",
      test_Price: "300.00",
    },
    {
      lab_Categorie: "leg test",
      test_Name: "Iodine test level",
      test_Price: "250.00",
    },
    {
      lab_Categorie: "Iodine test",
      test_Name: "Iodine test level",
      test_Price: "250.00",
    },
    {
      lab_Categorie: "Iodine test",
      test_Name: "Iodine test level",
      test_Price: "250.00",
    },
    {
      lab_Categorie: "Iodine test",
      test_Name: "Iodine test level",
      test_Price: "250.00",
    },
  ];

  const RefreshIcons = ({ user }) => (
    <div
      className="d-flex gap-2 justify-content-center"
      style={{ height: "100%" }}
    >
      <FaRegEdit
        className="teststats-edit-icon"
        onClick={() => showModal(user)}
      />
      <FaTrash className="teststats-delete-icon" />
    </div>
  );

  const filteredItem = tableContent.filter((tab) => {
    const searchCat =
      tab.lab_Categorie && searchCategory
        ? tab.lab_Categorie.toLowerCase().includes(searchCategory.toLowerCase())
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
              {filteredItem &&
                filteredItem.length > 0 &&
                Object.keys(filteredItem[0]).map((key, index) =>
                  key !== "city" &&
                  key !== "state" &&
                  key !== "country" &&
                  key !== "pincode" &&
                  key !== "landmark" &&
                  key !== "role" &&
                  key !== "group" ? (
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
            {currentItems.map((element) => {
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
      </div>
      <MenuLabTestStatsModal
        specUser={specUser}
        isModalOpen={isModalOpen}
        showModal={showModal}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default MenuLabTestStats;
