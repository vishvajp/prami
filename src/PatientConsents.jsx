import React, { useState, useRef, useEffect } from "react";
import { FaNotesMedical } from "react-icons/fa";
import "./PatientConsent.css";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

const PatientConsents = () => {
  const [consentFormName, setConsentFormName] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectFile, setSelectFile] = useState(null);
  const [filename, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const handleSubmit = () => {
    const file = fileInputRef.current.files[0];
    if (consentFormName && file) {
      const newFile = {
        name: consentFormName,
        file: file,
      };
      setUploadedFiles([...uploadedFiles, newFile]);
      setConsentFormName("");
      fileInputRef.current.value = ""; // Reset the file input
    }
  };

  const handlefileChange = (e) => {
    const selectedFileName = e.target.value;
    setFileName(selectedFileName);

    const file = uploadedFiles.find((fi) => fi.name === selectedFileName);
    if (file) {
      setSelectFile(file); // Set the entire file object to `selectFile`
    } else {
      setSelectFile(null); // Clear the selected file if not found
    }
  };

  const handlePrint = () => {
    if (selectFile) {
      const fileUrl = window.URL.createObjectURL(selectFile.file);
      const printWindow = window.open(fileUrl);
      printWindow.onload = function () {
        printWindow.print();
      };
    }
  };

  useEffect(() => {
    console.log(filename, selectFile);
  }, [filename, selectFile]);

  return (
    <div className="bg">
      <div className="d-flex pastrecords-header-div">
        {/* Header content omitted for brevity */}
      </div>
      <div className="d-flex justify-content-center medicalhistory-3rd-div gap-2">
        <span className="mt-2">Consent Forms</span>
        <span className="mt-2">Upload Signed Consent Forms</span>
        <span className="mt-2">Signed Consent Forms</span>
      </div>
      <div className="patient-consent-main-div">
        <div className="row">
          <div className="col d-flex flex-column gap-3">
            <div className="d-flex flex-column">
              <label className="consent-lable-text">Consent Form Name</label>
              <input
                type="text"
                className="consent-input-field"
                value={consentFormName}
                onChange={(e) => setConsentFormName(e.target.value)}
              />
            </div>
            <input
              ref={fileInputRef}
              type="file"
              className="choosefile-input"
            />
            <div>
              <button className="consent-submit-button" onClick={handleSubmit}>
                SUBMIT
              </button>
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-column">
              <label className="consent-lable-text">Choose Form</label>
              <select
                onChange={handlefileChange}
                className="consent-input-field"
              >
                <option value="">Select a form</option>
                {uploadedFiles.map((file, index) => (
                  <option key={index} value={file.name}>
                    {file.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p className="consent-preview-text">Preview Consent Form</p>
              <div>
                {selectFile && (
                  <DocViewer
                    key={window.URL.createObjectURL(selectFile.file)}
                    documents={[
                      {
                        uri: window.URL.createObjectURL(selectFile.file),
                        fileName: filename,
                      },
                    ]}
                    pluginRenderers={DocViewerRenderers}
                  />
                )}
              </div>
            </div>
            <div className="d-flex justify-content-end gap-2">
              <button className="consent-print-button" onClick={handlePrint}>PRINT</button>
              <button className="consent-submit-button">DELETE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientConsents;
