import { useNavigate } from 'react-router-dom';
import { Breadcrumb } from './Breadcrumb';
import { Store, ShoppingCart, Clock } from 'lucide-react';

export function Shopping() {
  const navigate = useNavigate();

  const shoppingOptions = [
    {
      icon: Store,
      title: 'Supermarkets',
      description: 'Two large supermarkets offering a wide variety of groceries and household items',
      count: '2 Available'
    },
    {
      icon: ShoppingCart,
      title: 'Grocery Stores',
      description: 'Smaller local grocery stores with fresh produce and island specialties',
      count: '2 Stores'
    },
    {
      icon: Clock,
      title: 'Convenience Store',
      description: 'Open 24 hours for your convenience - snacks, drinks, and essentials anytime',
      count: '24 Hours'
    }
  ];

  return (
    <div>
      <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Shopping' }]} />

      {/* Hero Image Placeholder */}
      <div className="relative h-[300px] bg-gray-200 border-b-2 border-gray-800">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-64 h-32 bg-gray-300 border-2 border-dashed border-gray-500 flex items-center justify-center mx-auto mb-4">
              <span className="text-gray-500 text-sm">[Shopping Image]</span>
            </div>
            <h1 className="text-gray-900">Shopping on Taniti</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-gray-700 text-center text-lg">
            From modern supermarkets to local grocery stores, Taniti offers convenient 
            shopping options for all your vacation needs.
          </p>
        </div>

        {/* Shopping Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {shoppingOptions.map((option) => {
            const Icon = option.icon;
            return (
              <div
                key={option.title}
                className="bg-white p-8 border-2 border-gray-800"
              >
                <div className="w-14 h-14 bg-gray-200 border-2 border-gray-800 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-gray-800" />
                </div>
                <div className="inline-block bg-gray-800 text-white px-3 py-1 border border-gray-800 text-sm mb-3">
                  {option.count}
                </div>
                <h3 className="text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{option.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-gray-100 border-2 border-gray-800 p-8 mb-8">
          <h3 className="text-gray-900 mb-4">Shopping Tips</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-gray-800 mt-1">•</span>
              <span>Most stores accept U.S. dollars and major credit cards</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-800 mt-1">•</span>
              <span>Local markets offer fresh fruits, vegetables, and island-made crafts</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-800 mt-1">•</span>
              <span>The 24-hour convenience store is located near the main resort area</span>
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