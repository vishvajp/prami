import "./customTheme.scss";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppLayout from "./AppLayout";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import Patient from "./Patient";
import Preference from "./Preference";
import Login from "./Login";
// import Register from "./Register";
import Profile from "./Profile";
import Doctor from "./Doctor";
import Doctordetails from "./Doctordetails";
import AboutDoctor from "./AboutDoctor";
import Appointment from "./Appointment";
import ParameterModal from "./ParameterModal";
import Basicdetailmodal from "./Basicdetailmodal";
import SearchPatient from "./SearchPatient";
import PatientBooking from "./PatientBooking";
import PastRecords from "./PastRecords";
import MedicalHistory from "./MedicalHistory";
import Patientnotes from "./Patientnotes";
import LabTest from "./LabTest";
import PateientTreatment from "./PateientTreatment";
import PatientConsents from "./PatientConsents";
import PatientFurthercare from "./PatientFurthercare";
import ClinecsRegistration from "./ClinecsRegistration";
import Clinecs from "./Clinecs";
import Lab from "./Lab";
import LabRegistration from "./LabRegistration";
import Pharmacy from "./Pharmacy";
import PharmacyRegistration from "./PharmacyRegistration";
import BranchRegistration from "./BranchRegistration";
import AddNewDoctor from "./AddNewDoctor";
import Paymentmodal from "./Paymentmodal";
import IntroPage from "./IntroPage";
import DoctorFee from "./DoctorFee";
import AboutDoctorEdit from "./AboutDoctorEdit";
import AccessControl from "./AccessControl";
import AdminSetting from "./AdminSetting";
import AddProfileModal from "./AddProfileModal";
import { useEffect, useState } from "react";
import RegisterPatient from "./RegisterPatient";
import NotesImg from "./NotesImg";
import BillingPage from "./BillingPage";
import MedicineMaster from "./MedicineMaster";
import AddPhysiotherapy from "./AddPhysiotherapy";
import MenuLab from "./MenuLab";
import MenuLabTestStatsModal from "./MenuLabTestStatsModal";
import PhysioMaster from "./PhysioMaster";
import InventoryPage from "./InventoryPage";
import LabTestPage from "./LabTestPage";
import LabTestPatientMoreBut from "./LabTestPatientMoreBut";
import RegistrationPage from "./RegistrationPage";
import HomeCareItem from "./HomeCareItem";
import PatientTreatpage from "./PatientTreatpage";
import { DataProvider } from "./Context/UserDataContext";
import RegistrationMoreDet from "./RegistrationMoreDet";
import RegistrationPatientEdit from "./RegistrationPatientEdit";
import AdmissionMoreDet from "./AdmissionMoreDet";
import AdmissionEdit from "./AdmissionEdit";
import ClinecEditPage from "./ClinecEditPage";
import Employee from "./Employee";
import EmployeeRegistration from "./EmployeeRegistration";
import EmployeeEdit from "./EmployeeEdit";
import ClinecMoreDetails from "./ClinecMoreDetails";
import PhysioMoreDet from "./PhysioMoreDet";
import PhysioEdit from "./PhysioEdit";
import PharmaInvoice from "./PharmaInvoice";
import InvoiceReg from "./InvoiceReg";
import InvoiceMoreDet from "./InvoiceMoreDet";
import InoviceEdit from "./InoviceEdit";
import LabMoreDet from "./LabMoreDet";
import LabEdit from "./LabEdit";
import PharmacyMoreDet from "./PharmacyMoreDet";
import PharmacyEdit from "./PharmacyEdit";
import ProfileEdit from "./ProfileEdit";
import AdminDocDet from "./AdminDocDet";
import AdminDocEdit from "./AdminDocEdit";

