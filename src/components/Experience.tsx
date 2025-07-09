
import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

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
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-dark mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional experience and educational background
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-portfolio-dark mb-8 animate-on-scroll-left">
              Professional Experience
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-portfolio-teal/30"></div>
              
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-12 animate-on-scroll-left"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-0 w-8 h-8 bg-portfolio-teal rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    {/* Experience Card */}
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                      <div className="flex flex-wrap items-center justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-portfolio-dark">
                            {exp.title}
                          </h4>
                          <p className="text-portfolio-teal font-semibold">
                            {exp.company}
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-portfolio-cream/30 text-portfolio-dark rounded-full text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-gray-600 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-600 flex items-start">
                            <span className="w-2 h-2 bg-portfolio-teal rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-portfolio-cream/20 text-portfolio-dark rounded text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Education */}
            <div className="animate-on-scroll-right">
              <h3 className="text-2xl font-bold text-portfolio-dark mb-6">Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                  <h4 className="font-bold text-portfolio-dark mb-2">{edu.degree}</h4>
                  <p className="text-portfolio-teal font-semibold mb-2">{edu.school}</p>
                  <div className="flex items-center space-x-4 text-gray-600 text-sm mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-portfolio-teal rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="animate-on-scroll-right" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-portfolio-dark mb-6">Certifications</h3>
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-portfolio-teal rounded-full"></div>
                      <span className="text-gray-700">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="animate-on-scroll-right" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold text-portfolio-dark mb-6">Quick Stats</h3>
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Years of Experience</span>
                    <span className="font-bold text-portfolio-dark">3+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Projects Completed</span>
                    <span className="font-bold text-portfolio-dark">50+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Technologies Mastered</span>
                    <span className="font-bold text-portfolio-dark">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Coffee Consumed</span>
                    <span className="font-bold text-portfolio-dark">∞</span>
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
