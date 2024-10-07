import { useState } from 'react';
import ProjectModal from '/src/components/modal/modalProjects.jsx'; 
import projects from '/src/assets/data/projects.json';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [openModal, setOpenModal] = useState(false); 

  const handleClick = (id) => {
    const project = projects.find(p => p.id === id )
    setSelectedProject(project)
    setOpenModal(true)
  }



  return (
    <div className="pb-10 lg:pb-16"> 
      <h1 className="text-white text-center text-[1.8rem] lg:text-[3.4rem] lg:mt-10 py-10">Projets</h1>

      <div className="ml-0 lg:ml-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:justify-center lg:mb-15">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-blue-500 w-56 h-56 lg:w-80 lg:h-80 rounded-md mt-9 mx-auto lg:mb-8" 
          >
            <img
              className="w-24 lg:w-32 mx-auto py-9"
              src="/src/assets/icons/wait-icon.svg"
              alt="soon"
            />
            <div className="flex justify-between items-center mt-[0.8rem] px-4"> 
              <p className="text-white text-[1.5rem] lg:text-[1.8rem] lg:mt-12 flex-1 text-left"> 
                {project.name}
              </p>
              <div className="flex items-center">
                <img
                  className="w-10 h-8 lg:w-12 lg:h-10 lg:lg:mt-9 cursor-pointer"
                  src="/src/assets/icons/click-icon.svg"
                  alt="click"
                  onClick={() => handleClick(project.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

{selectedProject && ( 
   <ProjectModal
      selectedProject={selectedProject}
      openModal={openModal}
      setOpenModal={setOpenModal}
      />
      )}
    
    </div>
  );
}