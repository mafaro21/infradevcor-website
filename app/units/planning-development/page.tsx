// app/units/planning-development/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PlanningDevelopment() {
    const projects = [
        { name: 'Kigali Master Plan', location: 'Rwanda', year: '2024' },
        { name: 'Accra Urban Renewal', location: 'Ghana', year: '2025' },
        { name: 'Nairobi Green City', location: 'Kenya', year: '2024' }
    ];

    return (
        <main className="min-h-screen bg-stone-50">
            <Navbar />
            <div className="h-20"></div>

            <section className="bg-linear-to-r from-blue-600 to-lime-600 text-white py-20 px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Planning & Development</h1>
                    <p className="text-xl opacity-90">Shaping sustainable communities for tomorrow</p>
                </div>
            </section>

            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Overview</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Our Planning & Development division creates visionary strategies for urban growth, 
                            ensuring sustainable and livable communities for future generations.
                        </p>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            We work with governments, developers, and communities to plan infrastructure projects 
                            that balance economic growth with environmental stewardship.
                        </p>
                        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Key Services:</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Urban and Regional Planning</li>
                            <li>Feasibility Studies</li>
                            <li>Environmental Impact Assessment</li>
                            <li>Project Feasibility and ROI Analysis</li>
                            <li>Sustainable Development Strategies</li>
                            <li>Community Engagement Programs</li>
                        </ul>
                    </div>
                    <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                        <Image
                            src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Urban Planning"
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