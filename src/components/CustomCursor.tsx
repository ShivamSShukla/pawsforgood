'use client';

import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    // Only apply custom cursor on desktop devices
    if (window.innerWidth > 768) {
      document.body.style.cursor = 'url(/dog-cursor.gif), auto';
      
      // Apply to all interactive elements
      const style = document.createElement('style');
      style.innerHTML = `
        a, button, input[type="submit"], input[type="button"] {
          cursor: url(/dog-cursor.gif), pointer !important;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.body.style.cursor = 'auto';
        document.head.removeChild(style);
      };
    }
  }, []);

  return null;
}
