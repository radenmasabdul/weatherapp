import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCity, setForecast } from "../redux/reducers/reducer";

import axios from "axios";

import { BiSun } from "react-icons/bi";
import { BiMap } from "react-icons/bi";

const Navbar = () => {
  const [weather, setWeather] = useState([]);
  const [forecast, setForeCast] = useState([]);
  const dispatch = useDispatch();

  const fetchApi = async (e) => {
    e.preventDefault();
    const loc = e.target.elements.loc.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${
      import.meta.env.VITE_MY_KEY
    }`;
    const req = axios.get(url);
    const res = await req;
    setWeather({
      desc: res.data.weather[0].description,
      temp: res.data.main.temp,
      city: res.data.name,
      country: res.data.sys.country,
      humidity: res.data.main.humidity,
      press: res.data.main.pressure,
    });
    dispatch(setCity(res.data));
    console.log("ini data weather" + res.data);
  };

  const getForecast = async (e) => {
    e.preventDefault();
    const loc = e.target.elements.loc.value;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${loc}&appid=${
      import.meta.env.VITE_MY_KEY
    }`;
    const req = axios.get(url);
    const res = await req;
    setForeCast({
      temp: res.data.list[0].main.temp,
      dt_txt: res.data.list[0].clouds.dt_txt,
    });
    dispatch(setForecast(res.data.list));
    console.log("ini data forecast" + res.data.list[0]);
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <form
          className="flex-1"
          onSubmit={(e) => {
            fetchApi(e);
            getForecast(e);
          }}
        >
          <input
            type="text"
            placeholder="Search City..."
            className="input input-bordered w-full my-2 mx-2"
            name="loc"
          />
        </form>
        <div className="flex-none">
          <BiMap className="md:text-4xl min-[320px]:text-2xl" />
          <p className="mx-2 md:text-base min-[320px]:text-sm">
            {Object.keys(weather).length > 0
              ? `${weather.city} , ${weather.country}`
              : ""}
          </p>
          <button className="mx-2">
            <BiSun className="md:text-4xl min-[320px]:text-2xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
