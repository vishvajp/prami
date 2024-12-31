import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import PhysioEditModal from "./PhysioEditModal";
// import { FaMagnifyingGlass } from "react-icons/fa6";

const PhysioAssetStats = () => {
  const [assetName, setAssetName] = useState();
  const [specUser, setSpecUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (user) => {
    setSpecUser(user);
    setIsModalOpen(true);
    console.log("user", user);
  };
  const tableHeader = [
    {
      name: "Asset Type",
    },
    {
      name: "Asset Price",
    },

    {
      name: "Action",
    },
  ];

  const tableContent = [
    {
      asset_price: "Laser Therapy",
      asset_type: "Rs.450",
      homeCare_Physio: "Yes",
    },
    {
      asset_price: "Laser Therapy",
      asset_type: "Rs.450",
      homeCare_Physio: "Yes",
    },
    {
      asset_price: "Laser Therapy",
      asset_type: "Rs.450",
      homeCare_Physio: "Yes",
    },
    {
      asset_price: "Laser Therapy",
      asset_type: "Rs.450",
      homeCare_Physio: "Yes",
    },
  ];

  const filteredItem = tableContent.filter((ele, index) => {
    console.log(assetName);
    const nameFilter = assetName
      ? ele.asset_type?.toLowerCase().includes(assetName?.toLowerCase())
      : true;
    console.log(nameFilter);
    return nameFilter;
  });

  const RefreshIcons = ({ user }) => (
    <div
      className="d-flex gap-2 justify-content-center"
      style={{ height: "100%", borderRadius: "0px 5px 5px 0px" }}
    >
      <FaRegEdit
        className="teststats-edit-icon"
        onClick={() => showModal(user)}
      />
      <FaTrash className="teststats-delete-icon" />
    </div>
  );
  return (
    <div>
      <div className="w-100 text-end ">
        <p className="mb-0 ">
          <input
            value={assetName}
            onChange={(e) => setAssetName(e.target.value)}
            className="todayinput mb-2"
            placeholder="Search Asset Type"
          ></input>
        </p>
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
        <PhysioEditModal
        specUser={specUser}
        isModalOpen={isModalOpen}
        showModal={showModal}
        setIsModalOpen={setIsModalOpen}></PhysioEditModal>
      </div>
    </div>
  );
};

export default PhysioAssetStats;
