import React from "react";
import { BsArrowDownUp } from "react-icons/bs";
import { FaHeartbeat } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { LuRefreshCw } from "react-icons/lu";
import Table from "react-bootstrap/Table";

const HomePageTable = ({
  startDate,
  toDate,
  selectClinic,
  selectDoctor,
  selectTreatment,
}) => {
  const tableHeader = [
    {
      name: "Time",
    },
    {
      name: "Consultation Date",
    },
    {
      name: "Check In",
    },
    {
      name: "Token",
    },
    {
      name: "Patient Name",
    },
    {
      name: "Age & Gender",
    },
    {
      name: "Contact Number",
    },
    {
      name: "Status",
    },
    {
      name: "Doctor Name",
    },
    {
      name: "Treatment",
    },
    {
      name: "Due(INR)",
    },
    {
      name: "",
    },
  ];
  const tableContent = [
    {
      Time: "10.00 AM",
      Date: "10-12-2024",
      checkin: "IN",
      token: "23",
      patientname: "Mrs vijayalakshmi ",
      age: "23 Y female",
      contactnumber: "213123123",
      status: "started",
      doctorname: "DR Karunakaran",
      treatment: "Consultation",
      due: "23",
      refresh: "",
    },
    {
      Time: "10.00 AM",
      Date: "10-12-2024",
      checkin: "IN",
      token: "23",
      patientname: "Mrs vijayalakshmi ",
      age: "23 Y female",
      contactnumber: "213123123",
      status: "started",
      doctorname: "DR Vijay",
      treatment: "Asset Physiotherapy",
      due: "23",
      refresh: "",
    },
    {
      Time: "10.00 AM",
      Date: "08-24-2024",
      checkin: "IN",
      token: "23",
      patientname: "Mrs vijaya",
      age: "23 Y female",
      contactnumber: "213123123",
      status: "started",
      doctorname: "DR Karunakaran",
      treatment: "Physiotherapy",
      due: "23",
      refresh: "",
    },
    {
      Time: "10.00 AM",
      Date: "08-28-2024",
      checkin: "IN",
      token: "23",
      patientname: "Mrs vijaya",
      age: "23 Y female",
      contactnumber: "213123123",
      status: "started",
      doctorname: "DR Karunakaran",
      treatment: "Consultation",
      due: "23",
      refresh: "",
    },
    {
      Time: "10.00 AM",
      Date: "08-29-2024",
      checkin: "IN",
      token: "23",
      patientname: "Mrs vijaya",
      age: "23 Y female",
      contactnumber: "213123123",
      status: "started",
      doctorname: "DR Vijay",
      treatment: "Physiotherapy",
      due: "23",
      refresh: "",
    },
    {
      Time: "10.00 AM",
      Date: "08-30-2024",
      checkin: "IN",
      token: "23",
      patientname: "Mrs vijaya",
      age: "23 Y female",
      contactnumber: "213123123",
      status: "started",
      doctorname: "DR suriya",
      treatment: "Asset Physiotherapy",
      due: "23",
      refresh: "",
    },
  
  ];

  const filterItem = tableContent.filter((tab) => {
    const filtDate =
      startDate && toDate
        ? new Date(tab.Date) >= startDate && new Date(tab.Date) <= toDate
        : true;

    const filtdoc =
      selectDoctor === "All" ||
      (selectDoctor &&
        tab.doctorname?.toLowerCase() === selectDoctor.toLowerCase());

    console.log(
      selectDoctor && selectDoctor.toLowerCase(),
      tab.doctorname.toLowerCase()
    );
    const filtTreatment =
      selectTreatment === "All" ||
      (selectTreatment &&
        tab.treatment?.toLowerCase() === selectTreatment.toLowerCase());
    console.log(
      selectTreatment && selectTreatment.toLowerCase(),
      tab.treatment.toLowerCase()
    );
    return filtDate && filtdoc && filtTreatment;
  });

  console.log(filterItem);
  const RefreshHead = () => {
    return (
      <div className="table-head-refresh">
        <LuRefreshCw className="head-refresh-icon" /> Refresh
      </div>
    );
  };

  const RefreshIcons = () => {
    return (
      <div className="refresh-icons-container">
        <div className="refresh-icons-div">
          <FaHeartbeat
            style={{ height: "23px", width: "23px" }}
            className="refresh-icon"
          />
        </div>

        <div className="refresh-icons-div">
          <FaRegMoneyBillAlt
            style={{ height: "23px", width: "23px" }}
            className="refresh-icon"
          />
        </div>

        <div className="refresh-icons-div">
          <FaPlayCircle
            style={{ height: "23px", width: "23px" }}
            className="refresh-icon"
          />
        </div>

        <div className="refresh-icons-div">
          <GiCancel
            style={{ height: "23px", width: "23px", color: "red" }}
            className="refresh-icon"
          />
        </div>
      </div>
    );
  };
  // console.log(...tableHeader);

  return (
    <Table responsive >
      <thead className="table-head-container">
        <tr>
          {[...tableHeader].map((ele, index) => (
            <th className="table-header-col" key={index}>
              {ele.name === "Time" || ele.name === "Status" ? (
                <>
                  {ele.name}
                  <div className="table-header-div"></div>
                  <BsArrowDownUp />
                </>
              ) : (
                <>
                  {ele.name}
                  {index < tableHeader.length - 1 && (
                    <div className="table-header-div"></div>
                  )}
                </>
              )}

              {index === tableHeader.length - 1 && <RefreshHead />}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filterItem.map((element, index) => {
          return (
            <tr className="table-body-row-container" key={index}>
              {Object.keys(element).map((rowData, index) => {
                if (index === Object.keys(element).length - 1) {
                  return <RefreshIcons key={index} />;
                }
                // if (index === Object.keys(element).length - 9) {
                //   return <Inbutton />;
                // }

                return (
                  <td className="table-body-row" key={index}>
                    {element[rowData]}
                    <div className="table-header-div"></div>
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

export default HomePageTable;
