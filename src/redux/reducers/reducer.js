import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weatherData: [{}],
    forecastData: [{}],
};

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setCity: (state, action) => {
            state.weatherData = action.payload;
        },
        setForecast: (state, action) => {
            state.forecastData = action.payload;
        },
    }
});

const reducerWeather = {
    state: weatherSlice.reducer
};

export const { setCity, setForecast } = weatherSlice.actions;

export default reducerWeather;
