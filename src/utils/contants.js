import { MessageCircle, Users, Database, FileSearch } from 'lucide-react';  
  
  export const cards = [
    {
      title: "24x7",
      subtitle: "Customer Support",
      icon: <MessageCircle className="h-6 w-6 text-white" />,
      color: "bg-pink-500",
      profileImg: "/api/placeholder/40/40",
      previewContent: {
        userMessage: "I'd like to see my subscription status please.",
        botMessage: "I can help with that! You're eligible since it's been only 4 days."
      },
      href:'#aiSolution'
    },
    {
      title: "Automated",
      subtitle: "Employee Support",
      icon: <Users className="h-6 w-6 text-white" />,
      color: "bg-indigo-500",
      profileImg: "/api/placeholder/40/40",
      previewContent: {
        userMessage: "Hi there! Has the new hiring freeze been lifted?",
        botMessage: "You've used 7 leaves so far. You have 8 remaining for the year. "
      },
      href:'#support'
    },
    {
      title: "Research Assistant",
      subtitle: "Accelerate Research & Document Q&A",
      icon: <FileSearch className="h-6 w-6 text-white" />,
      color: "bg-green-500",
      profileImg: "/api/placeholder/40/40",
      previewContent: {
        userMessage: "Can you analyze these quarterly reports for trends?",
        botMessage: "After analyzing your reports, I've identified a 12% increase in customer."
      },
      href:'#research'
    }
  ];

  export const navLinks=[
    {
        name:'About Us',
        href:'#about'
    },
    {
        name:'Our Team',
        href:'#team'
    },
  
  ]