import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import MedicalCareSlice from "./MedicalCareSlice";
import telemedConsultsSlice from './TelemedConsultsSlice';
import UserServicesSlice from "./UserServicesSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    telemedConsults: telemedConsultsSlice,
    medicalCare: MedicalCareSlice,
    userServices: UserServicesSlice,
  },
});
