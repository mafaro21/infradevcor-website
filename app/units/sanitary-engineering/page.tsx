// app/units/sanitary-engineering/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SanitaryEngineering() {
    const projects = [
        { name: 'Kampala Water System', location: 'Uganda', year: '2024' },
        { name: 'Dar es Salaam Sanitation', location: 'Tanzania', year: '2025' },
        { name: 'Kigali Wastewater Plant', location: 'Rwanda', year: '2024' }
    ];

    return (
        <main className="min-h-screen bg-stone-50">
            <Navbar />
            <div className="h-20"></div>

            <section className="bg-linear-to-r from-blue-600 to-lime-600 text-white py-20 px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Sanitary Engineering</h1>
                    <p className="text-xl opacity-90">Clean water, healthy communities, sustainable solutions</p>
                </div>
            </section>

            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Overview</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Our Sanitary Engineering division focuses on providing clean water access and proper 
                            sanitation infrastructure that protects public health and the environment.
                        </p>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            We design, build, and maintain water treatment facilities, sewage systems, and drainage 
                            networks that serve communities across Africa.
                        </p>
                        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Key Services:</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Water Treatment Plants</li>
                            <li>Sewage Collection Systems</li>
                            <li>Wastewater Treatment Facilities</li>
                            <li>Stormwater Drainage</li>
                            <li>Solid Waste Management</li>
                            <li>Environmental Sanitation</li>
                        </ul>
                    </div>
                    <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1533077162801-86490c593afb?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Sanitary Engineering"
                            fill
                            className="object-cover"
                            unoptimized={true}
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}