import React, { useState, useEffect, useRef } from "react";
import s2j from "../Images/s2j.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-white shadow-md p-3 rounded-lg">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={s2j} alt="Logo" className="w-17 h-17" />
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 focus:outline-none" onClick={toggleMobileMenu}>
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-black font-semibold">
                    <li><Link to="/" className="hover:text-gray-600">Home</Link></li>
                    <li><Link to="/about" className="hover:text-gray-600">About Us</Link></li>

                    {/* Courses Dropdown */}
                    <li className="relative" ref={dropdownRef}>
                        <button onClick={toggleDropdown} className="flex items-center hover:text-gray-600">
                            Courses
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute left-0 bg-white shadow-lg rounded mt-2 p-4 w-64 z-50 grid grid-cols-2 gap-4">
                                {/* Column 1 */}
                                <ul className="space-y-2">
                                    <li><Link to="/java" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>Java Full Stack</Link></li>
                                    <li><Link to="/python" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>Python Full Stack</Link></li>
                                    <li><Link to="/phpfullstack" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>PHP Full Stack</Link></li>
                                    <li><Link to="/cloud" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>Cloud Computing</Link></li>
                                    <li><Link to="/dataanalytics" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>Data Analyst</Link></li>
                                </ul>

                                {/* Column 2 */}
                                <ul className="space-y-2">
                                    <li><Link to="/angular" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>Angular</Link></li>
                                    <li><Link to="/react" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>React</Link></li>
                                    <li><Link to="/frontend" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>Frontend</Link></li>
                                    <li><Link to="/database" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>Database</Link></li>
                                    <li><Link to="/ccpp" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>C, C++</Link></li>
                                </ul>
                            </div>
                        )}
                    </li>

                    <li><Link to="/batches" className="hover:text-gray-600">Batches</Link></li>
                    <li><Link to="/testimonials" className="hover:text-gray-600">Testimonials</Link></li>
                    <li><Link to="/job" className="hover:text-gray-600">Job</Link></li>
                    <li><Link to="/contact" className="hover:text-gray-600">Contact Us</Link></li>
                </ul>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-gray-100 p-4 space-y-2 rounded-lg`}>
                <ul className="space-y-2 text-black">
                    <li><Link to="/" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/about" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>

                    {/* Courses Dropdown */}
                    <li>
                        <button onClick={toggleDropdown} className="text-center block w-full py-2 hover:bg-gray-200 rounded">
                            Courses
                        </button>
                        {isDropdownOpen && (
                            <div className="bg-gray-100 rounded-lg p-4 shadow-md text-gray-700 grid grid-cols-2 gap-4">
                                {/* Column 1 */}
                                <ul className="space-y-2">
                                    <li><Link to="/java" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>Java Full Stack</Link></li>
                                    <li><Link to="/python" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>Python Full Stack</Link></li>
                                    <li><Link to="/phpfullstack" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>PHP Full Stack</Link></li>
                                    <li><Link to="/cloud" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>Cloud Computing</Link></li>
                                    <li><Link to="/dataanalytics" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>Data Analyst</Link></li>
                                </ul>
                            </div>
                        )}
                    </li>

                    <li><Link to="/batches" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Batches</Link></li>
                    <li><Link to="/testimonials" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</Link></li>
                    <li><Link to="/job" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Job</Link></li>
                    <li><Link to="/contact" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
