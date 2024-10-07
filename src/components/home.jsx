import { motion } from "framer-motion";

export default function Home() {
    
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="min-h-screen dark:bg-custom-dark-background lg:py-11"> {/* Fond sombre non animé */}
            <motion.div
                className="text-center py-36"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                transition={{ duration: 0.5 }} 
            >
                <h1 className="text-white p-14 text-4xl lg:text-6xl dark:text-slate-950">
                    Diaz Victor
                </h1>

                <div className="flex flex-col items-center">
                    <img 
                        className="w-20 mb-4"
                        src="src/assets/icons/home-bar-icon.svg" 
                        alt="Home" 
                    />

                    <h2 className="text-white p-4 text-xl lg:text-4xl dark:text-slate-950">
                        Développeur web aspirant design
                    </h2>
                </div>

                <div className="flex justify-center py-9">
                    <p className="text-white text-lg text-center max-w-lg lg:text-3xl dark:text-slate-950">
                        Mon ambition est de contribuer à travers mes passions et mes oeuvres créatives.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}