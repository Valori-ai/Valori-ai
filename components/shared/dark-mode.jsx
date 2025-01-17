'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const DarkMode = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const closeMenu = () => setMenuOpen(false);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isMenuOpen) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isMenuOpen]);

  return (
    <div className="relative inline-block">
      {/* Button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent immediate close due to outside click
          toggleMenu();
        }}
        className="p-2 rounded-md border dark:border-gray-600"
        aria-label="Toggle theme menu"
      >
        {theme === 'dark' ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div
          className="absolute right-0 mt-2 w-40 border shadow-lg bg-white bg-opacity-90 dark:bg-black dark:bg-opacity-90 dark:shadow-xl rounded-md py-2 z-50"
          onClick={(e) => e.stopPropagation()} // Prevent menu from closing when clicking inside
        >
          <button
            onClick={() => {
              setTheme('light');
              closeMenu();
            }}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Light
          </button>
          <button
            onClick={() => {
              setTheme('dark');
              closeMenu();
            }}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Dark
          </button>
          <button
            onClick={() => {
              setTheme('system');
              closeMenu();
            }}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            System
          </button>
        </div>
      )}
    </div>
  );
};

export default DarkMode;