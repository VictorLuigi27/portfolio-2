import Projects from "./projects";
import { motion } from "framer-motion";

export default function Portfolio() {

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

  return (
    <div className="dark:bg-custom-dark-background min-h-screen">
    <motion.div
            className="text-center py-32"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{ duration: 0.5 }} 
        >
    <div>
        <h1 className="text-white dark:text-slate-950 text-center text-[1.8rem] mt-10 mb-10 lg:text-5xl lg:py-12">
            Hard skills
        </h1>

        <div className="grid grid-cols-2 gap-6 ml-9 py-2 p-4 lg:grid lg:grid-cols-3 lg:ml-[11rem] lg:py-10 lg:gap-11">

            <div className="bg-blue-500 rounded-md w-32 h-32 lg:w-72 lg:h-52">
                <img
                className="w-20 h-24 ml-[1.55rem] mt-[0.1rem] lg:w-[11rem] lg:h-[7rem] lg:mt-[2rem] lg:ml-[3.5rem]"
                src="/src/assets/icons/react-icon.svg"
                alt="hard-skill"
                />
                <p className="text-white text-center text-base lg:mt-[1.6rem] lg:text-2xl">
                    React JS
                </p>
            </div>
            <div className="bg-blue-500 rounded-md w-32 h-32 lg:w-72 lg:h-52">
                <img
                className="w-20 h-24 ml-[1.55rem] mt-[0.1rem] lg:w-[11rem] lg:h-[7rem] lg:mt-[2rem] lg:ml-[3.5rem]"
                src="/src/assets/icons/react-icon.svg"
                alt="hard-skill"
                />
                <div className="flex flex-row-reverse gap-[0.2rem] lg:mt-[1.6rem] lg:text-2xl">
                    <img
                    className="mr-[0.2rem] mb-[0.3rem] lg:w-[1.6rem] lg:mr-[3.1rem] lg:mb-[1rem]"
                    src="/src/assets/icons/mobile-icon.svg"
                    alt="mobile-icon" 
                    />
                <p className="text-white text-center text-base lg:mr-3 lg:text-2xl">
                    React Native
                </p>
                </div>
                
            </div>
            <div className="bg-blue-500 rounded-md w-32 h-32 lg:w-72 lg:h-52">
                <img
                className="w-20 h-24 ml-[1.55rem] mt-[0.1rem] lg:w-[11rem] lg:h-[7rem] lg:mt-[2rem] lg:ml-[3.5rem]"
                src="/src/assets/icons/nextjs-icon.svg"
                alt="hard-skill"
                />
                <p className="text-white text-center text-base lg:mt-[1.6rem] lg:text-2xl">
                    Next JS
                </p>
            </div>
            <div className="bg-blue-500 rounded-md w-32 h-32 lg:w-72 lg:h-52">
                <img
                className="w-20 h-24 ml-[1.55rem] mt-[0.1rem] lg:w-[11rem] lg:h-[7rem] lg:mt-[2rem] lg:ml-[3.5rem]"
                src="/src/assets/icons/typescript-icon.svg"
                alt="hard-skill"
                />
                <p className="text-white text-center text-base lg:mt-[1.6rem] lg:text-2xl">
                    TypeScript
                </p>
            </div>
            <div className="bg-blue-500 rounded-md w-32 h-32 lg:w-72 lg:h-52">
                <img
                className="w-20 h-24 ml-[1.55rem] mt-[0.1rem] lg:w-[11rem] lg:h-[7rem] lg:mt-[2rem] lg:ml-[3.5rem]"
                src="/src/assets/icons/tailwind-icon.svg"
                alt="hard-skill"
                />
                <p className="text-white text-center text-base lg:mt-[1.6rem] lg:text-2xl">
                    Tailwind
                </p>
            </div>
            <div className="bg-blue-500 rounded-md w-32 h-32 lg:w-72 lg:h-52">
                <img
                className="w-20 h-24 ml-[1.55rem] mt-[0.1rem] lg:w-[11rem] lg:h-[7rem] lg:mt-[2rem] lg:ml-[3.5rem]"
                src="/src/assets/icons/figma-icon.svg"
                alt="hard-skill"
                />
                <p className="text-white text-center text-base lg:mt-[1.6rem] lg:text-2xl">
                    Figma
                </p>
            </div>
        </div>
        <Projects />
    </div>
    </motion.div>
    </div>
  )
}