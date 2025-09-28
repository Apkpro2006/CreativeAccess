
import React, { useState } from 'react';
import Button from './Button';

const Footer: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: ''});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    console.log('Form submitted:', formState);
    setSubmitted(true);
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200" id="contact">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-slate-800">Contact Us</h2>
            <p className="text-slate-600 mb-6">Have questions? We'd love to hear from you. Fill out the form and we'll get back to you shortly.</p>
            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md" role="alert">
                <strong className="font-bold">Thank you!</strong>
                <span className="block sm:inline"> Your message has been sent.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input type="text" id="name" name="name" value={formState.name} onChange={handleInputChange} placeholder="Your Name" required className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-primary focus:border-primary transition" />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input type="email" id="email" name="email" value={formState.email} onChange={handleInputChange} placeholder="Your Email" required className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-primary focus:border-primary transition" />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea id="message" name="message" value={formState.message} onChange={handleInputChange} rows={4} placeholder="Your Message" required className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-primary focus:border-primary transition"></textarea>
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            )}
          </div>
          <div className="flex flex-col items-start md:items-end">
             <h3 className="text-2xl font-bold text-primary mb-4">CanvaPro</h3>
             <div className="space-x-4 mb-6">
                <a href="#/" className="text-slate-600 hover:text-primary transition-colors">Home</a>
                <span>|</span>
                <a href="#/pricing" className="text-slate-600 hover:text-primary transition-colors">Pricing</a>
                <span>|</span>
                <a href="#contact" className="text-slate-600 hover:text-primary transition-colors">Contact</a>
             </div>
             <p className="text-slate-500 text-sm md:text-right">
                Secure payments are processed through PayPal. We are not affiliated with Canva.
             </p>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} CanvaPro Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
