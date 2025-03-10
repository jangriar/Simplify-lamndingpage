import React from "react";

const KnowledgeBotLanding = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="mb-10">
          <div className="text-teal-400 text-sm font-mono mb-2">
            INTERNAL KNOWLEDGE ACCESS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Boost Productivity Through Instant Information Access
          </h1>
          <p className="text-gray-300 mb-8 max-w-2xl">
            Transform how your team accesses information with AI-powered
            knowledge retrieval. Our internal documentation bots make finding
            answers as simple as asking a question, dramatically reducing time
            spent searching through documents and data from multiple sources.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 transition-colors text-white font-medium py-3 px-6 rounded-md w-full md:w-auto text-center">
            Boost Your Team Productivity
          </button>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Features */}
          <div className="space-y-8">
            <div className="feature">
              <div className="flex items-start mb-2">
                <div className="bg-teal-800 p-2 rounded-md mr-3">
                  <svg
                    className="w-5 h-5 text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2C5.59 2 2 5.59 2 10s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-7h2v5H9V9zm0-3h2v2H9V6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-teal-400">
                  Knowledge Retrieval
                </h3>
              </div>
              <p className="text-gray-300 ml-10">
                Instantly surface relevant information from your internal
                documentation, eliminating time spent searching through multiple
                systems and databases.
              </p>
            </div>

            <div className="feature">
              <div className="flex items-start mb-2">
                <div className="bg-teal-800 p-2 rounded-md mr-3">
                  <svg
                    className="w-5 h-5 text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2C5.59 2 2 5.59 2 10s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-7h2v5H9V9zm0-3h2v2H9V6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-teal-400">
                  Secure Access
                </h3>
              </div>
              <p className="text-gray-300 ml-10">
                Keep your sensitive information protected with enterprise-grade
                security while providing seamless access to authorized team
                members.
              </p>
            </div>

            <div className="feature">
              <div className="flex items-start mb-2">
                <div className="bg-teal-800 p-2 rounded-md mr-3">
                  <svg
                    className="w-5 h-5 text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2C5.59 2 2 5.59 2 10s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-7h2v5H9V9zm0-3h2v2H9V6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-teal-400">
                  Continuous Learning
                </h3>
              </div>
              <p className="text-gray-300 ml-10">
                Your bot automatically stays up-to-date as your documentation
                evolves, ensuring teams always have access to the latest
                information.
              </p>
            </div>
          </div>

          {/* Right Column - HR Bot Example */}
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="bg-white text-gray-800 rounded-lg p-4 mb-4">
              <h3 className="text-center font-semibold mb-1">
                Human Resources Bot
              </h3>
              <p className="text-center text-sm text-gray-600 mb-4">
                An advanced bot for Human Resources. It has been trained with a
                company employee manual and spreadsheet of employee data.
              </p>

              <div className="flex items-start mt-6">
                <div className="bg-gray-100 rounded-lg p-4 max-w-xs">
                  <p className="text-sm font-medium">
                    How many days of leave does a regular employee have?
                  </p>
                </div>
              </div>

              <div className="flex items-start mt-4">
                <div className="flex-shrink-0 mr-3">
                  <div className="bg-teal-600 rounded-full w-10 h-10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2C5.59 2 2 5.59 2 10s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
                    </svg>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 flex-1">
                  <p className="text-sm">
                    A regular full-time employee accrues four (4) hours of
                    personal leave each month, which totals up to six (6) days
                    per 12-month period. Additionally, employees earn vacation
                    time based on their years of employment.
                  </p>
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <div className="flex items-center">
                  <img
                    src="/api/placeholder/40/40"
                    alt="HR Representative"
                    className="w-10 h-10 rounded-full mr-2 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBotLanding;
