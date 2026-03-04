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
        { title: 'Sustainability', icon: '💡', color: 'text-lime-600', description: 'Committing to environmental stewardship in all our projects.' },
    ];

    const team = [
        { name: 'John Smith', role: 'Founder & CEO', experience: '25+ years', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { name: 'Sarah Johnson', role: 'Lead Architect', experience: '15+ years', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { name: 'Michael Chen', role: 'Project Director', experience: '20+ years', image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
    ];

    return (
        <main className="min-h-screen bg-stone-50">
            <Navbar />
            <div className="h-20"></div>

            {/* Page Header */}
            <section className="bg-gradient-to-r from-blue-600 to-lime-600 text-white py-20 px-4 text-center">
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
                            newly established to redefine the landscape of the construction industry.
                        </p>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Specializing in
                            a broad spectrum of civil construction services, we are establishing ourselves as a key
                            player in the development of infrastructure that powers the future with a forward-thinking
                            approach, we specialize in delivering high-quality construction projects that meet the
                            evolving needs of our clients and the environment.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our projects span across vital
                            sectors including road construction, water management, urban development, and
                            renewable energy. Our mission is to build not just structures but sustainable and
                            valuable spaces that enhance communities and lives
                        </p>
                    </div>
                    <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                        <Image
                            src="https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Construction team"
                            fill
                            className="object-cover"
                            unoptimized={true}
                        />
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
                    <p className="text-xl text-gray-600 leading-relaxed italic mb-8">
                        "To innovate and excel in the construction industry by delivering projects that embody
                        sustainability, durability, and modernity, ensuring client satisfaction and environmental
                        stewardship are at the forefront of everything we do."
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-lime-600 mx-auto"></div>
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

            {/* Leadership Team */}
            {/* <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Leadership Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="text-center">
                                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-600">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                        unoptimized={true}
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                                <p className="text-lime-600 font-semibold mb-2">{member.role}</p>
                                <p className="text-gray-500">{member.experience} experience</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white text-center px-4">
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