import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiConfig } from "../../../../ApiConfig/config";
import { IMovieDetailOrderResponse } from "../../domain/entities/movieDetail.entities";

export const fetchMoviesDetails = createAsyncThunk('moviesDetails/fetchMoviesDetails', async(movieId: any) => {
    try {
        const response = await ApiConfig.get(`/${movieId}`, {
            params: {
                api_key: "6f3f1dcfb0a1f8c6a9e1ac27747c50b2"
            }
        });
        return response.data
    } catch (err: any) {
        throw new Error(err);
    }
});