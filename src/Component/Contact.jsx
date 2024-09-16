import React from 'react';
import { Mail, Linkedin, Instagram, Github } from 'lucide-react';

const Button = ({ className, ...props }) => (
  <button
    className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-gray-900 bg-orange-500 text-white hover:bg-orange-600 h-10 py-2 px-4 ${className}`}
    {...props}
  />
);

const Input = ({ className, ...props }) => (
  <input
    className={`flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white ring-offset-gray-900 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

const Textarea = ({ className, ...props }) => (
  <textarea
    className={`flex min-h-[80px] w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white ring-offset-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-orange-500 text-6xl mb-2">Contact</h2>
        {/* <h3 className="text-3xl font-bold text-white mb-8 mt-12 ">Get In Touch</h3> */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-400 mb-6 mt-12 pt-4">
              I'd love to hear from you! Whether you have a question or just want to say hi, feel free to drop me a message.
            </p>
            <div className="space-y-4">
              <a href="mailto:nancysharma2000a@gmail.com" className="flex items-center text-gray-300 hover:text-orange-500 transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                nancysharma2000a@gmail.com
              </a>
              <a href="https://linkedin.com/in/nancy-sharma2707" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-orange-500 transition-colors">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
              <a href="https://www.instagram.com/_nancyshr_" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-orange-500 transition-colors">
                <Instagram className="w-5 h-5 mr-2" />
                Instagram
              </a>
              <a href="https://github.com/Nancy2707" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-orange-500 transition-colors">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <h1 className='text-center text-xl'>Message Me!</h1>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <Input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <Input type="email" id="email" name="email" placeholder="your@email.com" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <Textarea id="message" name="message" placeholder="Your message here..." className="min-h-[120px]" required />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}