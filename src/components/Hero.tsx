'use client';

import { motion } from 'motion/react';
import { Button } from './ui/button';

// Animated Tooth Component
function AnimatedTooth({ delay = 0, x = 0, y = 0, scale = 1, rotation = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: [0.3, 0.6, 0.3],
        y: [y, y - 20, y],
        rotate: [rotation, rotation + 5, rotation],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        transform: `scale(${scale})`,
      }}
    >
      <svg
        width="80"
        height="100"
        viewBox="0 0 80 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tooth Crown */}
        <motion.path
          d="M40 10 C20 10, 10 20, 10 35 C10 45, 12 55, 15 65 L25 95 C27 98, 32 100, 40 100 C48 100, 53 98, 55 95 L65 65 C68 55, 70 45, 70 35 C70 20, 60 10, 40 10 Z"
          fill="url(#toothGradient)"
          stroke="var(--turquoise)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: delay + 0.5 }}
        />
        
        {/* Tooth Shine */}
        <motion.ellipse
          cx="30"
          cy="30"
          rx="8"
          ry="12"
          fill="white"
          opacity="0.6"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, delay: delay + 1, repeat: Infinity }}
        />
        
        <defs>
          <linearGradient id="toothGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
            <stop offset="100%" stopColor="rgba(64, 224, 208, 0.3)" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

// Sparkle Effect
function Sparkle({ delay = 0, x = 0, y = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 0 L11 9 L20 10 L11 11 L10 20 L9 11 L0 10 L9 9 Z"
          fill="var(--turquoise)"
        />
      </svg>
    </motion.div>
  );
}

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C9A8F] via-[#3A5064] to-[#1a1a1a]">
        {/* Animated gradient overlay */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(64, 224, 208, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(64, 224, 208, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(64, 224, 208, 0.3) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
      </div>

      {/* Animated Teeth Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left Side Teeth */}
        <AnimatedTooth delay={0} x={10} y={20} scale={1.2} rotation={-15} />
        <AnimatedTooth delay={0.5} x={5} y={60} scale={0.9} rotation={10} />
        <AnimatedTooth delay={1} x={15} y={80} scale={1.1} rotation={-5} />
        
        {/* Right Side Teeth */}
        <AnimatedTooth delay={0.3} x={85} y={15} scale={1} rotation={15} />
        <AnimatedTooth delay={0.8} x={90} y={55} scale={1.3} rotation={-10} />
        <AnimatedTooth delay={1.2} x={82} y={75} scale={0.95} rotation={8} />
        
        {/* Center Background Teeth */}
        <AnimatedTooth delay={0.6} x={45} y={10} scale={0.7} rotation={0} />
        <AnimatedTooth delay={1.5} x={55} y={85} scale={0.8} rotation={-3} />
        
        {/* Sparkles */}
        <Sparkle delay={1} x={20} y={40} />
        <Sparkle delay={2} x={75} y={35} />
        <Sparkle delay={2.5} x={30} y={70} />
        <Sparkle delay={3} x={80} y={65} />
        <Sparkle delay={1.8} x={50} y={25} />
        <Sparkle delay={2.8} x={60} y={80} />
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-b from-transparent via-black/20 to-black/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 
            className="text-5xl md:text-7xl mb-6 drop-shadow-2xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Нор-Арт Дент
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-lg"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Ваша улыбка – наш приоритет
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            onClick={scrollToContact}
            className="bg-white/10 backdrop-blur-lg hover:bg-[var(--turquoise)] text-white px-10 py-6 text-lg rounded-full shadow-2xl hover:shadow-[var(--turquoise)]/50 transition-all duration-300 border-2 border-[var(--turquoise)]"
          >
            Записаться на консультацию
          </Button>
        </motion.div>

        {/* Decorative Turquoise Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100px' }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="h-0.5 bg-[var(--turquoise)] mx-auto mt-12 shadow-lg shadow-[var(--turquoise)]/50"
        />

        {/* Floating Text Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex justify-center gap-8 flex-wrap"
        >
          <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
            <p className="text-sm">Современные технологии</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
            <p className="text-sm">Гарантированный результат</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
            <p className="text-sm">Сертифицированные специалисты</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-white/5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[var(--turquoise)] rounded-full shadow-lg shadow-[var(--turquoise)]/50"
          />
        </div>
      </motion.div>
    </section>
  );
}