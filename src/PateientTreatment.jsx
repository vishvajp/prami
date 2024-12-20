import React, { useEffect } from "react";
import { useState } from "react";
import "./PatientTreatment.css";
import { FaNotesMedical } from "react-icons/fa";

import { MdOutlineNoteAlt } from "react-icons/md";
import PatientTreatmentTable from "./PatientTreatmentTable";

const PateientTreatment = () => {
  const [morningRadio, setMorningRadio] = useState(false);
  const [afternoonRadio, setAfternoonRadio] = useState(false);
  const [eveningRadio, setEveningRadio] = useState(false);
  const [nightRadio, setNightRadio] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectMeals, setSelectMeals] = useState("Before Meal");
  const [genricName, setGenricName] = useState("");
  const [medicineType, setMedicineType] = useState("");
  const [morningDosage, setMorningDosage] = useState("");
  const [afternoonDosage, setAfternoonDosage] = useState("");
  const [eveningDosage, setEveningDosage] = useState("");
  const [nightDosage, setNightDosage] = useState("");
  const [duration, setDuration] = useState("");
  const [medicineName, setMedicineName] = useState("");
  const [notes, setNotes] = useState("");
  // const [pageCount, setPageCount]=useState(1)
  const [medicineDetail, setMedicineDetail] = useState([]);

  // const medicinePerPage = 1

  // const lastMedicine = pageCount * medicinePerPage;
  // const firstMedicine = lastMedicine - medicinePerPage;

  // const medicintToShow = medicineDetail.slice(firstMedicine, lastMedicine);
  // const totalPages = Math.ceil(medicineDetail.length / medicinePerPage);


  const handleSelectMeals = (e) => {
    const newSelectedMeals = e.target.innerText;
    setSelectMeals(newSelectedMeals);
  };

  const totaltab = () => {
    const daysMultiplier =
      selectedTime === "Days" ? 1 : selectedTime === "Weeks" ? 7 : 30;

    if (medicineType === "Tablet") {
      const totaltabPerday =
        Number(morningDosage) +
        Number(afternoonDosage) +
        Number(eveningDosage) +
        Number(nightDosage);

      const totalDosage = totaltabPerday * daysMultiplier * duration;

      return totalDosage;
    }

    return 0; // Return 0 or any other default value if the condition is not met
  };

  const handleMedicineshow = () => {
    if (!medicineName || !medicineType || !duration) {
      alert("Please fill in all required fields before adding the medicine.");
      return;
    }

    const dosage = [
      morningRadio ? `${morningDosage} Morn` : null,
      afternoonRadio ? `${afternoonDosage} Aft` : null,
      eveningRadio ? `${eveningDosage} Eve` : null,
      nightRadio ? `${nightDosage} Night` : null,
    ]
      .filter(Boolean) // Remove null values
      .join(', '); // Join the strings

      const durationString = `${duration} ${selectedTime} (Tot: ${totaltab()} Tab)`;

      const newMedicineData = {
        medicineName: medicineName,
        dosage: dosage,
        duration: durationString,
        notes: notes,
      };


    const fullMedicine = [...medicineDetail, newMedicineData];
setMedicineDetail(fullMedicine)

    // setPageCount(totalPages + 1);
    localStorage.setItem("meicine_detail", JSON.stringify(fullMedicine));

    setGenricName("");
    setMorningDosage("");
    setAfternoonDosage("");
    setEveningDosage("");
    setNightDosage("");
    setSelectMeals("Before Meal");
    setMedicineType("");
    setMorningRadio(false);
    setAfternoonRadio(false);
    setEveningRadio(false);
    setNightRadio(false);
    setDuration("");
    setMedicineName("");
    setNotes("");
  };

  return (
    <div className="bg">
      <div className="d-flex pastrecords-header-div">
        <div
          className="d-flex pastrecords-monica"
          style={{ margin: "4px 0px" }}
        >
          <img
            className="docimage ms-2 me-2"
            src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ width: "45px", height: "45px" }}
          ></img>
          <div style={{ padding: "0px 18px 0px 0px" }}>
            <p className="mb-0 pastrecords-header-name">Monica</p>
            <p className="mb-0 pastrecords-header-age">24 Year - Female</p>
          </div>
        </div>
        <div
          className="d-flex align-items-center bg-white "
          style={{ height: "63px" }}
        >
          <div className="me-4 ms-4 pastrecord-contact-patient">
            <p className="mb-0">Contact No:</p>
            <p className="mb-0 pastrecords-phone-id">944445 58756</p>
          </div>
          <div className="docdetail-days-vertical-line me-4"></div>
          <div className="me-4 pastrecord-contact-patient">
            <p className="mb-0">Patient ID:</p>
            <p className="mb-0 pastrecords-phone-id">UHID - 287</p>
          </div>
          <div className="d-flex gap-2 me-3 pastrecords-header-icons-div ">
            <FaNotesMedical className="pastrecods-header-icons " />
            <FaNotesMedical className="pastrecods-header-icons " />
            <FaNotesMedical className="pastrecods-header-icons " />
            <FaNotesMedical className="pastrecods-header-icons " />
          </div>
        </div>
        <div className="text-center ms-auto me-4">
          <p className="mb-0">Consulting Time</p>
          <p className="mb-0 pastrecords-timer">00 : 00 : 00</p>
        </div>
      </div>

      <div className="d-flex  justify-content-center medicalhistory-3rd-div  gap-2 ">
        <span className="mt-2">Perscription</span>
        <span className="mt-2">Treatment</span>
      </div>
      <div className="patientnotes-main-div">
        <div className="row">
          <div className=" col-4 d-flex flex-column labtest-first-col gap-2">
            {" "}
            <div className="d-flex flex-column   ">
              <div>
                <select
                  name="Education"
                  id="patientdesignation"
                  value={medicineName}
                  onChange={(e) => setMedicineName(e.target.value)}
                >
                  <option></option>
                  <option>Paracetomol</option>
                  <option>Novomax</option>
                  <option>Dolo 650</option>
                </select>
              </div>
              <div className="d-flex align-items-center mt-1">
                <label className=" ms-3 me-2">(or) Search by typing</label>
                <input type="radio" className="patienttreatment-radio"></input>
                <label className="me-4">Medicine Name</label>
                <input type="radio" className="patienttreatment-radio"></input>
                <label>Genric Name</label>
              </div>
            </div>
            <div className="d-flex flex-column  ">
              <label className="medicalhistory-input-label ms-3 me-2">
                Type Medicine Name
              </label>
              <div>
                <input
                  required
                  onChange={(e) => {
                    setMedicineName(e.target.value);
                  }}
                  value={medicineName}
                  className="labtest-1stcol-input"
                  type="text"
                />
              </div>
            </div>
            <div className="d-flex">
              <div className="d-flex flex-column  ">
                <label className="medicalhistory-input-label ms-3 me-2">
                  Generic Name
                </label>
                <div>
                  <input
                    className="patienttreatment-1stcol-smallinput"
                    type="text"
                    onChange={(e) => {
                      setGenricName(e.target.value);
                    }}
                    value={genricName}
                  />
                </div>
              </div>
              <div className="d-flex flex-column  ">
                <label className="medicalhistory-input-label ms-3">
                  Select Medicine Type
                </label>
                <div>
                  <select
                    value={medicineType}
                    onChange={(e) => {
                      setMedicineType(e.target.value);
                    }}
                    name="Education"
                    id="patienttreatment"
                  >
                    <option></option>
                    <option>Tablet</option>
                    <option>Cyrup</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex   ">
                <div className="d-flex flex-column   ">
                  <div>
                    <label className="medicalhistory-input-label ms-3 me-2">
                      Duration
                    </label>
                    <div>
                      <input
                        className="patienttreatment-1stcol-toosmallinput"
                        type="text"
                        value={duration}
                        onChange={(e) => {
                          setDuration(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="d-flex flex-column">
                  <label className="medicalhistory-input-label">Dosage</label>
                  <input
                    type="text"
                    className="patienttreatment-1stcol-toosmallinput"
                    value={dosage}
                    onChange={(e) => {
                      setDosage(e.target.value);
                    }}
                  ></input>
                </div> */}

                <div className="d-flex align-items-end">
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    id="patienttreatment"
                  >
                    <option></option>
                    <option>Days</option>
                    <option>Weeks</option>
                    <option>Months</option>
                  </select>
                </div>
              </div>
            </div>
            <div
              className="d-flex justify-content-center"
              style={{ marginLeft: "30px" }}
            >
              <span className="patientTreatment-dosage-span">Dosage</span>
            </div>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center ">
                <div>
                  <input
                    type="radio"
                    checked={morningRadio}
                    onClick={() => setMorningRadio(!morningRadio)}
                  ></input>
                  <lable className="patient-treatment-days-label">
                    Morning
                  </lable>
                </div>
                <div style={{ marginLeft: "20px" }}>
                  <input
                    className="patienttreatment-1stcol-toosmallinput"
                    type="text"
                    value={morningDosage}
                    onChange={(e) => setMorningDosage(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="d-flex align-items-center ">
                <div>
                  <input
                    type="radio"
                    checked={afternoonRadio}
                    onClick={() => setAfternoonRadio(!afternoonRadio)}
                  ></input>
                  <lable className="patient-treatment-days-label">
                    Afternoon
                  </lable>
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <input
                    className="patienttreatment-1stcol-toosmallinput"
                    type="text"
                    value={afternoonDosage}
                    onChange={(e) => setAfternoonDosage(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="d-flex align-items-center ">
                <div>
                  <input
                    type="radio"
                    checked={eveningRadio}
                    onClick={() => setEveningRadio(!eveningRadio)}
                  ></input>
                  <lable className="patient-treatment-days-label">
                    Evening
                  </lable>
                </div>
                <div style={{ marginLeft: "24px" }}>
                  <input
                    className="patienttreatment-1stcol-toosmallinput"
                    type="text"
                    value={eveningDosage}
                    onChange={(e) => setEveningDosage(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <input
                    type="radio"
                    checked={nightRadio}
                    onClick={() => setNightRadio(!nightRadio)}
                  ></input>

                  <lable className="patient-treatment-days-label">Night</lable>
                </div>
                <div style={{ marginLeft: "37px" }}>
                  <input
                    className="patienttreatment-1stcol-toosmallinput"
                    type="text"
                    value={nightDosage}
                    onChange={(e) => setNightDosage(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>
            <div className="d-flex patienttreatment-meal align-items-center mt-2">
              <span
                style={{
                  color: selectMeals === "Before Meal" ? "white" : "black",
                  backgroundColor:
                    selectMeals === "Before Meal" ? "green" : "gray",
                }}
                onClick={handleSelectMeals}
              >
                Before Meal
              </span>
              <span
                style={{
                  color: selectMeals === "After Meal" ? "white" : "black",
                  backgroundColor:
                    selectMeals === "After Meal" ? "green" : "gray",
                }}
                onClick={handleSelectMeals}
              >
                After Meal
              </span>
            </div>
            <div className="d-flex flex-column  ">
              <label className="medicalhistory-input-label ms-3 me-2">
                Notes
              </label>
              <div>
                <input
                  value={notes}
                  onChange={(e) => {
                    setNotes(e.target.value);
                  }}
                  className="labtest-1stcol-input"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className=" col d-flex flex-column labtest-2ndcol-outer">
            {" "}
            <div className="patientTreatment-2nd-col">
              {medicineDetail.length === 0 && (
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex w-75 mb-1">
                    Search & Add medicines, duration, dosage information,
                    additional notes and click "Add Medicine". Added medicine
                    will appear here.
                  </div>
                  <div className="d-flex justify-content-center">
                    Medicines are dropped here
                  </div>

                  <MdOutlineNoteAlt className="pastrecords-main-div-notes" />
                </div>
              )}

              {medicineDetail.length > 0 && (
                <div>
                  <PatientTreatmentTable medicineDetail={medicineDetail} />
                </div>
              )}
            </div>
          </div>
        </div>
        {/* <div className="d-flex justify-content-end gap-3">
                <button onClick={() => pageCount > 1 && setPageCount(pageCount - 1)} className="patientTreatment-next-prev-btn">Prev</button>
                <button onClick={()=>( pageCount <totalPages ? setPageCount(pageCount + 1): 1)} className="patientTreatment-next-prev-btn">Next</button>
              </div> */}
      </div>
      <div className="d-flex ms-5 my-3 patienttreatment-buttons">
        <button
          onClick={handleMedicineshow}
          className="patienttest-addtest-button"
        >
          Add Medicine
        </button>

        <button className="patienttreatment-next-button  ">NEXT</button>
      </div>
    </div>
  );
};

export default PateientTreatment;
