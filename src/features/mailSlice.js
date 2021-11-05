import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sendMessageIsOpen: false,
  selectedMail: null,
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    //this action opens the compose section
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    //this action closes the compose section
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
  },
});

//actions to change the state
export const { openSendMessage, closeSendMessage, selectMail } =
  mailSlice.actions;

//to get present state
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectOpenMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;
