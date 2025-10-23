import React from "react";
import { Link } from "react-router";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="w-10/12 mx-auto py-10 flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 pb-5">
          <div>
            <h2 className="text-2xl font-bold text-[#ff6f61]">PlayNest</h2>
            <p className="text-gray-500 mt-2 text-sm">
              A joyful toy marketplace for kids — fun, safe, and local.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold mb-3 text-gray-800">ABOUT</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#">PlayNest</a>
                </li>
                <li>
                  <a href="#">Our Sellers</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-gray-800">FOLLOW US</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://github.com" target="_blank">
                    Github
                  </a>
                </li>
                <li>
                  <a href="https://discord.com" target="_blank">
                    Discord
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-gray-800">LEGAL</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm pt-8  border-t-2 border-gray-300">
          <p>© 2025 PlayNest™. All Rights Reserved.</p>

          <div className="flex gap-5 text-xl text-gray-600">
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-[#1877f2]"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-[#e4405f]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="hover:text-[#1da1f2]"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="hover:text-black"
            >
              <FaGithub />
            </a>
            <a href="#" className="hover:text-gray-800">
              <FaGlobe />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
