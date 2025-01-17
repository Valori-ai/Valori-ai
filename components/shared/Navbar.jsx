'use client';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import DarkMode from './dark-mode';
import {  SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  // Close the mobile menu when clicking outside
  const handleOutsideClick = (e) => {
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isMobileMenuOpen]);

  return (
    <nav className="py-4 px-4 mx-auto flex justify-between items-center border-b relative">
      {/* Logo */}
      <div className="flex items-center">
        <Link
          href="/"
          className="font-bold text-primary rounded-xl py-1 text-2xl"
        >
          Valori
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className='lg:hidden flex items-center'>
      <div className="flex gap-x-1 lg:hidden">
      <div
          className="rounded-md border dark:border-gray-600 p-1 flex items-center text-opacity-90 hover:text-opacity-100"
        >
           <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <div>
            <DarkMode />
          </div>
      </div>
      
      <button
        className="lg:hidden p-1.5 ml-1 border rounded-md bg-opacity-10"
        onClick={(e) => {
          e.stopPropagation(); // Prevent immediate close due to outside click
          toggleMobileMenu();
        }}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      </div>

      {/* Mobile Menu */}

      {isMobileMenuOpen && (
        <div
          className="absolute bg-white dark:bg-background top-16 right-4 border shadow-lg rounded-md px-6 text-sm py-3 flex flex-col gap-y-4 lg:hidden z-50"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
        >
          <Link
            href="/blog"
            className="hover:underline text-opacity-60 hover:text-opacity-100"
          >
            Blog
          </Link>
          <Link
            href="/pricing"
            className="hover:underline text-opacity-60 hover:text-opacity-100"
          >
            Pricing
          </Link>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-x-4">
        <Link
          href="/blog"
          className="hover:underline text-opacity-60 hover:text-opacity-100"
        >
          Blog
        </Link>
        <Link
          href="/pricing"
          className="hover:underline text-opacity-60 hover:text-opacity-100"
        >
          Pricing
        </Link>
        <div className=''>
            <DarkMode />
          </div>
          <div className="hidden lg:flex">
        <div
          className="border dark:border-gray-600 p-1 rounded-md flex items-center text-opacity-90 hover:text-opacity-100"
        >
           <SignedOut>
            <SignInButton className="p-0.5" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
