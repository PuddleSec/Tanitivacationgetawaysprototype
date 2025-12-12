import { useNavigate } from 'react-router-dom';
import { Breadcrumb } from './Breadcrumb';
import { ShoppingBag, Utensils, PartyPopper, Shield, DollarSign, Hospital } from 'lucide-react';

export function Home() {
  const navigate = useNavigate();

  const quickLinks = [
    {
      title: 'Shopping',
      icon: ShoppingBag,
      description: 'Explore local markets, supermarkets, and convenience stores',
      path: '/shopping'
    },
    {
      title: 'Dining',
      icon: Utensils,
      description: 'Taste fresh seafood, local cuisine, and international flavors',
      path: '/dining'
    },
    {
      title: 'Entertainment',
      icon: PartyPopper,
      description: 'Adventure, relaxation, and cultural experiences await',
      path: '/entertainment'
    }
  ];

  const safetyInfo = [
    {
      icon: Shield,
      text: 'Crime is rare on the island'
    },
    {
      icon: DollarSign,
      text: 'U.S. dollars and major credit cards accepted'
    },
    {
      icon: Hospital,
      text: 'Modern hospital available for emergencies'
    }
  ];

  return (
    <div>
      <Breadcrumb items={[{ label: 'Home' }]} />

      {/* Hero Section - Wireframe Style */}
      <div className="relative h-[500px] bg-gray-200 border-b-2 border-gray-800">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
          <div className="w-full max-w-md h-48 bg-gray-300 border-2 border-dashed border-gray-500 flex items-center justify-center">
            <span className="text-gray-500 text-sm">[Hero Image - Tropical Island]</span>
          </div>
          <div className="text-center">
            <h1 className="text-gray-900 mb-4">Welcome to Taniti</h1>
            <p className="text-xl max-w-2xl mx-auto text-gray-700">
              Your own tropical island sanctuary in the Pacific!
            </p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-700 text-lg leading-relaxed">
            With less than 500 square miles, welcome to your safe harbor of lush tropical 
            rainforests, mountains, and a view of the island's active volcano. Experience 
            pristine beaches, vibrant culture, and unforgettable adventures in paradise.
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <div
                key={link.title}
                onClick={() => navigate(link.path)}
                className="bg-white p-8 border-2 border-gray-800 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 bg-gray-200 border-2 border-gray-800 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-gray-800" />
                </div>
                <h3 className="text-gray-900 mb-2">{link.title}</h3>
                <p className="text-gray-600 text-sm">{link.description}</p>
              </div>
            );
          })}
        </div>

        {/* Safety & Travel Info Box */}
        <div className="bg-gray-100 border-2 border-gray-800 p-8">
          <h2 className="text-gray-900 mb-6 text-center">Visitor Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {safetyInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gray-800 border-2 border-gray-800 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-700 pt-2">{info.text}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              English is the primary language spoken. Power outlets are 120 volts (same as United States).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}