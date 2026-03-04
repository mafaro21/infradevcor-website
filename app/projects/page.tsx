import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Projects() {
    const projects = [
        // {
        //     title: 'Modern Office Tower',
        //     category: 'Commercial',
        //     location: 'Downtown City',
        //     year: '2024',
        //     color: 'bg-blue-600',
        //     image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        //     description: 'A 20-story sustainable office building with smart technology integration.'
        // },
        {
            title: 'Avonlea Extension Trust',
            category: 'Residential',
            location: 'Avonlea',
            year: '2025',
            color: 'bg-lime-600',
            image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            description: `A sustainable residential complex with 120 stands
            measuring an average of 1000sqm featuring energy- efficient designs and some
            solar designs.`
        },
        // {
        //     title: 'Green Tech Park',
        //     category: 'Sustainable',
        //     location: 'Tech Valley',
        //     year: '2024',
        //     color: 'bg-blue-600',
        //     image: 'https://images.pexels.com/photos/258160/pexels-photo-258160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        //     description: 'LEED Platinum certified office complex with solar panels and green roofs.'
        // },
        // {
        //     title: 'City Mall Renovation',
        //     category: 'Commercial',
        //     location: 'City Center',
        //     year: '2023',
        //     color: 'bg-lime-600',
        //     image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        //     description: 'Complete renovation of a 500,000 sq ft shopping center.'
        // },
        // {
        //     title: 'Mountain View Estates',
        //     category: 'Residential',
        //     location: 'Highland Hills',
        //     year: '2024',
        //     color: 'bg-blue-600',
        //     image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        //     description: 'Luxury community of 25 custom homes with mountain views.'
        // },
        // {
        //     title: 'Industrial Warehouse',
        //     category: 'Industrial',
        //     location: 'Business Park',
        //     year: '2023',
        //     color: 'bg-lime-600',
        //     image: 'https://images.pexels.com/photos/4481254/pexels-photo-4481254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        //     description: 'State-of-the-art distribution center with automated systems.'
        // }
    ];

    return (
        <main className="min-h-screen bg-stone-50">
            <Navbar />
            <div className="h-20"></div>

            {/* Page Header */}
            <section className="bg-lime-600 text-white py-20 px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
                    <p className="text-xl opacity-90">Explore our portfolio of completed construction projects</p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-12 px-4 max-w-7xl mx-auto">
                <div className='text-black pb-9 text-center text-lg'>Although in its infancy, Infradevcor Private Limited has already embarked on notable
                    projects, including:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                            <div className={`${project.color} h-2`}></div>
                            <div className="relative h-56">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    unoptimized={true}
                                />
                                <div className={`absolute top-4 right-4 ${project.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                                    {project.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                                <div className="flex justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                                    <span>📍 {project.location}</span>
                                    <span>📅 {project.year}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <Footer />
        </main>
    );
}