import React from "react";
import Table from "react-bootstrap/Table";

const MenuLabTable = () => {
  const tableHeader = [
    {
      name: "Lab Name",
    },
    {
      name: "Lab Category",
    },
    {
      name: " Test Name",
    },
    {
      name: "Test Price",
    },
  ];

  const tableContent = [
    {
      labName: "Sunshine",
      labCategorie: "Iodine test",
      testName: "Iodine test level",
      testPrice: "250.00",
    },
    {
      labName: "Annai",
      labCategorie: "Bone Density",
      testName: "Bone Width",
      testPrice: "500.00",
    },
    {
      labName: "UR care",
      labCategorie: "Skull test",
      testName: " test level 2 ",
      testPrice: "300.00",
    },
    {
      labName: "Sunshine",
      labCategorie: "leg test",
      testName: "Iodine test level",
      testPrice: "250.00",
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
  );
};

export default MenuLabTable;
