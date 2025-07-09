
import React from 'react';
import { Code, Lightbulb, Users, Zap, Award, Coffee } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Creative solutions to complex technical challenges with innovative thinking"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working effectively with teams and stakeholders to achieve common goals"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing applications for lightning-fast speed and exceptional user experience"
    }
  ];

  return (
    <section id="about" className="py-24 bg-portfolio-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-portfolio-teal/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-portfolio-cream/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column - Text */}
          <div className="animate-on-scroll-left">
            <h2 className="text-5xl md:text-6xl font-bold text-portfolio-cream mb-8">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <div className="space-y-8 text-portfolio-cream/80 leading-relaxed text-lg stagger-children">
              <p className="animate-fade-up">
                I'm a passionate full-stack developer with over 3 years of experience creating 
                innovative web applications that push the boundaries of what's possible. My journey 
                in tech started with a curiosity about how things work, which evolved into a love 
                for building digital solutions that make a real difference.
              </p>
              
              <p className="animate-fade-up">
                I specialize in modern JavaScript frameworks, cloud technologies, and creating 
                seamless user experiences that delight users. When I'm not coding, you'll find me 
                exploring new technologies, contributing to open-source projects, or sharing 
                knowledge with the developer community.
              </p>
              
              <p className="animate-fade-up">
                I believe in writing clean, maintainable code and following industry best practices. 
                My goal is to create applications that not only function flawlessly but also 
                provide exceptional user experiences that users love to interact with.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-6">
              <button className="group px-8 py-4 bg-portfolio-teal text-portfolio-cream rounded-xl hover:bg-portfolio-teal/80 transition-all duration-500 hover-lift font-bold relative overflow-hidden">
                <span className="relative z-10 flex items-center space-x-2">
                  <Award size={20} />
                  <span>Download Resume</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-portfolio-teal to-portfolio-cream opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </button>
              
              <button className="group px-8 py-4 border-2 border-portfolio-cream/30 text-portfolio-cream rounded-xl hover:border-portfolio-cream hover:bg-portfolio-cream/10 transition-all duration-500 hover-lift font-bold">
                <span className="flex items-center space-x-2">
                  <Coffee size={20} />
                  <span>Let's Chat</span>
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="animate-on-scroll-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 stagger-children">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group p-8 bg-portfolio-dark border-2 border-portfolio-teal/20 rounded-2xl hover:border-portfolio-teal/50 transition-all duration-500 hover-lift hover-glow relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-portfolio-teal/5 to-portfolio-cream/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-portfolio-teal/20 rounded-2xl flex items-center justify-center text-portfolio-teal mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:animate-wiggle">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-portfolio-cream mb-4 group-hover:text-portfolio-teal transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-portfolio-cream/70 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 animate-on-scroll-scale">
              <div className="text-center p-6 bg-portfolio-teal/10 border border-portfolio-teal/30 rounded-2xl hover-lift hover-glow">
                <div className="text-4xl font-bold text-portfolio-teal mb-2 animate-wiggle">50+</div>
                <div className="text-sm text-portfolio-cream/70 font-medium">Projects</div>
              </div>
              <div className="text-center p-6 bg-portfolio-cream/10 border border-portfolio-cream/30 rounded-2xl hover-lift hover-glow">
                <div className="text-4xl font-bold text-portfolio-cream mb-2 animate-wiggle" style={{ animationDelay: '0.2s' }}>3+</div>
                <div className="text-sm text-portfolio-cream/70 font-medium">Years Exp</div>
              </div>
              <div className="text-center p-6 bg-portfolio-teal/10 border border-portfolio-teal/30 rounded-2xl hover-lift hover-glow">
                <div className="text-4xl font-bold text-portfolio-teal mb-2 animate-wiggle" style={{ animationDelay: '0.4s' }}>100%</div>
                <div className="text-sm text-portfolio-cream/70 font-medium">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
