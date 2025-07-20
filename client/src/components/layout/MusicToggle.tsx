import { useState, useRef } from "react";
import { Music, Pause } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    // Note: In a real implementation, you would add actual audio file
    // For now, we'll just toggle the visual state
    setIsPlaying(!isPlaying);
    
    // Example implementation with audio:
    // if (audioRef.current) {
    //   if (isPlaying) {
    //     audioRef.current.pause();
    //   } else {
    //     audioRef.current.play();
    //   }
    // }
  };

  return (
    <>
      {/* Hidden audio element for future implementation */}
      <audio ref={audioRef} loop>
        {/* <source src="/audio/cosmic-ambient.mp3" type="audio/mpeg" /> */}
      </audio>
      
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleMusic}
        className={`fixed bottom-8 right-8 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm z-50 transition-all duration-300 ${
          isPlaying 
            ? 'bg-space-purple/40 border-space-purple/50' 
            : 'bg-space-purple/20 border-space-purple/30'
        } border`}
      >
        {isPlaying ? (
          <Pause className="text-xl text-space-purple" />
        ) : (
          <Music className="text-xl text-space-purple" />
        )}
      </motion.button>
    </>
  );
}
