import { Link, useNavigate } from 'react-router-dom';
import { Search, Palmtree } from 'lucide-react';

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b-2 border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 gap-4">
          {/* Logo and Site Name */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-gray-300 border-2 border-gray-800 flex items-center justify-center">
              <Palmtree className="w-6 h-6 text-gray-800" />
            </div>
            <span className="text-gray-800 hidden sm:inline">Taniti Vacation Getaways</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border-2 border-gray-800 bg-white focus:outline-none focus:border-gray-600"
              />
            </div>
          </div>

          {/* Book Button */}
          <button
            onClick={() => navigate('/book')}
            className="bg-gray-800 text-white px-4 py-2 border-2 border-gray-800 hover:bg-gray-700 transition-colors flex-shrink-0"
          >
            Book Your Visit!
          </button>
        </div>

        {/* Navigation */}
        <nav className="border-t-2 border-gray-800 py-3">
          <ul className="flex items-center gap-6 justify-center flex-wrap">
            <li>
              <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-400">|</li>
            <li>
              <Link to="/shopping" className="text-gray-700 hover:text-gray-900 transition-colors">
                Shopping
              </Link>
            </li>
            <li className="text-gray-400">|</li>
            <li>
              <Link to="/dining" className="text-gray-700 hover:text-gray-900 transition-colors">
                Dining
              </Link>
            </li>
            <li className="text-gray-400">|</li>
            <li>
              <Link to="/entertainment" className="text-gray-700 hover:text-gray-900 transition-colors">
                Entertainment
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}