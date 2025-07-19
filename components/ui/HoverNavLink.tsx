import { motion } from "framer-motion";
import { useState } from "react";

export const HoverNavLink = ({ label, href }: { label: string; href: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative px-4 py-2 text-white/80 z-10"
    >
      {isHovered && (
        <motion.div
          layoutId="navbar-hover"
          className="absolute inset-0 rounded-full bg-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </motion.a>
  );
};
