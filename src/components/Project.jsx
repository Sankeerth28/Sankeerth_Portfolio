import React from 'react';

const projects = [
  {
    name: 'Company Brain Agentic AI',
    title: (
      <>
        COMPANY BRAIN <span className="font-light italic text-gray-300 lowercase font-serif">ai</span><br />
        AGENTIC RAG SYSTEM
      </>
    ),
    description: "An enterprise RAG and multi-agent AI system designed to query, synthesize, and reason over internal company documents and knowledge bases using vector embeddings, LangChain, and LLM orchestration.",
    githubUrl: "https://github.com/Sankeerth28/company-brain-agentic-ai",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop"
  },
  {
    name: 'Classroom Attention Monitoring System',
    title: (
      <>
        CLASSROOM ATTENTION <br />
        MONITORING SYSTEM
      </>
    ),
    description: "A real-time computer vision and deep learning system utilizing OpenCV and convolutional neural networks to monitor student engagement, head pose, and facial attention metrics during live classroom sessions.",
    githubUrl: "https://github.com/Sankeerth28/Classroom-Attention-Monitering-System",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop"
  },
  {
    name: 'FitBuddy AI ChatBot',
    title: (
      <>
        FITBUDDY <span className="font-light italic text-gray-300 lowercase font-serif">ai</span><br />
        HEALTH CHATBOT
      </>
    ),
    description: "An AI-powered conversational fitness assistant built by fine-tuning BERT and GPT-2 models for personalized workout recommendations, nutrition advice, and real-time health query answering.",
    githubUrl: "https://github.com/Sankeerth28/FitBuddy-ChatBot",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2000&auto=format&fit=crop"
  },
  {
    name: 'CUDA Parallel Image Processing',
    title: (
      <>
        CUDA PARALLEL <br />
        IMAGE PROCESSING
      </>
    ),
    description: "High-performance GPU-accelerated image processing engine implemented in C++ and CUDA. Features parallel matrix transformations, custom CUDA kernel filters, and memory-bandwidth optimizations for high-throughput image conversion.",
    githubUrl: "https://github.com/Sankeerth28/CUDA-Based-Parallel-Image-Grayscale-Processing",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop"
  },
  {
    name: 'Lung Cancer Detection AI',
    title: (
      <>
        LUNG CANCER <br />
        DETECTION SYSTEM
      </>
    ),
    description: "A deep learning & medical image analysis pipeline utilizing deep convolutional neural networks (CNNs) for automated CT scan feature extraction and early nodule detection.",
    githubUrl: "https://github.com/Sankeerth28/Lung-Cancer-Detection-ImageProcessing",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop"
  },
  {
    name: 'NyayaSahayak AI Legal Assistant',
    title: (
      <>
        NYAYASAHAYAK <span className="font-light italic text-gray-300 lowercase font-serif">ai</span><br />
        LEGAL ASSISTANT
      </>
    ),
    description: "An NLP-powered legal intelligence tool enabling semantic retrieval across legal statutes, case summaries, and statutory documents using document embeddings and natural language search.",
    githubUrl: "https://github.com/Sankeerth28/NyayaSahayak",
    image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=2000&auto=format&fit=crop"
  }
];

const Project = ({ onCtaClick }) => {
  return (
    <div id="project" className="bg-[#050505] w-full text-white pt-10 md:pt-20 pb-16 md:pb-24 px-5 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto w-full">

        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start w-full z-10 gap-8 sm:gap-12 lg:gap-0 mb-12 sm:mb-20 lg:mb-32">

          {/* Left Giant Title */}
          <div className="w-full lg:w-7/12 overflow-visible">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[1.0] uppercase flex items-center gap-2 sm:gap-3 flex-wrap">
              Selected
              <span className="font-light italic text-gray-300 lowercase font-serif pr-2 sm:pr-4 pt-1 sm:pt-2 md:pt-4">work</span>
            </h2>
          </div>

          {/* Right Description */}
          <div className="w-full lg:w-4/12 flex flex-col items-start lg:mt-4">
            <p className="text-gray-300 text-xs sm:text-sm md:text-base font-light leading-relaxed mb-6 sm:mb-8">
              Featured AI/ML repositories and systems built by Sankeerth Naidu, covering Agentic RAG, Computer Vision, Deep Learning, CUDA Parallel Computing, and NLP.
            </p>
            <a href="https://github.com/Sankeerth28?tab=repositories" target="_blank" rel="noopener noreferrer" className="cursor-pointer px-5 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black font-medium text-xs md:text-sm hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors flex items-center gap-2">
              View All GitHub Repos
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </div>

        {/* Projects List - Alternating Layout */}
        <div className="flex flex-col gap-16 sm:gap-24 lg:gap-40 w-full">
          {projects.map((proj, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={proj.name} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between gap-8 sm:gap-12 lg:gap-16 w-full group`}>

                {/* Image Side */}
                <div className="w-full lg:w-6/12 overflow-hidden relative aspect-[16/10] bg-[#111] rounded-sm">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-5/12 flex flex-col items-start">
                  <span className="text-[#ccff00] text-xs md:text-sm font-bold tracking-widest uppercase mb-3 sm:mb-4">
                    0{idx + 1}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white leading-[1.1] uppercase mb-4 sm:mb-6">
                    {proj.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm md:text-base font-light leading-relaxed mb-6 sm:mb-10">
                    {proj.description}
                  </p>

                  <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                    <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer px-5 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black text-xs md:text-sm font-medium hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors inline-flex items-center gap-2">
                      GitHub Code
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <button onClick={onCtaClick} className="cursor-pointer px-5 py-2.5 rounded-full border border-white/30 text-white text-xs md:text-sm hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2">
                      Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Project;
