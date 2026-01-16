'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const socialLinks = [
    { name: 'Twitter (X)', href: 'https://x.com/', icon: 'X' },
    { name: 'Instagram', href: 'https://instagram.com/', icon: 'IG' },
    { name: 'YouTube', href: 'https://youtube.com/', icon: 'YT' },
    { name: 'Behance', href: 'https://behance.net/', icon: 'Be' },
];

const pageLinks = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

export default function Footer() {
    return (
        <footer className="relative pt-20 pb-8" id="contact">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] to-transparent" />

            <div className="container-custom relative z-10">
                {/* Main Footer Content */}
                <div className="glass rounded-3xl p-8 md:p-12 mb-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Brand */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2"
                        >
                            <Link href="/" className="text-2xl font-bold text-gradient inline-block mb-4">
                                HAWK
                            </Link>
                            <p className="text-[var(--text-secondary)] leading-relaxed mb-6 max-w-md">
                                Remote graphic & motion designer helping brands come alive through visuals.
                                Crafting refined visual experiences through graphic design, motion, web, and 3D.
                            </p>

                            {/* Social Links */}
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 glass rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent-purple)] transition-colors"
                                    >
                                        <span className="text-xs font-semibold">{social.icon}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Pages */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <h4 className="font-semibold mb-4">Pages</h4>
                            <ul className="space-y-3">
                                {pageLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-[var(--text-secondary)] hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
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
                            <h4 className="font-semibold mb-4">For Contact</h4>
                            <div className="space-y-4">
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="flex-1 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-full px-4 py-2 text-sm outline-none focus:border-[var(--accent-purple)] transition-colors"
                                    />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn-gradient w-full text-sm"
                                >
                                    Contact Me
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[var(--glass-border)]"
                >
                    <p className="text-[var(--text-muted)] text-sm">
                        © 2025 Thawk Graphic Studio Design. All rights reserved.
                    </p>
                    <p className="text-[var(--text-muted)] text-sm">
                        Crafted with 💜 by Taha
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
