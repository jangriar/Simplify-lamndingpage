import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      {/* Main Footer Section */}
      <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Simplify AI</h2>
          <p className="text-gray-300 text-sm mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-2">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition"
            >
              <span className="text-lg">f</span>
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition"
            >
              <span className="text-lg">p</span>
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition"
            >
              <span className="text-lg">t</span>
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition"
            >
              <span className="text-lg">@</span>
            </a>
          </div>
        </div>

        {/* Pages */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-6">Pages</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="flex items-center">
                <span className="text-blue-400 mr-2">■</span>
                <span className="hover:text-gray-300 transition">Features</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span className="text-blue-400 mr-2">■</span>
                <span className="hover:text-gray-300 transition">Pricing</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span className="text-blue-400 mr-2">■</span>
                <span className="hover:text-gray-300 transition">Docs</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Free AI Tools */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-6">Free AI Tools</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="flex items-center">
                <span className="text-blue-400 mr-2">■</span>
                <span className="hover:text-gray-300 transition">
                  AI Text Humanizer
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span className="text-blue-400 mr-2">■</span>
                <span className="hover:text-gray-300 transition">
                  AI Text Paraphrase
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span className="text-blue-400 mr-2">■</span>
                <span className="hover:text-gray-300 transition">
                  YouTube Blog Post Generator
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span className="text-blue-400 mr-2">■</span>
                <span className="hover:text-gray-300 transition">
                  YouTube Summarize
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span className="text-blue-400 mr-2">■</span>
                <span className="hover:text-gray-300 transition">
                  Image Description Generator
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span className="text-blue-400 mr-2">■</span>
                <span className="hover:text-gray-300 transition">
                  Image Caption Generator
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span className="text-blue-400 mr-2">■</span>
                <span className="hover:text-gray-300 transition">
                  AI Prompt Library
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span className="text-blue-400 mr-2">■</span>
                <span className="hover:text-gray-300 transition">
                  AI Prompt Generator
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span className="text-blue-400 mr-2">■</span>
                <span className="hover:text-gray-300 transition">
                  Support Savings Calculator
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Comparisons */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-6">Comparisons</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="flex items-center">
                <span className="text-blue-400 mr-2">■</span>
                <span className="hover:text-gray-300 transition">
                  Chat.base Alternative
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span className="text-blue-400 mr-2">■</span>
                <span className="hover:text-gray-300 transition">
                  Custom GPT Alternative
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span className="text-blue-400 mr-2">■</span>
                <span className="hover:text-gray-300 transition">
                  Ada AI Alternative
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span className="text-blue-400 mr-2">■</span>
                <span className="hover:text-gray-300 transition">
                  Intercom FIN Alternative
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span className="text-blue-400 mr-2">■</span>
                <span className="hover:text-gray-300 transition">
                  Forethought AI Alternative
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span className="text-blue-400 mr-2">■</span>
                <span className="hover:text-gray-300 transition">
                  Open AI GPTs Alternative
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span className="text-blue-400 mr-2">■</span>
                <span className="hover:text-gray-300 transition">
                  My Ask AI Alternative
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span className="text-blue-400 mr-2">■</span>
                <span className="hover:text-gray-300 transition">
                  PDF.ai Alternative
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800 py-4 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-sm text-gray-400">
            Copyright © Simplify. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-gray-300 transition"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">·</span>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-gray-300 transition"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
