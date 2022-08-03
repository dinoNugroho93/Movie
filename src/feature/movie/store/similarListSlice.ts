import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from ".";
import { ISimilarOrderResponse } from "../../movieDetail/domain/entities/similar.entities";
import { fetchSimilar } from "../../movieDetail/infrastructure/http/similar.http";



const similarAdapters = createEntityAdapter<ISimilarOrderResponse>()
const similarSlice = createSlice({
    name: "similars",
    initialState: similarAdapters.getInitialState({ loading: false }),
    reducers: {
        
    },
    extraReducers: builder => {
        builder.addCase(fetchSimilar.pending, state => {
            state.loading = true
        });
        builder.addCase(fetchSimilar.fulfilled, (state, action) => {
            similarAdapters.setAll(state, action.payload),
                state.loading = false
        });
        builder.addCase(fetchSimilar.rejected, state => {
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
} = similarAdapters.getSelectors((state: RootState) => state.similars);

export default similarSlice.reducer;