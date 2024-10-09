import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import './SynchronizedSections.css';

const SynchronizedSections = () => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);

  return (
    <div className="synchronized-sections">
      <motion.div
        className="section-container"
        drag="x"
        style={{ x }}
        dragConstraints={{ left: -500, right: 500 }}
      >
        <motion.div className="section">
          <motion.div className="text" style={{ opacity }}>
            CREATE THE SYMBOL
          </motion.div>
          <motion.div className="image" style={{ opacity }}>
            [Image 1]
          </motion.div>
        </motion.div>
        <motion.div className="section">
          <motion.div className="text" style={{ opacity }}>
            DESIGN THE SYSTEM
          </motion.div>
          <motion.div className="image" style={{ opacity }}>
            [Image 2]
          </motion.div>
        </motion.div>
        <motion.div className="section">
          <motion.div className="text" style={{ opacity }}>
            BUILD THE FUTURE
          </motion.div>
          <motion.div className="image" style={{ opacity }}>
            [Image 3]
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SynchronizedSections;
