import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
    return (
        <main className="min-h-screen bg-stone-50">
            <Navbar />
            <div className="h-20"></div>

            {/* Page Header */}
            <section className="bg-blue-600 text-white py-20 px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl opacity-90">Get in touch with us for your construction needs</p>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="py-20 px-4 max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Get in Touch</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Address */}
                        <div className="text-center p-6 rounded-lg hover:bg-stone-50 transition">
                            <div className="text-4xl mb-4">📍</div>
                            <h3 className="text-xl font-semibold text-blue-600 mb-3">Address</h3>
                            <p className="text-gray-600 leading-relaxed">
                                55 Lawley Drivenue<br />
                                Belvedere<br />
                                Harare
                            </p>
                        </div>

                        {/* Phone */}
                        <div className="text-center p-6 rounded-lg hover:bg-stone-50 transition">
                            <div className="text-4xl mb-4">📞</div>
                            <h3 className="text-xl font-semibold text-lime-600 mb-3">Phone</h3>
                            <p className="text-gray-600">
                                0242-257156<br />
                                0242-257157
                            </p>
                        </div>

                        {/* Email */}
                        <div className="text-center p-6 rounded-lg hover:bg-stone-50 transition">
                            <div className="text-4xl mb-4">✉️</div>
                            <h3 className="text-xl font-semibold text-blue-600 mb-3">Email</h3>
                            <p className="text-gray-600">
                                info@infradevcor.com<br />
                                projects@infradevcor.com
                            </p>
                        </div>

                        {/* Hours */}
                        <div className="text-center p-6 rounded-lg hover:bg-stone-50 transition">
                            <div className="text-4xl mb-4">🕒</div>
                            <h3 className="text-xl font-semibold text-lime-600 mb-3">Business Hours</h3>
                            <p className="text-gray-600">
                                Mon - Fri: 8:00 AM - 6:00 PM<br />
                                Saturday: 9:00 AM - 2:00 PM<br />
                                Sunday: Closed
                            </p>
                        </div>
                    </div>

                    {/* Additional Contact Info */}
                    {/* <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                        <p className="text-gray-600 mb-4">
                            <span className="font-semibold">Emergency:</span> (555) 999-8888 (24/7)
                        </p>
                        <p className="text-gray-500 text-sm">
                            For urgent inquiries, please call our emergency line.
                        </p>
                    </div> */}
                </div>
            </section>

            <Footer />
        </main>
    );
}