import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: []
};

const MusicSlice = new createSlice({
  name: "music",
  initialState,
  reducers: {
    GetAllMusic(state, action) {},
    SetMusics(state, action) {
      state.value = action.payload;
    },
    UpdateMusic(state, action) {},
    DeleteMusic(state, action) {},
    DownloadMusic(state, action) {}
  }
});

export const {
  GetAllMusic,
  SetMusics,
  UpdateMusic,
  DeleteMusic,
  DownloadMusic,
} = MusicSlice.actions;
export default MusicSlice.reducer;
