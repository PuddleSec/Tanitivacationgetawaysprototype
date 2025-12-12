import { Link } from 'react-router-dom';
import { Palmtree } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-16 border-t-2 border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Name */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gray-600 border-2 border-gray-700 flex items-center justify-center">
                <Palmtree className="w-6 h-6 text-white" />
              </div>
              <span className="text-white">Taniti Vacation Getaways</span>
            </Link>
            <p className="text-sm text-gray-400">
              Your tropical island sanctuary in the Pacific
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shopping" className="hover:text-white transition-colors text-sm">
                  Shopping
                </Link>
              </li>
              <li>
                <Link to="/dining" className="hover:text-white transition-colors text-sm">
                  Dining
                </Link>
              </li>
              <li>
                <Link to="/entertainment" className="hover:text-white transition-colors text-sm">
                  Entertainment
                </Link>
              </li>
              <li>
                <Link to="/book" className="hover:text-white transition-colors text-sm">
                  Book Your Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* About & External Links */}
          <div>
            <h3 className="text-white mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors text-sm">
                  External Links
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Taniti Vacation Getaways. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}