import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

export default function HeroSection() {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Galaxy background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      />
      
      {/* Nebula clouds */}
      <div className="absolute inset-0">
        <div className="nebula w-96 h-96 bg-gradient-to-r from-space-purple to-space-blue animate-float" 
             style={{ top: '20%', left: '10%', animationDelay: '0s' }} />
        <div className="nebula w-80 h-80 bg-gradient-to-br from-space-orange to-space-teal animate-float" 
             style={{ top: '60%', right: '10%', animationDelay: '2s' }} />
        <div className="nebula w-64 h-64 bg-gradient-to-tl from-space-purple to-transparent animate-float" 
             style={{ bottom: '20%', left: '30%', animationDelay: '4s' }} />
      </div>
      
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-jetbrains font-bold mb-4">
            <TypewriterText 
              text="Hey, I'm Nikhil" 
              speed={100}
              delay={1000}
            />
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5, duration: 1 }}
            className="text-xl md:text-2xl text-gray-300 font-light"
          >
            Cosmic Developer & Space Traveler
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 6 }}
          className="animate-bounce mt-12 cursor-pointer"
          onClick={scrollToNext}
        >
          <ChevronDown className="text-3xl text-space-teal mx-auto" />
        </motion.div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360] 
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-space-teal rounded-full"
        />
        <motion.div 
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1 
          }}
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full"
        />
        <motion.div 
          animate={{ 
            y: [0, -25, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2 
          }}
          className="absolute bottom-1/4 left-3/4 w-3 h-3 bg-space-purple rounded-full"
        />
      </div>
    </section>
  );
}
