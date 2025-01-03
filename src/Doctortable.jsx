import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import UserDataContext from "./Context/UserDataContext";

export function Doctortable({ docSearch }) {
  const doctorAboutNavigate = useNavigate();
  const [tableContent, setTableContent] = useState(null);
  const { apiBaseUrl } = useContext(UserDataContext);
  const handlenavigate = (doc) => {
    console.log("treem");
    doctorAboutNavigate("/home/doctor/about", { state: { doc } });
  };

  const tableHeader = [
    {
      name: "Doctor Name",
    },
    {
      name: "Specialist",
    },
    {
      name: "Gender",
    },
    {
      name: "Date Of Birth",
    },
    {
      name: "Contact No",
    },
    {
      name: "",
    },
  ];

  // const tableContent = [
  //   {
  //     name: "DR. Karuakaran S",
  //     role: "Spine Surgeon",
  //     sex: "Male",
  //     dob: "23-jan-1995",
  //     mobileno: "90445669771",
  //     button: "",
  //   },
  //   {
  //     name: "DR. Prabakaran K",
  //     role: "Spine Surgeon",
  //     sex: "Male",
  //     dob: "23-jan-1995",
  //     mobileno: "90445669771",
  //     button: "",
  //   },
  //   {
  //     name: "DR. Manohar J",
  //     role: "Spine Surgeon",
  //     sex: "Male",
  //     dob: "23-jan-1995",
  //     mobileno: "90445669771",
  //     button: "",
  //   },
  //   {
  //     name: "DR. Govind M",
  //     role: "Physio",
  //     sex: "Male",
  //     dob: "23-jan-1995",
  //     mobileno: "90445669771",
  //     button: "",
  //   },
  //   {
  //     name: "DR. Abinav Mukund K",
  //     role: "Spine Surgeon",
  //     sex: "Male",
  //     dob: "23-jan-1995",
  //     mobileno: "90445669771",
  //     button: "",
  //   },

  // ];

  //   const Inbutton = () => {
  //     return <div>IN</div>;
  //   };

  useEffect(() => {
    const getAppointmentDetail = async () => {
      try {
        const response = await axios.post(`${apiBaseUrl}get_doctor_list`);
        if (response.data) {
          setTableContent(response.data.data);
          console.log(response.data.data);
        }
      } catch (err) {
        console.log("Error fetching data: ", err);
      }
    };

    getAppointmentDetail();
  }, []);

  const filteredItem = tableContent?.filter((data) => {

    const searchData = docSearch
      ? data.doc_name?.toLowerCase().includes(docSearch.toLowerCase())
      : true  

      const searchCLinic = docSearch
      ? data.Clinic?.toLowerCase().includes(docSearch.toLowerCase())
      : true;
      return searchData || searchCLinic;
  });

  const DocImg = () => {
    return (
      <div>
        <div>
          <img
            className="doc-docimage ms-1"
            src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ width: "40px", height: "40px" }}
          ></img>
        </div>
      </div>
    );
  };

  const RefreshIcons = ({ user }) => {
    return (
      <div className="refresh-icons-container justify-content-center">
        <div>
          <button
            onClick={() => handlenavigate(user)}
            className="registerpatient-table-update-button"
          >
            More Details
          </button>
        </div>
      </div>
    );
  };
  // console.log(...tableHeader);

  return (
    <Table responsive>
      <thead>
        <tr>
          {filteredItem &&
            filteredItem.length > 0 &&
            Object.keys(filteredItem[0]).map((key, index) =>
              key !== "clinic_id" &&
              key !== "doc_dob" &&
              key !== "doc_experience" &&
              key !== "doc_group" &&
              key !== "doc_fee" &&
              key !== "doc_achievement" &&
              key !== "doc_education" &&
              key !== "doc_days" &&
              key !== "timeslot_id" &&
              key !== "day_name" &&
              key !== "doctorTiming" &&
              key !== "end_time" 
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
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredItem?.map((element, rowIndex) => {
          return (
            <tr className="patienttable-body-row-container">
              {Object.keys(element).map((rowData, cellIndex) => {
                if (
                  rowData === "clinic_id" ||
                  rowData === "doc_dob" ||
                  rowData === "doc_experience" ||
                  rowData === "doc_group" ||
                  rowData === "doc_fee" ||
                  rowData === "doc_achievement" ||
                  rowData === "doc_education" ||
                  rowData === "doc_days" ||
                  rowData === "timeslot_id" ||
                  rowData === "day_name" ||
                  rowData === "doctorTiming" ||
                  rowData === "end_time" 
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
  );
}
