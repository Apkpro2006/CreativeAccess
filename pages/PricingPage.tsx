import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const PricingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-50">
        <div className="container mx-auto px-6 py-16 md:py-24 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Choose Your Plan</h1>
        <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">Simple, transparent pricing. One plan gives you access to everything you need to create stunning designs.</p>
        
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 border border-slate-200 transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-between items-baseline">
                <h2 className="text-2xl font-bold text-primary">Canva Pro – 1 Year</h2>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-200 dark:text-yellow-900">BEST VALUE</span>
            </div>
            <div className="my-6">
                <span className="text-5xl font-extrabold text-slate-900">$49.99</span>
                <span className="text-slate-500">/ year</span>
            </div>
            
            <ul className="space-y-4 text-left mb-8">
                <li className="flex items-center">
                    <CheckIcon /> Full access to all premium templates
                </li>
                <li className="flex items-center">
                    <CheckIcon /> Unlimited stock images, videos, and audio
                </li>
                <li className="flex items-center">
                    <CheckIcon /> Advanced design and branding tools
                </li>
                <li className="flex items-center">
                    <CheckIcon /> Instant email delivery of your invite
                </li>
            </ul>
            
            <Button onClick={() => navigate('/checkout')} className="w-full">
                Buy Now
            </Button>
            
            <p className="text-sm text-slate-500 mt-6">
                Secure payment via PayPal. Instant email delivery.
            </p>
        </div>
        </div>
    </div>
  );
};

export default PricingPage;