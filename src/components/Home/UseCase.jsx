import React, { useState, useEffect, useRef } from "react";

const TypewriterText = ({ text, speed = 30, onComplete }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return <span>{displayText}</span>;
};

const DocsBotFullPage = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentTypingMessageId, setCurrentTypingMessageId] = useState(null);
  const messagesEndRef = useRef(null);

  // Initial bot message
  useEffect(() => {
    const initialMessage = {
      id: 1,
      sender: "bot",
      text: "How can I help you today? If I can't answer your question I'll help you open a support ticket.",
      isTyping: true,
    };
    setMessages([initialMessage]);
    setCurrentTypingMessageId(1);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userInput.trim()) return;

    // Add user message
    const newMessages = [
      ...messages,
      {
        id: messages.length + 1,
        sender: "user",
        text: userInput,
      },
    ];

    setMessages(newMessages);
    setUserInput("");

    // Simulate bot response after a short delay
    setIsTyping(true);
    setTimeout(() => {
      let botResponse =
        "DocsBot AI is a tool that allows you to create custom chatbots from your documentation. It is designed to help users find answers to their questions by training the bot on your own content library. This makes it a powerful tool for providing customer support and improving user engagement with your documentation.";

      // If the user asks about DocsBot, give them a specific response
      if (userInput.toLowerCase().includes("docsbot")) {
        botResponse =
          "DocsBot AI is a tool that allows you to create custom chatbots from your documentation. It is designed to help users find answers to their questions by training the bot on your own content library. This makes it a powerful tool for providing customer support and improving user engagement with your documentation.";
      }

      const botMessageId = newMessages.length + 1;
      setMessages([
        ...newMessages,
        {
          id: botMessageId,
          sender: "bot",
          text: botResponse,
          isTyping: true,
        },
      ]);
      setCurrentTypingMessageId(botMessageId);
    }, 1000);
  };

  const handleTypingComplete = (messageId) => {
    setMessages(
      messages.map((msg) =>
        msg.id === messageId ? { ...msg, isTyping: false } : msg
      )
    );
    setIsTyping(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <div className="text-sm font-medium text-blue-500 mb-2">USE CASES</div>
        <h1 className="text-4xl font-bold mb-6">
          AI Solutions to Real Business Problems
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Unlock the potential of your existing content with AI-driven chatbots.
          Automate customer journeys—leads, presales, onboarding, support, and
          retention. Empower your team with instant access to knowledge,
          repurpose content for marketing and sales, and speed up research—all
          with DocsBot.
        </p>
      </div>
      {/* Header/Navigation */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="text-blue-500 text-sm font-bold tracking-widest">
            CUSTOMER FACING BOTS
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Left column - Marketing content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Instant Responses to Customer Queries, 24/7
            </h1>

            <p className="text-gray-700 mb-8">
              Transform your pre-sales and customer support with AI-powered
              chatbots that understand your business. Provide instant, accurate
              responses while reducing costs and improving customer
              satisfaction.
            </p>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-teal-500 rounded-full p-1 mr-3">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">
                    Reduce Support Workload
                  </h3>
                  <p className="text-gray-700">
                    Automatically handle common customer inquiries 24/7,
                    reducing wait times and enabling smooth handovers to human
                    support when needed.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-teal-500 rounded-full p-1 mr-3">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">
                    Consistent & Accurate
                  </h3>
                  <p className="text-gray-700">
                    Deliver precise, consistent answers based on your
                    documentation, ensuring customers always receive reliable
                    information.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-teal-500 rounded-full p-1 mr-3">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">
                    Scale Your Support
                  </h3>
                  <p className="text-gray-700">
                    Handle unlimited concurrent conversations while maintaining
                    high satisfaction rates and building customer loyalty.
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-8 bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-md transition duration-300 w-full sm:w-auto">
              Get Instant Answers
            </button>
          </div>

          {/* Right column - Chat interface */}
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
              {/* Chat header */}
              <div className="bg-blue-500 text-white p-4 rounded-t-lg">
                <h2 className="text-xl font-bold text-center">DocsBot AI</h2>
                <p className="text-sm text-center">
                  Ask our AI support assistant your questions about our
                  services.
                </p>
              </div>

              {/* Chat messages */}
              <div className="h-96 overflow-y-auto p-4 bg-gray-50">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`mb-4 flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    {message.sender === "bot" && (
                      <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center mr-2 flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    )}
                    <div
                      className={`max-w-xs p-3 rounded-lg ${
                        message.sender === "user"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-blue-200 text-blue-900"
                      }`}
                    >
                      {message.isTyping &&
                      message.id === currentTypingMessageId ? (
                        <TypewriterText
                          text={message.text}
                          onComplete={() => handleTypingComplete(message.id)}
                        />
                      ) : (
                        <span>{message.text}</span>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input form */}
              <form onSubmit={handleSubmit} className="p-4 border-t">
                <div className="flex items-center">
                  <input
                    type="text"
                    value={userInput}
                    onChange={handleUserInput}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={isTyping}
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={isTyping}
                  >
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
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DocsBotFullPage;
