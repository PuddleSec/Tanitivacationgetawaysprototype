import { useNavigate } from 'react-router-dom';
import { Breadcrumb } from './Breadcrumb';
import { 
  Waves, 
  Trees, 
  Mountain, 
  Fish as FishIcon, 
  Anchor, 
  Landmark, 
  Plane, 
  Beer, 
  Music, 
  Film, 
  Gamepad2,
  Palmtree,
  Palette,
  MapPin
} from 'lucide-react';

export function Entertainment() {
  const navigate = useNavigate();

  const activities = [
    {
      icon: Waves,
      title: 'Beaches',
      description: 'Family-friendly pristine beaches with crystal-clear waters',
      category: 'Water & Beach'
    },
    {
      icon: Trees,
      title: 'Rainforest Tours',
      description: 'Guided tours through lush tropical rainforests',
      category: 'Adventure'
    },
    {
      icon: Palmtree,
      title: 'Zip-lining',
      description: 'Thrilling canopy tours through the jungle',
      category: 'Adventure'
    },
    {
      icon: Mountain,
      title: 'Volcano Visits',
      description: 'Experience the island\'s active volcano up close',
      category: 'Adventure'
    },
    {
      icon: Waves,
      title: 'Snorkeling',
      description: 'Explore vibrant coral reefs and marine life',
      category: 'Water & Beach'
    },
    {
      icon: Anchor,
      title: 'Fishing Tours',
      description: 'Deep-sea and coastal fishing excursions',
      category: 'Water & Beach'
    },
    {
      icon: Landmark,
      title: 'Local History Museum',
      description: 'Discover Taniti\'s rich cultural heritage',
      category: 'Culture'
    },
    {
      icon: Plane,
      title: 'Helicopter Rides',
      description: 'Aerial tours of the island\'s stunning landscapes',
      category: 'Adventure'
    },
    {
      icon: Beer,
      title: 'Pubs & Microbrewery',
      description: 'Sample local craft beers and spirits',
      category: 'Nightlife'
    },
    {
      icon: Music,
      title: 'Dance Club',
      description: 'Dance the night away to tropical beats',
      category: 'Nightlife'
    },
    {
      icon: Film,
      title: 'Movie Theater',
      description: 'Catch the latest films in air-conditioned comfort',
      category: 'Entertainment'
    },
    {
      icon: Gamepad2,
      title: 'Arcade',
      description: 'Classic and modern arcade games for all ages',
      category: 'Entertainment'
    },
    {
      icon: FishIcon,
      title: 'Bowling',
      description: 'Modern bowling alley with food and drinks',
      category: 'Entertainment'
    },
    {
      icon: Palette,
      title: 'Art Galleries',
      description: 'Local artists showcasing island-inspired works',
      category: 'Culture'
    },
    {
      icon: MapPin,
      title: 'Golf Course',
      description: 'Nine-hole course opening soon!',
      category: 'Coming Soon'
    }
  ];

  const categories = [
    { name: 'Water & Beach' },
    { name: 'Adventure' },
    { name: 'Culture' },
    { name: 'Nightlife' },
    { name: 'Entertainment' },
    { name: 'Coming Soon' }
  ];

  return (
    <div>
      <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Entertainment' }]} />

      {/* Hero Image Placeholder */}
      <div className="relative h-[300px] bg-gray-200 border-b-2 border-gray-800">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-64 h-32 bg-gray-300 border-2 border-dashed border-gray-500 flex items-center justify-center mx-auto mb-4">
              <span className="text-gray-500 text-sm">[Entertainment Image]</span>
            </div>
            <h1 className="text-gray-900">Entertainment & Activities</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-gray-700 text-center text-lg">
            Whether you seek adventure, relaxation, or cultural experiences, Taniti offers 
            an incredible variety of activities and entertainment for all ages.
          </p>
        </div>

        {/* Category Legend */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <div key={cat.name} className="px-4 py-2 border border-gray-500 bg-white text-sm text-gray-700">
              {cat.name}
            </div>
          ))}
        </div>

        {/* Activity Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div
                key={activity.title}
                className="bg-white p-6 border-2 border-gray-800"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-200 border-2 border-gray-800 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-gray-800" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-2">{activity.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{activity.description}</p>
                    <span className="inline-block px-3 py-1 border border-gray-500 bg-gray-100 text-xs text-gray-700">
                      {activity.category}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-gray-100 border-2 border-gray-800 p-8 mb-8">
          <h3 className="text-gray-900 mb-4">Activity Information</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-gray-800 mt-1">•</span>
              <span>Book adventure activities in advance, especially during peak season</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-800 mt-1">•</span>
              <span>Most water activities operate daily, weather permitting</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-800 mt-1">•</span>
              <span>Equipment rentals are available for most water sports</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-800 mt-1">•</span>
              <span>The nine-hole golf course is scheduled to open next year</span>
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