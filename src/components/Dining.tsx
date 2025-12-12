import { useNavigate } from 'react-router-dom';
import { Breadcrumb } from './Breadcrumb';
import { Fish, Beef, Soup, AlertCircle } from 'lucide-react';

export function Dining() {
  const navigate = useNavigate();

  const restaurants = [
    {
      icon: Fish,
      title: 'Local Fish & Rice',
      description: 'Authentic island cuisine featuring fresh-caught fish and traditional preparations',
      count: '5 Restaurants'
    },
    {
      icon: Beef,
      title: 'American-Style Meals',
      description: 'Familiar favorites including burgers, steaks, and classic American dishes',
      count: '3 Restaurants'
    },
    {
      icon: Soup,
      title: 'Pan-Asian Cuisine',
      description: 'Diverse Asian flavors from Chinese, Japanese, Thai, and Vietnamese kitchens',
      count: '2 Restaurants'
    }
  ];

  return (
    <div>
      <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Dining' }]} />

      {/* Hero Image Placeholder */}
      <div className="relative h-[300px] bg-gray-200 border-b-2 border-gray-800">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-64 h-32 bg-gray-300 border-2 border-dashed border-gray-500 flex items-center justify-center mx-auto mb-4">
              <span className="text-gray-500 text-sm">[Dining Image]</span>
            </div>
            <h1 className="text-gray-900">Dining on Taniti</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-gray-700 text-center text-lg">
            From authentic island flavors to international cuisine, Taniti's diverse dining 
            scene offers something delicious for every palate.
          </p>
        </div>

        {/* Restaurant Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {restaurants.map((restaurant) => {
            const Icon = restaurant.icon;
            return (
              <div
                key={restaurant.title}
                className="bg-white p-8 border-2 border-gray-800"
              >
                <div className="w-14 h-14 bg-gray-200 border-2 border-gray-800 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-gray-800" />
                </div>
                <div className="inline-block bg-gray-800 text-white px-3 py-1 border border-gray-800 text-sm mb-3">
                  {restaurant.count}
                </div>
                <h3 className="text-gray-900 mb-3">{restaurant.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{restaurant.description}</p>
              </div>
            );
          })}
        </div>

        {/* Alcohol Notice */}
        <div className="bg-gray-100 border-2 border-gray-800 p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-gray-800 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-gray-900 mb-2">Alcohol Service Notice</h3>
              <p className="text-gray-700 text-sm">
                Alcohol is not served between midnight and 9:00 AM. The legal drinking age is 18 years old.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gray-100 border-2 border-gray-800 p-8 mb-8">
          <h3 className="text-gray-900 mb-4">Dining Information</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-gray-800 mt-1">•</span>
              <span>Most restaurants are open for lunch and dinner daily</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-800 mt-1">•</span>
              <span>Reservations are recommended for popular establishments, especially on weekends</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-800 mt-1">•</span>
              <span>Many restaurants offer vegetarian and seafood options</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-800 mt-1">•</span>
              <span>Fresh fish is caught daily and featured on many menus</span>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button
            onClick={() => navigate('/book')}
            className="bg-gray-800 text-white px-8 py-3 border-2 border-gray-800 hover:bg-gray-700 transition-colors"
          >
            Book Your Visit
          </button>
        </div>
      </div>
    </div>
  );
}