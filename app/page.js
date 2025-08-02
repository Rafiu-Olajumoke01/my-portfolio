'use client';
import React, { useState, useEffect } from 'react';
import './globals.css';
import Home from './Home/page';
import { motion, AnimatePresence } from 'framer-motion';

function Page() {
    const [isLoading, setIsLoading] = useState(true);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [cursorBg, setCursorBg] = useState('rgba(196, 208, 236, 0.1)');
    const [screenSize, setScreenSize] = useState({ width: 1920, height: 1080 });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        }

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
            if (elementUnderCursor) {
                const computedStyle = window.getComputedStyle(elementUnderCursor);
                const bgColor = computedStyle.backgroundColor;
                const bgImage = computedStyle.backgroundImage;

                if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
                    const rgba = bgColor.match(/\d+/g);
                    if (rgba && rgba.length >= 3) {
                        const r = parseInt(rgba[0]);
                        const g = parseInt(rgba[1]);
                        const b = parseInt(rgba[2]);
                        setCursorBg(`rgba(${r + 50}, ${g + 50}, ${b + 50}, 0.3)`);
                    }
                } else if (bgImage && bgImage !== 'none') {
                    setCursorBg('rgba(100, 150, 255, 0.3)');
                } else {
                    setCursorBg('rgba(196, 208, 236, 0.15)');
                }
            }
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', updateMousePosition);

        const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    const loadingVariants = {
        initial: { scale: 1, rotate: 0 },
        animate: {
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        },
        exit: {
            scale: 0,
            opacity: 0,
            transition: { duration: 0.5 }
        }
    };

    const pageVariants = {
        initial: { opacity: 0, scale: 0.9, filter: "blur(20px)" },
        animate: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }
        }
    };

   const backgroundVariants = {
  initial: {
    backgroundColor: "#C71585"
  },
};

    return (
        <motion.div
            className="min-h-screen text-white relative overflow-hidden cursor-none"
            variants={backgroundVariants}
            initial="initial"
            animate="animate"
        >
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <motion.div
                        key="loading"
                        className="fixed inset-0 flex items-center justify-center bg-[#fddbd4] z-50"
                        variants={loadingVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <div className="text-center">
                            <motion.div
                                className="w-16 h-16 border-4 border-[#f4c2c2] border-t-transparent rounded-full mx-auto mb-4"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.h2
                                className="text-[#f4c2c2] text-xl font-semibold"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                Loading Portfolio...
                            </motion.h2>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="content"
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        className="relative z-10"
                    >
                        <Home />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Cursor Section (unchanged) */}
            <motion.div
                className="fixed pointer-events-none z-[9999]"
                style={{ left: mousePosition.x, top: mousePosition.y }}
                animate={{ x: -20, y: -20 }}
                transition={{ type: "spring", stiffness: 350, damping: 30, mass: 0.5 }}
            >
                <motion.div
                    className="relative w-10 h-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-full shadow-2xl"
                    animate={{ 
                        scale: isHovering ? 1.4 : 1,
                        backgroundColor: isHovering ? "rgba(244, 194, 194, 0.2)" : "rgba(255, 255, 255, 0.1)",
                        borderColor: isHovering ? "rgba(244, 194, 194, 0.4)" : "rgba(255, 255, 255, 0.2)"
                    }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <motion.div
                        className="absolute inset-1 rounded-full bg-gradient-to-br from-white/30 to-transparent"
                        animate={{ 
                            opacity: isHovering ? 0.8 : 0.4,
                            background: isHovering 
                                ? "linear-gradient(135deg, rgba(244, 194, 194, 0.4) 0%, rgba(253, 219, 212, 0.2) 50%, transparent 100%)"
                                : "linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%)"
                        }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.div
                        className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg"
                        animate={{ 
                            scale: isHovering ? 0.8 : 1,
                            backgroundColor: isHovering ? "#f4c2c2" : "#ffffff"
                        }}
                        transition={{ duration: 0.2 }}
                    />
                </motion.div>

                <motion.div
                    className="absolute top-1/2 left-1/2 w-16 h-16 transform -translate-x-1/2 -translate-y-1/2"
                    animate={{ 
                        scale: isHovering ? 1.2 : 1,
                        rotate: 360
                    }}
                    transition={{ 
                        scale: { duration: 0.4, ease: "easeOut" },
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                    }}
                >
                    <div className="w-full h-full rounded-full border border-gradient-to-r from-pink-300/30 via-rose-300/30 to-rose-200/30 opacity-60">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-300/20 via-rose-300/20 to-rose-200/20 blur-sm"></div>
                    </div>
                </motion.div>

                <motion.div
                    className="absolute top-1/2 left-1/2"
                    style={{ x: -1, y: -1 }}
                >
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"
                            animate={{
                                x: [0, Math.cos(i * 60 * Math.PI / 180) * 25],
                                y: [0, Math.sin(i * 60 * Math.PI / 180) * 25],
                                opacity: [0, 0.8, 0],
                                scale: [0, 1, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </motion.div>

                <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                        rotate: [0, 360],
                        opacity: isHovering ? 0.6 : 0.3
                    }}
                    transition={{
                        rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                        opacity: { duration: 0.3 }
                    }}
                    style={{
                        clipPath: "polygon(45% 0%, 55% 0%, 65% 100%, 35% 100%)"
                    }}
                />

                <AnimatePresence>
                    {isHovering && (
                        <motion.div
                            className="absolute top-1/2 left-1/2 w-24 h-24 transform -translate-x-1/2 -translate-y-1/2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 0.4, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="w-full h-full rounded-full border-2 border-dashed border-pink-400/40 animate-pulse">
                                <div className="absolute inset-2 rounded-full border border-rose-400/30"></div>
                                <div className="absolute inset-4 rounded-full border border-rose-300/20"></div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}

export default Page;
