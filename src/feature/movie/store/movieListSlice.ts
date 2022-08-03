import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from ".";
import { IMovieOrderResponse } from "../domain/entities/movieOrder.entities";
import { fetchMovies } from "../infrastucture/http/movie.http";



const movieAdapters = createEntityAdapter<IMovieOrderResponse>()
const movieSlice = createSlice({
    name: "movies",
    initialState: movieAdapters.getInitialState({ loading: false }),
    reducers: {
        
    },
    extraReducers: builder => {
        builder.addCase(fetchMovies.pending, state => {
            state.loading = true
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            movieAdapters.setAll(state, action.payload),
                state.loading = false
        });
        builder.addCase(fetchMovies.rejected, state => {
            state.loading = false
        })
    }
})

export const {
    selectById: selectUserById,
    selectIds: selectUserIds,
    selectEntities: selectUserEntities,
    selectAll: selectAllUsers,
    selectTotal: selectTotalUsers
} = movieAdapters.getSelectors((state: RootState) => state.movies);

export default movieSlice.reducer;