'use client';

import { motion } from 'framer-motion';

// Partner logos placeholder data
const partnerLogos = [
    'CCC', 'LOGO', 'LOGO IPSUM', 'BRAND', 'STUDIO', 'DESIGN CO'
];

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
            {/* Background Glow Effects - Animated */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 50, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    className="bg-[#8b5cf6] w-[800px] h-[800px] absolute top-[10%] left-1/2 -translate-x-1/2 rounded-full mix-blend-screen blur-[120px] opacity-30"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, -30, 0],
                        y: [0, 50, 0]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="bg-[#3b82f6] w-[600px] h-[600px] absolute top-[40%] right-[10%] rounded-full mix-blend-screen blur-[120px] opacity-20"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 5
                    }}
                    className="bg-purple-900 w-[900px] h-[900px] absolute -bottom-[20%] left-[10%] rounded-full mix-blend-screen blur-[120px] opacity-20"
                />

                {/* Gradient Overlay for Smooth Bottom Transition */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000000] to-transparent z-10" />
            </div>

            <div className="container-custom relative z-10 text-center flex flex-col items-center">
                {/* 3D Object Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="relative mb-10"
                >
                    {/* Placeholder for 3D Asset */}
                    <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative">
                        <div className="absolute inset-0 rounded-full glow-mixed opacity-40" />
                        <div className="w-full h-full rounded-full glass flex items-center justify-center border border-[var(--glass-border)]">
                            <div className="text-center">
                                <div className="text-6xl mb-4">🎨</div>
                                <p className="text-[var(--text-muted)] text-sm font-medium">3D Asset</p>
                            </div>
                        </div>

                        {/* Rotating Rings */}
                        <motion.div
                            className="absolute inset-0 rounded-full border border-[var(--accent-purple)] opacity-20"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        />
                    </div>

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="absolute bottom-6 left-1/2 -translate-x-1/2"
                    >
                        <div className="glass px-5 py-2 rounded-full flex items-center gap-2 border border-[var(--accent-purple)]/30 backdrop-blur-xl bg-black/40">
                            <span className="text-[var(--accent-purple)] font-bold text-xs">2025</span>
                            <span className="text-[var(--text-secondary)] text-xs font-medium">Graphic Studio</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mb-8 relative z-20"
                >
                    <h1
                        className="font-normal leading-[1.0] tracking-[-0.04em] text-center mb-8"
                        style={{
                            fontSize: 'clamp(48px, 6vw, 86px)',
                            textShadow: '0 0 80px rgba(255,255,255,0.2)'
                        }}
                    >
                        Where Visuals Evolve<br />
                        Into Experiences
                    </h1>

                    {/* Subtitle - Restored */}
                    <p className="text-[var(--text-secondary)] text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                        A multidisciplinary visual designer specializing in graphic design, 3D,
                        motion graphics, dedicated to helping professionals and brands
                        transform ideas into impactful visuals.
                    </p>
                </motion.div>

                {/* Helper Container for Buttons + Marquee Alignment */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex flex-col items-center mb-16 relative z-20 w-full max-w-xl mx-auto"
                >
                    {/* Buttons Row */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center w-full items-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-black px-8 py-3.5 rounded-full text-sm md:text-base font-medium shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow whitespace-nowrap"
                        >
                            Contact Me
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3.5 rounded-full text-white/80 hover:bg-white/10 transition-all border border-white/10 bg-white/5 text-sm md:text-base backdrop-blur-md whitespace-nowrap"
                        >
                            Career Overview
                        </motion.button>
                    </div>

                    {/* Marquee - Strictly constrained to Button Container Width */}
                    <div className="w-full mt-12 relative overflow-hidden mask-linear-fade">
                        <div className="flex gap-12 items-center animate-infinite-scroll whitespace-nowrap opacity-30 grayscale transition-all duration-500">
                            {/* Logos (Duplicates for seamless loop) */}
                            {[1, 2, 3, 4, 1, 2, 3, 4].map((i, index) => (
                                <div key={index} className="flex-shrink-0">
                                    {/* Ideally these would be images, using text for now to match structure */}
                                    <span className="text-[12px] font-bold tracking-[0.2em] font-sans text-white uppercase">LOGO IPSUM</span>
                                </div>
                            ))}
                        </div>
                        {/* Top Border for Marquee area similar to reference faint line */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
