
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const SuccessPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-6 py-16 md:py-24 text-center">
      <div className="max-w-2xl mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-green-500 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Payment Successful!</h1>
        <p className="text-lg text-slate-600 mb-8">
          Your Canva Pro invitation has been sent to your inbox. Please check your email and follow the instructions to activate your account.
        </p>
        <Button onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default SuccessPage;
