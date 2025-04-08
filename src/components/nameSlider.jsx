
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import ScrollVelocity from "./ScrollVelocity";

const NameSlider = () => {
  const [curtainLifted, setCurtainLifted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setTimeout(() => setCurtainLifted(true), 2000);
    });
  }, []);

  const scrollVelocityComponent = useMemo(() => (
    <ScrollVelocity texts={["SHREYANSH AGRAWAL |"]} velocity={100}/>
  ), []);

  return (
    <div className="bg-[#344e41] text-white">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: curtainLifted ? "-100%" : "0%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed inset-0 bg-black flex items-center justify-center curtain"
      >
        <h1 className="text-white text-4xl">Loading...</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: curtainLifted ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        className="content"
      >
        {scrollVelocityComponent}
      </motion.div>
    </div>
  );
};

export default NameSlider;

