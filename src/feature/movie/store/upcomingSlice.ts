import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from ".";
import { IUpcomingOrderResponse } from "../domain/entities/upcomingOrder.entities";
import { fetchUpcoming } from "../infrastucture/http/upcoming.http";



const upcomingAdapters = createEntityAdapter<IUpcomingOrderResponse>()
const upcomingSlice = createSlice({
    name: "upcomings",
    initialState: upcomingAdapters.getInitialState({ loading: false }),
    reducers: {
        
    },
    extraReducers: builder => {
        builder.addCase(fetchUpcoming.pending, state => {
            state.loading = true
        });
        builder.addCase(fetchUpcoming.fulfilled, (state, action) => {
            upcomingAdapters.setAll(state, action.payload),
                state.loading = false
        });
        builder.addCase(fetchUpcoming.rejected, state => {
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
} = upcomingAdapters.getSelectors((state: RootState) => state.upcomings);

export default upcomingSlice.reducer;