import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  episodes: [],
  error: "",
};

export const fetchEpisodes = createAsyncThunk("episode/fetchEpisodes", () => {
  return axios
    .get(`https://rickandmortyapi.com/api/episode/`)
    .then((response) => response.data.results);
});

const episodeSlice = createSlice({
  name: "episode",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchEpisodes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchEpisodes.fulfilled, (state, action) => {
      state.loading = false;
      state.episodes = action.payload;
      state.error = "";
    });
    builder.addCase(fetchEpisodes.rejected, (state, action) => {
      state.loading = false;
      state.episodes = [];
      state.error = action.error.message;
    });
  },
});

export default episodeSlice.reducer;
