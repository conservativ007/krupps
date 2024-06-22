'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ICustomButton {
  text: string;
  top: string;
  left: string;
}

const CustomButton = ({ top, left, text }: ICustomButton) => {
  const [randomX, setRandomX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomX(Math.random() * 30 - 15); // Генерируем случайное значение от -100 до 100
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      style={{ top, left }}
      initial={{ x: 0 }}
      animate={{ x: randomX }}
      transition={{ duration: 2, repeat: Infinity }}
      className={`absolute bg-black/50 rounded-[30px] border border-[#EFFF39] py-2 px-5 backdrop-blur-sm inline-block cursor-pointer`}
    >
      {text}
    </motion.div>
  );
};

export default CustomButton;
