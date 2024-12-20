import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import HomeCareAssetStats from "./HomeCareAssetStats";

const HomeCareItem = () => {
  const [labTitle, setLabTitle] = useState("Homecare Item Master");
  const tableHeader = [
    {
      name: "Asset Type",
    },
    {
      name: "Asset Price",
    },
    
  ];

  const tableContent = [
    {
      AssetType: "Dry Needling Therapy",
     AssetPrice: "Rs.700",
    
    },
    {
        AssetType: "Shockwave Therapy",
     AssetPrice: "Rs.600",
        
    },
    {
        AssetType: "Pens Therapy",
        AssetPrice: "Rs.550",
      
    },
    {
        AssetType: "Tapping Therapy",
        AssetPrice: "Rs.300",
        
    },
  ];
  return (
    <div>
      {" "}
      <div className="d-flex justify-content-center gap-2">
        <span
          onClick={() => {
            setLabTitle("Homecare Item Master");
          }}
          className="menu-lab-heading"
          style={{
            color: labTitle === "Homecare Item Master" ? "white" : "black",
            backgroundColor:
              labTitle === "Homecare Item Master" ? "Green" : "gainsboro",
          }}
        >
          Physiotherapy Item Master
        </span>
        <span
          onClick={() => {
            setLabTitle("Homecare Stats");
          }}
          className="menu-lab-heading"
          style={{
            color: labTitle === "   Homecare Stats" ? "white" : "black",
            backgroundColor:
              labTitle === "   Homecare Stats" ? "Green" : "gainsboro",
          }}
        >
        Homecare Stats
        </span>
      </div>
      {labTitle === "Homecare Item Master" && (
        <div className="row medicinemaster-main-div-row">
          <div className="col medicinemaster-1st-col d-flex flex-column gap-4">
            <div className="d-flex flex-column">
              <label className="medicinemaster-1st-col-label">Asset Type</label>
              <input
                className="medicinemaster-1st-col-input"
                type="text"
              ></input>
            </div>

            <div className="d-flex flex-column">
              <label className="medicinemaster-1st-col-label">
                Asset Price
              </label>
              <input
                className="medicinemaster-1st-col-input"
                type="text"
              ></input>
            </div>
            <div className="d-flex justify-content-end">
              <button className="medicinemaster-1st-col-add-button">ADD</button>
            </div>
          </div>
          <div className="col medicinemaster-2nd-col">
            <div className="d-flex justify-content-center">
              <span className="medicinemaster-2nd-col-tabletitle">
                New Physio Details
              </span>
            </div>
            <div>
            <Table responsive>
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
      {tableContent.map((element) => {
        return (
          <tr className="patienttable-body-row-container">
            {Object.keys(element).map((rowData, cellIndex) => {
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
            <div className="d-flex justify-content-end">
              <button className="medicinemaster-2nd-col-submit-button">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      )}
      {labTitle === "Homecare Stats" && (
        <div className="medicinemaster-test-stats-main-div">
          <HomeCareAssetStats />
        </div>
      )}
    </div>
  );
};

export default HomeCareItem;
