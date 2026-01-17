'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const socialLinks = [
    { name: 'Twitter (X)', href: 'https://x.com/' },
    { name: 'Instagram', href: 'https://instagram.com/' },
    { name: 'YouTube', href: 'https://youtube.com/' },
];

const pageLinks = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '#portfolio' },
];

export default function Footer() {
    return (
        <footer className="relative pt-16 pb-8 border-t border-white/5" id="contact">
            {/* Top Center Glow Effect - Sharp Spotlight Beam */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[500px] opacity-70 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at top, rgba(139, 92, 246, 0.6) 0%, rgba(139, 92, 246, 0) 70%)',
                    filter: 'blur(50px)',
                    transform: 'translateY(-20%)' // Pull up slightly to hide the flat top
                }}
            />

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] to-transparent -z-10" />

            <div className="container-custom relative z-10">
                {/* Main Footer Content */}
                <div className="mb-20">
                    <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">

                        {/* Left Column: Brand */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-xs"
                        >
                            <Link href="/" className="flex items-center gap-2 mb-6">
                                {/* Custom Hawk Logo Icon */}
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-white">
                                    <path d="M5 20L15 25L25 10L35 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-0" />
                                    <path d="M4 12L14 8L34 26" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                                    <path d="M8 28L18 24L26 32" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                                </svg>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-black text-white italic tracking-wider leading-none">HAWK</span>
                                    <span className="text-[10px] text-white/60 tracking-[0.2em] font-medium">GRAPHIC STUDIO</span>
                                </div>
                            </Link>
                            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                                Remote graphic & motion designer<br />
                                helping brands come alive through<br />
                                visuals.
                            </p>
                        </motion.div>

                        {/* Right Column: Links & Contact */}
                        <div className="flex flex-col md:flex-row gap-12 md:gap-24 lg:gap-32">

                            {/* Pages */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <h4 className="font-semibold mb-6 text-base text-white">Pages</h4>
                                <ul className="space-y-4">
                                    {pageLinks.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-[var(--text-secondary)] hover:text-white transition-colors text-sm"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Social */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 }}
                            >
                                <h4 className="font-semibold mb-6 text-base text-white">Social</h4>
                                <ul className="space-y-4">
                                    {socialLinks.map((social) => (
                                        <li key={social.name}>
                                            <a
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[var(--text-secondary)] hover:text-white transition-colors text-sm"
                                            >
                                                {social.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Contact */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h4 className="font-semibold mb-6 text-base text-white">For contact</h4>
                                <div className="relative w-full md:w-[320px]">
                                    <input
                                        type="email"
                                        placeholder="Enter Your Email..."
                                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-full pl-6 pr-36 py-3.5 text-sm outline-none focus:border-[var(--accent-purple)] transition-colors placeholder:text-gray-600 text-white"
                                    />
                                    <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-gradient-to-r from-[#a855f7] to-[#3b82f6] hover:opacity-90 text-white px-6 rounded-full text-xs font-bold transition-all shadow-lg hover:shadow-purple-500/25">
                                        Contact Me
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center pt-8 border-t border-white/5"
                >
                    <p className="text-[var(--text-muted)] text-[11px] font-medium tracking-wide">
                        © 2025 Thawk Graphic Studio Design
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
