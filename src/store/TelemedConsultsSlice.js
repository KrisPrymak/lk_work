import { createSlice } from "@reduxjs/toolkit";

const telemedConsultsSlice = createSlice({
    name: 'template',
    initialState: {
        telemedConsults: [
          {
            id: 1022,
            date: "17.02.2023",
            time: "14:00",
            doctor: "Панасенков М.A.",
            title: "Консультация врача-онколога",
            today: false,
            isPaid: false,
          },
          {
            id: 1023,
            date: "18.02.2023",
            time: "12:00",
            doctor: "Панасенков М.A.",
            title: "Консультация терапевта",
            today: true,
            isPaid: true,
          },
        ]
    },
    reducers: {
      removeTelemedConsult(state, action) {
        state.telemedConsults = state.telemedConsults.filter(t => t.id !== action.payload.id)
      } 
    }
})

export const {removeTelemedConsult} = telemedConsultsSlice.actions;

export default telemedConsultsSlice.reducer;