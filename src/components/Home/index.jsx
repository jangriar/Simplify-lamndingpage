import React from "react";
import { MAINLAYOUT } from "../Layout/types";
import DocsBotFullPage from "./UseCase";
import CustomerSupportShowcase from "./CustomerSupport";
import KnowledgeBotLanding from "./KnowledgeBot";
import ResearchAssistantPage from "./Research";
import HowItWorksSection from "./HowItWorkd";
import ContentSourcesSection from "./Teach";
import LogoCarousel from "./LogoCarousel";
import AIAssistantCards from "./Cards";
import { useRouter } from "next/router";
import About from "../About";
import TeamSection from "../OurTeam";

const Home = () => {
  const router = useRouter();

  const handleNavigation = (id) => {
    console.log('id', id)
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`); // Fallback in case the element is not rendered yet
    }
  };
  return (
    <>
      <div className="bg-[#131628] w-full text-white flex flex-col justify-center items-center min-h-screen p-2 font-sans relative">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container max-w-4xl text-center z-10 mt-6">
          {/* Custom ChatGPT tag */}
          <div className="inline-flex rounded-full bg-[#1A1E33] overflow-hidden mb-8 slide-in-up">
            <div className="py-3 px-5">Custom ChatGPT</div>
            <div className="bg-[#27D7B0] text-[#131628] font-bold py-3 px-5">
              for your business!
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-5xl font-bold font-inter leading-tight mb-2 slide-in-up">
            Simplifying your Experience with
          </h1>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight text-[#27D7B0] slide-in-up">
            AI, Cloud and Security
          </h1>

          {/* Subtitle */}
          <p className="text-xl max-w-3xl mx-auto mt-8 mb-8 text-gray-300 leading-relaxed slide-in-up">
            Get instant answers for you, your customers, or your team with
            custom AI chatbots trained with your content and documentation.
          </p>
          {/* WebP Image */}
        </div>

        <div className="mt-8 ">
          <AIAssistantCards />
        </div>
      </div>
      <section id="about">
        <div>
          <About />
        </div>

      </section>
      <div className="my-10 text-center">
        <LogoCarousel />
      </div>
      <div className="min-h-screen bg-gradient-to-br from-purple-800 to-indigo-900 text-white text-center p-8 pt-16">
        <div className="max-w-6xl mx-auto slide-in-up">
          <div className="mb-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-pink-400 font-normal">Seamless Integration,</span>
              <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-300">Endless Possibilities</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-10 leading-relaxed text-indigo-100">
              Connect Botronic to Your Favorite Tools on Both Ends, Facilitating a Flow of Information That Enhances Customer Experience.
            </p>
          </div>

          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold uppercase tracking-wider py-4 px-10 rounded-full mb-16 text-sm shadow-lg transform transition-transform hover:scale-105">
            Build your AI agent for free
          </button>

          <div className="relative h-auto md:h-50 lg:h-60 mx-auto">
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-auto z-20">
              <iframe
                src="https://lottie.host/embed/52d85b1c-c503-4254-aa8c-187875bdc274/5ZOISPuHCa.lottie"
                className="w-full h-96 md:h-128"
              />
            </div>
          </div>
        </div>
      </div>
    
      {/* <section className="my-4" id="aiSolution">
        <DocsBotFullPage />
      </section> */}
      <section className="my-8" id="support">
        <CustomerSupportShowcase />
      </section>
      <section className="my-8" id="boost">
        <KnowledgeBotLanding />
      </section>
      <section className="my-8" id="research">
        <ResearchAssistantPage />
      </section>
      <div className="my-8">
        <HowItWorksSection />
      </div>
      <div className="mb-8">
        <ContentSourcesSection />
      </div>
      {/* about us */}


      <section id="team">
        <div>
          {/* <TeamSection /> */}
        </div>

      </section>
    </>
  );
};

export default Home;
Home.Layout = MAINLAYOUT;
