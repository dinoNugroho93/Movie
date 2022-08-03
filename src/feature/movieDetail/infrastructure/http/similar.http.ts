import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiConfig } from "../../../../ApiConfig/config";
import { ISimilarOrderResponse } from "../../domain/entities/similar.entities";

export const fetchSimilar = createAsyncThunk('apiCharData', async (movieId) => {
    try {
        const response = await ApiConfig.get(`${movieId}/similar`,{
            params:{
                api_key: "6f3f1dcfb0a1f8c6a9e1ac27747c50b2"
            }
        });
        return response.data.results as ISimilarOrderResponse[]
    } catch (err: any) {
        throw new Error(err);
    }
});