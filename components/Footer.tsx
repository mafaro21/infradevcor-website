import Link from 'next/link';
import Logo from '@/public/logoNoText.png'
import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-950 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div>
                        <Link href="/" className="">
                            <Image src={Logo} alt={'Infradevcor Logo'} height={40} />
                        </Link>
                        <p className="text-blue-200 leading-relaxed mb-4 mt-4">
                            Professional construction services for all your building needs. Quality, reliability, and excellence since 2025.
                        </p>
                        {/* <div className="flex gap-4">
                            <span className="text-blue-200 text-xl">📱</span>
                            <span className="text-blue-200 text-xl">📧</span>
                            <span className="text-blue-200 text-xl">📍</span>
                        </div> */}
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-blue-200 hover:text-lime-400 transition">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Services</h4>
                        <ul className="space-y-2">
                            {['Residential', 'Commercial', 'Sustainable', 'Project Management'].map((service) => (
                                <li key={service} className="text-blue-200">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Contact</h4>
                        <ul className="space-y-2 text-blue-200">
                            <li>55 Lawley Drive</li>
                            <li>Belvedere</li>
                            <li>Harare</li>
                            <li>0242-257156</li>
                            <li>info@infradevcor.com</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-blue-800 pt-8 text-center text-blue-300">
                    <p>© {currentYear} Infradevcor. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}