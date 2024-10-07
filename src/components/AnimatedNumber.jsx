import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedNumber = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    setDisplayValue(value);
  }, [value]);

  return (
    <motion.span
      key={value}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {displayValue}
    </motion.span>
  );
};

export default AnimatedNumber;