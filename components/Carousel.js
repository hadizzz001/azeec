"use client";

import React from "react";

const MyCarousel = () => {
  return (
    <div className="relative w-full h-[750px] overflow-hidden">

      <img
        src="https://res.cloudinary.com/dvsbgovdg/image/upload/v1752251336/clipboard1_cqciso.webp"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover rounded-br-[120px]"
      />

      {/* <div className="absolute inset-0 z-10 pointer-events-none bg-black opacity-45" /> */}

      <div className="container relative z-10 flex flex-col items-start justify-center h-full p-4 text-left text-black mt-20"> 
        <h1 className="text-[44px] font-bold   animate-slideInLeft myWhite myTitle">AZEEC Electrical<br /> & Solar Solutions </h1><br/>
        <p className="text-[20px] mt-2 animate-slideInLeft delay-200 myWhite">
          We offer practical and best
          value solutions , carried out<br />
          with an exceptional level of
          professionalism,<br />
          commitment and delivery .
        </p>
        <a
          href="/projects"
          style={{ padding: "1em" }}
          className="mt-10 px-12 py-6 font-semibold transition-all duration-300 transform hover:scale-105 myGray33 rounded-[5px] inline-flex items-center gap-2"
        >
          Check More! <span>→</span>
        </a>

      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default MyCarousel;
