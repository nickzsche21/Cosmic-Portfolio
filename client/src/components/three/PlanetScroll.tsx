import { useScrollParallax } from "@/hooks/useScrollParallax";

export default function PlanetScroll() {
  const { scrollY } = useScrollParallax();

  const planets = [
    { size: 80, color: "bg-orange-500", name: "Mars", position: "left-[10%]" },
    { size: 60, color: "bg-cyan-400", name: "Neptune", position: "left-[25%]" },
    { size: 100, color: "bg-purple-600", name: "Jupiter", position: "left-[45%]" },
    { size: 70, color: "bg-yellow-400", name: "Venus", position: "left-[65%]" },
    { size: 90, color: "bg-red-600", name: "Saturn", position: "left-[85%]" },
    { size: 50, color: "bg-green-500", name: "Earth", position: "left-[105%]" },
  ];

  return (
    <div className="relative py-20 overflow-hidden">
      <div className="relative h-64 flex items-center">
        {planets.map((planet, index) => (
          <div
            key={planet.name}
            className={`absolute ${planet.position} top-1/2 -translate-y-1/2 animate-float`}
            style={{
              transform: `translateX(${-scrollY * 0.3}px) translateY(-50%)`,
              animationDelay: `${index * 0.5}s`,
            }}
          >
            <div
              className={`${planet.color} rounded-full shadow-2xl relative overflow-hidden`}
              style={{
                width: `${planet.size}px`,
                height: `${planet.size}px`,
                boxShadow: `0 0 ${planet.size * 0.5}px ${planet.color.replace('bg-', 'rgba(').replace('-500', ', 0.3)').replace('-400', ', 0.3)').replace('-600', ', 0.3)')}`,
              }}
            >
              {/* Planet surface texture */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/40 rounded-full" />
              
              {/* Planet rings for Saturn */}
              {planet.name === "Saturn" && (
                <div className="absolute inset-0 border-4 border-yellow-300/50 rounded-full animate-spin" 
                     style={{ animationDuration: '20s' }} />
              )}
              
              {/* Planet glow */}
              <div className="absolute -inset-2 bg-gradient-radial from-current/20 to-transparent rounded-full blur-md" />
            </div>
            
            {/* Planet label */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
              <span className="text-sm font-jetbrains text-gray-400">{planet.name}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Section title */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <h3 className="text-2xl font-jetbrains text-space-teal">Cosmic Journey</h3>
      </div>
    </div>
  );
}
