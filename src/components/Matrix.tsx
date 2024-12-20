import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Box } from "./Box";

export const Matrix: React.FC = () => {
  const [clickedBoxes, setClickedBoxes] = useState<number[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleBoxClick = useCallback(
    (idx: number) => {
      if (isAnimating || clickedBoxes.includes(idx)) return;

      const newClickedBoxes = [...clickedBoxes, idx];
      setClickedBoxes(newClickedBoxes);

      if (newClickedBoxes.length === 9) {
        setIsAnimating(true);
        setTimeout(
          () => {
            setIsAnimating(false);
            setClickedBoxes([]);
          },
          newClickedBoxes.length * 500 + 500,
        );
      }
    },
    [clickedBoxes, isAnimating],
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative mt-10 bg-gray-400/10 backdrop-blur-3xl w-full h-full rounded-xl px-5 py-0 flex justify-center items-center"
    >
      <div className="p-10 grid grid-cols-3 gap-4 relative z-10">
        {Array.from({ length: 9 }).map((_, idx) => (
          <Box
            key={idx}
            index={idx}
            isClicked={clickedBoxes.includes(idx)}
            isAnimating={isAnimating}
            clickOrder={clickedBoxes.indexOf(idx)}
            onClick={() => handleBoxClick(idx)}
          />
        ))}
      </div>
    </motion.div>
  );
};

