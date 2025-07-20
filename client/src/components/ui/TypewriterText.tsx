import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export default function TypewriterText({ 
  text, 
  speed = 100, 
  delay = 1000, 
  className = "" 
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
      let i = 0;
      
      const typeTimer = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeTimer);
          setIsTyping(false);
        }
      }, speed);

      return () => clearInterval(typeTimer);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay]);

  return (
    <span className={`${className} ${isTyping ? 'animate-blink' : ''}`} 
          style={{ borderRight: isTyping ? '2px solid var(--space-teal)' : 'none' }}>
      {displayText}
    </span>
  );
}
