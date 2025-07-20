import { motion } from "framer-motion";

export default function FloatingAstronaut() {
  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotateY: [0, 5, -5, 0] 
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative"
      >
        {/* Astronaut illustration using CSS */}
        <div className="relative w-32 h-40">
          {/* Helmet */}
          <motion.div 
            animate={{ rotateX: [0, 2, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full border-2 border-gray-300"
          >
            {/* Helmet reflection */}
            <div className="absolute top-2 left-2 w-6 h-6 bg-gradient-to-br from-white/60 to-transparent rounded-full" />
            {/* Visor */}
            <div className="absolute inset-2 bg-gradient-to-br from-blue-900/80 to-black/80 rounded-full" />
          </motion.div>
          
          {/* Body */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-12 h-20 bg-gradient-to-b from-gray-100 to-gray-300 rounded-lg">
            {/* Chest panel */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-gradient-to-r from-space-teal to-space-blue rounded" />
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-6 h-2 bg-space-purple rounded" />
          </div>
          
          {/* Arms */}
          <motion.div 
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            className="absolute top-14 left-2 w-3 h-12 bg-gradient-to-b from-gray-100 to-gray-300 rounded-full transform rotate-12"
          />
          <motion.div 
            animate={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute top-14 right-2 w-3 h-12 bg-gradient-to-b from-gray-100 to-gray-300 rounded-full transform -rotate-12"
          />
          
          {/* Legs */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-1">
            <div className="w-3 h-12 bg-gradient-to-b from-gray-100 to-gray-300 rounded-full" />
            <div className="w-3 h-12 bg-gradient-to-b from-gray-100 to-gray-300 rounded-full" />
          </div>
          
          {/* Jetpack */}
          <div className="absolute top-16 -right-1 w-4 h-8 bg-gradient-to-b from-gray-400 to-gray-600 rounded">
            {/* Flames */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-4 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-full"
            />
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 0.3, repeat: Infinity, delay: 0.1 }}
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-3 bg-gradient-to-t from-blue-400 to-cyan-300 rounded-full"
            />
          </div>
        </div>
        
        {/* Floating particles around astronaut */}
        <motion.div 
          animate={{ 
            x: [0, 10, -10, 0],
            y: [0, -5, 5, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 0 }}
          className="absolute -top-2 -left-2 w-1 h-1 bg-space-teal rounded-full"
        />
        <motion.div 
          animate={{ 
            x: [0, -8, 8, 0],
            y: [0, 8, -8, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute top-8 -right-3 w-0.5 h-0.5 bg-white rounded-full"
        />
        <motion.div 
          animate={{ 
            x: [0, 6, -6, 0],
            y: [0, -3, 3, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
          className="absolute bottom-4 -left-4 w-1.5 h-1.5 bg-space-purple rounded-full"
        />
      </motion.div>
    </div>
  );
}
