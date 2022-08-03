import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiConfig } from "../../../../ApiConfig/config";
import { IUpcomingOrderResponse } from "../../domain/entities/upcomingOrder.entities";

export const fetchUpcoming = createAsyncThunk('upcomings/fetchUpcomings', async () => {
    try {
        const response = await ApiConfig.get('/upcoming?api_key=6f3f1dcfb0a1f8c6a9e1ac27747c50b2&language=en-US&');
        return response.data.results as IUpcomingOrderResponse[]
    } catch (err: any) {
        throw new Error(err);
    }
});