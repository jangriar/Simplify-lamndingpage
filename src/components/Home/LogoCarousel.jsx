import React, { useEffect, useRef } from "react";

const LogoCarousel = () => {
  const containerRef = useRef(null);
  const logos = [
    // { src: "https://cdn.prod.website-files.com/6643307d563d3d1613330141/6643307d563d3d1613330319_2.svg", className: "h-24 w-24" },
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

    const animate = () => {
      position -= 1;
      if (position <= -2500) {
        position = 0;
      }
      if (container) {
        container.style.transform = `translate3d(${position}px, 0px, 0px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="py-12 overflow-hidden">
      <div className="flex flex-col gap-6">
        <div className="text-center">
          <div className="font-bold tracking-widest text-sm">
            TRUSTED BY 5,000+ TEAMS
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div
            ref={containerRef}
            className="flex items-center will-change-transform"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="flex items-center gap-8 px-4">
              {logos.map((logo, index) => (
                <img
                  key={`logo-1-${index}`}
                  src={logo.src}
                  alt="Company logo"
                  className={`${logo.className} object-contain opacity-70 grayscale`}
                />
              ))}
            </div>
            <div className="flex items-center gap-8 px-4">
              {logos.map((logo, index) => (
                <img
                  key={`logo-2-${index}`}
                  src={logo.src}
                  alt="Company logo"
                  className={`${logo.className} object-contain opacity-70 grayscale`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
