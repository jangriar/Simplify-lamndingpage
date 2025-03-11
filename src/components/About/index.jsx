// components/AboutUs.jsx
import React from 'react';
import { Sparkles, Users, Lightbulb, Rocket, Code } from 'lucide-react';

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Sparkles className="text-indigo-600 h-10 w-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">About <span className="text-indigo-600">Simplify AI</span></h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where innovation meets conversation
          </p>
        </div>
        <div className="bg-indigo-600 text-white rounded-xl shadow-lg p-10 max-w-5xl mx-auto mb-16">
          <div className="flex items-start gap-6">
            <div className="hidden md:block">
              <Code className="h-12 w-12" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg mb-4">
                At Simplify AI, we believe in creating seamless, intuitive experiences that make technology feel more human. From small startups to large enterprises, we empower businesses of all sizes to communicate smarter and faster.
              </p>
              <p className="text-lg">
                Our solutions are designed to provide real-time, accurate, and engaging conversations that drive better outcomes for your business.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        {/* <div className="max-w-4xl mx-auto mb-20 text-center bg-white rounded-xl shadow-md p-8 transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            To revolutionize how humans interact with technology through intelligent, user-friendly chatbots.
            Whether you're looking to enhance customer service, streamline operations, or provide a personalized user experience,
            our chatbots are here to help.
          </p>
        </div> */}

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="bg-indigo-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Users className="text-indigo-600 h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
            <p className="text-gray-700">
              We are a team of passionate developers, designers, and AI enthusiasts dedicated to bringing cutting-edge chatbot technology to businesses and individuals.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="bg-indigo-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Lightbulb className="text-indigo-600 h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">AI Excellence</h3>
            <p className="text-gray-700">
              With years of expertise in artificial intelligence and natural language processing, we've built chatbots that understand, learn, and evolve with each interaction.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="bg-indigo-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Rocket className="text-indigo-600 h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation Focus</h3>
            <p className="text-gray-700">
              We are committed to continuous innovation, ensuring our chatbots stay ahead of the curve, and our users always get the best.
            </p>
          </div>
        </div>

        {/* Vision Statement */}
       

        {/* CTA */}
        {/* <div className="text-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            Explore Our Solutions
          </button>
          <p className="mt-4 text-gray-600">
            Discover how we can help you achieve greater success
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default About;