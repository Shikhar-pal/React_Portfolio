import { useMemo, useState, useEffect } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import avator from "../assets/avator.png";

const socials = [
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/shikharpal" },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/Shikhar-pal" },
];

const glowVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

export default function Home() {
  const roles = useMemo(
    () => [
      "Web Developer",
      "MERN Stack Developer",
      "Frontend Developer",
      "React Developer",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) {
        setSubIndex((v) => v + 1);
      } else if (!deleting && subIndex === current.length) {
        setTimeout(() => setDeleting(true), 1200);
      } else if (deleting && subIndex > 0) {
        setSubIndex((v) => v - 1);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((p) => (p + 1) % roles.length);
      }
    }, deleting ? 40 : 60);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-black overflow-hidden flex items-center"
    >
      <ParticlesBackground />

      {/* Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 blur-[120px] animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 blur-[120px] animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center text-center lg:text-left">

          {/* Typing Role */}
          <motion.div
            className="mb-4 text-xl sm:text-2xl md:text-3xl font-semibold text-white min-h-[1.6em]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {roles[index].substring(0, subIndex)}
            <span className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle h-[1em]"></span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] bg-clip-text text-transparent">
              Hello, I'm
            </span>
            <br />
            <span className="text-white whitespace-nowrap">
              Shikhar Pal
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I turn complex ideas into seamless, high-impact web experiences —
            building modern, scalable, and lightning-fast applications that
            make a difference.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full font-medium text-lg text-white bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] shadow-lg hover:scale-105 transition-all"
            >
              View My Work
            </a>

            <a
              href="/Shikhar_Resume.pdf"
              download
              className="px-6 py-3 rounded-full text-lg font-medium text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all"
            >
              My Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <div className="mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start">
            {socials.map(({ Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                variants={glowVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="text-gray-300"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative hidden lg:flex items-center justify-end">
          <div
          className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            right : "10px" , width : "min(22vh,410px)" , height : "min(40vw,760px)" , borderRadius : "50%" ,
            filter : "blur(38px)" , opacity: 0.32 ,
            background : "conic-gradient(from 0deg , #1c8dd2 , #00bf8f , #302b63 , #1cd8d2)"
          }}
          />
          <motion.img
            src={avator}
            alt="Shikhar Pal"
            className="w-[90%] max-w-[550px] object-contain"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </div>

      </div>
    </section>
  );
}