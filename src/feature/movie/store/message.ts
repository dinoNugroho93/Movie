import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "message",
    initialState: {
        message: "initial State"
    },
    reducers: {
        setMessage(state, action :PayloadAction <string>){
            state.message = action.payload
        }
    }
});

export const {setMessage} = messageSlice.actions
export default messageSlice.reducer ;