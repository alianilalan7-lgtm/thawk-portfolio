'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section className="section-padding relative overflow-hidden">
            {/* Background Glow */}
            <div className="bg-glow-orb bg-glow-purple w-[400px] h-[400px] absolute -left-48 top-1/2 opacity-20" />

            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass rounded-3xl p-8 card-hover"
                    >
                        {/* Profile Image Placeholder */}
                        <div className="w-32 h-32 rounded-full mx-auto mb-6 placeholder-image">
                            <span>Profile Photo</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                            Hey! I&apos;m <span className="text-gradient">Taha</span>
                        </h2>

                        <p className="text-[var(--text-secondary)] text-center mb-8 leading-relaxed">
                            A multidisciplinary designer crafting refined visual experiences
                            through graphic design, motion, web, and 3D.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-gradient"
                            >
                                Contact Me
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-outline flex items-center justify-center gap-2"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Download CV
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Right - Skills & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { value: '5+', label: 'Years Experience' },
                                { value: '100+', label: 'Projects Completed' },
                                { value: '50+', label: 'Happy Clients' },
                                { value: '15+', label: 'Awards Won' },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index }}
                                    className="glass rounded-2xl p-6 text-center card-hover"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-[var(--text-secondary)] text-sm">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Skills Tags */}
                        <div className="flex flex-wrap gap-3">
                            {['Graphic Design', 'Motion Graphics', '3D Modeling', 'UI/UX', 'Branding', 'VFX'].map((skill) => (
                                <span
                                    key={skill}
                                    className="glass px-4 py-2 rounded-full text-sm text-[var(--text-secondary)]"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Partner Logos Marquee */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 overflow-hidden"
                >
                    <p className="text-center text-[var(--text-muted)] text-sm mb-8 uppercase tracking-widest">
                        Trusted by leading brands
                    </p>
                    <div className="flex items-center gap-16 animate-marquee">
                        {/* Placeholder logos - will be replaced with client assets */}
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-32 h-12 placeholder-image rounded-lg opacity-50"
                            >
                                <span className="text-xs">Logo {i + 1}</span>
                            </div>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={`dup-${i}`}
                                className="flex-shrink-0 w-32 h-12 placeholder-image rounded-lg opacity-50"
                            >
                                <span className="text-xs">Logo {i + 1}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
