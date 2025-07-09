
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Code, Zap } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      
      heroRef.current.style.transform = `
        perspective(1500px) 
        rotateX(${y * 3}deg) 
        rotateY(${x * 3}deg) 
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
    <section id="home" className="min-h-screen flex items-center justify-center morphing-bg relative overflow-hidden particles">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-portfolio-teal/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-portfolio-cream/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-portfolio-teal/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '-1.5s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-portfolio-cream/12 rounded-full blur-2xl animate-spin-slow"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-8 h-8 border-2 border-portfolio-teal/30 rotate-45 animate-bounce-gentle"></div>
        <div className="absolute bottom-40 right-20 w-6 h-6 bg-portfolio-cream/20 rounded-full animate-pulse-ring"></div>
        <div className="absolute top-1/2 left-10 w-4 h-16 bg-gradient-to-b from-portfolio-teal/30 to-transparent animate-wiggle"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div ref={heroRef} className="transition-transform duration-300 ease-out">
          {/* Enhanced Profile Image with multiple animations */}
          <div className="mb-12 animate-scale-in">
            <div className="relative">
              <div className="w-56 h-56 mx-auto rounded-full bg-gradient-to-br from-portfolio-teal to-portfolio-cream p-2 animate-glow hover-glow">
                <div className="w-full h-full rounded-full bg-portfolio-dark flex items-center justify-center relative overflow-hidden">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-portfolio-cream to-portfolio-teal flex items-center justify-center text-portfolio-dark text-7xl font-bold animate-wiggle">
                    JO
                  </div>
                  
                  {/* Orbiting icons */}
                  <div className="absolute inset-0 animate-spin-slow">
                    <Code className="absolute top-4 left-1/2 transform -translate-x-1/2 text-portfolio-cream/60" size={16} />
                    <Zap className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-portfolio-teal/60" size={16} />
                  </div>
                </div>
              </div>
              
              {/* Pulse rings */}
              <div className="absolute inset-0 rounded-full border-2 border-portfolio-teal/30 animate-pulse-ring"></div>
              <div className="absolute inset-0 rounded-full border-2 border-portfolio-cream/20 animate-pulse-ring" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Enhanced Name and Title with text reveal */}
          <div ref={textRef} className="text-reveal stagger-children">
            <h1 className="text-6xl md:text-8xl font-bold text-portfolio-cream mb-6 animate-fade-up">
              <span>Joshua</span> <span className="gradient-text">Onyeka</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-portfolio-cream/90 mb-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <span className="gradient-text-alt">Full Stack Developer</span>
            </p>
            
            <p className="text-xl text-portfolio-cream/70 mb-12 max-w-3xl mx-auto animate-fade-up leading-relaxed" style={{ animationDelay: '0.5s' }}>
              Crafting exceptional digital experiences with cutting-edge technologies and innovative problem-solving
            </p>
          </div>

          {/* Enhanced CTA Buttons with advanced hover effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-up stagger-children" style={{ animationDelay: '0.7s' }}>
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-10 py-4 bg-portfolio-teal text-portfolio-cream rounded-xl hover:bg-portfolio-teal/80 transition-all duration-500 hover-lift font-bold text-lg relative overflow-hidden"
            >
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-portfolio-teal to-portfolio-cream opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-10 py-4 border-3 border-portfolio-cream text-portfolio-cream rounded-xl hover:bg-portfolio-cream hover:text-portfolio-dark transition-all duration-500 hover-lift font-bold text-lg relative overflow-hidden"
            >
              <span className="relative z-10">Let's Connect</span>
              <div className="absolute inset-0 bg-portfolio-cream transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>

          {/* Enhanced Social Links with animation delays */}
          <div className="flex justify-center space-x-8 mb-16 animate-fade-up stagger-children" style={{ animationDelay: '0.9s' }}>
            <a href="#" className="text-portfolio-cream hover:text-portfolio-teal transition-all duration-300 hover-lift hover-rotate group">
              <div className="p-3 rounded-full border-2 border-portfolio-cream/30 group-hover:border-portfolio-teal group-hover:bg-portfolio-teal/10">
                <Github size={28} />
              </div>
            </a>
            <a href="#" className="text-portfolio-cream hover:text-portfolio-teal transition-all duration-300 hover-lift hover-rotate group">
              <div className="p-3 rounded-full border-2 border-portfolio-cream/30 group-hover:border-portfolio-teal group-hover:bg-portfolio-teal/10">
                <Linkedin size={28} />
              </div>
            </a>
            <a href="#" className="text-portfolio-cream hover:text-portfolio-teal transition-all duration-300 hover-lift hover-rotate group">
              <div className="p-3 rounded-full border-2 border-portfolio-cream/30 group-hover:border-portfolio-teal group-hover:bg-portfolio-teal/10">
                <Mail size={28} />
              </div>
            </a>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="animate-bounce-gentle text-portfolio-cream hover:text-portfolio-teal transition-all duration-300 group"
        >
          <div className="flex flex-col items-center space-y-2">
            <ArrowDown size={36} className="group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm font-medium opacity-80">Scroll to explore</span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
