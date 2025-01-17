import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t px-4 py-10">
      <div className="container">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm mb-2">Got questions? Reach out to us:</p>
            <div className="flex items-center gap-2">
              {/* <IconMail className="text-white w-5 h-5" /> */}
              <a href="mailto:gptrush.io@gmail.com" className="hover:underline">
              gptrush.io@gmail.com
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms-of-service" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cancellation-refund" className="hover:underline">
                  Cancellation & Refund
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="hover:underline">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Socials</h3>
            <ul className="flex space-x-4 items-center">
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t pt-4 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Valori. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;