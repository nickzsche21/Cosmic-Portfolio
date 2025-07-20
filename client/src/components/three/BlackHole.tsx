import { motion } from "framer-motion";

export default function BlackHole() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Central black hole */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="relative w-32 h-32"
      >
        {/* Core black hole */}
        <div className="absolute inset-0 w-16 h-16 bg-black rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20" />
        
        {/* Event horizon glow */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 w-20 h-20 bg-gradient-radial from-purple-600/40 to-transparent rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        />
        
        {/* Accretion disk rings */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-28 h-28 border-2 border-cyan-400/60 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ borderStyle: 'dashed' }}
        />
        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-36 h-36 border border-purple-500/40 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ borderStyle: 'dotted' }}
        />
        
        {/* Outer energy ring */}
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity }
          }}
          className="absolute inset-0 w-40 h-40 border border-cyan-300/30 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>
      
      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.cos(i * 0.3) * 100, 0],
            y: [0, Math.sin(i * 0.3) * 100, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 8 + (i % 3),
            repeat: Infinity,
            delay: i * 0.2
          }}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}
      
      {/* Gravitational lensing effect */}
      <motion.div
        animate={{ 
          scale: [1, 1.02, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute inset-0 w-64 h-64 bg-gradient-radial from-transparent via-purple-600/10 to-transparent rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
