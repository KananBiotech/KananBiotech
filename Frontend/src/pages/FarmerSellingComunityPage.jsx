import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FarmerSellingComunityPage = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    location: "",
    productName: "",
    images: [],
  });

  // Load products from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("farmerProducts")) || [];
    setProducts(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("farmerProducts", JSON.stringify(products));
  }, [products]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const fileArr = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setFormData({ ...formData, images: fileArr });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, formData]);
    setFormData({
      name: "",
      email: "",
      contact: "",
      location: "",
      productName: "",
      images: [],
    });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#04242c] via-[#063a47] to-[#0b5e70] text-white px-6 py-10 overflow-hidden relative">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
        animate={{ x: [0, 50, -50, 0], y: [0, 30, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
        animate={{ x: [0, -50, 40, 0], y: [0, -30, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-4 drop-shadow-lg"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🌾 Farmer Selling Community
      </motion.h1>
      <motion.p
        className="text-center text-gray-200 mb-8 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Buy and Sell Fresh Fish Products Directly Between Farmers
      </motion.p>

      {/* Sell Button */}
      <div className="flex justify-end mb-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowForm(!showForm)}
          className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-teal-500 hover:to-green-600 px-6 py-2 rounded-lg font-semibold shadow-md transition-all"
        >
          🐠 Sell Your Product
        </motion.button>
      </div>

      {/* Animated Form Popup */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className="bg-white text-black p-6 rounded-2xl shadow-xl max-w-lg mx-auto mb-10 relative z-10"
          >
            <h2 className="text-2xl font-bold mb-4 text-center text-teal-700">
              Add Your Product
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-teal-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-teal-500"
                required
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact Number"
                value={formData.contact}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-teal-500"
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-teal-500"
                required
              />
              <input
                type="text"
                name="productName"
                placeholder="Product Name"
                value={formData.productName}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-teal-500"
                required
              />
              <input
                type="file"
                name="images"
                accept="image/*"
                multiple
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white w-full py-2 rounded font-semibold hover:from-teal-600 hover:to-blue-600 transition"
              >
                Add Product
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product List */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {products.length === 0 ? (
          <p className="text-center col-span-3 text-gray-300 text-lg">
            No products available yet. Be the first to add! 🌱
          </p>
        ) : (
          products.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white text-black rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.03] transition-transform"
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col">
                {item.images.length > 0 && (
                  <motion.img
                    src={item.images[0]}
                    alt={item.productName}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 text-teal-700">
                    {item.productName}
                  </h3>
                  <p className="text-gray-700 mb-1">👨‍🌾 {item.name}</p>
                  <p className="text-gray-700 mb-1">📍 {item.location}</p>
                  <p className="text-gray-700 mb-3">📞 {item.contact}</p>
                  <a
                    href={`mailto:${item.email}`}
                    className="text-blue-600 underline hover:text-blue-800 transition"
                  >
                    Contact Seller
                  </a>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default FarmerSellingComunityPage;
