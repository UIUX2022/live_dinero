import "./App.css";
import Topbar from "./components/header/topbar";
import Mainheader from "./components/header/mainHeader";
import Home from "./pages/home.js";
import Enquire from "./components/outh/enquire";
import Register from "./components/outh/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/outh/login";
import ConfirmEmail from "./components/outh/confirmEmail";
import UpdatePass from "./components/outh/updatePassword";
import ProfileSetting from "./pages/profileSetting.js";
import UserServices from "./pages/userServies.js";
import UserAdd from "./pages/userAdds.js";
import CreateAdds from "./pages/createNewAdds.js";
import CreateNewServices from "./pages/createServies.js";
import Services from "./pages/services.js";
import ServiceDetail from "./pages/ServicesDetailsPage.js";
import PropertySales from "./pages/propertySales.js";
import PropertyListing from "./pages/PropertyListing";
import PropertyDetailPage from "./pages/PropertyDetails";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <>
      {/* <Topbar />

      <Mainheader /> */}
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/enquire" element={<Enquire />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmemail" element={<ConfirmEmail />} />
        <Route path="/updatepass" element={<UpdatePass />} />
        <Route path="/profile_setting" element={<ProfileSetting />} />
        <Route path="/services" element={<Services />} />
        <Route path="/user_services" element={<UserServices />} />
        <Route path="/create_services" element={<CreateNewServices />} />
        <Route path="/user_adds" element={<UserAdd />} />
        <Route path="/create_adds" element={<CreateAdds />} />
        <Route path="/service_details" element={<ServiceDetail />} />
        <Route path="/property_sales" element={<PropertySales />} />
        <Route path="/property_listing" element={<PropertyListing />} />
        <Route path="/property_details" element={<PropertyDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
