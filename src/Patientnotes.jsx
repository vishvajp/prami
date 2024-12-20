import React, { useState, useEffect, useRef } from "react";
import "./Patientnotes.css";
import { FaNotesMedical } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { MdOutlineNoteAlt } from "react-icons/md";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const Patientnotes = () => {
  const {
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    transcript: rawTranscript
  } = useSpeechRecognition();

  // State to hold the manual input and speech recognition transcript
  const [manualInput, setManualInput] = useState("");
  const [speechInput, setSpeechInput] = useState("");
  

  // Effect to update the speech input when new speech recognition transcript is available
  useEffect(() => {
    if (!listening) { // Only update if not listening
      setSpeechInput((prev) => prev + ' ' + rawTranscript); // Append new transcript
    }
  }, [rawTranscript, listening]);

  // Effect to set the combined transcript to the manual input when speech is not being recognized
  useEffect(() => {
    if (!listening) {
      setManualInput(speechInput); // Update manual input with the speech input
    }
  }, [speechInput, listening]);

  const handleManualInputChange = (e) => {
    setManualInput(e.target.value); // Update manual input
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }


  return (
    <div className="bg">
      <div className="d-flex pastrecords-header-div">
        <div className="d-flex pastrecords-monica" style={{ margin: "4px 0px" }}>
          <img
            className="docimage ms-2 me-2"
            src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ width: "45px", height: "45px" }}
            alt="Doctor"
          />
          <div style={{ padding: "0px 18px 0px 0px" }}>
            <p className="mb-0 pastrecords-header-name">Monica</p>
            <p className="mb-0 pastrecords-header-age">24 Year - Female</p>
          </div>
        </div>
        <div className="d-flex align-items-center bg-white" style={{ height: "63px" }}>
          <div className="me-4 ms-4 pastrecord-contact-patient">
            <p className="mb-0">Contact No:</p>
            <p className="mb-0 pastrecords-phone-id">944445 58756</p>
          </div>
          <div className="docdetail-days-vertical-line me-4"></div>
          <div className="me-4 pastrecord-contact-patient">
            <p className="mb-0">Patient ID:</p>
            <p className="mb-0 pastrecords-phone-id">UHID - 287</p>
          </div>
          <div className="d-flex gap-2 me-3 pastrecords-header-icons-div">
            <FaNotesMedical className="pastrecods-header-icons" />
            <FaNotesMedical className="pastrecods-header-icons" />
            <FaNotesMedical className="pastrecods-header-icons" />
            <FaNotesMedical className="pastrecods-header-icons" />
          </div>
        </div>
        <div className="text-center ms-auto me-4">
          <p className="mb-0">Consulting Time</p>
          <p className="mb-0 pastrecords-timer">00 : 00 : 00</p>
        </div>
      </div>

      <div className="d-flex justify-content-center medicalhistory-3rd-div mt-2 gap-2">
        <span>Notes</span>
        <span> Files</span>
      </div>
      <div className="patientnotes-main-div">
        <div className="row">
          <div className="col d-flex flex-column gap-4 ps-5 pt-5">
            <div className="d-flex flex-column me-5 patientnotes-input-label-div ">
              <label className="medicalhistory-input-label">Observation</label>
              <div>
                <input className="patientnotes-1stcol-input" type="text" />
                <FaCirclePlus className="medicalhistory-2nddiv-plus" />
              </div>
            </div>
            <div className="d-flex flex-column me-5 patientnotes-input-label-div ">
              <label className="medicalhistory-input-label">Notes</label>
              <div>
                <input className="patientnotes-1stcol-input" type="text" />
                <FaCirclePlus className="medicalhistory-2nddiv-plus" />
              </div>
            </div>
            <div className="d-flex flex-column me-5 patientnotes-input-label-div ">
              <label className="medicalhistory-input-label">Diagnosis Notes</label>
              <div>
                <input className="patientnotes-1stcol-input" type="text" />
                <FaCirclePlus className="medicalhistory-2nddiv-plus" />
              </div>
            </div>
            <div className="d-flex flex-column me-5 patientnotes-input-label-div ">
              <div>
                <label className="medicalhistory-input-label">Doctor Notes (Visible to Doctors Only)</label>
                <div className="d-flex">
                  <input
                    className="patientnotes-1stcol-lastinput"
                    type="text"
                    value={manualInput} // Bind the manual input value
                    onChange={handleManualInputChange} // Update on change
                  />
                  <FaCirclePlus className="medicalhistory-2nddiv-plus" />
                </div>
              </div>
            </div>
            <div>
              <p>Microphone: {listening ? 'on' : 'off'}</p>
              <div className="d-flex gap-2">
              <button className="patientnotes-voice-start-button" onClick={SpeechRecognition.startListening}>Start</button>
              <button className="patientnotes-voice-stop-button" onClick={SpeechRecognition.stopListening}>Stop</button>
              <button className="patientnotes-voice-reset-button" onClick={()=>{setManualInput("")
                setSpeechInput("")
              }}>Reset</button>
            </div>
            </div>
          </div>
          <div className="col d-flex flex-column p-4 ">
            <div className="d-flex justify-content-center medicalhistory-3rd-div mt-2 gap-2 mb-3">
              <span>Observations List</span>
              <span> Diagnosis List</span>
            </div>
            <div className="patientnotes-2nd-col">
              <div className="patientnotes-search-bar">
                <span className="patientnotes-search-icon">
                  <FaSearch />
                </span>
                <input type="text" className="patientnotes-search-input" />
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center patientnotes-col2-main-div">
                <MdOutlineNoteAlt className="pastrecords-main-div-notes" />
                <div className="patient-notes-2nd-col-content">
                  There are no Observations templates Available. They can be added in the setting page.
                </div>
                <a href="">Click Here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-end m-4">
        <button className="medicalhistory-nex-button">NEXT</button>
      </div>
    </div>
  );
};

export default Patientnotes;