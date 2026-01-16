'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
            {/* Background Glow Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="bg-glow-orb bg-glow-purple w-[600px] h-[600px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
                <div className="bg-glow-orb bg-glow-blue w-[400px] h-[400px] absolute top-1/3 right-1/4 opacity-30" />
            </div>

            <div className="container-custom relative z-10 text-center">
                {/* 3D Object Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="relative mx-auto mb-8"
                >
                    {/* Placeholder for 3D Asset - Client will provide */}
                    <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto relative">
                        <div className="absolute inset-0 rounded-full glow-mixed opacity-50" />
                        <div className="w-full h-full rounded-full glass flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-6xl mb-4">🎨</div>
                                <p className="text-[var(--text-muted)] text-sm">3D Asset Placeholder</p>
                                <p className="text-[var(--text-muted)] text-xs mt-1">Client will provide</p>
                            </div>
                        </div>

                        {/* Rotating Ring Effect */}
                        <motion.div
                            className="absolute inset-0 rounded-full border border-[var(--accent-purple)] opacity-20"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        />
                        <motion.div
                            className="absolute inset-4 rounded-full border border-[var(--accent-blue)] opacity-20"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                        />
                    </div>

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                        <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
                            <span className="text-[var(--accent-purple)] font-semibold">2025</span>
                            <span className="text-[var(--text-secondary)]">Graphic Studio</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                        <span className="block">Where Visuals Evolve</span>
                        <span className="block text-glow">Into Experiences</span>
                    </h1>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl mx-auto mb-10"
                >
                    A multidisciplinary visual designer specializing in graphic design, 3D,
                    motion graphics, dedicated to helping professionals and brands transform
                    ideas into impactful visuals.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
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
                        className="btn-outline"
                    >
                        Career Overview
                    </motion.button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border border-[var(--glass-border)] flex items-start justify-center p-2"
                >
                    <motion.div className="w-1 h-2 bg-[var(--accent-purple)] rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
