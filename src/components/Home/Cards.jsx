import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { cards } from '@/utils/contants';

const AIAssistantCards = () => {


  return (
    <div className="flex flex-col mt-4 items-center w-full bg-gray-900 p-5 min-h-screen">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
        {cards.map((card, index) => (
         

          <div key={index} className="flex flex-col bg-gray-800 rounded-lg overflow-hidden p-3 h-full">
            <div className="bg-gray-800 rounded-lg overflow-hidden p-2 flex flex-col h-full">
              {/* Chat Preview Card */}
              <Link key={index} href={card.href} className="p-4 bg-gray-800 rounded-lg text-white">
              <div className="bg-black/20 rounded-lg p-3 flex flex-col flex-grow">

                  {/* Card Header with Profile */}
                  <div className="flex items-center mb-3">
                    <div className={`p-2 rounded-md ${card.color} mr-2`}>
                      {card.icon}
                    </div>
                    <span className="text-white   font-medium">AI Assistant</span>
                  </div>


                {/* Chat Preview */}
                <div className="flex-grow flex flex-col justify-between">
                  {/* User Message */}
                  <div className="bg-gray-700/30 rounded-lg p-2 text-white text-sm mb-1 ml-auto max-w-3/4">
                    {card.previewContent.userMessage}
                  </div>

                  {/* Bot Message */}
                  <div className="bg-blue-500/20 rounded-lg p-2 mt-2 text-white text-sm mr-auto max-w-3/4">
                    {card.previewContent.botMessage}
                  </div>
                </div>
              </div>
              </Link>

              {/* Card Footer */}
              <div className="text-center  mt-3">
                <h3 className=" font-bold text-blue-400 text-xl ">{card.title}</h3>
                <p className="text-sm">{card.subtitle}</p>
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default AIAssistantCards;