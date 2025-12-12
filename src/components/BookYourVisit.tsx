import { useState } from 'react';
import { Breadcrumb } from './Breadcrumb';
import { Calendar, User, Mail, Phone, Users, Home, CheckCircle } from 'lucide-react';

export function BookYourVisit() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    arrivalDate: '',
    departureDate: '',
    numberOfTravelers: '1',
    accommodation: '',
    activities: [] as string[]
  });

  const [submitted, setSubmitted] = useState(false);

  const accommodationOptions = [
    'Hotel',
    'Bed & Breakfast',
    'Hostel',
    'Resort'
  ];

  const activityOptions = [
    'Beaches',
    'Rainforest Tours',
    'Zip-lining',
    'Volcano Visits',
    'Snorkeling',
    'Fishing Tours',
    'Local History Museum',
    'Helicopter Rides',
    'Nightlife',
    'Cultural Experiences'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleActivityToggle = (activity: string) => {
    setFormData(prev => ({
      ...prev,
      activities: prev.activities.includes(activity)
        ? prev.activities.filter(a => a !== activity)
        : [...prev.activities, activity]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real application, this would send data to a backend
    console.log('Form submitted:', formData);
  };

  if (submitted) {
    return (
      <div>
        <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Book Your Visit' }]} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white border-2 border-gray-800 p-12 text-center">
            <div className="w-20 h-20 bg-gray-200 border-2 border-gray-800 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-gray-800" />
            </div>
            <h1 className="text-gray-900 mb-4">Booking Request Received!</h1>
            <p className="text-gray-700 mb-6">
              Thank you for your interest in visiting Taniti, {formData.name}! 
              We've received your booking request and will contact you shortly at {formData.email} 
              to confirm your reservation.
            </p>
            <div className="bg-gray-100 border-2 border-gray-800 p-6 mb-6">
              <h3 className="text-gray-900 mb-3">Your Trip Details</h3>
              <div className="text-left space-y-2 text-sm text-gray-700">
                <p><strong>Arrival:</strong> {formData.arrivalDate}</p>
                <p><strong>Departure:</strong> {formData.departureDate}</p>
                <p><strong>Travelers:</strong> {formData.numberOfTravelers}</p>
                <p><strong>Accommodation:</strong> {formData.accommodation}</p>
                {formData.activities.length > 0 && (
                  <p><strong>Interests:</strong> {formData.activities.join(', ')}</p>
                )}
              </div>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  arrivalDate: '',
                  departureDate: '',
                  numberOfTravelers: '1',
                  accommodation: '',
                  activities: []
                });
              }}
              className="bg-gray-800 text-white px-6 py-2 border-2 border-gray-800 hover:bg-gray-700 transition-colors"
            >
              Book Another Trip
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Book Your Visit' }]} />

      {/* Hero Section */}
      <div className="bg-gray-800 text-white py-16 border-b-2 border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4">Book Your Trip to Taniti</h1>
          <p className="text-xl text-gray-300">
            Start planning your tropical paradise getaway today
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border-2 border-gray-800 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h2 className="text-gray-900 mb-6">Personal Information</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border-2 border-gray-800 bg-white focus:outline-none focus:border-gray-600"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border-2 border-gray-800 bg-white focus:outline-none focus:border-gray-600"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border-2 border-gray-800 bg-white focus:outline-none focus:border-gray-600"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Travel Dates */}
            <div className="border-t-2 border-gray-300 pt-6">
              <h2 className="text-gray-900 mb-6">Travel Dates</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="arrivalDate" className="block text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Arrival Date *
                  </label>
                  <input
                    type="date"
                    id="arrivalDate"
                    name="arrivalDate"
                    required
                    value={formData.arrivalDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border-2 border-gray-800 bg-white focus:outline-none focus:border-gray-600"
                  />
                </div>

                <div>
                  <label htmlFor="departureDate" className="block text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Departure Date *
                  </label>
                  <input
                    type="date"
                    id="departureDate"
                    name="departureDate"
                    required
                    value={formData.departureDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border-2 border-gray-800 bg-white focus:outline-none focus:border-gray-600"
                  />
                </div>
              </div>
            </div>

            {/* Trip Details */}
            <div className="border-t-2 border-gray-300 pt-6">
              <h2 className="text-gray-900 mb-6">Trip Details</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="numberOfTravelers" className="block text-gray-700 mb-2">
                    <Users className="w-4 h-4 inline mr-2" />
                    Number of Travelers *
                  </label>
                  <select
                    id="numberOfTravelers"
                    name="numberOfTravelers"
                    required
                    value={formData.numberOfTravelers}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border-2 border-gray-800 bg-white focus:outline-none focus:border-gray-600"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                    ))}
                    <option value="9+">9+ People</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="accommodation" className="block text-gray-700 mb-2">
                    <Home className="w-4 h-4 inline mr-2" />
                    Accommodation Preference *
                  </label>
                  <select
                    id="accommodation"
                    name="accommodation"
                    required
                    value={formData.accommodation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border-2 border-gray-800 bg-white focus:outline-none focus:border-gray-600"
                  >
                    <option value="">Select an option</option>
                    {accommodationOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Activities of Interest */}
            <div className="border-t-2 border-gray-300 pt-6">
              <h2 className="text-gray-900 mb-4">Activities of Interest</h2>
              <p className="text-gray-600 text-sm mb-4">Select all that apply</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activityOptions.map(activity => (
                  <label
                    key={activity}
                    className="flex items-center gap-3 p-3 border-2 border-gray-800 bg-white hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={formData.activities.includes(activity)}
                      onChange={() => handleActivityToggle(activity)}
                      className="w-4 h-4 text-gray-800 border-2 border-gray-800 focus:ring-gray-800"
                    />
                    <span className="text-gray-700 text-sm">{activity}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="border-t-2 border-gray-300 pt-6">
              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-3 border-2 border-gray-800 hover:bg-gray-700 transition-colors"
              >
                Submit Booking Request
              </button>
              <p className="text-gray-500 text-sm text-center mt-3">
                * Required fields
              </p>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-gray-100 border-2 border-gray-800 p-6">
          <h3 className="text-gray-900 mb-3">What Happens Next?</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-gray-800 mt-1">1.</span>
              <span>We'll review your booking request within 24 hours</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-800 mt-1">2.</span>
              <span>You'll receive a confirmation email with accommodation options</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-800 mt-1">3.</span>
              <span>Our team will help you plan activities and transportation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-800 mt-1">4.</span>
              <span>Get ready for your tropical paradise adventure!</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}