import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

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
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-dark mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="bg-gradient-to-br from-portfolio-teal/20 to-portfolio-cream/20 rounded-xl p-4 hover-lift">
                  <div className="bg-portfolio-dark/80 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-portfolio-cream text-lg font-semibold">
                      {project.title} Preview
                    </div>
                  </div>
                </div>
                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-portfolio-dark/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.live}
                    className="p-3 bg-portfolio-teal rounded-full text-white hover:bg-portfolio-teal/80 transition-colors hover-lift"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 bg-portfolio-cream rounded-full text-portfolio-dark hover:bg-portfolio-cream/80 transition-colors hover-lift"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="flex items-center space-x-4 text-portfolio-teal">
                  <Calendar size={16} />
                  <span>{project.date}</span>
                  <Tag size={16} />
                  <span>Featured</span>
                </div>
                
                <h3 className="text-3xl font-bold text-portfolio-dark">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-portfolio-cream/30 text-portfolio-dark rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.live}
                    className="px-6 py-3 bg-portfolio-teal text-white rounded-lg hover:bg-portfolio-teal/80 transition-all duration-300 hover-lift font-semibold inline-flex items-center space-x-2"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    className="px-6 py-3 border-2 border-portfolio-dark text-portfolio-dark rounded-lg hover:bg-portfolio-dark hover:text-white transition-all duration-300 hover-lift font-semibold inline-flex items-center space-x-2"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="animate-on-scroll">
          <h3 className="text-3xl font-bold text-portfolio-dark text-center mb-12">
            Other Projects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift overflow-hidden border border-gray-100 group animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-portfolio-teal/20 to-portfolio-cream/20 flex items-center justify-center">
                  <div className="text-portfolio-dark font-semibold">
                    {project.title}
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-portfolio-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.live}
                      className="p-2 bg-portfolio-teal rounded-full text-white hover:bg-portfolio-teal/80 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.github}
                      className="p-2 bg-portfolio-cream rounded-full text-portfolio-dark hover:bg-portfolio-cream/80 transition-colors"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-portfolio-teal text-sm mb-3">
                    <Calendar size={14} />
                    <span>{project.date}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-portfolio-dark mb-3">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-portfolio-cream/30 text-portfolio-dark rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
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
