import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function ExitAndEnterAnimation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate data load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white w-32 h-32 rounded-full mx-auto mt-10 mb-20">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            className="bg-amber-500 w-full h-full rounded-full"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: [1, 1.2, 1, 1.5, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            // exit={{ opacity: 0, scale: 0.8 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default ExitAndEnterAnimation;
