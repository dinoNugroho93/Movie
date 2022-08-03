import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./";
import { IMovieDetailOrderResponse } from "../../movieDetail/domain/entities/movieDetail.entities";
import { fetchMoviesDetails } from "../../movieDetail/infrastructure/http/movieDetail.http";

const MovieDetailSlice = createSlice({
    name: "movieDetails",
    initialState: {
        data:{},
        loading:false
    },
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(fetchMoviesDetails.pending, state => {
            state.loading = true
        });
        builder.addCase(fetchMoviesDetails.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
        });
        builder.addCase(fetchMoviesDetails.rejected, state => {
            state.loading = false
        })
    }
})

export const selectData = (state:RootState) => state.movieDetails;
export const selectLoadingState = (state:RootState) => state.movieDetails

export default MovieDetailSlice.reducer;