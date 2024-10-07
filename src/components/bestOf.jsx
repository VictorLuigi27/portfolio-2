import { useState } from "react";
import { motion } from "framer-motion";
import characters from "/src/assets/data/characters.json";

export default function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); 
  
  const prevCharacter = () => {
    setDirection(-1); 
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? characters.length - 1 : prevIndex - 1
    );
  };

  
  const nextCharacter = () => {
    setDirection(1); 
    setCurrentIndex((prevIndex) =>
      prevIndex === characters.length - 1 ? 0 : prevIndex + 1
    );
  };

  
  const slideVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="flex flex-col items-center dark:bg-custom-dark-background min-h-screen">
      
      <motion.h1
        className="text-white text-center text-3xl py-20 dark:text-slate-950"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.5 }}
      >
        Mes personnages de jeux vidéos favoris :
      </motion.h1>

     
      <div className="relative w-full max-w-lg mx-auto top-[5rem] lg:top-[2rem]">
        <div className="flex flex-col items-center">
          <motion.img
            key={characters[currentIndex].id} 
            className="w-[18rem] h-auto lg:w-[25rem]"
            src={characters[currentIndex].picture}
            alt={characters[currentIndex].name}
            initial="hidden"
            animate="visible"
            variants={slideVariants}
            custom={direction} 
            transition={{ duration: 0.5 }} 
          />
          <motion.p
            className="text-white text-center mt-4 text-2xl dark:text-slate-950"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.5, delay: 0.2 }} 
          >
            {characters[currentIndex].name}
          </motion.p>
          <motion.p
            className="text-gray-400 text-center text-lg dark:text-slate-800"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.5, delay: 0.4 }} 
          >
            {characters[currentIndex].game}
          </motion.p>
        </div>

        
        <motion.button
          className="absolute left-12 top-[8rem] transform -translate-y-1/2 bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition duration-300 lg:p-5 lg:left-4"
          onClick={prevCharacter}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, translateY: -10 },
            visible: { opacity: 1, translateY: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.6 }} 
        >
          &#10094; 
        </motion.button>
        <motion.button
          className="absolute right-12 top-[8rem] transform -translate-y-1/2 bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition duration-300 lg:p-5 lg:right-4"
          onClick={nextCharacter}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, translateY: -10 },
            visible: { opacity: 1, translateY: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.6 }} 
        >
          &#10095; 
        </motion.button>
      </div>
    </div>
  );
}