"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/public/infraLogo.png'
import Image from 'next/image';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const navLinks = [
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ];

    const isActive = (path: string) => pathname === path;

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
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-base transition-all ${isActive(link.href)
                                    ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
                                    : 'text-gray-600 hover:text-blue-600'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button className="bg-lime-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-lime-700 transition">
                            Get Quote
                        </button>
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
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-3 rounded-lg text-base ${isActive(link.href)
                                    ? 'bg-blue-50 text-blue-600 font-semibold'
                                    : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button className="bg-lime-600 text-white px-4 py-3 rounded-lg font-semibold text-base mt-2">
                            Get Quote
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}