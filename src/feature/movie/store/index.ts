import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./message";
import movieReduces from "./movieListSlice";
import upcomingReducers from "./upcomingSlice";
import movieDetailReducers from "./movieDetailSlice"
import similarReducers from "./similarListSlice"

export const store = configureStore({
    reducer: {
        message: messageReducer,
        movies: movieReduces,
        upcomings: upcomingReducers,
        movieDetails: movieDetailReducers,
        similars : similarReducers
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;