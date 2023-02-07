import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weatherData: [{}]
};

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setCity: (state, action) => {
            state.weatherData = action.payload;
        }
    }
});

const reducerWeather = {
    state: weatherSlice.reducer
};

export const { setCity } = weatherSlice.actions;

export default reducerWeather;
