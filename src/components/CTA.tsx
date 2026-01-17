'use client';

import { motion } from 'framer-motion';

export default function CTA() {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="container-custom relative z-10">
                {/* Outer Wide Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full rounded-[3rem] overflow-hidden relative border border-white/10 shadow-2xl h-[600px] flex items-center justify-center"
                >
                    {/* Background Image/Effect for Outer Card */}
                    <div className="absolute inset-0 bg-[#0a0514]">
                        {/* 
                            TODO: CLIENT IMAGE PLACEHOLDER
                            When client provides the image, replace the gradients below with:
                            <img src="/path/to/image.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover" />
                            OR use explicit background-image on this div.
                        */}

                        {/* Abstract Purple/Blue Tech Background mimic */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-blue-900/40" />
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.2),transparent_50%)]" />
                        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.2),transparent_50%)]" />

                        {/* Circular tech lines pattern (simulated) */}
                        <div className="absolute inset-0 opacity-20" style={{
                            backgroundImage: 'radial-gradient(circle at center, transparent 30%, rgba(255,255,255,0.05) 31%, transparent 32%, transparent 50%, rgba(255,255,255,0.05) 51%, transparent 52%)',
                            backgroundSize: '100% 100%'
                        }} />
                    </div>

                    {/* Inner Glass Card */}
                    <div className="relative z-10 bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-12 md:p-16 text-center max-w-2xl mx-4 shadow-2xl">

                        {/* Badge */}
                        <div className="flex justify-center mb-8">
                            <span className="px-5 py-2.5 rounded-full bg-[#1a1a1a]/80 border border-white/10 text-white text-sm font-medium flex items-center gap-2 backdrop-blur-md shadow-lg">
                                <span className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[10px]">✓</span>
                                Start Your Project
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white leading-tight">
                            Ready to Build Your<br />
                            <span className="text-white/90">Next Visual Experience?</span>
                        </h2>

                        {/* Description */}
                        <p className="text-white/60 text-base mb-8 max-w-lg mx-auto leading-relaxed">
                            Ready to take the next step? Join us now and start transforming your
                            vision into reality with expert support.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center justify-center gap-6 mb-8 text-white">
                            {/* Instagram */}
                            <a href="#" className="hover:text-purple-400 transition-colors bg-white/5 p-2 rounded-full"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></a>
                            {/* Behance */}
                            <a href="#" className="hover:text-purple-400 transition-colors bg-white/5 p-2 rounded-full"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg></a>
                            {/* LinkedIn */}
                            <a href="#" className="hover:text-purple-400 transition-colors bg-white/5 p-2 rounded-full"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg></a>
                            {/* S Icon */}
                            <a href="#" className="hover:text-purple-400 transition-colors bg-white/5 p-2 rounded-full flex items-center justify-center font-bold text-xs w-9 h-9">S</a>
                        </div>

                        {/* CTA Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white px-8 py-3 rounded-full text-base font-medium shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all"
                        >
                            Get in Touch
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
