import React, { useState } from "react";
import "./LabTest.css";
import { FaNotesMedical } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import { MdOutlineNoteAlt } from "react-icons/md";

const LabTest = () => {
  const [selectedTestCat, setSelectedTestCat] = useState([]);
  const [selectedTestName, setSelectedTestName] = useState([]);
  const [selectedTestCatValues, setSelectedTestCatValues] = useState([]);

  const testCategories = [
    { category: "Iron Profile", key: "iron" },
    { category: "Thyroid Profile Test (T3,T4,UTSH)/ TFT", key: "thyroid" },
    { category: "Liver Function Test (LET)", key: "liver" },
    { category: "Lipid Profile Test", key: "lipid" },
    { category: "Renal / Kidney Function Test (RFT/KFT)", key: "renal" },
    { category: "CBC Test", key: "cbc" },
    { category: "Urine Routine Test", key: "urine" },
  ];

  const testName = {
    iron: ["iron1", "iron2", "iron3", "iron4", "iron5"],
    thyroid: ["thyroid1", "thyroid2", "thyroid3", "thyroid4"],
    liver: ["liver1", "liver2", "liver3", "liver4"],
    lipid: ["lipid1", "lipid2", "lipid3", "lipid4"],
    renal: ["renal1", "renal2", "renal3", "renal4"],
    cbc: ["cbc1", "cbc2", "cbc3", "cbc4"],
    urine: ["urine1", "urine2", "urine3", "urine4"],
  };

  const toggleCategory = (optionKey) => {
    const category = testCategories.find(
      (cat) => cat.key === optionKey
    )?.category;
    console.log(category);
    if (selectedTestCat.includes(optionKey)) {
      setSelectedTestCat(selectedTestCat.filter((key) => key !== optionKey));
      setSelectedTestCatValues(
        selectedTestCatValues.filter((value) => value !== category)
      );
    } else {
      setSelectedTestCat([...selectedTestCat, optionKey]);
      setSelectedTestCatValues([...selectedTestCatValues, category]);
    }

    setSelectedTestName([]); // Reset selected test names when categories change
  };

  const toggleTestName = (tename, categoryKey) => {
    if (tename === "ALL") {
      const allTestNamesForCategory = testName[categoryKey];
      if (
        allTestNamesForCategory.every((item) => selectedTestName.includes(item))
      ) {
        // If all test names for the category are already selected, deselect all
        setSelectedTestName(
          selectedTestName.filter(
            (item) => !allTestNamesForCategory.includes(item)
          )
        );
      } else {
        // Otherwise, select all
        setSelectedTestName([
          ...selectedTestName,
          ...allTestNamesForCategory.filter(
            (item) => !selectedTestName.includes(item)
          ),
        ]);
      }
    } else {
      if (selectedTestName.includes(tename)) {
        setSelectedTestName(selectedTestName.filter((item) => item !== tename));
      } else {
        setSelectedTestName([...selectedTestName, tename]);
      }
    }
  };

  const getTestNamesForSelectedCategories = () => {
    return selectedTestCat.reduce((acc, categoryKey) => {
      return [
        ...acc,
        { categoryKey, testNames: ["ALL", ...testName[categoryKey]] },
      ];
    }, []);
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

      <div className="d-flex justify-content-center medicalhistory-3rd-div gap-2">
        <span className="mt-2">Lab Test</span>
      </div>
      <div className="patientnotes-main-div">
        <div className="row">
          <div className="col d-flex flex-column gap-4 labtest-first-col">
            <div className="d-flex flex-column">
              <label className="medicalhistory-input-label">
                Lab Test Categories
              </label>
              <div>
                <Dropdown>
                  <Dropdown.Toggle id="labtest-drop-head">
                    Select Test Categories
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {testCategories.map((option, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={() => toggleCategory(option.key)}
                        active={selectedTestCat?.includes(option.key)}
                      >
                        {option.category}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>

            <div className="d-flex flex-column">
              <label className="medicalhistory-input-label">Test Name</label>
              <div>
                <Dropdown>
                  <Dropdown.Toggle id="labtest-drop-head">
                    Select Test Name
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {getTestNamesForSelectedCategories().map(
                      ({ categoryKey, testNames }) =>
                        testNames.map((tename, index) => (
                          <Dropdown.Item
                            key={`${categoryKey}-${index}`}
                            onClick={() => toggleTestName(tename, categoryKey)}
                            active={
                              tename === "ALL"
                                ? testName[categoryKey].every((name) =>
                                    selectedTestName.includes(name)
                                  )
                                : selectedTestName.includes(tename)
                            }
                          >
                            {tename === "ALL"
                              ? `ALL (${testName[categoryKey].length} tests)`
                              : tename}
                          </Dropdown.Item>
                        ))
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>

            <div className="d-flex flex-column   ">
              <div>
                <label className="medicalhistory-input-label">
                  Test Preparation Information
                </label>
                <div className="d-flex">
                  <input className="labtest-1stcol-lastinput" type="text" />
                </div>
              </div>
            </div>
            <div className="d-flex flex-column  ">
              <label className="medicalhistory-input-label">
                Additional Test Instruction
              </label>
              <div>
                <input className="labtest-1stcol-input" type="text" />
              </div>
            </div>
            <div className="d-flex justify-content-end  ">
              <button className="labtest-addtest-button">Add Test</button>
            </div>
          </div>
          <div className="col d-flex flex-column labtest-2ndcol-outer">
            <div className="labtest-2nd-col">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <MdOutlineNoteAlt className="pastrecords-main-div-notes" />
              </div>
              Search & Add Lab tests, lab test instructions and click{" "}
              <span className="fw-bold">"Add Test". </span>Added Lab test will
              appear here.
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

export default LabTest;
