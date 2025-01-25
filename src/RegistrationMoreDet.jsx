import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import docimg from "./img/Doc.png";
import "./RegistrationMoreDet.css";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import UserDataContext from "./Context/UserDataContext";
import axios from "axios";

const RegistrationMoreDet = () => {
  const { apiBaseUrl } = useContext(UserDataContext);
  const navToRegistrationEdit = useNavigate();
  const location = useLocation();
  const singlePatient = location.state;
  const images = [docimg, docimg, docimg, docimg];
  const singleData = singlePatient?.element;
  const [docTrue, setDocTrue] = useState(false);
  const [clinicData, setClinicData] = useState(null);
  const [clinic, setClinic] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [singleDocName, setSingleDocName] = useState("");
  // const user = "physiotherapy";
  const navigate = useNavigate();
  const [addRegDate, setAddRegDate] = useState(null);
  const patientId = singleData.patient_id;
  const [loading, setLoading] = useState(false);
  const [addDocPresc, setAddDocPresc] = useState({
    patientRegistrationDate: "",
    doctor_id: [],
    doctorPrescription: [],
  });

  // console.log(addDocPresc);
  const handleCliniChange = (e) => {
    const singleClinicName = e.target.value;
    setClinicName(singleClinicName);
    const selectedClinic = clinicData?.find(
      (clinic) => clinic.clinic_name === singleClinicName
    );
    setClinic(selectedClinic?.clinic_id);
  };

  useEffect(() => {
    const getClinicData = async () => {
      try {
        const response = await axios.post(`${apiBaseUrl}get_clinic_list`);
        if (response.data) {
          setClinicData(response.data.data);
          console.log(clinicData);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getClinicData();
  }, [apiBaseUrl]);

  useEffect(() => {
    if (clinic) {
      const getDocData = async () => {
        try {
          const response = await axios.post(
            `${apiBaseUrl}get_doctor/${clinic}`
          );
          if (response.data) {
            setDoctorData(response.data.data);
            console.log(response.data);
          }
        } catch (err) {
          console.log(err);
        }
      };
      getDocData();
    }
  }, [clinic]);

  // Doctor Id Choosing function

  const handleDoctorChange = (event) => {
    const specDocName = event.target.value;
    setSingleDocName(specDocName);
    const getDocId = doctorData?.find(
      (docname) => docname.doc_name === specDocName
    );
    const docId = getDocId?.doctor_id;
    // const idLength = singleData.doctor_id.length;
    // console.log(docId)
    setAddDocPresc((prevData) => ({ ...prevData, doctor_id: [docId] }));
    console.log(addDocPresc);
  };

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => {
    const formattedDate =
      value && !isNaN(new Date(value))
        ? format(new Date(value), "dd/MM/yyyy")
        : "DD/MM/YYYY";

    return (
      <button
        ref={ref}
        type="button"
        className="patientBooking-date-input"
        onClick={onClick}
      >
        {formattedDate} <FaCalendarAlt className="homepage-date-icon" />
      </button>
    );
  });

  const handleAddDateChange = (specDate, date) => {
    if (isNaN(new Date(date))) return; // Ignore invalid dates

    const selectedDate = new Date(date);

    const formatDate = selectedDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    // setAddRegDate(formatDate);

    // const newRegDate = formatDate;

    // const DateLength = singleData.patientRegistrationDate.length;

    setAddDocPresc((prevFormData) => ({
      ...prevFormData,
      [specDate]:
        specDate === "patientRegistrationDate" ? [formatDate] : formatDate,

      // const updatedDate = [...prevFormData.patientRegistrationDate];
      // updatedDate[DateLength] = newRegDate;
      // return {
      //   ...prevFormData,
      //   patientRegistrationDate: updatedDate,
      // };3
      // ...prevFormData,
      // [specDate]: specDate === "patientRegistrationDate"
      //   ? [...(prevFormData[specDate] || []), formatDate]
      //   : formatDate,
    }));
  };

  const handlePresImage = (e) => {
    const reader = Array.from(e.target.files);
    // const imgLength = singleData.doctorPrescription.length;
    // setAddDocPresc((prevData) => {
    //   const updatedImg = [...prevData.doctorPrescription];
    //   updatedImg[imgLength] = reader;
    //   return {
    //     ...prevData,
    //     doctorPrescription: updatedImg,
    //   };
    // });
    //  ({ ...prevData, doctorPrescription: reader}));
    setAddDocPresc((prevData) => ({
      ...prevData,
      doctorPrescription: [reader],
    }));
  };

  const handleSub = async (e) => {
    e.preventDefault();
    console.log(addDocPresc);
    if (loading) return;
    setLoading(true);

    if (!addDocPresc.patientRegistrationDate) {
      alert("Please select a registration date");
      return;
    }

    const data = new FormData();
    for (const key in addDocPresc) {
      if (key == "doctorPrescription") {
        addDocPresc[key].forEach((img, index) => {
          img.forEach((sinImg, SinIndex) => {
            data.append(`doctorPrescription[${index}][${SinIndex}]`, sinImg);
          });
        });
      } else if (key == "patientRegistrationDate") {
        addDocPresc[key].forEach((RegDate, index) => {
          data.append(`patientRegistrationDate[${index}]`, RegDate);
        });
      } else if (key == "doctor_id") {
        addDocPresc[key].forEach((doc, index) => {
          data.append(`doctor_id[${index}]`, doc);
        });
      } else {
        data.append(key, addDocPresc[key]);
      }
    }
    for (let pair of data.entries()) {
      console.log(pair[0], pair[1]);
    }
    try {
      const response = await axios.post(
        `https://saaluvar.com/Backend/prami/public/api/updatePatientPrescription/${patientId}`,
        data
      );
      if (response.data) {
        alert(response.data.message);
        navigate("/home/registration");
      }
    } catch (error) {
      alert(error.response.data.message);
      console.log(error.response.data.message);
    } finally {
      setLoading(false);
    }

    console.log(addDocPresc);
  };

  const handleAddPrescritption = () => {
    setDocTrue(!docTrue);
    if (!docTrue) {
      setAddDocPresc({
        patientRegistrationDate: singleData.patientRegistrationDate,
        doctor_id: singleData.doctor_id,
        doctorPrescription: singleData.doctorPrescription,
      });
      setClinic("");
      setClinicName("");
      setAddRegDate(null);
    }
  };

  const handleNavToRegistrationEdit = () => {
    console.log("game");
    navToRegistrationEdit("/home/register/edit", { state: { singleData } });
  };
  return (
    <div>
      <div className="doc-page-table">
        <div className="row">
          <div className="col text-end">
            {" "}
            <button
              onClick={handleNavToRegistrationEdit}
              className="profile-edit-button me-4"
            >
              Edit
            </button>
          </div>
        </div>
        <div className="row mb-3">
          <div className=" d-flex justify-content-center">
            {" "}
            <span className="doctor-more-det-title">
              Registration More Detail
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-center mb-3">
          <img
            className="moredet-patient-photo"
            src={singleData.patient_photo}
          ></img>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            {/* <lable className="medichistory-lable"> Registration Date</lable>
            <p className="medicalhistory-records-para">
              {singleData.prescriptions}
            </p> */}
             <lable className="medichistory-lable"> Name</lable>
            <p className="medicalhistory-records-para">
              {singleData.patient_name}
            </p>
          </div>
          <div className="d-flex flex-column col">
            {/* <lable className="medichistory-lable"> DOB</lable>
            <p className="medicalhistory-records-para">
              {singleData.patient_dob}
            </p> */}
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
          <lable className="medichistory-lable"> DOB</lable>
            <p className="medicalhistory-records-para">
              {singleData.patient_dob}
            </p>
            {/* <lable className="medichistory-lable"> Name</lable>
            <p className="medicalhistory-records-para">
              {singleData.patient_name}
            </p> */}
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Mobile</lable>
            <p className="medicalhistory-records-para">
              {singleData.patient_mobile}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Gender</lable>
            <p className="medicalhistory-records-para">
              {singleData.patient_gender}
            </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Occupation</lable>
            <p className="medicalhistory-records-para">
              {singleData.patient_occupation}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Marital Status</lable>
            <p className="medicalhistory-records-para">
              {singleData.patient_martial}
            </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Blood Group</lable>
            <p className="medicalhistory-records-para">
              {singleData.patient_bloodGroup}
            </p>
          </div>
        </div>

        <div className="row">
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Height</lable>
            <p className="medicalhistory-records-para">
              {singleData.patient_height}
            </p>
          </div>
          <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Weight</lable>
            <p className="medicalhistory-records-para">
              {singleData.patient_weight}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col-6">
            <lable className="medichistory-lable"> Location</lable>
            <p className="medicalhistory-records-para">
              {singleData.patient_location}
            </p>
          </div>
          <div className="d-flex flex-column col-6">
            {/* <lable className="medichistory-lable"> Marital Status</lable>
            <p className="medicalhistory-records-para">
              {singleData.maritalStatus}
            </p> */}
            <lable className="medichistory-lable"> Insurance</lable>
            <p className="medicalhistory-records-para">
              {singleData.patiient_insurred}
            </p>
          </div>
        </div>
        <div className="row">
          {/* <div className="d-flex flex-column col">
            <lable className="medichistory-lable"> Doctor</lable>
            <p className="medicalhistory-records-para">{singleData.doctor}</p>
          </div> */}
          <div className="d-flex flex-column col"></div>
        </div>
        <div>
          <div className="medicalhistory-records-para">
            {Object.keys(singleData.prescriptions).map((docKey) => {
              const doctor = singleData.prescriptions[docKey];
              return (
                <div key={docKey}>
                  <div className="mb-2 mt-1 d-flex justify-content-center" ><span className="moredet-docname">{doctor.doctor_name}</span></div>
                  <div className="row moredet-prescription-row">
                    {doctor.prescriptions?.map((prescription, index) => (
                      <div key={index} className="col-3 mb-3 moredet-prescription-col">
                        <h6 className="moreder-date-heading">Date: {prescription.date}</h6>
                        <img
                          src={prescription.prescription_path}
                          alt={`Prescription from ${doctor.doctor_name}`}
                          className="registerImg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="d-flex">
          <button
            onClick={handleAddPrescritption}
            className="moredet-addpresc-button mb-3 mt-3"
          >
            ADD PRESCRIPTION
          </button>
        </div>
        {docTrue && (
          <form onSubmit={handleSub}>
            <div className="row">
              <div className="col">
                <div className="d-flex flex-column">
                  <label className="registration-modal-label">
                    Registration Date
                  </label>
                  <DatePicker
                    selected={
                      addDocPresc.patientRegistrationDate
                        ? new Date(addDocPresc.patientRegistrationDate)
                        : null
                    }
                    onChange={(date) =>
                      handleAddDateChange("patientRegistrationDate", date)
                    }
                    customInput={<CustomInput />}
                    showYearDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={80}
                    scrollableMonthYearDropdown
                  />
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column">
                  <label className="patientbooking-input-label">
                    Select Clinic
                  </label>
                  <select
                    required
                    value={clinicName}
                    onChange={handleCliniChange}
                    className="patientbooking-patient-input"
                  >
                    <option value="">Select Clinic</option>
                    {clinicData ? (
                      clinicData.map((nameOfClinc, index) => (
                        <option key={index}>{nameOfClinc.clinic_name}</option>
                      ))
                    ) : (
                      <option disabled>Loading...</option>
                    )}
                  </select>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <div className="d-flex flex-column">
                  <label className="patientbooking-input-label ms-3">
                    Choose Doctor
                  </label>
                  <select
                    name="doctor"
                    value={singleDocName}
                    className="patientbooking-patient-input"
                    onChange={handleDoctorChange}
                    required
                  >
                    <option value="">Select doctor</option>
                    {doctorData && clinic ? (
                      doctorData.map((docname) => (
                        <option key={docname.doc_name}>
                          {docname.doc_name}
                        </option>
                      ))
                    ) : (
                      <option disabled>Loading...</option>
                    )}
                    {/* {clinicName && <option>{user}</option>} */}
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column">
                  <label className="registration-modal-label">
                    Doctor Prescription
                  </label>
                  <input
                    className="registration-modal-input p-0"
                    type="file"
                    name="doctorPrescription"
                    onChange={handlePresImage}
                    accept=".png, .jpg, .jpeg"
                    multiple
                  ></input>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="moredet-update-button mt-3 "
                type="submit"
                disabled={loading}
              >
                {loading ? "UPDATING..." : "UPDATE"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegistrationMoreDet;
