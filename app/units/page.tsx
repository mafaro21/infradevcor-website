// app/units/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Units() {
    const units = [
        {
            title: 'Civil Engineering',
            slug: 'civil-engineering',
            description: 'Design, construction, and maintenance of infrastructure projects including roads, bridges, and large-scale structures.',
            image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            features: ['Road Construction', 'Bridge Engineering', 'Structural Design', 'Site Development']
        },
        {
            title: 'Sanitary Engineering',
            slug: 'sanitary-engineering',
            description: 'Water supply systems, wastewater treatment, and sanitation infrastructure for healthy communities.',
            image: 'https://images.unsplash.com/photo-1533077162801-86490c593afb?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            features: ['Water Treatment', 'Sewage Systems', 'Drainage Solutions', 'Waste Management']
        },
        {
            title: 'Planning & Development',
            slug: 'planning-development',
            description: 'Urban planning, feasibility studies, and sustainable development strategies for future-ready communities.',
            image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            features: ['Urban Planning', 'Feasibility Studies', 'Environmental Impact', 'Project Management']
        }
    ];

    return (
        <main className="min-h-screen bg-stone-50">
            <Navbar />
            <div className="h-20"></div>

            {/* Page Header */}
            <section className="bg-linear-to-r from-blue-600 to-lime-600 text-white py-20 px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Units</h1>
                    <p className="text-xl opacity-90">
                        Specialized divisions delivering excellence across the construction spectrum
                    </p>
                </div>
            </section>

            {/* Units Grid */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {units.map((unit, index) => (
                        <Link href={`/units/${unit.slug}`} key={index}>
                            <div className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer h-full flex flex-col">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={unit.image}
                                        alt={unit.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        unoptimized={true}
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h3 className="text-2xl font-bold">{unit.title}</h3>
                                    </div>
                                </div>
                                <div className="p-6 flex-grow">
                                    <p className="text-gray-600 mb-4">{unit.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {unit.features.slice(0, 2).map((feature, i) => (
                                            <span key={i} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-4 text-lime-600 font-semibold group-hover:text-blue-600 transition">
                                        Learn More →
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}