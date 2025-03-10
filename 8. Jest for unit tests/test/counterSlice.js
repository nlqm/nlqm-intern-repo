import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCount = createAsyncThunk("counter/fetchCount", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/comments?postId=1");
    return response.data[0].count;
});

const initialState = { value: 0, status: "idle" };

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCount.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCount.fulfilled, (state, action) => {
                state.value = action.payload;
                state.status = "succeeded";
            })
            .addCase(fetchCount.rejected, (state) => {
                state.status = "failed";
            })
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;