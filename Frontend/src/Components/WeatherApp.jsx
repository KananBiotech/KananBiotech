import React, { useState } from "react";
import { motion } from "framer-motion";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const MAPS_API_KEY = "AIzaSyCO9vNtPDDayFwLJoXZgCYGJkNXPd4kO84"; // 🔑 Replace with your key

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 22.411991,
  lng: 87.531791,
};

const WeatherPage = () => {
  const [latitude, setLatitude] = useState(defaultCenter.lat);
  const [longitude, setLongitude] = useState(defaultCenter.lng);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: MAPS_API_KEY,
  });

  // ✅ Get user GPS location
  const getUserLocation = () => {
    if (!navigator.geolocation) {
      setError("❌ Geolocation not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      () => setError("⚠️ Location access denied.")
    );
  };

  // ✅ Fetch weather data
  const fetchWeather = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setWeather(null);

    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relativehumidity_2m&timezone=auto`;
      const res = await fetch(url);
      const data = await res.json();

      if (!data.current_weather) throw new Error("Weather data not available.");

      const currentTime = data.current_weather.time;
      const times = data.hourly.time;
      const humidityValues = data.hourly.relativehumidity_2m;

      // Closest humidity timestamp
      const currentDate = new Date(currentTime);
      let closestIndex = 0;
      let minDiff = Infinity;
      times.forEach((t, i) => {
        const diff = Math.abs(new Date(t) - currentDate);
        if (diff < minDiff) {
          minDiff = diff;
          closestIndex = i;
        }
      });

      setWeather({
        temperature: data.current_weather.temperature,
        windspeed: data.current_weather.windspeed,
        winddirection: data.current_weather.winddirection,
        humidity: humidityValues[closestIndex],
        time: currentTime,
      });
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  if (loadError) return <div>Error loading Google Maps</div>;
  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white px-6 py-12">
      {/* Animated Background */}
      <motion.div
        className="absolute w-72 h-72 bg-[#00ffe0]/30 rounded-full top-10 left-10 blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 15 }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-[#ff6fff]/20 rounded-full bottom-20 right-10 blur-3xl"
        animate={{ y: [0, -50, 0] }}
        transition={{ repeat: Infinity, duration: 18 }}
      />

      <h1 className="relative z-10 text-4xl font-extrabold mb-6 text-center">
        🌦️ Premium Weather Dashboard
      </h1>

      <motion.div
        className="relative z-10 w-full max-w-3xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Google Map */}
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={{ lat: latitude, lng: longitude }}
          onClick={(e) => {
            setLatitude(e.latLng.lat());
            setLongitude(e.latLng.lng());
          }}
        >
          <Marker position={{ lat: latitude, lng: longitude }} />
        </GoogleMap>

        {/* Form Inputs */}
        <form onSubmit={fetchWeather} className="flex flex-col sm:flex-row gap-4 mt-6">
          <input
            type="number"
            step="any"
            value={latitude}
            onChange={(e) => setLatitude(Number(e.target.value))}
            placeholder="Latitude"
            required
            className="flex-1 px-4 py-2 rounded-lg border border-white/40 bg-white/10 text-white placeholder-white focus:ring-2 focus:ring-[#00ffe0] outline-none transition"
          />
          <input
            type="number"
            step="any"
            value={longitude}
            onChange={(e) => setLongitude(Number(e.target.value))}
            placeholder="Longitude"
            required
            className="flex-1 px-4 py-2 rounded-lg border border-white/40 bg-white/10 text-white placeholder-white focus:ring-2 focus:ring-[#00ffe0] outline-none transition"
          />
          <button
            type="submit"
            className="bg-[#00ffe0] text-gray-900 font-semibold px-6 py-2 rounded-lg shadow-lg hover:bg-[#00c2b3] transition"
          >
            {loading ? "Loading..." : "Get Weather"}
          </button>
        </form>

        <button
          onClick={getUserLocation}
          className="w-full mt-4 bg-[#ff6fff] text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:bg-[#d653e5] transition"
        >
          📍 Use My Location
        </button>

        {/* Error Message */}
        {error && <p className="text-red-400 mb-4 text-center font-medium">{error}</p>}

        {/* Weather Card */}
        {weather && (
          <motion.div
            className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-xl text-center space-y-3 mt-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-2">🌤️ Current Weather</h2>
            <p>⏰ Time: {weather.time}</p>
            <p>🌡 Temperature: {weather.temperature} °C</p>
            <p>💧 Humidity: {weather.humidity} %</p>
            <p>💨 Wind Speed: {weather.windspeed} km/h</p>
            <p>🧭 Wind Direction: {weather.winddirection}°</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default WeatherPage;
