
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 98 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "REST APIs", level: 92 }
      ]
    },
    {
      title: "Tools & Other",
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 78 },
        { name: "AWS", level: 75 },
        { name: "Figma", level: 85 },
        { name: "Jest", level: 80 },
        { name: "Linux", level: 82 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 gradient-bg-alt relative overflow-hidden particles">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-portfolio-dark/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-portfolio-cream/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-portfolio-teal/10 rounded-full blur-2xl animate-spin-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-5xl md:text-6xl font-bold text-portfolio-cream mb-6">
            My <span className="gradient-text-alt">Skills</span>
          </h2>
          <p className="text-xl text-portfolio-cream/80 max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I wield to bring extraordinary ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 stagger-children">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="group bg-portfolio-dark/80 backdrop-blur-md border-2 border-portfolio-teal/20 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-700 hover-lift hover-glow animate-on-scroll"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-portfolio-teal/5 to-portfolio-cream/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-portfolio-cream mb-8 text-center group-hover:text-portfolio-teal transition-colors duration-300">
                  {category.title}
                </h3>
                
                <div className="space-y-8">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="animate-on-scroll" style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-portfolio-cream/90 font-semibold text-lg">{skill.name}</span>
                        <span className="text-portfolio-teal font-bold text-lg">{skill.level}%</span>
                      </div>
                      
                      <div className="relative w-full bg-portfolio-dark/50 rounded-full h-4 overflow-hidden border border-portfolio-teal/20">
                        <div 
                          className="h-full bg-gradient-to-r from-portfolio-teal via-portfolio-cream/50 to-portfolio-teal rounded-full transition-all duration-[1500ms] ease-out relative overflow-hidden"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5}s`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-portfolio-cream/30 to-transparent animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Technology Icons */}
        <div className="mt-20 animate-on-scroll">
          <h3 className="text-3xl font-bold text-portfolio-cream text-center mb-12">
            Technologies I Love Working With
          </h3>
          <div className="flex flex-wrap justify-center gap-6 stagger-children">
            {['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind', 'AWS', 'PostgreSQL', 'MongoDB'].map((tech, index) => (
              <div
                key={tech}
                className="group px-6 py-4 bg-portfolio-dark/60 backdrop-blur-md border-2 border-portfolio-cream/20 rounded-2xl hover:border-portfolio-cream shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift text-portfolio-cream font-bold hover-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="group-hover:text-portfolio-teal transition-colors duration-300">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
