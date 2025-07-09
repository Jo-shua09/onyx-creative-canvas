
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      
      heroRef.current.style.transform = `
        perspective(1000px) 
        rotateX(${y * 2}deg) 
        rotateY(${x * 2}deg) 
        translateZ(0)
      `;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-portfolio-teal/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-portfolio-cream/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-portfolio-teal/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '-1.5s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div ref={heroRef} className="transition-transform duration-100 ease-out">
          {/* Profile Image */}
          <div className="mb-8 animate-scale-in">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-portfolio-teal to-portfolio-cream p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-portfolio-dark flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-portfolio-cream to-portfolio-teal flex items-center justify-center text-portfolio-dark text-6xl font-bold">
                  JO
                </div>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-portfolio-cream mb-4 animate-fade-up">
            Joshua <span className="gradient-text">Onyeka</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-portfolio-cream/80 mb-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Full Stack Developer
          </p>
          
          <p className="text-lg text-portfolio-cream/60 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Crafting exceptional digital experiences with modern technologies and creative problem-solving
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-portfolio-teal text-white rounded-lg hover:bg-portfolio-teal/80 transition-all duration-300 hover-lift font-semibold"
            >
              View My Work
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-portfolio-cream text-portfolio-cream rounded-lg hover:bg-portfolio-cream hover:text-portfolio-dark transition-all duration-300 hover-lift font-semibold"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <a href="#" className="text-portfolio-cream hover:text-portfolio-teal transition-colors duration-300 hover-lift">
              <Github size={24} />
            </a>
            <a href="#" className="text-portfolio-cream hover:text-portfolio-teal transition-colors duration-300 hover-lift">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-portfolio-cream hover:text-portfolio-teal transition-colors duration-300 hover-lift">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="animate-bounce text-portfolio-cream hover:text-portfolio-teal transition-colors duration-300"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
