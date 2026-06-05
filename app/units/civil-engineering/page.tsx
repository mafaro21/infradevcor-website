// app/units/civil-engineering/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CivilEngineering() {
    const projects = [
        { name: 'Nairobi Expressway', location: 'Kenya', year: '2024' },
        { name: 'Lagos Bridge Network', location: 'Nigeria', year: '2025' },
        { name: 'Accra Urban Development', location: 'Ghana', year: '2024' }
    ];

    return (
        <main className="min-h-screen bg-stone-50">
            <Navbar />
            <div className="h-20"></div>

            <section className="bg-linear-to-r from-blue-600 to-lime-600 text-white py-20 px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Civil Engineering</h1>
                    <p className="text-xl opacity-90">Building the backbone of African infrastructure</p>
                </div>
            </section>

            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Overview</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Our Civil Engineering division specializes in the design, construction, and maintenance 
                            of critical infrastructure that forms the backbone of modern society.
                        </p>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            From major highways and bridges to commercial foundations and industrial complexes, 
                            we bring expertise, precision, and innovation to every project.
                        </p>
                        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Key Services:</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Road and Highway Construction</li>
                            <li>Bridge Engineering and Design</li>
                            <li>Structural Engineering</li>
                            <li>Site Preparation and Earthworks</li>
                            <li>Foundation and Piling Works</li>
                            <li>Commercial and Industrial Buildings</li>
                        </ul>
                    </div>
                    <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                        <Image
                            src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Civil Engineering"
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