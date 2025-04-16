"use client";

import { useState, useEffect, useCallback } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    if (!isVisible) setIsVisible(true);

    const target = e.target as Element;
    const interactive = target.closest('a, button, .button, input, textarea, select, label, [role="button"], [tabindex]:not([tabindex="-1"])');
    setIsHovering(!!interactive);

  }, [isVisible]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    if (document.hasFocus()) {
      setIsVisible(true);
    } else {
      const handleFocus = () => setIsVisible(true);
      window.addEventListener('focus', handleFocus);
      return () => window.removeEventListener('focus', handleFocus);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove, isVisible]);

  const wrapperClass = `${styles.cursorWrapper} ${isHovering ? styles.hoverEffect : ''}`;

  if (!isVisible || (position.x === -100 && position.y === -100)) {
    return null;
  }

  return (
    <div className={wrapperClass}>
      <div
        className={styles.cursorDot}
        style={{ transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)` }}
      />
      <div
        className={styles.cursorOutline}
        style={{ transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)` }}
      />
    </div>
  );
}