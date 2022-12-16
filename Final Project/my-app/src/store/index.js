import { configureStore } from "@reduxjs/toolkit";
import episodeReducer from "../slices/episodeSlice";
import characterReducer from "../slices/characterSlice";

export default configureStore({
  reducer: {
    episode: episodeReducer,
    character: characterReducer,
  },
});
