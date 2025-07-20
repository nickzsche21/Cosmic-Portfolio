import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HolographicCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function HolographicCard({ 
  children, 
  className = "", 
  delay = 0 
}: HolographicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ 
        y: -10, 
        rotateX: 5,
        transition: { duration: 0.3 }
      }}
      className={`holographic animate-hologram rounded-2xl backdrop-blur-sm relative group ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {children}
      
      {/* Holographic glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-space-teal/20 to-space-purple/20 animate-pulse-glow" />
      </div>
    </motion.div>
  );
}
