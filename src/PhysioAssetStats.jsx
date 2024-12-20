import React, { useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import Table from "react-bootstrap/Table";
// import { FaMagnifyingGlass } from "react-icons/fa6";

const PhysioAssetStats = () => {

    const [assetName,setAssetName]=useState()
    const tableHeader = [
        {
          name: "Asset Type",
        },
        {
          name: "Asset Price",
        },
      
        {
            name:"Action"
        }
      ];
    
      const tableContent = [
        {
            AssetType: "Super Inductive System",
            AssetPrice: "Rs.700",
       
          Action:""
        },
        {
            AssetType: "Shockwave Therapy",
            AssetPrice: "Rs.600",
          
             Action:""
        },
        {
            AssetType: "Laser Therapy",
            AssetPrice: "Rs.450",
           
             Action:""
        },
        {
            AssetType: "Tapping Therapy",
            AssetPrice: "Rs.300",
      
             Action:""
        },
      ];

      const filterContent = tableContent.filter((ele,index)=>{
        console.log(assetName)
        const nameFilter = assetName ? ele.AssetType?.toLowerCase().includes(assetName?.toLowerCase()) : true;
        console.log(nameFilter)
        return nameFilter
      })

      const ActionButtons = () => (
        <div className="d-flex gap-2 justify-content-center" style={{height:"100%", borderRadius:"0px 5px 5px 0px"}}>
          <FaRegEdit className="teststats-edit-icon"  />
          <FaTrash className="teststats-delete-icon" />
        </div>
      );
  return (
    <div>
        
        <div className="w-100 text-end ">
              <p className="mb-0 ">
                <input
                value={assetName}
                onChange={(e)=>setAssetName(e.target.value)}
                  className="todayinput mb-2"
                  placeholder="Search Asset Type"
                ></input>
             
              </p>
            </div>
        
        <Table responsive>
    
    <thead className="patienttable-head-container">
      <tr>
        {tableHeader.map((ele, index) => (
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
      {filterContent.map((element) => {
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
  </Table></div>
  )
}

export default PhysioAssetStats