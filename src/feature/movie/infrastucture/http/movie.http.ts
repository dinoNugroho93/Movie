import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiConfig } from "../../../../ApiConfig/config";
import { IMovieOrderResponse } from "../../domain/entities/movieOrder.entities";
import { ApiChartingData } from "./apiCharData";

export const fetchMovies = createAsyncThunk('apiCharData', async () => {
    try {
        const response = await ApiConfig.get(`/popular`,{
            params:{
                api_key: "6f3f1dcfb0a1f8c6a9e1ac27747c50b2"
            }
        });
        return response.data.results as IMovieOrderResponse[]
    } catch (err: any) {
        throw new Error(err);
    }
});