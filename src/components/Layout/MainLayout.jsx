import Footer from "../Footer";
import { useEffect, useState } from "react";
import Header from "../Header";

const MainLayout = ({ children }) => {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  return (
    <>
      <div className="">
        <Header />
        <div>{children}</div>

        {/* <div className={`scrollToTopButton ${isVisible ? "visible" : ""}`}>
          <button
            className={`fixed bottom-0 hover:mb-[80px] hover:duration-300 right-0 rounded-s-full px-2 py-4 mr-5 mb-[71px] z-50 items-center flex gap-2`}
            onClick={scrollToTop}
          >
            <svg
              className="h-10 w-10 rounded-3xl p-1  bg-[#006d77]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(255,255,255,1)"
            >
              <path d="M13.0001 7.82843V20H11.0001V7.82843L5.63614 13.1924L4.22192 11.7782L12.0001 4L19.7783 11.7782L18.3641 13.1924L13.0001 7.82843Z"></path>
            </svg>
          </button>
        </div> */}

        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
