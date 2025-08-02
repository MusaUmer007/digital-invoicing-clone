import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">
        {/* Digital Invoicing Section */}
        <div>
          <h3 className="text-xl font-bold mb-3">Digital Invoicing</h3>
          <p className="text-sm text-gray-300">
            Streamline your invoicing process with our digital solution. Fast,
            secure, and easy to use.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>About</li>
            <li>Pricing</li>
            <li>Book Demo</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Dashboard */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Dashboard</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Register</li>
            <li>Login</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Security</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Social Links</h4>
          <div className="flex space-x-4 mt-2">
            <FaInstagram className="text-xl hover:text-blue-500 transition" />
            <FaTwitter className="text-xl hover:text-blue-500 transition" />
            <FaFacebookF className="text-xl hover:text-blue-500 transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
