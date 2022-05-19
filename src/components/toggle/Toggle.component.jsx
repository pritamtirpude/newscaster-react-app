import { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({ children, article }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      className="card-container"
      layout
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.img layout src={article.media} alt={article.title} />
      <motion.strong layout>{article.title}</motion.strong>
      {isOpen ? children : ""}
    </motion.div>
  );
};

export default Toggle;
