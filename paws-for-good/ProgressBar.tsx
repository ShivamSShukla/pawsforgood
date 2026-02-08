'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  target: number;
  label?: string;
}

export default function ProgressBar({ current, target, label }: ProgressBarProps) {
  const percentage = Math.min((current / target) * 100, 100);

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          <span className="text-sm font-semibold text-primary-600">
            ${current.toFixed(2)} / ${target.toFixed(2)}
          </span>
        </div>
      )}
      
      <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent-500 to-accent-600 rounded-full"
        />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-semibold text-gray-700 mix-blend-difference">
            {percentage.toFixed(0)}%
          </span>
        </div>
      </div>
      
      {percentage >= 100 && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm font-medium text-accent-600 text-center"
        >
          🎉 Goal Achieved! Thank you!
        </motion.p>
      )}
    </div>
  );
}
