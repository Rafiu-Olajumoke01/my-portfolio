import React from 'react';
import { motion, useAnimation } from 'framer-motion';

function Sidenav() {
    const navLinks = ["ABOUT", "PROJECT", "EXPERIENCE"];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            x: -50,
            filter: "blur(10px)"
        },
        visible: { 
            opacity: 1, 
            x: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const navItemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.5 }
        },
        hover: {
            x: 15,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    const lineVariants = {
        initial: { scaleX: 1, originX: 0 },
        hover: { 
            scaleX: 1.5,
            backgroundColor: "#60A5FA",
            transition: { duration: 0.3 }
        }
    };

    // Social media variants
    const socialItemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.8 },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        },
        hover: {
            scale: 1.1,
            y: -4,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    const socialContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 1.2
            }
        }
    };

    // Social media data
    const socialLinks = [
        { name: "GitHub", href: "#", icon: "github" },
        { name: "LinkedIn", href: "#", icon: "linkedin" },
        { name: "Twitter", href: "#", icon: "twitter" },
        { name: "Email", href: "#", icon: "email" },
        { name: "Instagram", href: "#", icon: "instagram" }
    ];

    // Simple icon components (since we can't import external icon libraries)
    const SocialIcon = ({ icon }) => {
        const iconPaths = {
            github: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
            linkedin: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
            twitter: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
            email: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 9.09l9.455-5.269h.909c.904 0 1.636.732 1.636 1.636z",
            instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947C23.729 2.695 21.309.273 16.948.073 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
        };

        return (
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="transition-colors duration-300"
            >
                <path d={iconPaths[icon]} />
            </svg>
        );
    };

    return (
        <motion.div 
            className="p-6 md:p-10 lg:p-15"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* name section */}
            <motion.section variants={itemVariants}>
                <motion.h1 
                    className="text-4xl md:text-6xl text-[#C4D0EC] font-bold mt-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 1,
                        ease: "easeOut",
                        delay: 0.5
                    }}
                    whileHover={{ 
                        scale: 1.02,
                        color: "#ffffff",
                        transition: { duration: 0.3 }
                    }}
                >
                    Rafiu Olajumoke
                </motion.h1>
                
                <motion.h2 
                    className="text-xl text-[#e2e8f5] mt-5 font-semibold"
                    variants={itemVariants}
                    whileHover={{ 
                        color: "#60A5FA",
                        transition: { duration: 0.3 }
                    }}
                >
                    Front End Engineer
                </motion.h2>

                <motion.p 
                    className="text-lg text-gray-400 mt-4 max-w-lg"
                    variants={itemVariants}
                    whileHover={{ 
                        color: "#e2e8f5",
                        transition: { duration: 0.3 }
                    }}
                >
                    Crafting clean, responsive, and user-focused web experiences with attention to detail and performance.
                </motion.p>
            </motion.section>

            {/* nav-links section */}
            <motion.nav 
                className="mt-20"
                variants={itemVariants}
            >
                <motion.ul 
                    className="flex flex-col gap-5 text-[#e2e8f5] text-lg font-medium"
                    variants={containerVariants}
                >
                    {navLinks.map((item, index) => (
                        <motion.li
                            key={index}
                            className="group flex items-center cursor-pointer overflow-hidden"
                            variants={navItemVariants}
                            whileHover="hover"
                            initial="hidden"
                            animate="visible"
                            custom={index}
                        >
                            {/* animated horizontal line */}
                            <motion.span 
                                className="h-[2px] w-10 bg-[#e2e8f5] inline-block mr-4"
                                variants={lineVariants}
                                initial="initial"
                                whileHover="hover"
                            />
                            
                            {/* link text with individual letter animation */}
                            <motion.span 
                                className="relative"
                                whileHover={{ color: "#ffffff" }}
                                transition={{ duration: 0.3 }}
                            >
                                {item.split('').map((letter, letterIndex) => (
                                    <motion.span
                                        key={letterIndex}
                                        className="inline-block"
                                        whileHover={{ 
                                            y: -3,
                                            transition: { 
                                                duration: 0.2,
                                                delay: letterIndex * 0.05
                                            }
                                        }}
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </motion.span>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.nav>

            {/* socialmedia links section */}
            <motion.section
                variants={itemVariants}
                className="mt-16"
            >
                <div className="flex items-center gap-4">
                    {/* Social media icons */}
                    <motion.div 
                        className="flex gap-4"
                        variants={socialContainerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                className="w-12 h-12 rounded-full bg-[#1a1a2e] border border-[#e2e8f5]/20 flex items-center justify-center text-[#e2e8f5] cursor-pointer"
                                style={{
                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(96, 165, 250, 0.1)'
                                }}
                                variants={socialItemVariants}
                                whileHover={{
                                    scale: 1.1,
                                    y: -4,
                                    backgroundColor: "#60A5FA",
                                    borderColor: "#60A5FA",
                                    color: "#ffffff",
                                    boxShadow: '0 8px 25px rgba(96, 165, 250, 0.3), 0 4px 15px rgba(0, 0, 0, 0.4)',
                                    transition: { duration: 0.3 }
                                }}
                                title={social.name}
                            >
                                <SocialIcon icon={social.icon} />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </motion.section>
        </motion.div>
    );
}

export default Sidenav;