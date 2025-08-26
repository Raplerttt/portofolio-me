'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubscribed(true);
    setEmail('');
    setIsLoading(false);
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Moh Rafi Nasrullah
              </h3>
              <span className="text-sm text-gray-400">Software Engineer</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Creating innovative digital experiences with modern web technologies. 
              Let's build something amazing together.
            </p>
            
            {/* Newsletter Subscription */}
            {/* <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
              {isSubscribed ? (
                <div className="bg-green-900/30 text-green-400 p-3 rounded-lg border border-green-800/50">
                  <p>🎉 Thank you for subscribing! You'll hear from me soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Submitting...' : 'Subscribe'}
                  </button>
                </form>
              )}
            </div> */}
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                {
                  name: 'GitHub',
                  url: 'https://github.com',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  )
                },
                {
                  name: 'LinkedIn',
                  url: 'https://linkedin.com',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )
                },
                {
                  name: 'Twitter',
                  url: 'https://twitter.com',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  )
                },
                {
                  name: 'Dribbble',
                  url: 'https://dribbble.com',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm9.91 9.912c-.843-.096-1.64-.147-2.477-.147-1.402 0-2.776.18-4.102.525-.18-.478-.38-.98-.597-1.503 1.41-.537 2.606-1.416 3.598-2.557 1.025 1.122 1.64 2.57 1.64 4.142 0 .102-.002.203-.007.304zm-8.01-1.862c.18.48.37.97.547 1.48-1.57.537-3.05 1.317-4.41 2.31-.17-.51-.33-1.03-.48-1.56 1.4-.84 2.78-1.62 4.34-2.23zm-.547-2.392c-.18-.48-.37-.97-.547-1.48 1.57-.537 3.05-1.317 4.41-2.31.17.51.33 1.03.48 1.56-1.4.84-2.78 1.62-4.34 2.23zm-2.4-2.4c-.84 1.57-1.62 3.05-2.23 4.34-.48-.18-.97-.37-1.48-.547.537-1.57 1.317-3.05 2.31-4.41.51.17 1.03.33 1.56.48zm-5.34 2.4c.84-1.57 1.62-3.05 2.23-4.34.48.18.97.37 1.48.547-.537 1.57-1.317 3.05-2.31 4.41-.51-.17-1.03-.33-1.56-.48zm-2.4 2.4c.18-.48.37-.97.547-1.48 1.57-.537 3.05-1.317 4.41-2.31.17.51.33 1.03.48 1.56-1.4.84-2.78 1.62-4.34 2.23zm-2.392.547c.48-.18.97-.37 1.48-.547-.537 1.57-1.317 3.05-2.31 4.41-.51-.17-1.03-.33-1.56-.48.84-1.57 1.62-3.05 2.23-4.34zm-.304-8.01c.096.843.147 1.64.147 2.477 0 1.402-.18 2.776-.525 4.102-.478.18-.98.38-1.503.597-.537-1.41-1.416-2.606-2.557-3.598 1.122-1.025 2.57-1.64 4.142-1.64.102.002.203.002.304.007z"/>
                    </svg>
                  )
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all group"
                  aria-label={social.name}
                >
                  <span className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Projects', path: '/projects' },
                { name: 'Achievements', path: '/achievements' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.path} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full mr-3 group-hover:bg-blue-400 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Projects */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Featured Work</h4>
            <ul className="space-y-3">
              {[
                { name: 'E-Commerce Platform', path: '/projects/ecommerce' },
                { name: 'Task Management App', path: '/projects/taskmanager' },
                { name: 'Weather Dashboard', path: '/projects/weather' },
                { name: 'Portfolio Website', path: '/projects/portfolio' },
                { name: 'AI Chat Application', path: '/projects/aichat' },
                { name: 'View All Projects', path: '/projects' }
              ].map((project, index) => (
                <li key={index}>
                  <Link 
                    href={project.path} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full mr-3 group-hover:bg-purple-400 transition-colors"></span>
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Get in Touch</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:mhmdraffi1002@gmail.com" className="hover:text-white transition-colors">
                  mhmdraffi1002@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+6287771177155" className="hover:text-white transition-colors">
                  +62 (8777) 1177-155
                </a>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Bandung, Jawa Barat</span>
              </div>
            </div>
            
            <button 
              onClick={() => window.location.href = '/contact'}
              className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Send Message
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Moh Rafi Nasrullah. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="/sitemap" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}