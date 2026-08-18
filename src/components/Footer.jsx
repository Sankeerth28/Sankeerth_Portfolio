import footerBg from '../assets/Footer/Footer.png';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-10 sm:py-12 md:py-16 px-5 sm:px-8 md:px-16 min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-bottom w-full h-full scale-[1.2] sm:scale-[1.3] md:scale-[1.5] origin-bottom translate-y-[10%]"
          style={{ backgroundImage: `url(${footerBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col w-full h-full justify-between flex-1">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-6 sm:mb-8 gap-8 sm:gap-10">
          <div className="flex flex-col gap-4 sm:gap-6 w-full md:w-auto">
            <div>
              <p className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">Connect with me</p>
              <a href="mailto:sankeerth2004@gmail.com" className="text-lg sm:text-2xl md:text-5xl font-medium hover:text-[#ccff00] transition-colors break-all">
                sankeerth2004@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-gray-300 mt-2 sm:mt-4">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#service" className="hover:text-white transition-colors">Services</a>
              <a href="#project" className="hover:text-white transition-colors">Projects</a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end text-left md:text-right w-full md:w-auto mt-2 sm:mt-4 md:mt-0">
            <h3 className="text-base sm:text-lg md:text-2xl font-medium mb-1 sm:mb-2">Let's build something</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 max-w-xs">
              Open to AI/ML engineering roles, GenAI research, and innovative AI collaborations.
            </p>
            <a href="#contact" className="bg-white text-black px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium hover:bg-[#ccff00] transition-colors">
              Get in touch
            </a>
          </div>
        </div>

        {/* Middle Section - Socials */}
        <div className="flex flex-wrap justify-between items-center py-4 sm:py-6 border-t border-white/10 mb-2 sm:mb-4 text-xs sm:text-sm md:text-lg font-medium gap-4">
          <a href="https://www.linkedin.com/in/sankeerthnaidu" target="_blank" rel="noopener noreferrer" className="hover:text-[#ccff00] transition-colors">LinkedIn</a>
          <a href="https://github.com/Sankeerth28" target="_blank" rel="noopener noreferrer" className="hover:text-[#ccff00] transition-colors">GitHub</a>
          <a href="mailto:sankeerth2004@gmail.com" className="hover:text-[#ccff00] transition-colors">Email</a>
        </div>

        {/* Huge Text Section */}
        <div className="w-full text-center flex-1 flex items-center justify-center py-6 sm:py-10">
          <h1 className="text-[11vw] sm:text-[12vw] font-bold leading-none tracking-tighter text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
            SANKEERTH
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 mt-auto pt-4 sm:pt-6 gap-3">
          <p>© {new Date().getFullYear()} Sankeerth Naidu. All Rights Reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#project" className="hover:text-white transition-colors">Projects</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
