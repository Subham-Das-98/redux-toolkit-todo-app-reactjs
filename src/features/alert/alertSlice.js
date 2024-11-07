import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  alerts: []
}

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers:{
    addAlertMessage: (state, action) => {
      const newAlert = {
        id: nanoid(),
        message: action.payload
      }
      state.alerts.push(newAlert);
    },
    deleteAlertMessage: (state, action) => {
      state.alerts = state.alerts.filter(alert => alert.id !== action.payload);
    }
  }
})

export const { addAlertMessage, deleteAlertMessage } = alertSlice.actions;

export default alertSlice.reducer;