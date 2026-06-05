import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
    const values = [
        { title: 'Integrity', icon: '🤝', color: 'text-lime-600', description: 'Conducting business with honesty and transparency.' },
        { title: 'Quality', icon: '⭐', color: 'text-blue-600', description: 'Ensuring excellence in every aspect of our work.' },
        { title: 'Safety', icon: '🛡️', color: 'text-lime-600', description: 'Prioritizing the health and safety of our employees, clients, and the public.' },
        { title: 'Innovation', icon: '💡', color: 'text-blue-600', description: ' Embracing new technologies and methods to improve efficiency and outcomes.' },
        { title: 'Sustainability', icon: '🌱', color: 'text-lime-600', description: 'Committing to environmental stewardship in all our projects.' },
    ];

    const leadershipTeam = {
        chairman: {
            name: 'Eng. Tafadzwa Muguti',
            title: 'Group Chairman',
            message: '"At Infradevcor, we believe that infrastructure is the backbone of African progress. Our commitment to excellence, integrity, and innovation drives us to build not just structures, but lasting relationships with our clients and communities across the continent. As we embark on this journey, I am confident that our dedicated team will set new benchmarks in the construction industry, delivering projects that stand the test of time while contributing to sustainable development across Africa."',
            // PLACEHOLDER IMAGE - Replace with actual image
            image: 'https://placehold.co/800x1000/1a2b3c/white?text=Chairman+Photo',
        },
        gm: {
            name: 'Thabo Mbeki',
            title: 'General Manager',
            role: 'General Manager - Operations',
            experience: '22+ years',
            // PLACEHOLDER IMAGE - Replace with actual image
            image: 'https://placehold.co/800x800/2c3e50/white?text=GM+Photo',
            bio: 'Leading overall operations with expertise in large-scale infrastructure projects across East and West Africa'
        },
        managers: [
            { 
                name: 'Amina Diallo', 
                role: 'Project Manager', 
                experience: '12+ years',
                // PLACEHOLDER IMAGE - Replace with actual image
                image: 'https://placehold.co/800x800/34495e/white?text=Amina+Diallo',
                specialization: 'Road & Highway Projects'
            },
            { 
                name: 'Musa Keita', 
                role: 'Site Manager', 
                experience: '10+ years',
                // PLACEHOLDER IMAGE - Replace with actual image
                image: 'https://placehold.co/800x800/2c3e50/white?text=Musa+Keita',
                specialization: 'Water Management'
            },
            { 
                name: 'Zanele Ndlovu', 
                role: 'Safety Manager', 
                experience: '8+ years',
                // PLACEHOLDER IMAGE - Replace with actual image
                image: 'https://placehold.co/800x800/34495e/white?text=Zanele+Ndlovu',
                specialization: 'HSE & Compliance'
            },
            { 
                name: 'Oluwaseun Adebayo', 
                role: 'Quality Manager', 
                experience: '11+ years',
                // PLACEHOLDER IMAGE - Replace with actual image
                image: 'https://placehold.co/800x800/2c3e50/white?text=Oluwaseun+Adebayo',
                specialization: 'Quality Assurance'
            }
        ]
    };

    return (
        <main className="min-h-screen bg-stone-50">
            <Navbar />
            <div className="h-20"></div>

            {/* Page Header */}
            <section className="bg-linear-to-r from-blue-600 to-lime-600 text-white py-20 px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Infradevcor</h1>
                    <p className="text-xl opacity-90">
                        Building excellence through experience, integrity, and innovation since 2025
                    </p>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Company Overview</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Infradevcor Private Limited is a dynamic and innovative civil construction company,
                            newly established to redefine the landscape of the construction industry across Africa.
                        </p>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Specializing in a broad spectrum of civil construction services, we are establishing ourselves as a key
                            player in the development of infrastructure that powers the future with a forward-thinking
                            approach, we specialize in delivering high-quality construction projects that meet the
                            evolving needs of our clients and the environment.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our projects span across vital sectors including road construction, water management, urban development, and
                            renewable energy. Our mission is to build not just structures but sustainable and
                            valuable spaces that enhance communities and lives across the African continent.
                        </p>
                    </div>
                    <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                        {/* PLACEHOLDER IMAGE - Replace with actual image */}
                        <Image
                            src="https://placehold.co/1200x800/2c3e50/white?text=Construction+Team+Photo"
                            alt="Construction team placeholder"
                            fill
                            className="object-cover"
                            unoptimized={true}
                            
                        />
                    </div>
                </div>
            </section>

            {/* Chairman's Message */}
            <section className="py-20 bg-linear-to-br from-blue-50 to-stone-100" id="team">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col items-center">
                            <div className="relative w-full max-w-md h-[500px] rounded-2xl overflow-hidden border-4 border-lime-600 shadow-xl">
                                <Image
                                    src={leadershipTeam.chairman.image}
                                    alt={leadershipTeam.chairman.name}
                                    fill
                                    className="object-cover object-top"
                                    unoptimized={true}
                                />
                            </div>
                            <div className="text-center mt-6">
                                <h3 className="text-2xl font-bold text-gray-800">{leadershipTeam.chairman.name}</h3>
                                <p className="text-lime-600 font-semibold text-lg">{leadershipTeam.chairman.title}</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 relative">
                            <div className="absolute -top-4 left-8 text-6xl text-lime-600 opacity-20">"</div>
                            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic relative z-10">
                                {leadershipTeam.chairman.message}
                            </p>
                            <div className="absolute -bottom-4 right-8 text-6xl text-lime-600 opacity-20">"</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* General Manager Section */}
            <section className="pt-20 pb-10 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Leadership Team</h2>
                    <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-lime-50 rounded-2xl shadow-lg overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-8 p-8 items-center">
                            <div className="relative h-80 rounded-xl overflow-hidden">
                                <Image
                                    src={leadershipTeam.gm.image}
                                    alt={leadershipTeam.gm.name}
                                    fill
                                    className="object-cover"
                                    unoptimized={true}
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{leadershipTeam.gm.name}</h3>
                                <p className="text-lime-600 font-semibold text-lg mb-2">{leadershipTeam.gm.title}</p>
                                <p className="text-blue-600 mb-3">{leadershipTeam.gm.experience} experience</p>
                                <p className="text-gray-600 leading-relaxed">{leadershipTeam.gm.bio}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Managers Section */}
            <section className="py-10 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Management Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {leadershipTeam.managers.map((manager, index) => (
                            <div key={index} className="bg-stone-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={manager.image}
                                        alt={manager.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition duration-500"
                                        unoptimized={true}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-1">{manager.name}</h3>
                                    <p className="text-lime-600 font-semibold mb-2">{manager.role}</p>
                                    <p className="text-blue-600 text-sm mb-2">{manager.specialization}</p>
                                    <p className="text-gray-500 text-sm">{manager.experience} experience</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-20 bg-stone-50">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
                    <p className="text-xl text-gray-600 leading-relaxed italic mb-8">
                        "To innovate and excel in the construction industry by delivering projects that embody
                        sustainability, durability, and modernity, ensuring client satisfaction and environmental
                        stewardship are at the forefront of everything we do."
                    </p>
                    <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-lime-600 mx-auto"></div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((value, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <div className="text-4xl mb-4">{value.icon}</div>
                            <h3 className={`text-xl font-bold ${value.color} mb-3`}>{value.title}</h3>
                            <p className="text-gray-600">{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-linear-to-r from-blue-900 to-blue-800 text-white text-center px-4">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to work with us?</h2>
                    <p className="text-xl mb-8 opacity-90">Let's discuss your next project and how we can bring your vision to life</p>
                    <Link href="/contact">
                        <button className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition">
                            Contact Us Today
                        </button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}