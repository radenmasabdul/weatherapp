import React from "react";
import { useSelector } from "react-redux";

import Humidity from "../assets/humidity.svg";

const Widget = () => {
  const cities = useSelector((state) => state.data.weatherData);
  const hourlyForecast = useSelector((state) => state.data.forecastData);

  let k = cities?.main?.temp;
  let C = k - 273.15;

  const formatAMPM = (date) => {
    var time = new Date(date);
    var strTime = time.toLocaleString("en-US", {
      hour: "numeric",
      hour12: true,
    });
    return strTime;
  };

  const convertToCelcius = (suhu) => {
    let K = suhu;
    let Celcius = K - 273.15;
    return Celcius;
  };

  return (
    <>
      <div className="flex flex-col space-y-6 w-full bg-teal-300 p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-6xl font-bold">{`${C.toFixed(2)}°C`}</span>
            <span className="font-semibold mt-1 text-gray-500">
              {Object.keys(cities).length > 0
                ? `${cities.name}, ${cities?.sys?.country}`
                : ""}
            </span>
            <span>
              {Object.keys(cities).length > 0
                ? `${cities?.weather?.[0]?.main}, ${cities?.weather?.[0]?.description}`
                : ""}
            </span>
          </div>
          <img
            src={`http://openweathermap.org/img/wn/${cities?.weather?.[0]?.icon}.png`}
            className="h-24 w-24 fill-current"
          />
        </div>
        <div className="sm:grid grid-cols-8">
          {hourlyForecast.map(
            (data, index) =>
              index < 8 && (
                <div className="flex flex-col items-center my-2" key={index}>
                  <span className="font-semibold text-lg">
                    {convertToCelcius(data?.main?.temp).toFixed(2) + "°C"}
                  </span>
                  <img
                    src={`http://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}
                    alt="wthr img"
                    className="h-10 w-10 fill-current"
                  />
                  <span className="font-semibold mt-1 text-sm text-center">
                    {formatAMPM(data?.dt_txt)}
                  </span>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
};

const WidgetTomorrow = () => {
  const cities = useSelector((state) => state.data.weatherData);
  const hourlyForecast = useSelector((state) => state.data.forecastData);

  let k = cities?.main?.temp;
  let C = k - 273.15;

  const formatAMPM = (date) => {
    let time = new Date(date);
    let strTime = time.toLocaleString("en-US", {
      hour: "numeric",
      hour12: true,
    });
    return strTime;
  };

  const convertToCelcius = (suhu) => {
    let K = suhu;
    let Celcius = K - 273.15;
    return Celcius;
  };

  return (
    <>
      <div className="flex flex-col space-y-6 w-full bg-teal-300 p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40">
        {hourlyForecast.slice(6, 14, 22, 30, 38, 39).map(
          (data, index) =>
            index < 1 && (
              <div className="flex justify-between" key={index}>
                <div className="flex flex-col">
                  <span className="text-6xl font-bold">
                    {convertToCelcius(data?.main?.temp_max).toFixed(2) + "°C"}
                  </span>
                  <span className="font-semibold mt-1 text-gray-500">
                    {Object.keys(cities).length > 0
                      ? `${cities.name}, ${cities?.sys?.country}`
                      : ""}
                  </span>

                  {hourlyForecast
                    .slice(6, 14, 22, 30, 38, 39)
                    .map(
                      (data, index) =>
                        index < 1 && (
                          <span key={index}>
                            {hourlyForecast.length > 0
                              ? `${data?.weather[0]?.main}, ${data?.weather[0]?.description}`
                              : ""}
                          </span>
                        )
                    )}
                </div>
                <img
                  src={`http://openweathermap.org/img/wn/${cities?.weather?.[0]?.icon}.png`}
                  className="h-24 w-24 fill-current"
                />
              </div>
            )
        )}

        <div className="sm:grid grid-cols-8">
          {hourlyForecast.slice(6, 14, 22, 30, 38, 39).map(
            (data, index) =>
              index < 8 && (
                <div className="flex flex-col items-center my-2" key={index}>
                  <span className="font-semibold text-lg">
                    {convertToCelcius(data?.main?.temp).toFixed(2) + "°C"}
                  </span>
                  <img
                    src={`http://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}
                    alt="wthr img"
                    className="h-10 w-10 fill-current"
                  />
                  <span className="font-semibold mt-1 text-sm text-center">
                    {formatAMPM(data?.dt_txt)}
                  </span>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
};

const Widget5Days = () => {
  const cities = useSelector((state) => state.data.weatherData);
  const hourlyForecast = useSelector((state) => state.data.forecastData);

  const formatDay = (date) => {
    let time = new Date(date);
    let strTime = time.toLocaleString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return strTime;
  };

  const convertToCelcius = (suhu) => {
    let K = suhu;
    let Celcius = K - 273.15;
    return Celcius;
  };

  return (
    <>
      <div className="flex flex-col space-y-6 w-full bg-teal-300 p-5 md:p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40">
        {hourlyForecast
          .filter((_, index) => [7, 15, 23, 31, 39].includes(index))
          .map(
            (data, index) =>
              index < 5 && (
                <div
                  className="flex flex-col md:flex-row md:justify-between items-center"
                  key={index}
                >
                  <span className="font-semibold text-lg w-full md:w-1/4 text-center">
                    {formatDay(data?.dt_txt)}
                  </span>
                  <div className="flex items-center justify-center w-full md:w-1/4">
                    <span className="font-semibold ">
                      {data?.main?.humidity}
                    </span>
                    <img src={Humidity} className="w-6 h-6 fill-current ml-1" />
                  </div>
                  <img
                    src={`http://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}
                    alt="wthr img"
                    className="h-10 w-10 fill-current"
                  />

                  {hourlyForecast
                    .filter((_, index) => [7, 15, 23, 31, 39].includes(index))
                    .map(
                      (data, index) =>
                        index < 1 && (
                          <span
                            className="font-semibold text-lg w-full md:w-1/4 text-center"
                            key={index}
                          >
                            {convertToCelcius(data?.main?.temp_min).toFixed(2) +
                              "°C"}
                            /
                            {convertToCelcius(data?.main?.temp_max).toFixed(2) +
                              "°C"}
                          </span>
                        )
                    )}
                </div>
              )
          )}
      </div>
    </>
  );
};

const WidgetOrderCity = () => {
  return (
    <div className="card flex items-center py-2">
      <div className="flex flex-col justify-center items-center p-8 rounded-md w-60 sm:px-12 bg-teal-300 shadow-xl dark:bg-gray-900 dark:text-gray-100">
        <div className="text-center">
          <h2 className="text-xl font-semibold">Dubai</h2>
          <p className="text-sm dark:text-gray-400">July 29</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-32 h-32 p-6 dark:text-yellow-400 fill-current"
        >
          <path d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z"></path>
          <rect width="32" height="48" x="240" y="16"></rect>
          <rect width="32" height="48" x="240" y="448"></rect>
          <rect width="48" height="32" x="448" y="240"></rect>
          <rect width="48" height="32" x="16" y="240"></rect>
          <rect
            width="32"
            height="45.255"
            x="400"
            y="393.373"
            transform="rotate(-45 416 416)"
          ></rect>
          <rect
            width="32.001"
            height="45.255"
            x="80"
            y="73.373"
            transform="rotate(-45 96 96)"
          ></rect>
          <rect
            width="45.255"
            height="32"
            x="73.373"
            y="400"
            transform="rotate(-45.001 96.002 416.003)"
          ></rect>
          <rect
            width="45.255"
            height="32.001"
            x="393.373"
            y="80"
            transform="rotate(-45 416 96)"
          ></rect>
        </svg>
        <div className="mb-2 text-3xl font-semibold">
          {" "}
          32°
          <span className="mx-1 font-normal">/</span>20°
        </div>
        <p className="dark:text-gray-400">Partly cloudy</p>
      </div>
    </div>
  );
};

export { Widget, WidgetTomorrow, Widget5Days, WidgetOrderCity };
