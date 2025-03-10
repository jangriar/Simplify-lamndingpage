import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-black text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-blue-500 text-2xl font-bold">Simplify</span>
          <span className="text-white text-2xl font-bold ml-2">AI</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="hover:text-blue-400 transition-colors">
            Features
          </a>
          <a
            href="#solutions"
            className="hover:text-blue-400 transition-colors"
          >
            Solutions
          </a>
          <a href="#pricing" className="hover:text-blue-400 transition-colors">
            Pricing
          </a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <a href="/login" className="hover:text-blue-400 transition-colors">
            Log in
          </a>
          <a
            href="/try-free"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Try Free
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
