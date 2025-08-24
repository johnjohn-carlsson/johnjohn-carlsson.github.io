import { useEffect, useRef, useState } from 'react';
import headPlaceholder from '@/assets/head-placeholder.png';

interface EyePosition {
  x: number;
  y: number;
}

export const InteractivePortrait = () => {
  const portraitRef = useRef<HTMLDivElement>(null);
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);
  
  const [isBlinking, setIsBlinking] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [lastTouchPosition, setLastTouchPosition] = useState<EyePosition | null>(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Blink animation
  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, Math.random() * 4000 + 6000); // Random interval between 6-10 seconds

    return () => clearInterval(blinkInterval);
  }, [prefersReducedMotion]);

  // Eye tracking logic
  const updatePupilPosition = (mouseX: number, mouseY: number) => {
    if (!portraitRef.current || !leftPupilRef.current || !rightPupilRef.current) return;
    if (!leftEyeRef.current || !rightEyeRef.current) return;

    const portraitRect = portraitRef.current.getBoundingClientRect();
    const portraitCenterX = portraitRect.left + portraitRect.width / 2;
    const portraitCenterY = portraitRect.top + portraitRect.height / 2;

    // Calculate relative mouse position
    const relativeX = mouseX - portraitCenterX;
    const relativeY = mouseY - portraitCenterY;

    // Get eye positions
    const leftEyeRect = leftEyeRef.current.getBoundingClientRect();
    const rightEyeRect = rightEyeRef.current.getBoundingClientRect();
    
    const leftEyeCenterX = leftEyeRect.left + leftEyeRect.width / 2;
    const leftEyeCenterY = leftEyeRect.top + leftEyeRect.height / 2;
    const rightEyeCenterX = rightEyeRect.left + rightEyeRect.width / 2;
    const rightEyeCenterY = rightEyeRect.top + rightEyeRect.height / 2;

    // Calculate pupil movement for each eye
    const updateEye = (pupilRef: React.RefObject<HTMLDivElement>, eyeCenterX: number, eyeCenterY: number) => {
      if (!pupilRef.current) return;

      const deltaX = mouseX - eyeCenterX;
      const deltaY = mouseY - eyeCenterY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      // Maximum movement radius (30% of eye size)
      const maxRadius = leftEyeRect.width * 0.15;
      const moveRadius = Math.min(distance * 0.3, maxRadius);
      
      const angle = Math.atan2(deltaY, deltaX);
      const moveX = Math.cos(angle) * moveRadius;
      const moveY = Math.sin(angle) * moveRadius;

      pupilRef.current.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
    };

    updateEye(leftPupilRef, leftEyeCenterX, leftEyeCenterY);
    updateEye(rightPupilRef, rightEyeCenterX, rightEyeCenterY);
  };

  // Mouse tracking
  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      updatePupilPosition(e.clientX, e.clientY);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion]);

  // Touch tracking for mobile
  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleTouch = (e: TouchEvent) => {
      const touch = e.touches[0] || e.changedTouches[0];
      if (touch) {
        const position = { x: touch.clientX, y: touch.clientY };
        setLastTouchPosition(position);
        updatePupilPosition(position.x, position.y);
      }
    };

    const handleTouchEnd = () => {
      // Center pupils after a delay if no more touches
      setTimeout(() => {
        if (leftPupilRef.current && rightPupilRef.current) {
          leftPupilRef.current.style.transform = 'translate(-50%, -50%)';
          rightPupilRef.current.style.transform = 'translate(-50%, -50%)';
        }
      }, 2000);
    };

    document.addEventListener('touchstart', handleTouch);
    document.addEventListener('touchmove', handleTouch);
    document.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      document.removeEventListener('touchstart', handleTouch);
      document.removeEventListener('touchmove', handleTouch);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [prefersReducedMotion]);

  return (
    <div ref={portraitRef} className="portrait-container float">
      <img
        src={headPlaceholder}
        alt="Creative professional portrait"
        className="portrait-image"
        loading="eager"
      />
      
      {/* Left Eye */}
      <div 
        ref={leftEyeRef}
        className={`eye eye-left ${isBlinking ? 'blink' : ''}`}
      >
        <div className="iris" />
        <div ref={leftPupilRef} className="pupil" />
      </div>
      
      {/* Right Eye */}
      <div 
        ref={rightEyeRef}
        className={`eye eye-right ${isBlinking ? 'blink' : ''}`}
      >
        <div className="iris" />
        <div ref={rightPupilRef} className="pupil" />
      </div>
    </div>
  );
};