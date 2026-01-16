'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Graphic', 'Motion / VFX', '3D Modeling'];

const projects = [
    {
        id: 1,
        title: 'Oceans United',
        year: '2024',
        category: 'Graphic',
        description: 'Discovery',
    },
    {
        id: 2,
        title: 'Brand Identity',
        year: '2024',
        category: 'Graphic',
        description: 'Branding',
    },
    {
        id: 3,
        title: 'Product Animation',
        year: '2024',
        category: 'Motion / VFX',
        description: 'Motion Design',
    },
    {
        id: 4,
        title: 'Character Design',
        year: '2023',
        category: '3D Modeling',
        description: '3D Art',
    },
    {
        id: 5,
        title: 'Tech Startup',
        year: '2024',
        category: 'Graphic',
        description: 'Visual Identity',
    },
    {
        id: 6,
        title: 'VFX Showreel',
        year: '2024',
        category: 'Motion / VFX',
        description: 'Visual Effects',
    },
];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section className="section-padding relative" id="portfolio">
            {/* Background Glow */}
            <div className="bg-glow-orb bg-glow-blue w-[500px] h-[500px] absolute right-0 top-1/4 opacity-20" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="text-gradient">Workspace</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
                        Explore a collection of creative projects spanning various disciplines
                    </p>
                </motion.div>

                {/* Filter Tags */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`filter-tag ${activeCategory === category ? 'active' : ''}`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ y: -8 }}
                                className="group cursor-pointer"
                            >
                                <div className="glass rounded-2xl overflow-hidden card-hover">
                                    {/* Project Image Placeholder */}
                                    <div className="aspect-[4/3] placeholder-image relative overflow-hidden">
                                        <span className="text-sm">Project Image</span>

                                        {/* Overlay on Hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                            <div>
                                                <p className="text-white font-semibold">{project.title}</p>
                                                <p className="text-[var(--text-secondary)] text-sm">{project.description}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <div className="p-5">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                                                <p className="text-[var(--text-secondary)] text-sm">{project.description}</p>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-[var(--accent-purple)] text-sm font-medium">{project.year}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-outline"
                    >
                        View All Projects
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
