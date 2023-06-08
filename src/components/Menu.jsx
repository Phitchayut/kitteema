import React from "react";
import { motion } from "framer-motion";

const Menu = () => {
  const menuList = [
    {
      name: "สรรพคุณ",
      linka: "",
    },
    {
      name: "วิธีการสั่งซื้อ",
      linka: "",
    },
    {
      name: "ติดต่อเรา",
      linka: "",
    },
  ];
  return (
    <div className="my-5">
      <ul className="flex justify-center space-x-3">
        {menuList.map((item, index) => (
          <motion.li key={index} initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}>
            <a href={item.linka} className="text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-2 rounded-xl">{item.name}</a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
