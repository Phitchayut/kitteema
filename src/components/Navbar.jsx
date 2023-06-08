import React from "react";
import { motion } from "framer-motion";
import Butterfly from "../../public/butterfly.png";

const Navbar = ({ text }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <>
      <nav className="">
        <div className="logo"></div>
        <motion.div
          className="text-[3rem] pt-5 uppercase overflow-hidden flex justify-center relative text-purple-950"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {letters.map((letter, index) => (
            <div key={index}>
              <motion.span variants={child} key={index} className="">
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            </div>
          ))}
        </motion.div>
        <motion.div
          className="absolute -top-12 left-[10px]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={Butterfly} alt="" className="w-[150px] opacity-50" />
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
