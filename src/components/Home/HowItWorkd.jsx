import React from "react";
import { Plus, Settings, MessageSquare, Rocket } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      icon: <Plus size={24} />,
      label: "CREATE",
      title: "Build your bot in minutes",
      description:
        "Configure your DocsBot with advanced privacy settings and choose from multiple AI models to perfectly match your needs and use case.",
    },
    {
      id: 2,
      icon: <Settings size={24} />,
      label: "TRAIN",
      title: "Upload your source data",
      description:
        "Easily import content from 37+ sources including docs, websites, cloud connections, and more. Our system automatically processes and indexes everything for optimal performance.",
    },
    {
      id: 3,
      icon: <MessageSquare size={24} />,
      label: "TEST & REFINE",
      title: "Fine-tune your bot's responses",
      description:
        "Interact with your DocsBot to ensure accuracy, adjust training data, and add custom instructions to handle edge cases. Get detailed logs and analytics to identify areas for improvement.",
    },
    {
      id: 4,
      icon: <Rocket size={24} />,
      label: "LAUNCH",
      title: "Deploy your bot anywhere",
      description:
        "Share your DocsBot via a dedicated chat interface, seamlessly embed it into your website, documentation, or help center, or connect to thousands of other apps via Zapier, Make, or our API.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-16 px-4 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-300">
            Create your own AI-powered documentation assistant in four simple
            steps - no coding or technical skills required. Our intuitive
            process lets anyone go from setup to launch in minutes while
            ensuring high-quality responses.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              {/* Icon */}
              <div
                className={`
                w-14 h-14 rounded mb-6 flex items-center justify-center
                ${
                  step.id === 1
                    ? "bg-cyan-500"
                    : step.id === 2
                    ? "bg-slate-600"
                    : step.id === 3
                    ? "bg-slate-600"
                    : "bg-slate-600"
                }
              `}
              >
                {step.icon}
              </div>

              {/* Label */}
              <div className="text-sm font-medium mb-3 tracking-widest text-cyan-500">
                {step.label}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-center">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-center text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
