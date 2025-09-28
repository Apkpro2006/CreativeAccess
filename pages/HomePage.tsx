
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import CreativeIcon from '../components/icons/CreativeIcon';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-4">
            Buy Canva Pro Accounts Instantly
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8">
            Get access to premium features in just seconds. Unlock your creativity with unlimited templates, stock photos, and advanced design tools.
          </p>
          <Button onClick={() => navigate('/pricing')}>
            Get Started Now
          </Button>
        </div>
        <div className="relative flex justify-center items-center">
            <CreativeIcon className="w-full max-w-md h-auto" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
