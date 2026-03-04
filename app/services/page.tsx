import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Services() {
    const mainServices = [
        {
            title: 'Residential Construction',
            description: 'Custom homes, renovations, extensions, and luxury residences tailored to your lifestyle.',
            icon: '🏠',
            color: 'bg-blue-600',
            features: ['Custom Home Building', 'Home Renovations', 'Extensions', 'Luxury Finishes']
        },
        {
            title: 'Commercial Construction',
            description: 'Office buildings, retail spaces, restaurants, and commercial complexes.',
            icon: '🏢',
            color: 'bg-lime-600',
            features: ['Office Buildings', 'Retail Spaces', 'Restaurants', 'Commercial Complexes']
        },
        {
            title: 'Sustainable Building',
            description: 'Eco-friendly construction with energy-efficient designs and green materials.',
            icon: '🌱',
            color: 'bg-blue-600',
            features: ['LEED Certification', 'Solar Integration', 'Green Materials', 'Energy Efficiency']
        },
        {
            title: 'Project Management',
            description: 'Comprehensive project oversight from planning to completion.',
            icon: '📋',
            color: 'bg-lime-600',
            features: ['Budget Management', 'Timeline Planning', 'Vendor Coordination', 'Quality Control']
        }
    ];

    const additionalServices = [
        'Road Construction and Maintenance', 'Bridge Design and Construction', 'Water and Wastewater Treatment Plants',
        'Urban Development and Regeneration', 'Renewable Energy Infrastructure'
    ];

    return (
        <main className="min-h-screen bg-stone-50">
            <Navbar />
            <div className="h-20"></div>

            {/* Page Header */}
            <section className="bg-blue-600 text-white py-20 px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                    <p className="text-xl opacity-90">Comprehensive construction solutions tailored to your needs</p>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Core Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {mainServices.map((service, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className={`${service.color} h-2`}></div>
                            <div className="p-8">
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className={`text-2xl font-bold mb-4 ${index % 2 === 0 ? 'text-blue-600' : 'text-lime-600'}`}>
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-gray-700">
                                            <span className={index % 2 === 0 ? 'text-blue-600' : 'text-lime-600'}>✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">Additional Services</h2>
                    <p className="text-center text-gray-600 mb-12">Specialized solutions for every aspect of your project</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {additionalServices.map((service, index) => (
                            <div key={index} className="bg-stone-50 p-4 rounded-lg text-center text-gray-700 border border-gray-200">
                                {service}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-lime-600 text-white text-center px-4">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
                    <p className="text-xl mb-8 opacity-90">Contact us today for a free consultation and quote</p>
                    <Link href="/contact">
                        <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition">
                            Get in Touch
                        </button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}