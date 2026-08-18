import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import centerImage from '../assets/hero_assets/user_suit_clean.png';

const Hero = ({ onPreloadComplete }) => {
  const [text, setText] = useState('SANKEERTH');
  const containerRef = useRef(null);
  const foregroundRef = useRef(null);
  const textRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Lock scroll during animation
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';

    const target = "PORTFOLIO";
    const start = "SANKEERTH";
    let iterations = 0;
    let intervalId;
    let timeoutId;

    const imageLoadPromise = new Promise((resolve) => {
      const img = new window.Image();
      img.src = centerImage;
      if (img.complete) {
        resolve();
      } else {
        img.onload = resolve;
        img.onerror = resolve;
      }
    });

    const delayPromise = new Promise((resolve) => {
      timeoutId = setTimeout(resolve, 1000);
    });

    let isMounted = true;

    Promise.all([imageLoadPromise, delayPromise]).then(() => {
      if (!isMounted) return;

      intervalId = setInterval(() => {
        setText(() => {
          let newText = target.split("").map((letter, index) => {
            if (index < Math.floor(iterations)) {
              return target[index];
            }
            if (index < start.length) {
              return start[index];
            }
            return "";
          }).join("");
          return newText;
        });

        if (iterations >= target.length) {
          clearInterval(intervalId);

          // GSAP Animation Sequence
          const tl = gsap.timeline({
            onComplete: () => {
              document.body.style.overflow = 'auto'; // Unlock scroll
              if (onPreloadComplete) onPreloadComplete(); // Unlock rest of website
            }
          });

          const isMobile = window.innerWidth < 768;

          // 1. Move central text container and foreground overlay up together
          tl.to([containerRef.current, foregroundRef.current], {
            top: isMobile ? "22%" : "45%",
            duration: 1.5,
            ease: "power3.inOut"
          }, "+=0.2");

          // 2. Fade and slide up Subtitle and Buttons
          tl.fromTo([subtitleRef.current, buttonsRef.current],
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out" },
            "-=1.0"
          );

          // 3. Slide image upward to position
          tl.fromTo(imageRef.current,
            { y: "100vh" },
            { y: 0, duration: 1.5, ease: "power3.out" },
            "-=1.2"
          );
        }
        iterations += 1 / 3;
      }, 50);
    });

    return () => {
      isMounted = false;
      document.body.style.overflow = 'auto';
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end justify-center bg-cover bg-center bg-no-repeat overflow-hidden max-w-full"
      style={{ background: 'radial-gradient(circle at center, #1c1c24 0%, #0c0c10 55%, #000000 100%)' }}
    >
      {/* 1. Backdrop Typography Layer (z-10 - BEHIND portrait) */}
      <div
        ref={containerRef}
        className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none select-none flex flex-col items-center justify-center w-full max-w-[95vw] md:w-max px-2 md:px-4 text-center"
      >
        <h1
          ref={textRef}
          className="text-[13vw] sm:text-[14vw] md:text-[11rem] lg:text-[13.5rem] xl:text-[15rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-none uppercase pr-1 md:pr-4"
        >
          {text}
        </h1>
      </div>

      {/* 2. Portrait Image Layer (z-20 - IN FRONT of PORTFOLIO text, BEHIND subtitle/buttons) */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full pointer-events-none flex items-end justify-center z-20 overflow-hidden translate-y-[100vh]"
      >
        <div className="w-full h-full flex items-end justify-center md:justify-start md:pl-[36%] lg:pl-[38%] xl:pl-[40%] pb-0">
          <img
            src={centerImage}
            alt="Sankeerth Naidu"
            className="h-[52vh] sm:h-[65vh] md:h-[82vh] lg:h-[86vh] max-h-[900px] w-auto object-contain hero-portrait-mask"
          />
        </div>
      </div>

      {/* 3. Foreground Subtitle & Buttons Overlay (z-30 - aligned to PORTFOLIO text box) */}
      <div
        ref={foregroundRef}
        className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none select-none w-full max-w-[92vw] md:w-max px-2 md:px-4 flex flex-col md:flex-row justify-between items-center md:items-start"
      >
        <div className="relative w-full flex flex-col items-center md:block">
          {/* Spacer element with identical typography dimensions */}
          <h1 className="text-[13vw] sm:text-[14vw] md:text-[11rem] lg:text-[13.5rem] xl:text-[15rem] font-black tracking-tighter invisible leading-none uppercase pr-1 md:pr-4">
            PORTFOLIO
          </h1>

          {/* Subtitle on mobile centered under text, desktop on LEFT directly under 'P' */}
          <div
            ref={subtitleRef}
            className="mt-3 md:mt-0 md:absolute md:-bottom-12 md:left-0 z-30 opacity-0 pointer-events-auto flex justify-center md:justify-start"
          >
            <p className="text-white text-base sm:text-2xl md:text-3xl lg:text-4xl drop-shadow-lg tracking-tight font-medium text-center md:text-left">
              <span className="font-bold text-white">AI/ML</span> <span className="font-light italic text-gray-300">Engineer</span>
            </p>
          </div>

          {/* Action buttons on mobile centered below subtitle, desktop on RIGHT directly under 'O' */}
          <div
            ref={buttonsRef}
            className="mt-3 md:mt-0 md:absolute md:-bottom-12 md:right-4 z-30 flex items-center justify-center md:justify-end gap-2 sm:gap-3 md:gap-4 opacity-0 pointer-events-auto"
          >
            <a
              href="#contact"
              className="group w-9 h-9 md:w-12 md:h-12 rounded-full border border-gray-400/30 flex items-center justify-center backdrop-blur-md bg-black/40 hover:bg-white/10 hover:border-gray-400/50 transition-all duration-300 cursor-pointer min-w-[36px] min-h-[36px]"
              aria-label="Contact Section"
            >
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-300 transition-transform duration-300 group-hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 7L7 17M7 17H16M7 17V8" />
              </svg>
            </a>

            <a
              href="#contact"
              className="px-4 py-1.5 md:px-6 md:py-2.5 rounded-full border border-gray-400/30 flex items-center justify-center backdrop-blur-md bg-black/40 hover:bg-white/10 hover:border-gray-400/50 transition-all cursor-pointer min-h-[36px]"
            >
              <span className="text-gray-200 text-xs sm:text-sm md:text-base italic font-light tracking-wider">Contact</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;





