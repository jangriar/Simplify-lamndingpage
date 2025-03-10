import React from "react";
import { MAINLAYOUT } from "../Layout/types";
import DocsBotFullPage from "./UseCase";
import CustomerSupportShowcase from "./CustomerSupport";
import KnowledgeBotLanding from "./KnowledgeBot";
import ResearchAssistantPage from "./Research";
import HowItWorksSection from "./HowItWorkd";
import ContentSourcesSection from "./Teach";
import LogoCarousel from "./LogoCarousel";

const Home = () => {
  return (
    <>
      <div className="bg-[#131628] w-full text-white flex justify-center items-center min-h-screen p-4 font-sans relative">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container max-w-4xl text-center z-10">
          {/* Custom ChatGPT tag */}
          <div className="inline-flex rounded-full bg-[#1A1E33] overflow-hidden mb-8 slide-in-up">
            <div className="py-3 px-5">Custom ChatGPT</div>
            <div className="bg-[#27D7B0] text-[#131628] font-bold py-3 px-5">
              for your business!
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-8xl md:text-8xl font-bold font-inter leading-tight mb-2 slide-in-up">
            Instant AI Answers
          </h1>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight text-[#27D7B0] slide-in-up">
            from your Docs
          </h1>

          {/* Subtitle */}
          <p className="text-xl max-w-3xl mx-auto mt-8 mb-8 text-gray-300 leading-relaxed slide-in-up">
            Get instant answers for you, your customers, or your team with
            custom AI chatbots trained with your content and documentation.
          </p>

          {/* WebP Image */}
        </div>
      </div>
      <div className="my-10 text-center">
        <LogoCarousel />
        <div className="my-10 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">
            Our Integrations
          </h1>
          <h2 className="text-lg font-medium text-gray-600 mb-4">
            Enhance your AI chatbot with more features, workflows, and
            automations through plug-and-play integrations
          </h2>
        </div>

        <img
          src="/assets/icons.webp" // Replace with the actual path to your WebP image
          alt="Description of the image" // Provide a meaningful alt text
          className="mt-8 max-w-full h-auto" // Optional: Add classes for styling
        />
      </div>
      <div className="mb-8">
        <DocsBotFullPage />
      </div>
      <div className="mb-8">
        <CustomerSupportShowcase />
      </div>
      <div className="mb-8">
        <KnowledgeBotLanding />
      </div>
      <div className="mb-8">
        <ResearchAssistantPage />
      </div>
      <div className="mb-8">
        <HowItWorksSection />
      </div>
      <div className="mb-8">
        <ContentSourcesSection />
      </div>
    </>
  );
};

export default Home;
Home.Layout = MAINLAYOUT;
