import React from "react";
import { FaRegEdit, FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { useState } from "react";
const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const countryCodes = [
    { code: "+91", name: "India" },
    { code: "+1", name: "USA" },
    { code: "+44", name: "UK" },
    // Add more countries as needed
  ];

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0].code);
  const [phone, setPhone] = useState("");
  return (
    <div>
      <div className="d-flex justify-content-center">
        <p className=" col doctor-profile text-end">Doctor Profile </p>
        <div className="col text-end ">
          <p className="mb-0 ">
            <button className="profile-edit-button me-4 ">
              Edit <FaRegEdit className="ms-1 profile-edit-icon" />
            </button>
          </p>
        </div>
      </div>

      <div className="  profile-container bg">
        <div className="d-flex  profile-red-container align-items-center">
          <img
            className=" profile-doc-image m-2"
            src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ width: "80px", height: "80px" }}
          ></img>
          <div className="profile-doc-plus-icon">
            <FaPencil />
          </div>

          <div className="profile-docname-div ms-2 d-flex flex-column justify-content-center ">
            <p className="text-white profile-doc-name">Dr. Karunakaran S</p>
            <p className="text-warning profile-doc-designation mb-0">
              spine Surgeon
            </p>
            <div>
              <span className="profile-specialist-text">Specialist :</span>
              <span className="profile-specialist-designation">
                 Pediatrics
              </span>{" "}
            </div>
          </div>
          <div className="profile-vertical-line"></div>
          <div className="profile-experience ms-2 ">
            <p className="text-white mt-4 profile-doc-experience">Experience</p>
            <span className="text-warning profile-doc-designation">
              28Year(s)
            </span>
          </div>
          <div className="profile-vertical-line "></div>
          <div className="profile-medical-registration ms-2 ">
            <p className="text-white mt-3 profile-doc-experience">Medical</p>
            <p className="profile-doc-registration">Registration No</p>
            <span className="text-warning profile-doc-designation mb-5">
              000005b
            </span>
          </div>
        </div>
        <div className="d-flex profile-details-div">
          <div className="col profile-detail-1col">
            <div className="d-flex flex-column ">
              <label className="profile-input-label">E Mail ID</label>
              <input
                className="profile-input"
                type="email"
                placeholder="Karunakaran@gmail.com"
              />
            </div>
            <div className="d-flex flex-column ">
              <label className="profile-input-label">Date Of Birth</label>
              <input
                className="profile-input"
                type="text"
                placeholder="20.12.1981"
              />
            </div>
            <div className="d-flex flex-column ">
              <label className="profile-input-label">Location</label>
              <input
                className="profile-input"
                type="text"
                placeholder="Adayar,Chennai"
              />
            </div>
            <div className="d-flex flex-column">
              <label className="profile-input-label">Password</label>
              <div className="input-wrapper-profile">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="**********"
                  className="profile-input me-0"
                />
                <span className="icon" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
              </div>
            </div>
          </div>
          <div className="col profile-detail-2col">
            <div className="d-flex flex-column">
              <label className="profile-input-label">Mobile No</label>
              <div className="input-wrapper-profile">
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="country-selector"
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.code}
                    </option>
                  ))}
                </select>
                <input
                  //   className="profile-input"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            <div className="d-flex flex-column ">
              <label className="profile-input-label" for="Education">
                Education
              </label>
              <select name="Education" id="education">
                <option value="volvo">M.B.B.S, Md,</option>
                <option value="saab">""</option>
                <option value="opel">""</option>
                <option value="audi">""</option>
              </select>
            </div>
            <div className="d-flex flex-column ">
              <label className="profile-input-label" for="Clinic">
                Clinic Name
              </label>
              <select name="clinic" id="clinic">
                <option value="volvo">Spine Clinics</option>
                <option value="saab">""</option>
                <option value="opel">""</option>
                <option value="audi">""</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
