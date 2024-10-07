import { motion } from "framer-motion";

export default function About() {

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};


  return (
    <div className="dark:bg-custom-dark-background min-h-screen">
    <motion.div
            className="text-center py-32 "
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{ duration: 0.5 }} 
        >
    <div className="text-center flex flex-col lg:flex-row lg:px-24 lg:mt-20">
      <div className="lg:w-1/2 lg:pr-10">

        <h1 className="text-white dark:text-slate-950 text-[1.8rem] mb-10 lg:text-[3rem]">
          Bienvenue sur mon portfolio !
        </h1>

        <p className="text-white dark:text-slate-950 text-xl mb-6 px-3 lg:px-1 lg:text-[1.25rem]">
          Je m&apos;appelle Victor, développeur web passionné par l&apos;informatique et les jeux vidéo. Doté d&apos;une grande imagination, j&apos;adore créer, quel que soit le projet.
        </p>

        <p className="text-white dark:text-slate-950 text-xl mb-6 px-6  lg:text-[1.25rem]">
          Ce processus fait partie intégrante de mon apprentissage, et je serais ravi de rejoindre une équipe pour mettre en pratique mes compétences.
        </p>

        <p className="text-white dark:text-slate-950 text-xl mb-6 px-6 lg:text-[1.25rem]">
          Bien que je me concentre principalement sur le front-end, j&apos;ai également un vif intérêt pour le back-end, notamment avec Java, Python et C++.
        </p>

        <p className="text-white dark:text-slate-950 text-xl lg:text-[1.25rem]">
          L&apos;apprentissage constant est une véritable source de satisfaction pour moi.
        </p>
      </div>

      <div className="lg:w-1/2 flex justify-center items-center">
        <img
          className="w-[22rem] mt-10 rounded-3xl lg:mt-0 lg:w-[35rem]"
          src="/src/assets/videos/2887463-hd_1280_720_25fps.gif"
          alt="gif"
        />
      </div>
    </div>
    </motion.div>
    </div>
  );
}