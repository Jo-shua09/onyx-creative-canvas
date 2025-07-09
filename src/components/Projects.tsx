
import React from 'react';
import { ExternalLink, Github, Calendar, Tag, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product catalog, shopping cart, and admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      github: "#",
      live: "#",
      featured: true,
      date: "2024"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
      github: "#",
      live: "#",
      featured: true,
      date: "2024"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      github: "#",
      live: "#",
      featured: false,
      date: "2023"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with smooth animations and modern design.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
      github: "#",
      live: "#",
      featured: false,
      date: "2023"
    },
    {
      title: "Blog Platform",
      description: "A modern blog platform with markdown support, user authentication, and content management system.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Sanity CMS", "TypeScript", "Vercel"],
      github: "#",
      live: "#",
      featured: false,
      date: "2023"
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Socket.io", "Express", "MongoDB"],
      github: "#",
      live: "#",
      featured: false,
      date: "2022"
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-24 bg-portfolio-dark relative overflow-hidden particles">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-portfolio-teal/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-portfolio-cream/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-5xl md:text-6xl font-bold text-portfolio-cream mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-portfolio-cream/80 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work and passion projects that push creative boundaries
          </p>
        </div>

        {/* Enhanced Featured Projects */}
        <div className="space-y-32 mb-32">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-on-scroll ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Enhanced Project Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="bg-gradient-to-br from-portfolio-teal/20 to-portfolio-cream/20 rounded-3xl p-6 hover-lift hover-glow transition-all duration-700">
                  <div className="bg-portfolio-dark/90 rounded-2xl h-80 flex items-center justify-center relative overflow-hidden border-2 border-portfolio-teal/20">
                    <div className="text-portfolio-cream text-xl font-bold">
                      {project.title} Preview
                    </div>
                    
                    {/* Animated overlay pattern */}
                    <div className="absolute inset-0 bg-gradient-to-r from-portfolio-teal/10 via-transparent to-portfolio-cream/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                
                {/* Enhanced overlay with links */}
                <div className="absolute inset-0 bg-portfolio-dark/90 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-6">
                  <a
                    href={project.live}
                    className="p-4 bg-portfolio-teal rounded-2xl text-portfolio-cream hover:bg-portfolio-teal/80 transition-all duration-300 hover-lift hover-glow"
                  >
                    <ExternalLink size={24} />
                  </a>
                  <a
                    href={project.github}
                    className="p-4 bg-portfolio-cream rounded-2xl text-portfolio-dark hover:bg-portfolio-cream/80 transition-all duration-300 hover-lift hover-glow"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>

              {/* Enhanced Project Details */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="flex items-center space-x-6 text-portfolio-teal">
                  <div className="flex items-center space-x-2">
                    <Calendar size={18} />
                    <span className="font-medium">{project.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star size={18} />
                    <span className="font-medium">Featured</span>
                  </div>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold text-portfolio-cream leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-portfolio-cream/80 leading-relaxed text-lg">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-portfolio-teal/20 border border-portfolio-teal/30 text-portfolio-cream rounded-xl text-sm font-medium hover:bg-portfolio-teal/30 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-6">
                  <a
                    href={project.live}
                    className="group px-8 py-4 bg-portfolio-teal text-portfolio-cream rounded-xl hover:bg-portfolio-teal/80 transition-all duration-500 hover-lift font-bold inline-flex items-center space-x-3 relative overflow-hidden"
                  >
                    <ExternalLink size={20} />
                    <span className="relative z-10">Live Demo</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-portfolio-teal to-portfolio-cream opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </a>
                  <a
                    href={project.github}
                    className="group px-8 py-4 border-2 border-portfolio-cream text-portfolio-cream rounded-xl hover:bg-portfolio-cream hover:text-portfolio-dark transition-all duration-500 hover-lift font-bold inline-flex items-center space-x-3"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Other Projects Grid */}
        <div className="animate-on-scroll">
          <h3 className="text-4xl font-bold text-portfolio-cream text-center mb-16">
            Other Amazing Projects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 stagger-children">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-portfolio-dark/80 backdrop-blur-md border-2 border-portfolio-teal/20 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover-lift overflow-hidden hover-glow animate-on-scroll"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Enhanced Project Image */}
                <div className="relative h-56 bg-gradient-to-br from-portfolio-teal/20 to-portfolio-cream/20 flex items-center justify-center">
                  <div className="text-portfolio-cream font-bold text-lg">
                    {project.title}
                  </div>
                  
                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 bg-portfolio-dark/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-4">
                    <a
                      href={project.live}
                      className="p-3 bg-portfolio-teal rounded-xl text-portfolio-cream hover:bg-portfolio-teal/80 transition-all duration-300 hover-lift"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.github}
                      className="p-3 bg-portfolio-cream rounded-xl text-portfolio-dark hover:bg-portfolio-cream/80 transition-all duration-300 hover-lift"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                {/* Enhanced Project Content */}
                <div className="p-8">
                  <div className="flex items-center space-x-3 text-portfolio-teal text-sm mb-4">
                    <Calendar size={16} />
                    <span className="font-medium">{project.date}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-portfolio-cream mb-4 group-hover:text-portfolio-teal transition-colors duration-300">
                    {project.title}
                  </h4>
                  
                  <p className="text-portfolio-cream/70 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-portfolio-teal/20 border border-portfolio-teal/30 text-portfolio-cream rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-portfolio-cream/20 border border-portfolio-cream/30 text-portfolio-cream rounded-lg text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
