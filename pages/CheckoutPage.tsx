import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setIsProcessing(true);
    
    // Simulate API call and payment processing
    setTimeout(() => {
      // On success, redirect to the success page
      navigate('/success');
    }, 2000);
  };

  return (
    <div className="container mx-auto px-6 py-16 md:py-24">
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2 text-center">Complete Your Purchase</h1>
        <p className="text-slate-600 mb-8 text-center">Enter your email to receive your Canva Pro invite.</p>
        
        <div className="bg-slate-50 p-6 rounded-lg mb-6">
            <div className="flex justify-between items-center">
                <span className="font-semibold">Canva Pro - 1 Year Plan</span>
                <span className="font-bold text-lg">$49.99</span>
            </div>
        </div>

        <form onSubmit={handleCheckout}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
              Email for Invitation
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-primary focus:border-primary transition"
              required
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <div className="bg-blue-50 border-l-4 border-primary text-blue-800 p-4 rounded-md mb-6" role="alert">
            <p className="font-bold">7-Day Free Trial Included</p>
            <p className="text-sm">Your card will be charged automatically after the trial ends. You can cancel anytime.</p>
          </div>
          
          <Button type="submit" className="w-full flex justify-center items-center">
            {isProcessing ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : 'Pay with PayPal'}
          </Button>
          <p className="text-xs text-slate-500 text-center mt-4">You will be redirected to PayPal to complete your purchase securely.</p>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;