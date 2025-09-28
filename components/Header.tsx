
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const activeLinkStyle = {
    color: '#2563EB',
    fontWeight: '600',
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-primary">
          CanvaPro
        </NavLink>
        <nav className="hidden md:flex space-x-8">
          <NavLink 
            to="/" 
            className="text-slate-600 hover:text-primary transition-colors"
            style={({ isActive }) => isActive ? activeLinkStyle : undefined}
          >
            Home
          </NavLink>
          <NavLink 
            to="/pricing" 
            className="text-slate-600 hover:text-primary transition-colors"
            style={({ isActive }) => isActive ? activeLinkStyle : undefined}
          >
            Pricing
          </NavLink>
          <a href="#contact" className="text-slate-600 hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
        <div className="md:hidden">
            {/* Mobile menu button can be added here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
