import React from "react";

const ResearchAssistantPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <header className="mb-12">
          <p className="text-cyan-600 font-medium tracking-wide uppercase text-sm mb-4">
            RESEARCH ASSISTANT & DOCUMENT Q&A BOTS
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Accelerate Research
              <span className="block">with Fast Reference</span>
              <span className="block">Discovery</span>
            </h1>

            <p className="text-gray-700 mb-8">
              Transform your research process with AI-powered document analysis
              and insight generation. Quickly find relevant information and
              discover hidden connections across your entire document library.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-cyan-600 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Instant Reference Discovery
                  </h3>
                  <p className="text-gray-700">
                    Quickly surface relevant citations, data points, and
                    research materials from your document library. Save hours of
                    manual searching and cross-referencing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-cyan-600 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Comprehensive Analysis
                  </h3>
                  <p className="text-gray-700">
                    Get detailed insights and connections across your research
                    materials. Our AI helps identify patterns and relationships
                    you might have missed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-cyan-600 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Content Repurposing
                  </h3>
                  <p className="text-gray-700">
                    Transform existing content into new formats and insights.
                    Extract key findings and data to create summaries,
                    presentations, or training materials.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 w-full md:w-auto">
                Accelerate Your Research & Copywriting
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-cyan-600 rounded-lg p-4 shadow-lg">
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="flex flex-col">
                  <div className="bg-cyan-600 p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-cyan-500 rounded-md p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 8v4"></path>
                          <path d="M12 16h.01"></path>
                        </svg>
                      </div>
                      <p className="text-white text-sm">
                        What's the best way to handle politics?
                      </p>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="bg-cyan-100 rounded-md p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-700 text-sm mb-2">
                          The content provided does not offer a definitive
                          answer to the question of how to handle politics, but
                          it does present various perspectives on the topic.
                          Here are some insights drawn from the articles:
                        </p>
                        <ol className="space-y-4 mt-4">
                          <li>
                            <p className="font-medium">
                              Engagement vs. Apathy:
                            </p>
                            <p className="text-sm text-gray-700">
                              One perspective suggests that while it may be
                              tempting to disengage from politics due to its
                              complexities and frustrations, it's important to
                              recognize that politics affects our daily lives
                              and should not be ignored.
                            </p>
                          </li>
                          <li>
                            <p className="font-medium">Seeking Justice:</p>
                            <p className="text-sm text-gray-700">
                              Many contributors emphasize the importance of
                              seeking justice in political decisions. This
                              includes considering how our choices impact
                              society and striving for outcomes that promote
                              fairness and equity.
                            </p>
                          </li>
                          <li>
                            <p className="font-medium">Respectful Discourse:</p>
                            <p className="text-sm text-gray-700">
                              Engaging in respectful conversations about
                              differing political views is encouraged. It's
                              important to listen to others and...
                            </p>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 border-t border-gray-200 p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-600">
                    <div>
                      <p>
                        Sources: Politics, Poverty, and Policy - The Average
                        American
                      </p>
                      <p>
                        God and Politics Panel Has To Do With Policy? - The
                        Average American
                      </p>
                      <p>
                        Justice, God and Politics Guest Post - The Average
                        American
                      </p>
                    </div>
                    <div>
                      <p>
                        Analysis Manual: Politics As A Christian - The Average
                        American
                      </p>
                      <p>
                        God & Politics Guest Post GIVEN Sunday - The Average
                        American
                      </p>
                      <p>
                        God & Politics Guest Post WITH Sunday - The Average
                        American
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-4 right-4">
          <button className="bg-cyan-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span className="ml-2 font-medium">Help</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResearchAssistantPage;
