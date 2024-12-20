import { motion } from "framer-motion";
import React from "react";

interface BoxProps {
  index: number;
  isClicked: boolean;
  isAnimating: boolean;
  clickOrder: number;
  onClick: () => void;
}

export const Box: React.FC<BoxProps> = ({
  index,
  isClicked,
  isAnimating,
  clickOrder,
  onClick,
}) => {
  return (
    <motion.div
      className="w-28 h-28 bg-gray-900 rounded-lg cursor-pointer relative overflow-hidden"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        backgroundColor: isAnimating
          ? "orange"
          : isClicked
            ? "#4CAF50"
            : "#d4d4d4",
        transition: {
          duration: 0.3,
          delay: isAnimating ? clickOrder * 0.5 : 0,
        },
      }}
      onClick={onClick}
    >
      <div className="w-full h-full flex items-center justify-center">
        {isClicked && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-white font-bold"
          >
            {clickOrder + 1}
          </motion.span>
        )}
      </div>
    </motion.div>
  );
};
