import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import clouds from "./assets/clouds.svg";
import anime from "animejs/lib/anime.es.js";
import "./App.css";

function App() {
  // placeholder weather data to avoid null checks
  const userWeather = {
    city: "London",
    country: "UK",
    temperature: 12,
    description: "Cloudy",
    icon: "01d",
  };

  const [weather, setWeather] = useState(userWeather);

  const date = new Date( Date.now() );


  return (
    <div className="App ">
      <header className="flex justify-center p-2  content-center  gap-2  ">
        {/* <img src={clouds} className="App" alt="logo" /> */}
        <svg
          className="fill-white "
          width="60"
          height="60"
          viewBox="0 0 80 80"
        >
          <g transform="translate(0.000000,80.000000) scale(0.100000,-0.100000)">
            <path
              d="M335 696 c-34 -15 -95 -79 -95 -101 0 -7 -10 -17 -22 -20 -29 -9 -78
-54 -78 -72 0 -7 -8 -13 -17 -13 -29 0 -82 -37 -103 -72 -38 -62 -16 -146 47
-186 23 -14 27 -23 25 -50 -3 -25 3 -39 27 -62 l29 -30 162 0 c124 0 168 3
190 15 29 15 60 61 60 88 0 12 19 16 85 18 80 4 86 6 117 37 29 28 33 39 33
83 0 45 -4 54 -36 84 -24 22 -38 45 -42 70 -3 20 -13 48 -22 62 -22 32 -74 63
-108 63 -19 0 -37 11 -60 36 -52 61 -125 79 -192 50z m136 -26 c23 -12 46 -34
55 -53 14 -29 20 -32 59 -32 37 0 50 -6 77 -32 27 -27 33 -41 33 -78 0 -39 3
-46 28 -56 71 -30 74 -139 6 -175 -17 -8 -58 -14 -102 -14 -69 0 -74 1 -85 26
-7 15 -30 33 -57 45 -25 11 -45 26 -45 34 0 23 -59 65 -91 65 -29 0 -40 -8
-141 -102 -16 -16 -35 -28 -42 -28 -7 0 -21 -7 -32 -15 -29 -22 -47 -18 -80
16 -24 25 -29 39 -29 79 0 40 5 54 30 80 18 19 43 33 66 36 31 5 38 11 43 35
5 28 48 59 81 59 8 0 15 7 15 15 0 32 31 75 68 94 48 26 93 26 143 1z m-66
-315 c14 -13 25 -33 25 -45 0 -15 6 -20 26 -20 15 0 38 -12 55 -29 39 -40 39
-82 0 -122 l-29 -29 -163 0 c-153 0 -164 1 -186 22 -13 12 -23 33 -23 47 0 34
37 71 71 71 21 0 28 5 31 23 2 15 13 25 36 32 20 6 32 16 32 27 0 9 10 24 22
32 33 23 75 20 103 -9z"
            />
            <path
              d="M280 570 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
            />
            <path
              d="M320 550 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
            />
            <path
              d="M550 550 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
            />
            <path
              d="M350 520 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
            />
            <path
              d="M550 510 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
            />
            <path
              d="M180 480 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
            />
            <path
              d="M220 460 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
            />
            <path
              d="M250 430 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
            />
            <path
              d="M680 400 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
            />
            <path
              d="M660 370 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
            />
            <path
              d="M290 310 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
            />
            <path
              d="M320 290 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
            />
            <path
              d="M340 260 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
            />
            <path
              d="M220 240 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
            />
            <path
              d="M240 210 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
            />
          </g>
        </svg>
        <h1 className="max-md:text-4xl transition-all ease-linear  duration-500">Weather app</h1>
      </header>

      <main className="flex flex-col ">
        <div className="search-box ">
          <input
            type="text"
            className="rounded-md border-none p-2 font-semibold outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Search your country..."
          />
        </div>
        <div className="weather-box font-semibold flex flex-row justify-center content-center p-2 gap-4">
            <div className="location">{userWeather.city},{userWeather.country}</div>
            <div className="date">{date.toDateString()}</div>
            <div className="temp">{userWeather.temperature}°C</div>
            <div className="weather">{userWeather.description}</div>
        </div>
      </main>
      
      <footer className="text-gray-700">
        <p>Created by <a target={"_blank"} className="text-slate-700 transition-all ease-linear duration-500" href="https://github.com/AlexFT257">AlexFT257</a></p>
      </footer>
    </div>
  );
}

export default App;
