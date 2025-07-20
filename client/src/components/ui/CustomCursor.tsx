import { useEffect, useState } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [trails, setTrails] = useState<TrailPoint[]>([]);
  const [trailId, setTrailId] = useState(0);

  useEffect(() => {
    if (x === 0 && y === 0) return;

    const newTrail: TrailPoint = {
      x: x - 3,
      y: y - 3,
      id: trailId
    };

    setTrails(prev => {
      const updated = [newTrail, ...prev.slice(0, 9)];
      return updated;
    });

    setTrailId(prev => prev + 1);

    // Clean up old trails
    const timer = setTimeout(() => {
      setTrails(prev => prev.filter(trail => trail.id !== newTrail.id));
    }, 500);

    return () => clearTimeout(timer);
  }, [x, y, trailId]);

  return (
    <>
      {/* Main cursor */}
      <div
        className="custom-cursor"
        style={{
          left: x - 10,
          top: y - 10,
        }}
      />
      
      {/* Trail elements */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x,
            top: trail.y,
            opacity: 0.7 - (index * 0.07),
            transform: `scale(${1 - (index * 0.1)})`,
          }}
        />
      ))}
    </>
  );
}
