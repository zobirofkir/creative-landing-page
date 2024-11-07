import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">CSW</h2>
          <p className="text-gray-400">
            CSW is dedicated to providing top-notch web solutions. From development to design, we focus on delivering high-quality digital experiences.
          </p>
        </div>

        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-gray-400">About Us</a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-400">Services</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400">Contact</a>
            </li>
            <li>
              <a href="/blog" className="hover:text-gray-400">Blog</a>
            </li>
            <li>
              <a href="/faq" className="hover:text-gray-400">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400 mb-2">Email: <a href="mailto:info@csw.com" className="hover:text-gray-400">info@csw.com</a></p>
          <p className="text-gray-400 mb-2">Phone: +1 (555) 123-4567</p>
          <p className="text-gray-400">Address: 1234 Web Street, Suite 567, City, Country</p>
        </div>

        {/* Newsletter Signup Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">Stay updated with the latest news, offers, and insights from CSW. Subscribe to our newsletter!</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md bg-gray-700 text-white border-none focus:ring-2 focus:ring-gray-600"
            />
            <button className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">Subscribe</button>
          </div> 
        </div>
      </div>

      <div className="flex justify-center gap-6 mb-6">
        <a href="/" className="hover:text-gray-400">
          <i className="fab fa-facebook-f text-xl"></i>
        </a>
        <a href="/" className="hover:text-gray-400">
          <i className="fab fa-twitter text-xl"></i>
        </a>
        <a href="/" className="hover:text-gray-400">
          <i className="fab fa-instagram text-xl"></i>
        </a>
        <a href="/" className="hover:text-gray-400">
          <i className="fab fa-linkedin-in text-xl"></i>
        </a>
      </div>

      <div className="text-center text-sm text-gray-500 mt-4">
        &copy; {new Date().getFullYear()} CSW. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterComponent;
