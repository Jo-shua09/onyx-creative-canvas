
import React from 'react';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Creative solutions to complex technical challenges"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Working effectively with teams and stakeholders"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Optimizing applications for speed and user experience"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text */}
          <div className="animate-on-scroll-left">
            <h2 className="text-4xl md:text-5xl font-bold text-portfolio-dark mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                I'm a passionate full-stack developer with over 3 years of experience creating 
                innovative web applications. My journey in tech started with a curiosity about 
                how things work, which evolved into a love for building digital solutions that 
                make a difference.
              </p>
              
              <p>
                I specialize in modern JavaScript frameworks, cloud technologies, and creating 
                seamless user experiences. When I'm not coding, you'll find me exploring new 
                technologies, contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>
              
              <p>
                I believe in writing clean, maintainable code and following best practices. 
                My goal is to create applications that not only function flawlessly but also 
                provide exceptional user experiences.
              </p>
            </div>

            <div className="mt-8">
              <button className="px-6 py-3 bg-portfolio-teal text-white rounded-lg hover:bg-portfolio-teal/80 transition-all duration-300 hover-lift font-semibold">
                Download Resume
              </button>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="animate-on-scroll-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-portfolio-teal/10 rounded-lg flex items-center justify-center text-portfolio-teal mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-portfolio-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-portfolio-cream/20 rounded-lg">
                <div className="text-2xl font-bold text-portfolio-dark">50+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center p-4 bg-portfolio-cream/20 rounded-lg">
                <div className="text-2xl font-bold text-portfolio-dark">3+</div>
                <div className="text-sm text-gray-600">Years Exp</div>
              </div>
              <div className="text-center p-4 bg-portfolio-cream/20 rounded-lg">
                <div className="text-2xl font-bold text-portfolio-dark">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
