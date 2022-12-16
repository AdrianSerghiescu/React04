import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  characters: [],
  error: "",
};

export const fetchCharacters = createAsyncThunk(
  "character/fetchCharacters",
  () => {
    return axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then((response) => response.data.results);
  }
);

const characterSlice = createSlice({
  name: "character",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.loading = false;
      state.characters = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.loading = false;
      state.characters = [];
      state.error = action.error.message;
    });
  },
});

export default characterSlice.reducer;
