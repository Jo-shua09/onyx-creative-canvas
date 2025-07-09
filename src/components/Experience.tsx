
import React from 'react';
import { Calendar, MapPin, Award, Trophy, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: [
        "Led development of microservices architecture serving 100k+ daily users",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Collaborated with product teams to deliver features ahead of schedule"
      ],
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "New York, NY",
      period: "2021 - 2022",
      type: "Full-time",
      description: [
        "Built and maintained web applications using React and Express.js",
        "Designed and implemented RESTful APIs with comprehensive documentation",
        "Optimized database queries improving application performance by 40%",
        "Worked directly with clients to gather requirements and deliver solutions"
      ],
      technologies: ["React", "Express.js", "MongoDB", "TypeScript"]
    },
    {
      title: "Frontend Developer",
      company: "Creative Agency",
      location: "Los Angeles, CA",
      period: "2020 - 2021",
      type: "Full-time",
      description: [
        "Developed responsive websites and web applications",
        "Collaborated with designers to implement pixel-perfect UI/UX",
        "Integrated third-party APIs and payment systems",
        "Maintained and updated existing client websites"
      ],
      technologies: ["JavaScript", "HTML/CSS", "Vue.js", "SASS"]
    },
    {
      title: "Junior Web Developer",
      company: "Local Web Solutions",
      location: "Remote",
      period: "2019 - 2020",
      type: "Part-time",
      description: [
        "Built websites for small businesses using modern web technologies",
        "Learned and applied best practices in web development",
        "Collaborated with team members on various client projects",
        "Gained experience with version control and project management tools"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      location: "California, USA",
      period: "2016 - 2020",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "President of Computer Science Club",
        "Completed capstone project on machine learning applications"
      ]
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "MongoDB Certified Developer",
    "Scrum Master Certification"
  ];

  return (
    <section id="experience" className="py-24 gradient-bg-alt relative overflow-hidden particles">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-portfolio-dark/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-portfolio-cream/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-5xl md:text-6xl font-bold text-portfolio-cream mb-6">
            My <span className="gradient-text-alt">Journey</span>
          </h2>
          <p className="text-xl text-portfolio-cream/80 max-w-3xl mx-auto leading-relaxed">
            Professional experience and educational milestones that shaped my expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Enhanced Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-portfolio-cream mb-12 animate-on-scroll-left flex items-center space-x-3">
              <Briefcase className="text-portfolio-teal" size={32} />
              <span>Professional Experience</span>
            </h3>
            
            <div className="relative">
              {/* Enhanced Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-portfolio-teal via-portfolio-cream to-portfolio-teal opacity-30"></div>
              
              <div className="space-y-16">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-16 animate-on-scroll-left group"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Enhanced Timeline Dot */}
                    <div className="absolute left-0 top-0 w-12 h-12 bg-portfolio-teal rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-portfolio-dark">
                      <div className="w-4 h-4 bg-portfolio-cream rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Enhanced Experience Card */}
                    <div className="bg-portfolio-dark/80 backdrop-blur-md border-2 border-portfolio-teal/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 hover-lift hover-glow">
                      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-teal/5 to-portfolio-cream/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        <div className="flex flex-wrap items-center justify-between mb-6">
                          <div>
                            <h4 className="text-2xl font-bold text-portfolio-cream group-hover:text-portfolio-teal transition-colors duration-300">
                              {exp.title}
                            </h4>
                            <p className="text-portfolio-teal font-bold text-lg">
                              {exp.company}
                            </p>
                          </div>
                          <span className="px-4 py-2 bg-portfolio-cream/20 border border-portfolio-cream/30 text-portfolio-cream rounded-xl text-sm font-medium">
                            {exp.type}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-6 text-portfolio-cream/70 mb-6">
                          <div className="flex items-center space-x-2">
                            <Calendar size={18} />
                            <span className="font-medium">{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin size={18} />
                            <span className="font-medium">{exp.location}</span>
                          </div>
                        </div>
                        
                        <ul className="space-y-3 mb-6">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-portfolio-cream/80 flex items-start leading-relaxed">
                              <span className="w-3 h-3 bg-portfolio-teal rounded-full mt-2 mr-4 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex flex-wrap gap-3">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-2 bg-portfolio-teal/20 border border-portfolio-teal/30 text-portfolio-cream rounded-lg text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Sidebar */}
          <div className="space-y-10">
            
            {/* Enhanced Education */}
            <div className="animate-on-scroll-right">
              <h3 className="text-3xl font-bold text-portfolio-cream mb-8 flex items-center space-x-3">
                <Award className="text-portfolio-teal" size={28} />
                <span>Education</span>
              </h3>
              {education.map((edu, index) => (
                <div key={index} className="bg-portfolio-dark/80 backdrop-blur-md border-2 border-portfolio-cream/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 hover-lift hover-glow">
                  <h4 className="font-bold text-portfolio-cream mb-3 text-lg">{edu.degree}</h4>
                  <p className="text-portfolio-teal font-bold mb-4">{edu.school}</p>
                  <div className="flex items-center space-x-6 text-portfolio-cream/70 text-sm mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-portfolio-cream/70 text-sm flex items-start">
                        <span className="w-2 h-2 bg-portfolio-teal rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Enhanced Certifications */}
            <div className="animate-on-scroll-right" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-3xl font-bold text-portfolio-cream mb-8 flex items-center space-x-3">
                <Trophy className="text-portfolio-teal" size={28} />
                <span>Certifications</span>
              </h3>
              <div className="bg-portfolio-dark/80 backdrop-blur-md border-2 border-portfolio-cream/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 hover-lift hover-glow">
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center space-x-4 group">
                      <div className="w-3 h-3 bg-portfolio-teal rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-portfolio-cream/80 group-hover:text-portfolio-cream transition-colors duration-300">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Enhanced Quick Stats */}
            <div className="animate-on-scroll-right" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-3xl font-bold text-portfolio-cream mb-8">Quick Stats</h3>
              <div className="bg-portfolio-dark/80 backdrop-blur-md border-2 border-portfolio-teal/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 hover-lift hover-glow">
                <div className="space-y-6">
                  <div className="flex justify-between items-center group">
                    <span className="text-portfolio-cream/70">Years of Experience</span>
                    <span className="font-bold text-portfolio-teal text-xl group-hover:scale-110 transition-transform duration-300">3+</span>
                  </div>
                  <div className="flex justify-between items-center group">
                    <span className="text-portfolio-cream/70">Projects Completed</span>
                    <span className="font-bold text-portfolio-teal text-xl group-hover:scale-110 transition-transform duration-300">50+</span>
                  </div>
                  <div className="flex justify-between items-center group">
                    <span className="text-portfolio-cream/70">Technologies Mastered</span>
                    <span className="font-bold text-portfolio-teal text-xl group-hover:scale-110 transition-transform duration-300">15+</span>
                  </div>
                  <div className="flex justify-between items-center group">
                    <span className="text-portfolio-cream/70">Coffee Consumed</span>
                    <span className="font-bold text-portfolio-teal text-xl group-hover:scale-110 transition-transform duration-300">∞</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
