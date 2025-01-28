import { createContext, useState, useEffect } from "react";
import axios from "axios";
const UserDataContext = createContext({});

export const DataProvider = ({ children }) => {
  const baseUrl = "https://tabsquareinfotech.com/TSIT_Clients/saaluvar";
  const [selectedButton, setSelectedButton] = useState(0);
  const [selectedBtnName, setSelectedBtnName] = useState("CLINIC");
  const [refreshAppointments, setRefreshAppointments] = useState(false);
  const [addLab, setAddLab] = useState();

  const [mediFormData, setMediFormData] = useState({
    visitReason: "",
    registeredPatient: "",
    sufferedConditions: [],
    relativeConditions: [],
    hadSurgery: "",
    hasInjuries: "",
    hasAny: "",
    hasAnyBrief: "",
    durationNum: 1,
    durationDays: "Days",
    severNum: 1,
    severDays: "Days",
    bowel: "",
    micturation: "",
    painStart: "",
    aggravating: "",
    relieving: "",
    cervical_flexion_full: "",
    cervical_flexion_pain: "",
    cervical_extension_full: "",
    cervical_extension_pain: "",
    cervical_rotation_full: "",
    cervical_rotation_pain: "",
    cervical_side_flex_full: "",
    cervical_side_flex_pain: "",
    lumbo_flexion_full: "",
    lumbo_flexion_pain: "",
    lumbo_extension_full: "",
    lumbo_extension_pain: "",
    lumbo_rotation_full: "",
    lumbo_rotation_pain: "",
    lumbo_side_flex_full: "",
    lumbo_side_flex_pain: "",
    stand_toes_single: "",
    walk_on_heel: "",
    walk_on_heel_right: "",
    walk_on_heel_left: "",
    walk_on_toes: "",
    walk_on_toes_right: "",
    walk_on_toes_left: "",
    sensation: "",
    sensation_type: "",
    power: "",
    knee_jerk: "",
    tone: "",
    ankle_jerk: "",
    reflexes: "",
    tibialis_posterior_reflex: "",
    biceps_jerk: "",
    slr: "",
    supinator_jerk: "",
    pheripheral_pulse: "",
    triceps_jerk: "",
    special_test: "",
  });

  const handleMediHisInputChange = (e) => {
    const { name, value } = e.target;
    setMediFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const apiBaseUrl =
  //   "https://cvmvreddystrust.com/App/tsitClient2024/prami/public/api/";

  const apiBaseUrl = "https://saaluvar.com/Backend/prami/public/api/"

  // To get clinic name

  return (
    <UserDataContext.Provider
      value={{
        baseUrl,
        selectedButton,
        setSelectedButton,
        selectedBtnName,
        setSelectedBtnName,
        apiBaseUrl,
        refreshAppointments,
        setRefreshAppointments,
        addLab,
        setAddLab,
        mediFormData,
        setMediFormData,
        handleMediHisInputChange,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContext;
