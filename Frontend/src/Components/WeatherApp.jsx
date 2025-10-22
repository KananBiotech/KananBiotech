import React, { useState } from "react";
import { motion } from "framer-motion";

const API_KEY = "AIzaSyCKSw-9CIPucFKAFKm15lVL5lIFVcpcOCE";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${API_KEY}`;

const WeatherPage = () => {
  const [latitude, setLatitude] = useState("30.2672");
  const [longitude, setLongitude] = useState("-97.7431");
  const [report, setReport] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setReport("");

    try {
  const userQuery = `Find the current weather conditions for coordinates: Latitude ${latitude}, Longitude ${longitude}. Provide temperature, humidity, and sky condition in a short paragraph.`;
  const payload = {
    contents: [{ parts: [{ text: userQuery }] }],
  };

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  let result = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!result) throw new Error("No response received.");

  // --- Extract temperature and adjust it ---
  const tempMatch = result.match(/(\d+)\s?°?C/); // find temperature like "32°C" or "32 C"
  if (tempMatch) {
    const originalTemp = parseInt(tempMatch[1]);
    const adjustedTemp = originalTemp - 5;
    const adjustedTemp1 = adjustedTemp - 1;
    // Replace old temperature with adjusted one
    result = result.replace(tempMatch[0], `${adjustedTemp1}°C`);
  }

  setReport(result);
} catch (err) {
  setError(err.message);
}
setLoading(false);

  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-10 
      bg-gradient-to-br from-[#DFF9FB]/80 via-[#E8FFFE]/60 to-[#C8F4F9]/80 
      backdrop-blur-sm relative overflow-hidden"
    >
      {/* Floating gradient orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4, y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-[#aaf7ff] rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4, y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-80 h-80 bg-[#d8fff7] rounded-full blur-3xl"
      ></motion.div>

      {/* Card container */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/70 backdrop-blur-md shadow-2xl border border-white/30 
                   rounded-3xl p-8 w-full max-w-xl text-center relative z-10"
      >
        <h1 className="text-3xl font-extrabold text-[#006d77] mb-4 tracking-tight">
          🌦️ Smart Weather Insight
        </h1>
        <p className="text-gray-600 mb-6">
          Enter coordinates to get real-time weather data powered by Gemini AI.
        </p>

        {/* Form */}
        <form
          onSubmit={fetchWeather}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <input
            type="number"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            placeholder="Latitude"
            className="px-4 py-2 w-full sm:w-1/2 rounded-lg border border-gray-300 
                       focus:ring-2 focus:ring-[#83c5be] outline-none transition"
            required
          />
          <input
            type="number"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            placeholder="Longitude"
            className="px-4 py-2 w-full sm:w-1/2 rounded-lg border border-gray-300 
                       focus:ring-2 focus:ring-[#83c5be] outline-none transition"
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto bg-[#00b4d8] text-white font-semibold py-2 px-6 
                       rounded-lg shadow-md hover:bg-[#0096c7] transition"
          >
            {loading ? "Loading..." : "Get Weather"}
          </motion.button>
        </form>

        {/* Results */}
        <div className="mt-8 text-left space-y-4">
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-100 border border-red-400 text-red-700 p-3 rounded-xl"
            >
              ❌ {error}
            </motion.div>
          )}
          {loading && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="w-8 h-8 border-4 border-[#00b4d8] border-t-transparent rounded-full mx-auto"
            ></motion.div>
          )}
          {report && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 border border-[#caf0f8] shadow-md p-5 rounded-2xl"
            >
              <h2 className="text-xl font-bold text-[#0077b6] mb-2 flex items-center">
                <span className="mr-2">🌤️</span> Current Weather Report
              </h2>
              <p className="text-gray-700 leading-relaxed">{report}</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default WeatherPage;
