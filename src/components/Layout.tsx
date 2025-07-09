
import React from 'react';
import Navigation from './Navigation';
import useScrollAnimation from '../hooks/useScrollAnimation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-portfolio-dark">
      <Navigation />
      <main className="pt-20">
        {children}
      </main>
      
      {/* Enhanced Footer */}
      <footer className="bg-portfolio-dark border-t-2 border-portfolio-teal/20 text-portfolio-cream py-12 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-portfolio-teal/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-portfolio-cream/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-lg font-medium">© 2024 Joshua Onyeka. All rights reserved.</p>
            </div>
            <div className="text-portfolio-cream/70 text-lg">
              Designed & Built with ❤️ using <span className="text-portfolio-teal font-semibold">React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
