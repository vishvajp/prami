import { createContext, useState, useEffect } from "react";
import axios from "axios";
const UserDataContext = createContext({});


export const DataProvider = ({children})=>{

    const baseUrl = "https://tabsquareinfotech.com/TSIT_Clients/vprami"
    const [selectedButton, setSelectedButton] = useState(0);
  const [selectedBtnName, setSelectedBtnName] = useState("CLINIC");
    const apiBaseUrl = "https://cvmvreddystrust.com/App/tsitClient2024/prami/public/api/"
   


    // To get clinic name

    

    return(
        <UserDataContext.Provider
        value={{baseUrl,selectedButton,setSelectedButton,selectedBtnName,setSelectedBtnName,apiBaseUrl}}
        >
            {children}
        </UserDataContext.Provider>
    )
}

export default UserDataContext;