function App() {
  const [docDetailData, setDocDetailData] = useState();
  const [introData, setIntroData] = useState("");
  const [isAuth, setIsAuth] = useState(
   localStorage.getItem("isAuth") === "true"
  );

  const getDataFromDocDetail = (dataFromDocDetail) => {
    setDocDetailData(dataFromDocDetail);
  };

  const getDetailFromIntro = (dataFromIntro) => {
    setIntroData(dataFromIntro);
  };

  const [adminFieldChoose, setAdminFieldChoose] = useState();

  const adminChoose = (btnName) => {
    setAdminFieldChoose(btnName);
  };

  // useEffect(() => {
  //   const handleStorageChange = () => {
  //     setIsAuth(localStorage.getItem("isAuth") === "true");
  //   };

  //   window.addEventListener("storage", handleStorageChange);
  //   return () => {
  //     window.removeEventListener("storage", handleStorageChange);
  //   };
  // }, []);

  const baseUrl = "https://tabsquareinfotech.com/TSIT_Clients/vprami";

  const apiBaseUrl =
    "https://cvmvreddystrust.com/App/tsitClient2024/prami/public/api/";

  const handleLogin = () => {
   
    localStorage.setItem("isAuth", true);
    setIsAuth(localStorage.getItem("isAuth"));
  };
  console.log(adminFieldChoose);
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route
            path="/"
            element={
              <IntroPage
                getDetailFromIntro={getDetailFromIntro}
                baseUrl={baseUrl}
              />
            }
          />
          <Route
            path="/login"
            element={<Login  onLogin={handleLogin} introData={introData} baseUrl={baseUrl} />}
          />
          {/* <Route path="/register" element={<Register />} /> */}
          {isAuth ? (<>
          <Route
            path="/home/dashboard"
            element={
              <AppLayout>
                <HomePage />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/patient"
            element={
              <AppLayout>
                <Patient />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/preference"
            element={
              <AppLayout>
                <Preference />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/profile"
            element={
              <AppLayout>
                <Profile />
              </AppLayout>
            }
          />
          <Route
            path="/home/profile/edit"
            element={
              <AppLayout>
                <ProfileEdit></ProfileEdit>
              </AppLayout>
            }
          />
          <Route
            path="/home/admin/accesscontrol"
            element={
              <AppLayout>
                <AccessControl />
              </AppLayout>
            }
          />
          <Route
            path="/home/admin/adminsetting"
            element={
              <AppLayout>
                <AdminSetting adminChoose={adminChoose} />
              </AppLayout>
            }
          />
          <Route
            path="/home/clinics/registration"
            element={
              <AppLayout>
                <ClinecsRegistration />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/clinics/edit"
            element={
              <AppLayout>
                <ClinecEditPage></ClinecEditPage>
              </AppLayout>
            }
          ></Route>

          <Route
            path="/home/clinics/moredetail"
            element={
              <AppLayout>
                <ClinecMoreDetails></ClinecMoreDetails>
              </AppLayout>
            }
          ></Route>

          <Route
            path="/home/doctor"
            element={
              <AppLayout>
                <Doctor />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/admin/docmoredetail"
            element={
              <AppLayout>
                <AdminDocDet></AdminDocDet>
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/admin/docedit"
            element={
              <AppLayout>
                <AdminDocEdit></AdminDocEdit>
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/doctor/edit"
            element={
              <AppLayout>
                <AboutDoctorEdit />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/doctor/fees"
            element={
              <AppLayout>
                <DoctorFee />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/doctor/details"
            element={
              <AppLayout>
                <Doctordetails getDataFromDocDetail={getDataFromDocDetail} />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/doctor/about"
            element={
              <AppLayout>
                <AboutDoctor />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/appointment"
            element={
              <AppLayout>
                <Appointment apiBaseUrl={apiBaseUrl} />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/billing"
            element={
              <AppLayout>
                <BillingPage />
              </AppLayout>
            }
          ></Route>
          <Route path="/home/parameter" element={<ParameterModal />}></Route>
          <Route
            path="/home/basicdetail"
            element={<Basicdetailmodal />}
          ></Route>
          <Route path="/home/searchpatient" element={<SearchPatient />}></Route>
          <Route
            path="/home/patientbooking"
            element={<PatientBooking />}
          ></Route>
          <Route path="/home/addnewdoctor" element={<AddNewDoctor />}></Route>
          <Route path="/home/payment" element={<Paymentmodal />}></Route>
          <Route path="/home/addprofile" element={<AddProfileModal />}></Route>

          <Route
            path="/home/patientadmission"
            element={
              <AppLayout>
                <RegisterPatient></RegisterPatient>
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/patientadmission/moredet"
            element={
              <AppLayout>
                <AdmissionMoreDet></AdmissionMoreDet>
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/patientadmission/edit"
            element={
              <AppLayout>
                <AdmissionEdit></AdmissionEdit>
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/register/moredetail"
            element={
              <AppLayout>
                <RegistrationMoreDet></RegistrationMoreDet>
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/register/edit"
            element={
              <AppLayout>
                <RegistrationPatientEdit></RegistrationPatientEdit>
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/patient/pastrecords"
            element={
              <AppLayout>
                <PastRecords />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/patient/medicalhistory"
            element={
              <AppLayout>
                <MedicalHistory />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/patient/notes"
            element={
              <AppLayout>
                <Patientnotes />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/patient/notesimg"
            element={
              <AppLayout>
                <NotesImg />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/patient/labtest"
            element={
              <AppLayout>
                <LabTest />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/patient/labmoredet"
            element={
              <AppLayout>
                <LabMoreDet></LabMoreDet>
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/patient/labEdit"
            element={
              <AppLayout>
                <LabEdit></LabEdit>
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/patient/medicine"
            element={
              <AppLayout>
                <PateientTreatment />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/patient/consents"
            element={
              <AppLayout>
                <PatientConsents />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/patient/furthercare"
            element={
              <AppLayout>
                <PatientFurthercare />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/template/lab"
            element={
              <AppLayout>
                <MenuLab />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/lab/registration"
            element={
              <AppLayout>
                <LabRegistration />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/template/medicine"
            element={
              <AppLayout>
                <MedicineMaster />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/pharmacy"
            element={<AppLayout>{/* <Pharmacy /> */}</AppLayout>}
          ></Route>
          <Route
            path="/home/pharmacy/registration"
            element={
              <AppLayout>
                <PharmacyRegistration />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/pharmacy/invoice"
            element={
              <AppLayout>
                <PharmaInvoice></PharmaInvoice>
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/pharmacy/invoiceregistration"
            element={
              <AppLayout>
                <InvoiceReg></InvoiceReg>
              </AppLayout>
            }
          ></Route>

          <Route
            path="/home/pharmacy/moredet"
            element={
              <AppLayout>
                <PharmacyMoreDet></PharmacyMoreDet>
              </AppLayout>
            }
          ></Route>

          <Route
            path="/home/pharmacy/edit"
            element={
              <AppLayout>
                <PharmacyEdit></PharmacyEdit>
              </AppLayout>
            }
          ></Route>

          <Route
            path="/home/invoice/moredetail"
            element={
              <AppLayout>
                <InvoiceMoreDet></InvoiceMoreDet>
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/invoice/edit"
            element={
              <AppLayout>
                <InoviceEdit></InoviceEdit>
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/branch"
            element={
              <AppLayout>
                <BranchRegistration />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/physiotheray/registration"
            element={
              <AppLayout>
                <AddPhysiotherapy />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/physiotheray/moredetails"
            element={
              <AppLayout>
                <PhysioMoreDet></PhysioMoreDet>
              </AppLayout>
            }
          ></Route>
          <Route
            path="/home/physiotheray/edit"
            element={
              <AppLayout>
                <PhysioEdit></PhysioEdit>
              </AppLayout>
            }
          ></Route>

          <Route
            path="/home/menumodal"
            element={
              <AppLayout>
                <MenuLabTestStatsModal />
              </AppLayout>
            }
          ></Route>

          <Route
            path="home/template/Physiotherapy"
            element={
              <AppLayout>
                <PhysioMaster />
              </AppLayout>
            }
          ></Route>

          <Route
            path="home/inventory"
            element={
              <AppLayout>
                <InventoryPage />
              </AppLayout>
            }
          ></Route>

          <Route
            path="home/labtest"
            element={
              <AppLayout>
                <LabTestPage />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/lab/moredetail"
            element={
              <AppLayout>
                <LabTestPatientMoreBut />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/registration"
            element={
              <AppLayout>
                <RegistrationPage />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/template/homecare"
            element={
              <AppLayout>
                <HomeCareItem />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/patient/treatment"
            element={
              <AppLayout>
                <PatientTreatpage />
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/employee"
            element={
              <AppLayout>
                <Employee></Employee>
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/employee/registration"
            element={
              <AppLayout>
                <EmployeeRegistration></EmployeeRegistration>
              </AppLayout>
            }
          ></Route>
          <Route
            path="home/employee/edit"
            element={
              <AppLayout>
                <EmployeeEdit></EmployeeEdit>
              </AppLayout>
            }
          ></Route>
              </>
          ) : (
            <Route path="*" element={<Navigate to="/" />} />
          )}
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
