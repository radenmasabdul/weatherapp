import { configureStore } from "@reduxjs/toolkit";
import reducerWeather from "../reducers/reducer";

export const store = configureStore({
    reducer: {
        data: reducerWeather.state
    },
});