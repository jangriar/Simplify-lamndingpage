const DocsBotFullPage = () => {
  const [messages, setMessages] = useState([]);
  const [chatInitialized, setChatInitialized] = useState(false);
  const messagesEndRef = useRef(null);
  const chatSectionRef = useRef(null);

  // Predefined conversation script
  const conversationScript = [
    {
      sender: "bot",
      text: "How can I help you today? If I can't answer your question I'll help you open a support ticket.",
    },
    {
      sender: "user",
      text: "What is DocsBot AI?",
    },
    {
      sender: "bot",
      text: "DocsBot AI is a tool that allows you to create custom chatbots from your documentation. It is designed to help users find answers to their questions by training the bot on your own content library. This makes it a powerful tool for providing customer support and improving user engagement with your documentation.",
    },
  ];

  // Initialize chat only when the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !chatInitialized) {
            // Start the auto-playing conversation when section is visible
            setChatInitialized(true);
            playConversation();
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the chat section is visible
    );

    if (chatSectionRef.current) {
      observer.observe(chatSectionRef.current);
    }

    return () => {
      if (chatSectionRef.current) {
        observer.unobserve(chatSectionRef.current);
      }
    };
  }, [chatInitialized]);


  // Function to play through the conversation automatically
  const playConversation = () => {
    let currentIndex = 0;
    let messageId = 1;

    const displayNextMessage = () => {
      if (currentIndex < conversationScript.length) {
        const currentMessage = conversationScript[currentIndex];

        // Add message to chat
        const newMessage = {
          id: messageId,
          sender: currentMessage.sender,
          text: currentMessage.text,
          isTyping: currentMessage.sender === "bot",
        };

        setMessages((prevMessages) => [...prevMessages, newMessage]);
        messageId++;
        currentIndex++;

        // Schedule next message with appropriate timing
        const delay =
          currentMessage.sender === "bot"
            ? currentMessage.text.length * 30 + 1000 // Longer delay for bot (typing effect)
            : 2000; // Shorter delay for user messages

        setTimeout(() => {
          // Mark typing as complete for bot messages
          if (newMessage.sender === "bot") {
            setMessages((prevMessages) =>
              prevMessages.map((msg) =>
                msg.id === newMessage.id ? { ...msg, isTyping: false } : msg
              )
            );
          }

          // Schedule next message
          setTimeout(displayNextMessage, 1000);
        }, delay);
      }
    };

    // Start the conversation
    displayNextMessage();
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
     
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="text-blue-500 text-sm font-bold tracking-widest">
            CUSTOMER FACING BOTS
          </div>
        </div>
      </header>

      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
       
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

       
          <div ref={chatSectionRef} className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
             
              <div className="bg-blue-500 text-white p-4 rounded-t-lg">
                <h2 className="text-xl font-bold text-center">DocsBot AI</h2>
                <p className="text-sm text-center">
                  Watch how our AI support assistant answers questions about our
                  services.
                </p>
              </div>

        
              <div className="h-[440px] overflow-y-auto p-4 bg-gray-50">
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
                      {message.isTyping ? (
                        <TypewriterText
                          text={message.text}
                          onComplete={() => {
                            setMessages((prevMessages) =>
                              prevMessages.map((msg) =>
                                msg.id === message.id
                                  ? { ...msg, isTyping: false }
                                  : msg
                              )
                            );
                          }}
                        />
                      ) : (
                        <span>{message.text}</span>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              
              <div className="p-4 border-t bg-gray-100">
                <div className="flex items-center justify-center">
                  <p className="text-gray-500 text-sm text-center">
                    This is a demonstration of an automated conversation with
                    DocsBot AI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};