'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WelcomeDog() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [imageSrc, setImageSrc] = useState('/dog-welcome.gif');

  useEffect(() => {
    // Check if GIF is available, otherwise use SVG fallback
    const checkImage = async () => {
      try {
        const response = await fetch('/dog-welcome.gif');
        if (!response.ok) {
          setImageSrc('/dog-welcome.svg');
        }
      } catch (error) {
        setImageSrc('/dog-welcome.svg');
      }
    };

    checkImage();
  }, []);

  useEffect(() => {
    // Check if the animation has already been shown in this session
    const shown = sessionStorage.getItem('welcome-dog-shown');
    
    if (!shown) {
      // Show the dog after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('welcome-dog-shown', 'true');
      }, 500);

      // Hide the dog after 5 seconds
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5500);

      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  if (hasShown && !isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -200, opacity: 0 }}
          transition={{ 
            type: 'spring', 
            stiffness: 100, 
            damping: 15,
            duration: 0.8 
          }}
          className="fixed bottom-8 left-8 z-50 pointer-events-none"
        >
          <div className="relative">
            <img
              src={imageSrc}
              alt="Welcome dog"
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
              onError={(e) => {
                // Fallback to SVG if GIF fails
                e.currentTarget.src = '/dog-welcome.svg';
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-20 left-0 bg-white rounded-lg shadow-lg p-4 max-w-xs"
            >
              <div className="relative">
                <p className="text-sm text-gray-800 font-medium">
                  Welcome! 🐾 I'm glad people like you are here. 
                  Now it's up to you—buy me food or not. Thanks for being awesome!
                </p>
                <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
