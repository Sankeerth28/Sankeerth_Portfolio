import React, { useEffect, useRef } from 'react';
import aboutImage from '../assets/about_section/user_profile.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const mlSkills = ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Machine Learning', 'Model Evaluation', 'Feature Engineering'];
const deepLearningSkills = ['PyTorch', 'TensorFlow', 'Neural Networks', 'Transformers', 'BERT'];
const genAISkills = ['Generative AI', 'LLM applications', 'RAG', 'LangChain', 'LlamaIndex', 'Sentence Transformers', 'FAISS', 'ChromaDB', 'Pinecone', 'Agentic AI'];
const appSkills = ['FastAPI', 'Streamlit', 'REST APIs', 'Git/GitHub', 'Docker', 'CUDA', 'ONNX'];

const aboutWords = [
  { text: 'Hey,' },
  { text: "I'm" },
  { text: 'Sankeerth Naidu.', className: 'font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400' },
  { text: 'An' },
  { text: 'AI/ML engineer' },
  { text: 'focused' },
  { text: 'on' },
  { text: 'building' },
  { text: 'practical' },
  { text: 'systems' },
  { text: 'across' },
  { text: 'Generative' },
  { text: 'AI,' },
  { text: 'RAG,' },
  { text: 'NLP,' },
  { text: 'and' },
  { text: 'Computer' },
  { text: 'Vision.' },
  { text: 'I' },
  { text: 'learn' },
  { text: 'by' },
  { text: 'building,' },
  { text: 'turning' },
  { text: 'ideas' },
  { text: 'into' },
  { text: 'working' },
  { text: 'AI' },
  { text: 'applications' },
  { text: 'using' },
  { text: 'Python,' },
  { text: 'FastAPI,' },
  { text: 'Sentence' },
  { text: 'Transformers,' },
  { text: 'and' },
  { text: 'vector' },
  { text: 'search' },
  { text: 'tools.' }
];

const About = () => {
  const textRef = useRef(null);
  const introMobileRef = useRef(null);
  const introDesktopRef = useRef(null);

  useEffect(() => {
    const headings = [introMobileRef.current, introDesktopRef.current];

    headings.forEach((heading) => {
      if (heading) {
        gsap.fromTo(
          heading,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    if (textRef.current) {
      const words = textRef.current.querySelectorAll('.word');
      gsap.fromTo(
        words,
        { color: '#52525b', opacity: 0.2 },
        {
          color: '#ffffff',
          opacity: 1,
          stagger: 0.08,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
            end: 'bottom 50%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section id="about" className="min-h-screen bg-[#050505] text-white pt-20 sm:pt-24 pb-0 px-5 sm:px-8 md:px-16 flex flex-col justify-between relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full z-10">
        <h2 ref={introMobileRef} className="lg:hidden text-center text-5xl sm:text-7xl md:text-[8rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-none mb-8 md:mb-16">
          Intro
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-center">
          <div className="relative group flex justify-center lg:justify-start pl-0 lg:pl-12">
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full transform -translate-y-4 scale-75 group-hover:scale-95 transition-transform duration-500 pointer-events-none"></div>
            <img
              src={aboutImage}
              alt="Sankeerth Naidu"
              className="w-48 sm:w-64 md:w-80 lg:w-96 max-h-[480px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] filter brightness-[1.02] contrast-[1.02] relative z-10 transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6 sm:space-y-8 z-10 w-full px-0 sm:px-2 md:px-0">
            <h2 ref={introDesktopRef} className="hidden lg:block text-[9rem] xl:text-[11rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-none">
              Intro
            </h2>
            <div className="relative bg-white/5 backdrop-blur-md p-5 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white/[0.07] transition-colors duration-300 text-center lg:text-left">
              <p ref={textRef} className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light">
                {aboutWords.map((wordObj, index) => (
                  <React.Fragment key={index}>
                    <span className={`word ${wordObj.className || ''}`}>
                      {wordObj.text}
                    </span>
                    {index < aboutWords.length - 1 && ' '}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col border-t border-white/5 bg-[#030303] py-4 mt-auto -mx-6 md:-mx-16">
        <div className="flex overflow-hidden whitespace-nowrap mb-2">
          <div className="flex animate-marquee w-max">
            {[...mlSkills, ...mlSkills, ...mlSkills, ...mlSkills].map((item, i) => (
              <div key={`ml-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee-reverse w-max">
            {[...deepLearningSkills, ...deepLearningSkills, ...deepLearningSkills, ...deepLearningSkills].map((item, i) => (
              <div key={`dl-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex overflow-hidden whitespace-nowrap mt-2">
          <div className="flex animate-marquee w-max">
            {[...genAISkills, ...genAISkills, ...genAISkills, ...genAISkills].map((item, i) => (
              <div key={`gen-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex overflow-hidden whitespace-nowrap mt-2">
          <div className="flex animate-marquee-reverse w-max">
            {[...appSkills, ...appSkills, ...appSkills, ...appSkills].map((item, i) => (
              <div key={`app-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
