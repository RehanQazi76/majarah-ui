'use client';
import { motion } from 'framer-motion';
import { FaYoutube, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

export const Footer = () => {
  const fadeInUp = (delay = 0): any => ({
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  });

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeInUp(0)}
      className="relative z-10 text-white py-10 pb-12 px-6 md:px-0 items-center md:mt-50 bg-[linear-gradient(to_top_right,_#4899E3_-200%,_transparent_50%)]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Tagline */}
        <motion.div variants={fadeInUp(0.2)} initial="hidden" whileInView="show">
          <div className="space-y-6 md:items-start text-left items-center">
            <img
              src="/icons/majarahlogo.svg"
              alt="Majarah Logo"
              className="mx-auto w-60 h-auto"
            />
            <p className="text-sm text-gray-400 ml-20 md:ml-10 mt-2">
              Transform the Digital Experience
            </p>
            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition md:ml-24 ml-30 mt-4 inline-block"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={fadeInUp(0.4)}
          initial="hidden"
          whileInView="show"
          className="space-y-10 ml-4 md:ml-14"
        >
          <h4 className="font-poppins font-medium text-gray-200 mb-4">Quick Links</h4>
          <ul className="font-poppins font-medium space-y-5 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Services</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Our Work</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">The CEO</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Contact</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={fadeInUp(0.6)}
          initial="hidden"
          whileInView="show"
          className="space-y-3 ml-4 md:ml-14"
        >
          <h4 className="font-poppins font-medium text-gray-200 mb-4">Contact</h4>
          <ul className="font-poppins font-medium text-sm text-gray-400 space-y-5">
            <li className="hover:text-white transition-colors duration-300">info@majarah.co</li>
            <li className="hover:text-white transition-colors duration-300">www.majarah.co</li>
            <li className="hover:text-white transition-colors duration-300">
              Dubai,<br />United Arab Emirates
            </li>
          </ul>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={fadeInUp(0.8)}
          initial="hidden"
          whileInView="show"
          className="space-y-3 ml-4 md:ml-14"
        >
          <h4 className="font-poppins font-medium text-gray-200 mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-gray-400 text-xl">
            <FaYoutube className="hover:text-white transition-colors duration-300" />
            <FaInstagram className="hover:text-white transition-colors duration-300" />
            <FaFacebookF className="hover:text-white transition-colors duration-300" />
            <FaTiktok className="hover:text-white transition-colors duration-300" />
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.p
        variants={fadeInUp(1.0)}
        initial="hidden"
        whileInView="show"
        className="font-poppins font-medium text-xs text-gray-600 pt-6 text-center mt-10"
      >
        ©2025 Majarah Company, Inc. All rights reserved
      </motion.p>
    </motion.footer>
  );
};
