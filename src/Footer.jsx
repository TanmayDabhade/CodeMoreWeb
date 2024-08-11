import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-4">
            <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Code More</span>
                <h1 className='text-xl font-bold text-indigo-700'>CodeMore</h1>
              </Link>
            </div>
            <p className="mb-4">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Facebook Icon */}
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Instagram Icon */}
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Twitter/X Icon */}
                </svg>
              </a>
              <a href="#" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* GitHub Icon */}
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* YouTube Icon */}
                </svg>
              </a>
            </div>
          </div>
          <div className="flex justify-between w-full lg:w-auto space-x-10">
            <div>
              <h3 className="mb-4 font-semibold">Solutions</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Marketing</a></li>
                <li><a href="#" className="hover:underline">Analytics</a></li>
                <li><a href="#" className="hover:underline">Commerce</a></li>
                <li><a href="#" className="hover:underline">Insights</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Pricing</a></li>
                <li><a href="#" className="hover:underline">Documentation</a></li>
                <li><a href="#" className="hover:underline">Guides</a></li>
                <li><a href="#" className="hover:underline">API Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Jobs</a></li>
                <li><a href="#" className="hover:underline">Press</a></li>
                <li><a href="#" className="hover:underline">Partners</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Claim</a></li>
                <li><a href="#" className="hover:underline">Privacy</a></li>
                <li><a href="#" className="hover:underline">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-6 text-center lg:text-left">
          <p>© 2020 Your Company, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
