"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Functions to open and close dropdown
  const openDropdown = () => setDropdownOpen(true);
  const closeDropdown = () => setDropdownOpen(false);

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>

        {/* Dropdown menu */}
        <li
          className="relative"
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
        >
          <span className="cursor-pointer">Services</span>

          {/* Dropdown items */}
          {dropdownOpen && (
            <ul className="absolute top-full mt-2 bg-gray-700 text-white shadow-lg rounded-md">
              <li className="px-4 py-2 hover:bg-gray-600">
                <Link href="/services/web-development">Web Development</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-600">
                <Link href="/services/app-development">App Development</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-600">
                <Link href="/services/seo">SEO</Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
