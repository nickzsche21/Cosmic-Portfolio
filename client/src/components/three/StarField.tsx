import { useEffect, useState } from "react";

interface Star {
  id: number;
  left: number;
  top: number;
  size: number;
  animationDuration: number;
  animationDelay: number;
}

export default function StarField() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 200; i++) {
        newStars.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: Math.random() * 3 + 1,
          animationDuration: Math.random() * 3 + 2,
          animationDelay: Math.random() * 5,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Galaxy background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      />
      
      {/* Animated stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.animationDuration}s`,
            animationDelay: `${star.animationDelay}s`,
          }}
        />
      ))}
      
      {/* Nebula clouds */}
      <div className="absolute inset-0">
        <div className="nebula w-96 h-96 bg-gradient-to-r from-space-purple/30 to-space-blue/30 animate-float" 
             style={{ top: '20%', left: '10%', animationDelay: '0s' }} />
        <div className="nebula w-80 h-80 bg-gradient-to-br from-space-orange/30 to-space-teal/30 animate-float" 
             style={{ top: '60%', right: '10%', animationDelay: '2s' }} />
        <div className="nebula w-64 h-64 bg-gradient-to-tl from-space-purple/30 to-transparent animate-float" 
             style={{ bottom: '20%', left: '30%', animationDelay: '4s' }} />
      </div>
    </div>
  );
}
