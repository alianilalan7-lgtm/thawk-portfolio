'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Filter categories with icons
const categories = [
    {
        id: 'graphic',
        label: 'Graphic',
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
            </svg>
        )
    },
    {
        id: 'motion',
        label: 'Motion / VFX',
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
        )
    },
    {
        id: '3d',
        label: '3D Modeling',
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
        )
    },
];

// Projects data
const projects = [
    {
        id: 1,
        title: 'Oceans United',
        year: '2024',
        category: 'graphic',
    },
    {
        id: 2,
        title: 'Brand Identity',
        year: '2024',
        category: 'graphic',
    },
    {
        id: 3,
        title: 'Product Animation',
        year: '2024',
        category: 'motion',
    },
    {
        id: 4,
        title: 'Character Design',
        year: '2023',
        category: '3d',
    },
];

// Social Icons
const socialIcons = [
    {
        name: 'LinkedIn',
        href: '#',
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        )
    },
    {
        name: 'Instagram',
        href: '#',
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        )
    },
];

export default function AboutPortfolioSection() {
    const [activeCategory, setActiveCategory] = useState('graphic');
    const filteredProjects = projects.filter(p => p.category === activeCategory);

    return (
        <section className="relative overflow-hidden pt-0 pb-32">
            <div className="container-custom">
                <div className="grid lg:grid-cols-12 gap-8 items-start">

                    {/* Left Column - Profile Card (4 Columns -> ~33%) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4 lg:sticky lg:top-28"
                    >
                        {/* Main Profile Frame */}
                        <div className="rounded-[40px] p-4 bg-[#050505] border border-white/5 shadow-2xl relative overflow-hidden group">

                            {/* Profile Image Area */}
                            <div className="relative aspect-[4/5] w-full rounded-[32px] overflow-hidden mb-0">
                                <div className="absolute inset-0 bg-[#111]" /> {/* Placeholder for Image */}
                                {/* Floating Social Icons */}
                                <div className="absolute top-6 right-6 flex gap-3 z-10">
                                    {socialIcons.map((social) => (
                                        <a key={social.name} href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-[#8b5cf6] transition-colors">
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

                                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                                    <h2 className="text-3xl font-bold mb-2 text-white">
                                        Hey! I&apos;m Taha
                                    </h2>
                                    <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-[280px]">
                                        A multidisciplinary designer crafting refined visual experiences
                                        through graphic design, motion, web, and 3D.
                                    </p>

                                    <div className="flex items-center gap-6">
                                        <button className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all">
                                            Contact Me
                                        </button>
                                        <a href="#" className="text-white/60 text-sm hover:text-white transition-colors border-b border-transparent hover:border-white/60">
                                            Download CV
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Filters & Portfolio (8 Columns -> ~66%) */}
                    <div className="lg:col-span-8">
                        {/* Filter Tabs */}
                        <div className="flex flex-wrap w-full md:justify-between gap-4 mb-14 border-b border-white/5 p-4">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`
                    flex items-center gap-3 px-8 py-4 rounded-full text-base font-medium transition-all duration-300
                    ${activeCategory === category.id
                                            ? 'bg-[#1a1a1a] border border-[var(--accent-purple)] text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] scale-105'
                                            : 'bg-transparent border border-transparent text-[var(--text-secondary)] hover:text-white'
                                        }
                  `}
                                >
                                    <span className={`w-8 h-8 flex items-center justify-center rounded-full ${activeCategory === category.id ? 'bg-[var(--accent-purple)] text-white' : 'bg-white/10'}`}>
                                        {category.icon}
                                    </span>
                                    {category.label}
                                </button>
                            ))}
                        </div>

                        {/* Projects Grid */}
                        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <AnimatePresence mode="popLayout">
                                {filteredProjects.map((project) => (
                                    <motion.div
                                        key={project.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3 }}
                                        className="group relative"
                                    >
                                        {/* Project Card Frame (Matching Profile Style) */}
                                        <div className="rounded-[40px] p-4 bg-[#050505] border border-white/5 shadow-2xl relative overflow-hidden h-full">
                                            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden bg-[#111] border border-white/5">
                                                {/* Image Placeholder */}
                                                <div className="absolute inset-0 bg-[#161616]" />

                                                {/* Floating Info Bar */}
                                                <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center justify-between z-10">
                                                    <span className="text-white font-semibold">{project.title}</span>
                                                    <span className="bg-[#8b5cf6] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                                                        {project.year}
                                                    </span>
                                                </div>

                                                {/* Hover Overlay */}
                                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
