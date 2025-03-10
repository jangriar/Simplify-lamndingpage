import React, { useState } from "react";

const CustomerSupportShowcase = () => {
  const [messageText, setMessageText] = useState("");
  const [subject, setSubject] = useState("Offers and discounts");

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 max-w-6xl mx-auto">
      {/* Chat Widget Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-teal-500 text-white p-6 rounded-t-lg text-center relative">
            <h3 className="text-xl font-semibold mb-2">Send a message</h3>
            <p className="text-2xl font-bold mb-2">How can we help?</p>
            <p className="text-sm">We usually respond in a few hours</p>
            <div
              className="absolute bottom-0 left-0 right-0 h-12 bg-teal-500"
              style={{
                borderRadius: "100% 100% 0 0 / 100% 100% 0 0",
                transform: "translateY(50%)",
              }}
            ></div>
          </div>

          <div className="p-6 pt-8">
            <div className="mb-4">
              <label className="block text-gray-500 mb-2">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-500 mb-2">
                How can we help?
              </label>
              <div className="relative">
                <textarea
                  rows={4}
                  value={
                    messageText ||
                    "I'd like to know more about your offers and discounts for a big team."
                  }
                  onChange={(e) => setMessageText(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <div className="absolute bottom-2 right-2 flex gap-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <button className="w-full py-3 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 transition">
              Send a message
            </button>

            <div className="flex justify-center mt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Enhance Support Quality with AI-Powered Excellence
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Transform your customer support from reactive to proactive. Our
          AI-powered bots deliver instant, accurate responses 24/7, ensuring
          consistent quality while dramatically reducing response times and
          support costs.
        </p>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 text-teal-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Minimize Repetitive Tasks
              </h3>
              <p className="text-gray-600">
                Free your support team from answering the same questions
                repeatedly. Let AI handle routine inquiries while your agents
                focus on complex, high-value interactions that require human
                expertise.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 text-teal-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Better Resource Allocation
              </h3>
              <p className="text-gray-600">
                Optimize your support operations with first-contact resolution
                and seamless human handovers. Our AI ensures questions are
                answered instantly, accurately, or escalated to a human when
                needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupportShowcase;
