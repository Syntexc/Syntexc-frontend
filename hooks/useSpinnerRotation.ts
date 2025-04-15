 
import { useEffect, useRef } from "react";

export function useSpinnerRotation() {
  const spinnerRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let frameId: number;
    let rotation = 0;

    const animate = () => {
      rotation += 0.2; // adjust speed here
      if (spinnerRef.current) {
        spinnerRef.current.style.transform = `rotate(${rotation}deg)`;
      }
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frameId);
  }, []);

  return spinnerRef;
}
