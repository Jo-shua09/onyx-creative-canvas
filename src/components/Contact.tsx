
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-7 h-7" />,
      title: "Email",
      value: "joshua@example.com",
      link: "mailto:joshua@example.com"
    },
    {
      icon: <Phone className="w-7 h-7" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-7 h-7" />,
      title: "Location",
      value: "San Francisco, CA",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-7 h-7" />,
      name: "GitHub",
      url: "#",
      username: "@joshuaonyeka"
    },
    {
      icon: <Linkedin className="w-7 h-7" />,
      name: "LinkedIn",
      url: "#",
      username: "@joshuaonyeka"
    },
    {
      icon: <Twitter className="w-7 h-7" />,
      name: "Twitter",
      url: "#",
      username: "@joshuaonyeka"
    }
  ];

  return (
    <section id="contact" className="py-24 morphing-bg relative overflow-hidden particles">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-portfolio-cream/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-portfolio-teal/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-5xl md:text-6xl font-bold text-portfolio-cream mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-portfolio-cream/80 max-w-3xl mx-auto leading-relaxed">
            Let's collaborate on your next groundbreaking project. I'm always excited to discuss new opportunities and innovative ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Enhanced Contact Form */}
          <div className="animate-on-scroll-left">
            <div className="bg-portfolio-dark/60 backdrop-blur-md border-2 border-portfolio-teal/20 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-700 hover-glow">
              <div className="flex items-center space-x-4 mb-8">
                <MessageCircle className="text-portfolio-teal" size={32} />
                <h3 className="text-3xl font-bold text-portfolio-cream">
                  Send me a message
                </h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8 stagger-children">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label htmlFor="name" className="block text-portfolio-cream/90 mb-3 font-semibold text-lg">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-portfolio-dark/60 border-2 border-portfolio-teal/30 rounded-2xl text-portfolio-cream placeholder-portfolio-cream/50 focus:outline-none focus:ring-2 focus:ring-portfolio-teal focus:border-transparent backdrop-blur-sm transition-all duration-300 hover-lift"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-portfolio-cream/90 mb-3 font-semibold text-lg">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-portfolio-dark/60 border-2 border-portfolio-teal/30 rounded-2xl text-portfolio-cream placeholder-portfolio-cream/50 focus:outline-none focus:ring-2 focus:ring-portfolio-teal focus:border-transparent backdrop-blur-sm transition-all duration-300 hover-lift"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="subject" className="block text-portfolio-cream/90 mb-3 font-semibold text-lg">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-portfolio-dark/60 border-2 border-portfolio-teal/30 rounded-2xl text-portfolio-cream placeholder-portfolio-cream/50 focus:outline-none focus:ring-2 focus:ring-portfolio-teal focus:border-transparent backdrop-blur-sm transition-all duration-300 hover-lift"
                    placeholder="Project Discussion"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="message" className="block text-portfolio-cream/90 mb-3 font-semibold text-lg">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-portfolio-dark/60 border-2 border-portfolio-teal/30 rounded-2xl text-portfolio-cream placeholder-portfolio-cream/50 focus:outline-none focus:ring-2 focus:ring-portfolio-teal focus:border-transparent backdrop-blur-sm resize-none transition-all duration-300 hover-lift"
                    placeholder="Tell me about your amazing project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="group w-full px-10 py-5 bg-portfolio-teal text-portfolio-cream rounded-2xl hover:bg-portfolio-teal/80 transition-all duration-500 hover-lift font-bold text-lg flex items-center justify-center space-x-3 shadow-2xl relative overflow-hidden"
                >
                  <Send size={24} />
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-portfolio-teal to-portfolio-cream opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </button>
              </form>
            </div>
          </div>

          {/* Enhanced Contact Information */}
          <div className="animate-on-scroll-right space-y-10">
            
            {/* Enhanced Contact Details */}
            <div className="bg-portfolio-dark/60 backdrop-blur-md border-2 border-portfolio-cream/20 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-700 hover-glow">
              <h3 className="text-3xl font-bold text-portfolio-cream mb-8 flex items-center space-x-3">
                <Mail className="text-portfolio-teal" size={32} />
                <span>Contact Information</span>
              </h3>
              
              <div className="space-y-8 stagger-children">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="group flex items-center space-x-6 text-portfolio-cream/80 hover:text-portfolio-cream transition-all duration-300 p-4 rounded-2xl hover:bg-portfolio-teal/10"
                  >
                    <div className="w-16 h-16 bg-portfolio-teal/20 border border-portfolio-teal/30 rounded-2xl flex items-center justify-center group-hover:bg-portfolio-teal/30 group-hover:scale-110 transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-bold text-portfolio-cream text-lg">{info.title}</p>
                      <p className="text-portfolio-cream/80">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="bg-portfolio-dark/60 backdrop-blur-md border-2 border-portfolio-cream/20 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-700 hover-glow">
              <h3 className="text-3xl font-bold text-portfolio-cream mb-8">
                Follow My Journey
              </h3>
              
              <div className="space-y-6 stagger-children">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="group flex items-center justify-between text-portfolio-cream/80 hover:text-portfolio-cream transition-all duration-300 p-4 rounded-2xl hover:bg-portfolio-teal/10"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                      <span className="font-semibold text-lg">{social.name}</span>
                    </div>
                    <span className="text-sm text-portfolio-cream/60 group-hover:text-portfolio-teal transition-colors duration-300">{social.username}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Enhanced Availability */}
            <div className="bg-portfolio-dark/60 backdrop-blur-md border-2 border-portfolio-teal/20 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-700 hover-glow">
              <h3 className="text-3xl font-bold text-portfolio-cream mb-6 flex items-center space-x-3">
                <Clock className="text-portfolio-teal" size={28} />
                <span>Availability</span>
              </h3>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse-ring"></div>
                <span className="text-portfolio-cream font-semibold text-lg">Available for new projects</span>
              </div>
              <p className="text-portfolio-cream/80 leading-relaxed">
                I'm currently accepting new freelance projects and exciting full-time opportunities. 
                Let's discuss how we can create something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
