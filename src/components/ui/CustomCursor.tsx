import { useState, useEffect, useCallback } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    if (!isVisible) setIsVisible(true);

    const target = e.target as Element;
    const interactive = target.closest(
      'a, button, input, textarea, select, label, [role="button"], [data-interactive], [tabindex]:not([tabindex="-1"])'
    );
    setIsHovering(!!interactive);
  }, [isVisible]);

  useEffect(() => {
    document.documentElement.classList.add('cursor-hidden');
    window.addEventListener('mousemove', handleMouseMove);
    if (document.hasFocus() && !isVisible) {
      setIsVisible(true);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.classList.remove('cursor-hidden');
    };
  }, [handleMouseMove, isVisible]);

  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`cursor-wrapper ${isHovering ? 'hover-effect' : ''}`}>
      <div
        className="cursor-dot"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        }}
      />
      <div
        className="cursor-outline"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        }}
      />
    </div>
  );
}
