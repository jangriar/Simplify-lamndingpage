import React, { useEffect, useRef } from "react";

const LogoCarousel = () => {
  const containerRef = useRef(null);
  const logos = [
    {
      src: "https://cdn.prod.website-files.com/6643307d563d3d1613330141/6643307d563d3d1613330319_2.svg",
      className: "h-24 w-24",
    },
    {
      src: "https://cdn.prod.website-files.com/6643307d563d3d1613330141/6643307d563d3d1613330318_23.svg",
      className: "h-20 w-32",
    },
    {
      src: "https://cdn.prod.website-files.com/6643307d563d3d1613330141/6643307d563d3d161333031f_32.svg",
      className: "h-16 w-24",
    },
    {
      src: "https://cdn.prod.website-files.com/6643307d563d3d1613330141/6643307d563d3d161333031b_43.svg",
      className: "h-20 w-32",
    },
    {
      src: "https://cdn.prod.website-files.com/6643307d563d3d1613330141/6643307d563d3d16133302f2_Deloitte.svg",
      className: "h-10 w-40",
    },
    {
      src: "https://cdn.prod.website-files.com/6643307d563d3d1613330141/6643307d563d3d16133302f3_Honeywell.svg",
      className: "h-10 w-36",
    },
    {
      src: "https://cdn.prod.website-files.com/6643307d563d3d1613330141/6643307d563d3d16133302f1_Cox%20Media.svg",
      className: "h-10 w-24",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    let animationId;
    let position = 0;
    
    // Calculate the width of a single set of logos
    const calculateWidth = () => {
      if (!container) return 0;
      const logoElements = container.querySelectorAll(".logo-item");
      let totalWidth = 0;
      logoElements.forEach((element, index) => {
        if (index < logos.length) { // Only count one set
          totalWidth += element.offsetWidth + 48; // Width + margin
        }
      });
      return totalWidth;
    };

    const animate = () => {
      const width = calculateWidth();
      if (width === 0) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      
      position -= 1;
      if (position <= -width) {
        position = 0;
      }
      
      if (container) {
        container.style.transform = `translate3d(${position}px, 0px, 0px)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    // Start animation after a slight delay to ensure DOM is ready
    setTimeout(() => {
      animationId = requestAnimationFrame(animate);
    }, 100);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-lg font-semibold text-gray-600">
            TRUSTED BY 5,000+ TEAMS
          </h2>
        </div>
        <div className="relative overflow-hidden">
          <div 
            ref={containerRef} 
            className="flex items-center"
            style={{ willChange: "transform" }}
          >
            {logos.map((logo, index) => (
              <div key={`first-${index}`} className="logo-item mx-6 flex-shrink-0">
                <img src={logo.src} alt={`Partner logo ${index + 1}`} className={logo.className} />
              </div>
            ))}
            {logos.map((logo, index) => (
              <div key={`second-${index}`} className="logo-item mx-6 flex-shrink-0">
                <img src={logo.src} alt={`Partner logo ${index + 1}`} className={logo.className} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;