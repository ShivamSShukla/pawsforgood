'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [cursorAvailable, setCursorAvailable] = useState(false);

  useEffect(() => {
    // Check if cursor image is available
    const checkCursor = async () => {
      try {
        const response = await fetch('/dog-cursor.gif');
        if (response.ok) {
          setCursorAvailable(true);
        }
      } catch (error) {
        console.log('Custom cursor not available, using default');
      }
    };

    checkCursor();
  }, []);

  useEffect(() => {
    // Only apply custom cursor on desktop devices and if available
    if (window.innerWidth > 768 && cursorAvailable) {
      document.body.style.cursor = 'url(/dog-cursor.gif), auto';
      
      // Apply to all interactive elements
      const style = document.createElement('style');
      style.id = 'custom-cursor-style';
      style.innerHTML = `
        a, button, input[type="submit"], input[type="button"], [role="button"] {
          cursor: url(/dog-cursor.gif), pointer !important;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.body.style.cursor = 'auto';
        const existingStyle = document.getElementById('custom-cursor-style');
        if (existingStyle) {
          document.head.removeChild(existingStyle);
        }
      };
    }
  }, [cursorAvailable]);

  return null;
}
