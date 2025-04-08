import { useState, useEffect } from "react";
import { motion} from "framer-motion";
import PropTypes from "prop-types";


const words = [
    'HELLO',"नमस्ते", "নমস্তে", "நமஸ்காரம்", "ನಮಸ್ಕಾರ", "ਨਮਸਕਾਰ", "ନମସ୍କାର", "নমস্কাৰ",  
  ];

  const Loader = ({ onFinish }) => {
    const [index, setIndex] = useState(-1);
    const [slideUp, setSlideUp] = useState(false);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % words.length);
      }, 500);
  
      const timeout = setTimeout(() => {
        setSlideUp(true); 
      }, (words.length) * 500 );

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }, []);
  
    return (
      <motion.div
        className="absolute top-0 left-0 w-full h-screen flex justify-center items-center bg-[#344e41] text-[#dad7cd] text-9xl font-bold"
        initial={{ y: 0 }}
        animate={slideUp ? { y: "-100%" } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={onFinish}
      >
       
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ y: -20 }} 
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-[12rem]"
        >
            {words[index]}
          </motion.p>
       
      </motion.div>
    );
  };
  
Loader.propTypes = {
  onFinish: PropTypes.func.isRequired,
};

export default Loader;