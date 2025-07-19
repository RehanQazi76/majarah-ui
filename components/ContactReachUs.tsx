'use client';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { useState } from 'react';

const ContactReachUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validate = () => {
    const newErrors: any = {};

    if (!formData.name || formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.message || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted!');
      // handle actual submission here
    }
  };

  return (
    <section id="contact" className="w-full py-0 px-6 md:px-20 relative z-20 md:mt-50 mt-30">
      {/* Heading */}
      <div className="text-center mb-25">
        <h2 className="text-5xl font-aeonik font-light text-white">
          Contact <span className="bg-gradient-to-r from-[#4899E3] to-[#8EC6FA] text-transparent bg-clip-text">Us</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 text-white flex flex-col-reverse md:flex-row">
        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:order-1 order-2"
        >
          <div className="text-gray-300 space-y-6 font-poppins text-sm">
            <div>
              <p className="text-lg text-white font-poppins font-regular">Email</p>
              <p className="mt-1 text-gray-400 font-poppins font-regular">info@majarah.co</p>
            </div>

            <div>
              <p className="text-lg text-white font-poppins font-regular">Phone</p>
              <p className="mt-1 text-gray-400 font-poppins font-regular">+971 50 123 4567</p>
            </div>

            <div>
              <p className="text-lg text-white font-poppins font-regular">Location</p>
              <p className="mt-1 text-gray-400 font-poppins font-regular">Dubai, United Arab Emirates</p>
            </div>
          </div>

          <div className="flex space-x-5 mt-8 text-xl text-gray-400">
            <FaYoutube className="hover:text-white transition" />
            <FaInstagram className="hover:text-white transition" />
            <FaFacebookF className="hover:text-white transition" />
            <FaTiktok className="hover:text-white transition" />
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 font-poppins md:order-2 order-1"
          autoComplete="off"
        >
          {/* Name */}
          <div className="relative group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              autoComplete="off"
              className="peer w-full bg-transparent border-0 border-b-2 border-gray-600 py-3 px-1 text-white placeholder-gray-400 focus:outline-none focus:border-[#4899E3] autofill:bg-transparent transition duration-300"
            />
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#4899E3] to-[#8EC6FA] transition-all duration-500 group-focus-within:w-full"></div>
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="relative group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              autoComplete="off"
              className="peer w-full bg-transparent border-0 border-b-2 border-gray-600 py-3 px-1 text-white placeholder-gray-400 focus:outline-none focus:border-[#4899E3] autofill:bg-transparent transition duration-300"
            />
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#4899E3] to-[#8EC6FA] transition-all duration-500 group-focus-within:w-full"></div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Message */}
          <div className="relative group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              required
              autoComplete="off"
              className="peer w-full bg-transparent border-0 border-b-2 border-gray-600 py-3 px-1 text-white placeholder-gray-400 focus:outline-none focus:border-[#4899E3] resize-none autofill:bg-transparent transition duration-300"
            />
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#4899E3] to-[#8EC6FA] transition-all duration-500 group-focus-within:w-full"></div>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="mt-6 px-6 py-2 bg-[linear-gradient(to_bottom,_#5AA5E9_-150%,_transparent_60%)] text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-[#5AA5E9] font-poppins font-regular"
          >
            Submit
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactReachUs;
