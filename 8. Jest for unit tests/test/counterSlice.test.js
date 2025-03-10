import counterReducer, { increment, decrement, fetchCount } from "./counterSlice";
import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";

describe("counter reducer", () => {
    test("return the initial state", () => {
        expect(counterReducer(undefined, { type: undefined })). toEqual({
            value: 0,
            status: "idle",
        });
    });

    test("handle increment action", () => {
        const initialState = { value: 0, status: "idle" };
        const newState = counterReducer(initialState, increment());
      
        expect(newState).toEqual({ value: 1, status: "idle" });
    });

    test("handle decrement action", () => {
        const initialState = { value: 2, status: "idle" };
        const newState = counterReducer(initialState, decrement());
      
        expect(newState).toEqual({ value: 1, status: "idle"});
    });
});

jest.mock("axios");

describe("fetchCount async action", () => {
    test("update state with fetch value", async () => {
        axios.get.mockResolvedValue({ data: [{ count: 5 }] });

        const store = configureStore({
            reducer: counterReducer,
        });

        await store.dispatch(fetchCount());

        expect(store.getState().value).toBe(5);
        expect(store.getState().status).toBe("succeeded");
    });

    test("handle fetch failure", async () => {
        axios.get.mockRejectedValue(new Error("Server error"));

        const store = configureStore({
            reducer: counterReducer,
        });

        await store.dispatch(fetchCount());

        expect(store.getState().status).toBe("failed");
    });
});