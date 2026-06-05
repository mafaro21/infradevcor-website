"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/public/infraLogo.png'
import Image from 'next/image';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isUnitsOpen, setIsUnitsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(false);
        setIsAboutOpen(false);
        setIsUnitsOpen(false);
    }, [pathname]);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About', dropdown: true, dropdownType: 'about' },
        { href: '/projects', label: 'Projects' },
        { href: '/units', label: 'Business Units', dropdown: true, dropdownType: 'units' },
        { href: '/services', label: 'Services' },
        { href: '/contact', label: 'Contact' }
    ];

    const aboutDropdownLinks = [
        { href: '/about#team', label: 'Our Team' },
        { href: '/governance', label: 'Corporate Governance' }
    ];

    const unitsDropdownLinks = [
        { href: '/units/civil-engineering', label: 'Civil Engineering' },
        { href: '/units/sanitary-engineering', label: 'Sanitary Engineering' },
        { href: '/units/planning-development', label: 'Planning & Development' }
    ];

    const isActive = (path: string) => {
        // Check exact match or if it's a hash link from about page
        if (path.includes('#')) {
            return pathname === '/about';
        }
        return pathname === path;
    };

    const isDropdownActive = (href: string) => {
        if (href.includes('#')) {
            return pathname === '/about';
        }
        return pathname === href;
    };

    return (
        <nav className="bg-stone-50 fixed w-full z-50 border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image src={Logo} alt={'Infradevcor Logo'} height={70} />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.href}
                                className="relative"
                                onMouseEnter={() => {
                                    if (link.dropdownType === 'about') setIsAboutOpen(true);
                                    if (link.dropdownType === 'units') setIsUnitsOpen(true);
                                }}
                                onMouseLeave={() => {
                                    if (link.dropdownType === 'about') setIsAboutOpen(false);
                                    if (link.dropdownType === 'units') setIsUnitsOpen(false);
                                }}
                            >
                                <Link
                                    href={link.href}
                                    className={`text-base transition-all py-2 ${
                                        isActive(link.href)
                                            ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
                                            : 'text-gray-600 hover:text-blue-600'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                                
                                {/* About Dropdown Menu */}
                                {link.dropdownType === 'about' && isAboutOpen && (
                                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                                        {aboutDropdownLinks.map((dropdownLink) => (
                                            <Link
                                                key={dropdownLink.href}
                                                href={dropdownLink.href}
                                                className={`block px-4 py-2 text-sm transition-colors ${
                                                    isDropdownActive(dropdownLink.href)
                                                        ? 'bg-blue-50 text-blue-600 font-semibold'
                                                        : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                                }`}
                                            >
                                                {dropdownLink.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}

                                {/* Business Units Dropdown Menu */}
                                {link.dropdownType === 'units' && isUnitsOpen && (
                                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                                        {unitsDropdownLinks.map((dropdownLink) => (
                                            <Link
                                                key={dropdownLink.href}
                                                href={dropdownLink.href}
                                                className={`block px-4 py-2 text-sm transition-colors ${
                                                    pathname === dropdownLink.href
                                                        ? 'bg-blue-50 text-blue-600 font-semibold'
                                                        : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                                }`}
                                            >
                                                {dropdownLink.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none text-3xl"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-stone-50 border-t border-gray-200 px-4 py-4">
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <div key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`px-4 py-3 rounded-lg text-base block ${
                                        isActive(link.href)
                                            ? 'bg-blue-50 text-blue-600 font-semibold'
                                            : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                                
                                {/* Mobile About dropdown submenu */}
                                {link.dropdownType === 'about' && (
                                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-4">
                                        {aboutDropdownLinks.map((dropdownLink) => (
                                            <Link
                                                key={dropdownLink.href}
                                                href={dropdownLink.href}
                                                className={`px-4 py-2 rounded-lg text-sm block ${
                                                    isDropdownActive(dropdownLink.href)
                                                        ? 'bg-blue-50 text-blue-600 font-semibold'
                                                        : 'text-gray-600 hover:bg-gray-100'
                                                }`}
                                            >
                                                {dropdownLink.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}

                                {/* Mobile Business Units dropdown submenu */}
                                {link.dropdownType === 'units' && (
                                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-4">
                                        {unitsDropdownLinks.map((dropdownLink) => (
                                            <Link
                                                key={dropdownLink.href}
                                                href={dropdownLink.href}
                                                className={`px-4 py-2 rounded-lg text-sm block ${
                                                    pathname === dropdownLink.href
                                                        ? 'bg-blue-50 text-blue-600 font-semibold'
                                                        : 'text-gray-600 hover:bg-gray-100'
                                                }`}
                                            >
                                                {dropdownLink.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}