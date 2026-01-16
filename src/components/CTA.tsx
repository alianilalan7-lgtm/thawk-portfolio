'use client';

import { motion } from 'framer-motion';

export default function CTA() {
    return (
        <section className="section-padding relative overflow-hidden">
            {/* Background Glow Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="bg-glow-orb bg-glow-purple w-[600px] h-[600px] absolute left-1/4 top-1/2 -translate-y-1/2 opacity-30" />
                <div className="bg-glow-orb bg-glow-blue w-[400px] h-[400px] absolute right-1/4 top-1/2 -translate-y-1/2 opacity-20" />
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
                >
                    {/* Decorative Border Glow */}
                    <div className="absolute inset-0 rounded-3xl border border-[var(--accent-purple)] opacity-20" />

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-block mb-8"
                    >
                        <span className="glass px-4 py-2 rounded-full text-sm text-[var(--text-secondary)]">
                            Start Your Project
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                    >
                        Next <span className="text-gradient">Visual Experience</span>?
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-10"
                    >
                        Ready to take the next step? Join us now and start transforming your
                        vision into reality with expert support.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-gradient text-lg px-10 py-4"
                        >
                            Get in Touch
                        </motion.button>
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-[var(--accent-purple)] opacity-10 blur-3xl" />
                    <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-[var(--accent-blue)] opacity-10 blur-3xl" />
                </motion.div>
            </div>
        </section>
    );
}
