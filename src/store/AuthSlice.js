import { createSlice } from "@reduxjs/toolkit";
// import { authAPI, resultCodes } from "../api/authAPI";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    telNumber: null,
    isAuth: false
  },
  reducers: {
    
  }
})

// export const {} = authSlice.actions;

export default authSlice.reducer;


// const login = (telNumber, password) => {
//   return async (dispatch) => {
//     const response = await authAPI.login(telNumber, password);
//     if (response.data.resultCode === resultCodes.error) {
//     }
//   };
// };