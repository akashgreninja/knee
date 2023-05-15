import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Explore Keen</h3>
              <a href="#" className="block hover:text-gray-300">
                About
              </a>
              <a href="#" className="block hover:text-gray-300">
                Articles
              </a>
              <a href="#" className="block hover:text-gray-300">
                Horoscopes
              </a>
              <a href="#" className="block hover:text-gray-300">
                Start for Free
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Discover Advisors</h3>
              <a href="#" className="block hover:text-gray-300">
                Psychic Readings
              </a>
              <a href="#" className="block hover:text-gray-300">
                Love & Relationships
              </a>
              <a href="#" className="block hover:text-gray-300">
                Life Path & Advice
              </a>
              <a href="#" className="block hover:text-gray-300">
                Tarot Card Readings
              </a>
              <a href="#" className="block hover:text-gray-300">
                More Advisors
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">User Support</h3>
              <a href="#" className="block hover:text-gray-300">
                Help
              </a>
              <a href="#" className="block hover:text-gray-300">
                Customer Support
              </a>
              <a href="#" className="block hover:text-gray-300">
                Affiliate Program
              </a>
              <a href="#" className="block hover:text-gray-300">
                Give Advice
              </a>
              <a href="#" className="block hover:text-gray-300">
                Sitemap
              </a>
              <a href="#" className="block hover:text-gray-300">
                Community Insights
              </a>
              <a href="#" className="block hover:text-gray-300">
                Our Guarantee
              </a>
              <a href="#" className="block hover:text-gray-300">
                User Agreement
              </a>
              <a href="#" className="block hover:text-gray-300">
                Privacy
              </a>
              <a href="#" className="block hover:text-gray-300">
                Trademark
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    {/* Add logos */}
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    {/* Add logo */}
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    {/* Add your logos*/}
                  </svg>
                </a>
                {/* Add more logos*/}
              </div>
              <p className="text-gray-300">
                Follow us on social media for updates and more!
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
