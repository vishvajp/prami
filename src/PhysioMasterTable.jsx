import React from 'react'
import Table from "react-bootstrap/Table";
const PhysioMasterTable = () => {
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
          AssetType: "Super Inductive System",
         AssetPrice: "Rs.700",
        
        },
        {
            AssetType: "Shockwave Therapy",
         AssetPrice: "Rs.600",
            
        },
        {
            AssetType: "Laser Therapy",
            AssetPrice: "Rs.450",
          
        },
        {
            AssetType: "Tapping Therapy",
            AssetPrice: "Rs.300",
            
        },
      ];
  return (
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
  )
}

export default PhysioMasterTable