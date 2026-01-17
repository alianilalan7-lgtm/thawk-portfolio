'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-300 ${scrolled ? 'top-4' : 'top-6'}`}
    >
      <nav className="glass rounded-full px-6 py-3 flex items-center justify-between pointer-events-auto border border-white/10 bg-[#0a0a0a]/50 backdrop-blur-md shadow-lg shadow-purple-500/5 w-full max-w-4xl mx-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M22 12L7 7M7 7L12 2L17 7M7 7H17M22 12L17 17M17 17L12 22L7 17M17 17H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-lg font-bold tracking-wider text-white italic">HAWK</span>
        </Link>

        {/* Navigation Links (Hidden on mobile, Centered) */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/70">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all"
        >
          Contact Me
        </motion.button>
      </nav>
    </motion.header>
  );
}
