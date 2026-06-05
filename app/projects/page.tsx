"use client"
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Avonlea from '@/public/avonlea.png';

// Define types
interface Project {
    title: string;
    category: string;
    location: string;
    year: string;
    color: string;
    images: (string | StaticImageData)[];
    description: string;
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    const projects: Project[] = [
        {
            title: 'Avonlea Extension Trust',
            category: 'Residential',
            location: 'Avonlea',
            year: '2025',
            color: 'bg-lime-600',
            images: [Avonlea],
            description: `A sustainable residential complex with 120 stands measuring an average of 1000sqm featuring energy-efficient designs and some solar designs. The road infrastructure development included complete works from graveling and compacting, priming, to final taring. For the sewer system, the project involved trench excavation for sewer pipes, trenching for sewer lines, as well as bedding and laying of sewer pipes to ensure proper installation and long-term durability.`
        },
        {
            title: 'Chitungwiza Municipality - Rehabilitation of Sewer Line',
            category: 'Municipal',
            location: 'Chitungwiza',
            year: '2025',
            color: 'bg-blue-600',
            images: [
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.34 (1).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.36 (2).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.36.webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.37 (1).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.37 (2).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.37.webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.38 (1).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.38 (2).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.38 (3).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.38.webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.39 (1).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.39 (2).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.39.webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.40 (1).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.40.webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.33 (1).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.33.webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.34 (2).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.34 (3).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.34.webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.35 (1).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.35 (2).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.35.webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.36 (1).webp",
            ],
            description: `Rehabilitation of sewer lines across multiple locations in Chitungwiza under Procurement Reference Number CM/EN/19/24. The scope includes providing materials excluding GRP (Glass Reinforced Pipes) pipes and joints, with specific focus on uprooting existing sewer pipe lines, correcting levels, and relaying GRP pipes. Location of Works: Lot 1 - PaGomba trunk to Zengeza Outfall (1.2km), Lot 2 - Zengeza main outfall (3.3km).`
        },
        {
            title: 'Water Fountain at Zimbabwe Open University (ZOU)',
            category: 'Institutional',
            location: 'Zimbabwe Open University',
            year: '2025',
            color: 'bg-sky-600',
            images: [
                "/zoufountain/WhatsApp Image 2026-05-19 at 01.30.04.png",
                "/zoufountain/WhatsApp Image 2026-05-19 at 01.30.04.webp",
                "/zoufountain/WhatsApp Image 2026-05-19 at 01.30.03 (1).webp",
                "/zoufountain/WhatsApp Image 2026-05-19 at 01.30.06.webp",
                "/zoufountain/WhatsApp Image 2026-05-19 at 01.30.03.webp",
                "/zoufountain/WhatsApp Image 2026-05-19 at 01.30.04 (1).webp",
                "/zoufountain/WhatsApp Image 2026-05-19 at 01.30.05 (1).webp",
                "/zoufountain/WhatsApp Image 2026-05-19 at 01.30.05 (2).webp",
                "/zoufountain/WhatsApp Image 2026-05-19 at 01.30.05.webp",
                "/zoufountain/WhatsApp Image 2026-05-19 at 01.30.06 (1).webp",
                "/zoufountain/WhatsApp Image 2026-05-19 at 01.30.06 (2).webp",
            ],
            description: `Construction of an aesthetic and functional water fountain feature at the Zimbabwe Open University (ZOU) campus. The fountain serves as a centerpiece for the university's landscape, combining architectural elegance with sustainable water management.`
        }
    ];

