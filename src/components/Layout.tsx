
import React from 'react';
import Navigation from './Navigation';
import useScrollAnimation from '../hooks/useScrollAnimation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-portfolio-dark text-portfolio-cream py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Joshua Onyeka. All rights reserved.</p>
            </div>
            <div className="text-sm text-portfolio-cream/60">
              Designed & Built with ❤️ using React & Tailwind CSS
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
