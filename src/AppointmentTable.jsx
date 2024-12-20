import Table from "react-bootstrap/Table";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { BsArrowDownUp } from "react-icons/bs";
import { FaHeartbeat } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { LuRefreshCw } from "react-icons/lu";
import { AiOutlineHistory } from "react-icons/ai";
import RescheduleAppointment from "./RescheduleAppointment";
import UserDataContext from "./Context/UserDataContext";

export function AppointmentTable({
  showModal,
  showModalPayment,
  selectedDoctor,
  startDate,
  selectTreatment,
  toDate,
  chooseDays,
  selectClinic,
  searchpatient,
}) {
  const [isModalOpenReschdule, setIsModalOpenReschedule] = useState(false);
  const [tableContent, setTableContent] = useState(null);
  const [startCheck, setStartCheck] = useState(true);

  const showModalReschdule = () => {
    setIsModalOpenReschedule(true);
  };
  const handleOkReschedule = () => {
    setIsModalOpenReschedule(false);
  };
  const handleCancelReschedule = () => {
    setIsModalOpenReschedule(false);
  };

  const [specificPatient, setSpecificPatient] = useState();
  const { apiBaseUrl } = useContext(UserDataContext);
  useEffect(() => {
    const getAppointmentDetail = async () => {
      try {
        const response = await axios.post(`${apiBaseUrl}get_appointment_list`);
        if (response.data) {
          setTableContent(response.data.data);
          console.log(response.data.data);
        }
      } catch (err) {
        console.log("Error fetching data: ", err);
      }
    };

    getAppointmentDetail();
  }, [isModalOpenReschdule, startCheck]);

  // Call the API when the page is loaded initially, and when isModalOpenReschdule changes to false
  useEffect(() => {
    if (!isModalOpenReschdule) {
      const getAppointmentDetail = async () => {
        try {
          const response = await axios.post(
            "https://cvmvreddystrust.com/App/tsitClient2024/prami/public/api/get_appointment_list"
          );
          if (response.data) {
            setTableContent(response.data.data); // Set your state with the fetched data
            console.log(response.data.data); // Optional: for debugging
          }
        } catch (err) {
          console.log("Error fetching data: ", err);
        }
      };

      getAppointmentDetail(); // Calls the async function to fetch the data
    }
  }, [isModalOpenReschdule]);

  const filteredItem = tableContent?.filter((item) => {
    // console.log(tableContent);

    const isDateInRange =
      startDate && toDate
        ? new Date(item.appointment_date) >= startDate &&
          new Date(item.appointment_date) <= toDate
        : true;

    console.log(
      "startDate",
      startDate,
      "end Date",
      toDate,
      "isdateRange",
      isDateInRange,
      new Date(item.appointment_date)
    );

    const isDoctor =
      selectedDoctor === "All" ||
      (selectedDoctor
        ? item.doctor?.toLowerCase() === selectedDoctor.toLowerCase()
        : true);

    console.log(isDoctor);

    const isTreatment =
      selectTreatment === "All Treatment" ||
      (selectTreatment &&
        item.treatment_type?.toLowerCase() === selectTreatment.toLowerCase());

    const searchPatientName = searchpatient
      ? item.patient_name?.toLowerCase().includes(searchpatient)
      : true;

    const choosedClinic = selectClinic
      ? item.clinic?.toLowerCase() === selectClinic.toLowerCase()
      : true;

    return (
      isDoctor &&
      isDateInRange &&
      isTreatment &&
      searchPatientName &&
      choosedClinic
    );
  });
  const RefreshHead = () => {
    return (
      <div className="table-head-refresh">
        <LuRefreshCw className="head-refresh-icon" /> Refresh
      </div>
    );
  };

  const handleSpecPatient = (specElement) => {
    setSpecificPatient(specElement ? specElement : "");
    setIsModalOpenReschedule(true);
  };
  console.log(startCheck);

  const handleStarted = async (user) => {
    try {
      const response = await axios.post(
        `${apiBaseUrl}session_started/${user.appointment_id}`
      );

      if (response.data.success === true) {
        console.log("game Time");
        setStartCheck(!startCheck);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCompleted = async (user) => {
    try {
      const response = await axios.post(
        `${apiBaseUrl}session_completed/${user.appointment_id}`
      );

      if (response.data.success === true) {
        setStartCheck(!startCheck);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const RefreshIcons = ({ element }) => {
    return (
      <div className="refresh-icons-container">
        <div className="refresh-icons-div">
          <FaHeartbeat
            style={{ height: "23px", width: "23px" }}
            className="refresh-icon"
            onClick={showModal}
          />
        </div>

        <div className="refresh-icons-div">
          <FaRegMoneyBillAlt
            style={{ height: "23px", width: "23px" }}
            className="refresh-icon"
            onClick={showModalPayment}
          />
        </div>

        <div className="refresh-icons-div">
          <FaPlayCircle
            style={{ height: "23px", width: "23px", color: "dodgerblue" }}
            className="refresh-icon"
            onClick={() => handleStarted(element)}
          />
        </div>

        <div className="refresh-icons-div">
          <GiCancel
            style={{ height: "23px", width: "23px", color: "red" }}
            className="refresh-icon"
            onClick={() => handleCompleted(element)}
          />
        </div>
        <div className="refresh-icons-div">
          <AiOutlineHistory
            style={{ height: "23px", width: "23px", color: "green" }}
            className="refresh-icon"
            onClick={() => handleSpecPatient(element)}
          />
        </div>
      </div>
    );
  };
  // console.log(...tableHeader);

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            {filteredItem &&
              filteredItem.length > 0 &&
              Object.keys(filteredItem[0]).map((key, index) =>
                key !== "id" &&
                key !== "status" &&
                key !== "created_at" &&
                key !== "updated_at" &&
                key !== "clinic_id" &&
                key !== "doctor_id" ? ( // Filter out unwanted columns
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
              <RefreshHead />
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredItem?.map((element, index) => {
            return (
              <tr className="table-body-row-container" key={index}>
                {Object.keys(element).map((rowData, index) => {
                  if (
                    rowData === "id" ||
                    rowData === "status" ||
                    rowData === "created_at" ||
                    rowData === "clinic_id" ||
                    rowData === "doctor_id"
                  ) {
                    return null; // Skip rendering this column
                  }
                  // if (index === Object.keys(element).length - 1) {
                  //   return <RefreshIcons element={element} />;
                  // }
                  // if (index === Object.keys(element).length - 9) {
                  //   return <Inbutton />;
                  // }

                  return (
                    <td className="table-body-row" key={index}>
                      {element[rowData] ? element[rowData] : "-"}
                      {index < Object.keys(element).length && (
                        <div className="table-header-div"></div>
                      )}
                    </td>
                  );
                })}
                <td className="patienttable-body-row" key="refresh-icon">
                  <RefreshIcons element={element} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {specificPatient && (
        <RescheduleAppointment
          isModalOpenReschdule={isModalOpenReschdule}
          handleOkReschedule={handleOkReschedule}
          handleCancelReschedule={handleCancelReschedule}
          setIsModalOpenReschedule={setIsModalOpenReschedule}
          specificPatient={specificPatient}
        ></RescheduleAppointment>
      )}
    </div>
  );
}
