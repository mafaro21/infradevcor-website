// app/about/corporate-governance/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CorporateGovernance() {
    const principles = [
        { title: 'Transparency', description: 'Open and honest communication with all stakeholders' },
        { title: 'Accountability', description: 'Clear responsibility and decision-making processes' },
        { title: 'Fairness', description: 'Equal treatment of all shareholders and stakeholders' },
        { title: 'Responsibility', description: 'Ethical business practices and corporate citizenship' }
    ];

    return (
        <main className="min-h-screen bg-stone-50">
            <Navbar />
            <div className="h-20"></div>

            {/* Page Header */}
            <section className="bg-linear-to-r from-blue-600 to-lime-600 text-white py-20 px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Corporate Governance</h1>
                    <p className="text-xl opacity-90">
                        Commitment to excellence, integrity, and ethical leadership
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Commitment</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Infradevcor is committed to the highest standards of corporate governance, 
                            ensuring transparency, accountability, and ethical business practices in all our operations.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Our company is managed by the <span className="font-semibold text-blue-600">AfriCapiti Board</span>, 
                            a distinguished group of African industry leaders, infrastructure experts, and governance 
                            professionals dedicated to driving sustainable growth across the continent.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            The board provides strategic oversight, ensures regulatory compliance, and champions 
                            responsible business practices that create long-term value for our shareholders, 
                            employees, and communities we serve.
                        </p>
                    </div>
                    <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                        <Image
                            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Corporate board meeting"
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