    const openGallery = (project: Project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
        }
    };

    const prevImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
        }
    };

    return (
        <main className="min-h-screen bg-stone-50">
            <Navbar />
            <div className="h-20"></div>

            {/* Page Header with Video on the RIGHT */}
            <section className="bg-lime-600 text-white py-10 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Left Side - Text Content */}
                        <div className="flex-1 text-center lg:text-left">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
                            <p className="text-xl opacity-90">
                                Explore our portfolio of completed construction projects
                            </p>
                            <div className="mt-6 w-24 h-1 bg-white/50 rounded-full mx-auto lg:mx-0"></div>
                        </div>

                        {/* Right Side - Actual Video */}
                        <div className="flex-1 w-full">
                            <div className="relative bg-black/30 rounded-xl overflow-hidden shadow-2xl">
                                <video
                                    ref={videoRef}
                                    className="w-full h-full object-cover rounded-xl"
                                    controls
                                    // autoPlay
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source src="/videos/project.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="text-lg text-center font-bold mt-4">Spotlight: Chitungwiza Sewer Rehabilitation</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Grid Section */}
            <section className="py-12 px-4 max-w-7xl mx-auto">
                <div className='text-black pb-9 text-center text-lg'>Infradevcor Private Limited has already embarked on notable projects, including:</div>
                
                <div className="flex flex-wrap justify-center gap-8">
                    {/* Project 1 - Avonlea */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
                        <div className="bg-lime-600 h-2"></div>
                        <div className="relative h-56">
                            <Image
                                src={projects[0].images[0]}
                                alt={projects[0].title}
                                fill
                                className="object-cover"
                                unoptimized={typeof projects[0].images[0] === 'string'}
                            />
                            <div className="absolute top-4 right-4 bg-lime-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                {projects[0].category}
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{projects[0].title}</h3>
                            <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">{projects[0].description}</p>
                            <div className="flex justify-between items-center text-sm text-gray-500 pt-4 border-t border-gray-100">
                                <span>📍 {projects[0].location}</span>
                                <span>📅 {projects[0].year}</span>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 - Chitungwiza Sewer */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
                        <div className="bg-blue-600 h-2"></div>
                        <div className="relative h-56">
                            <Image
                                src={projects[1].images[0]}
                                alt={projects[1].title}
                                fill
                                className="object-cover"
                                unoptimized={typeof projects[1].images[0] === 'string'}
                            />
                            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                {projects[1].category}
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{projects[1].title}</h3>
                            <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">{projects[1].description}</p>
                            <div className="flex justify-between items-center text-sm text-gray-500 pt-4 border-t border-gray-100">
                                <span>📍 {projects[1].location}</span>
                                <span>📅 {projects[1].year}</span>
                            </div>
                            <button
                                onClick={() => openGallery(projects[1])}
                                className="mt-4 w-full bg-gray-100 cursor-pointer hover:bg-gray-200 text-gray-700 py-2 rounded-md text-sm font-medium transition"
                            >
                                🖼️ View Gallery ({projects[1].images.length} photos)
                            </button>
                        </div>
                    </div>

                    {/* Project 3 - ZOU Fountain */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
                        <div className="bg-sky-600 h-2"></div>
                        <div className="relative h-56">
                            <Image
                                src={projects[2].images[0]}
                                alt={projects[2].title}
                                fill
                                className="object-cover"
                                unoptimized={typeof projects[2].images[0] === 'string'}
                            />
                            <div className="absolute top-4 right-4 bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                {projects[2].category}
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{projects[2].title}</h3>
                            <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">{projects[2].description}</p>
                            <div className="flex justify-between items-center text-sm text-gray-500 pt-4 border-t border-gray-100">
                                <span>📍 {projects[2].location}</span>
                                <span>📅 {projects[2].year}</span>
                            </div>
                            <button
                                onClick={() => openGallery(projects[2])}
                                className="mt-4 w-full bg-gray-100 cursor-pointer hover:bg-gray-200 text-gray-700 py-2 rounded-md text-sm font-medium transition"
                            >
                                🖼️ View Gallery ({projects[2].images.length} photos)
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Modal */}
            {isModalOpen && selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={closeModal}>
                    <div className="relative max-w-6xl w-full mx-4 bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                        <div className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
                            <h3 className="text-xl font-semibold">{selectedProject.title}</h3>
                            <button onClick={closeModal} className="text-white hover:text-gray-300 text-2xl">&times;</button>
                        </div>
                        
                        <div className="p-6">
                            {/* Main Image */}
                            <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
                                <Image
                                    src={selectedProject.images[currentImageIndex]}
                                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                                    fill
                                    className="object-contain"
                                    unoptimized={typeof selectedProject.images[currentImageIndex] === 'string'}
                                />
                                
                                {/* Navigation Arrows */}
                                {selectedProject.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-2 top-1/2 cursor-pointer -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-2 top-1/2 cursor-pointer -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* Thumbnail Strip */}
                            {selectedProject.images.length > 1 && (
                                <div className="flex gap-2 overflow-x-auto pb-2">
                                    {selectedProject.images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImageIndex(idx)}
                                            className={`relative w-24 h-20 flex-shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 transition ${
                                                currentImageIndex === idx ? 'border-lime-600 ring-2 ring-lime-600/20' : 'border-gray-200 hover:border-gray-400'
                                            }`}
                                        >
                                            <Image
                                                src={img}
                                                alt={`Thumbnail ${idx + 1}`}
                                                fill
                                                className="object-cover"
                                                unoptimized={typeof img === 'string'}
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="bg-gray-100 px-6 py-3 text-right">
                            <button onClick={closeModal} className="bg-lime-600 cursor-pointer hover:bg-lime-700 text-white px-4 py-2 rounded-md transition">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </main>
    );
}